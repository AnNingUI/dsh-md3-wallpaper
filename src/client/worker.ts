/**
 * Recolor worker host for the md3-wallpaper skin.
 *
 * Spawns the recolor worker from a blob URL built from the inline worker
 * source (`globalThis.__MD3_RECOLOR_WORKER_SRC__`, injected by
 * scripts/inline-worker.mjs after tsdown). No network request, no path
 * discovery — dsh's ModuleLoader only serves client.js, so a sibling
 * recolor.worker.js would 404. The worker receives `{ blob, target, token }`
 * and resolves with the re-mapped Blob; all 8K pixel work happens off-thread.
 *
 * Falls back to `null` when workers are unavailable (very old browsers,
 * sandboxed iframes, jsdom) — callers then decide the degraded behavior
 * (they must NOT run the 8K path on the main thread).
 */

import type { MonetTarget } from "./recolor.ts";

/** The inlined worker source (set by the post-build inline step). */
const INLINE_SRC: string | undefined =
	typeof globalThis !== "undefined"
		? (globalThis as { __MD3_RECOLOR_WORKER_SRC__?: string })
				.__MD3_RECOLOR_WORKER_SRC__
		: undefined;

/** Build a blob URL for the worker source; empty string when unavailable. */
function workerBlobUrl(): string {
	if (!INLINE_SRC) return "";
	try {
		const blob = new Blob([INLINE_SRC], { type: "application/javascript" });
		return URL.createObjectURL(blob);
	} catch {
		return "";
	}
}

/** A pending worker job keyed by token. */
interface Pending {
	resolve: (blob: Blob) => void;
	reject: (err: Error) => void;
}

let worker: Worker | null | undefined; // undefined = not yet probed.
let blobUrl: string | null = null;
let seq = 0;
const pending = new Map<number, Pending>();

function ensureWorker(): Worker | null {
	if (worker !== undefined) return worker;
	if (typeof Worker === "undefined") {
		worker = null;
		return null;
	}
	blobUrl = workerBlobUrl();
	if (!blobUrl) {
		worker = null;
		return null;
	}
	try {
		const w = new Worker(blobUrl);
		w.onmessage = (event: MessageEvent<{ token: number; blob?: Blob; error?: string }>) => {
			const { token, blob, error } = event.data;
			const p = pending.get(token);
			if (!p) return;
			pending.delete(token);
			if (error !== undefined || blob === undefined) {
				p.reject(new Error(error ?? "recolor worker produced no blob"));
			} else {
				p.resolve(blob);
			}
		};
		w.onerror = (event) => {
			for (const p of pending.values()) p.reject(new Error(event.message || "worker error"));
			pending.clear();
			worker = null; // allow retry next call
		};
		worker = w;
	} catch {
		worker = null;
	}
	return worker;
}

/**
 * Run the recolor pipeline in the worker. Returns null when workers are not
 * available (caller must degrade gracefully — never fall back to an 8K
 * main-thread pass).
 * @param blob - the original image file/blob.
 * @param target - the Monet target (hue/chroma/neutral).
 */
export function recolorInWorker(
	blob: Blob,
	target: MonetTarget,
): Promise<Blob | null> {
	const w = ensureWorker();
	if (!w) return Promise.resolve(null);
	const token = ++seq;
	return new Promise<Blob | null>((resolve, reject) => {
		pending.set(token, { resolve: (b) => resolve(b), reject });
		try {
			w.postMessage({ token, blob, target });
		} catch (err) {
			pending.delete(token);
			reject(err instanceof Error ? err : new Error(String(err)));
		}
	});
}

/** Terminate the worker and release the blob URL (dispose). */
export function terminateWorker(): void {
	if (typeof Worker !== "undefined" && worker instanceof Worker) {
		worker.terminate();
	}
	worker = null;
	if (blobUrl) {
		try {
			URL.revokeObjectURL(blobUrl);
		} catch {
			// best-effort
		}
		blobUrl = null;
	}
	pending.clear();
}

