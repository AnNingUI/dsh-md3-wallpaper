/**
 * GPU backend + image-format detection for the md3-wallpaper recolor pipeline.
 *
 * The recolor stage needs a GPU compute path (WebGPU compute shader, falling
 * back to a WebGL2 fragment shader used as a compute pass). This module only
 * answers two pure, synchronous questions:
 *
 *   1. `detectGpu()` — is WebGPU / WebGL2 / neither available?
 *   2. `canEncode()` — can this browser produce `image/webp` (preferred)
 *      or must we fall back to `image/jpeg`? WebGL2 runs its raster through
 *      a real <canvas>, so the probe must reflect the browser's actual
 *      encoder.
 *
 * Both are synchronous, capability-only probes with no side effects at import
 * time, so Vitest (jsdom) can unit-test the pure logic while the capabilities
 * degrade to a safe default in that environment (no GPU, webp -> jpeg).
 */

/** The available GPU compute backends, in order of preference. */
export type GpuKind = "webgpu" | "webgl2" | "none";

/** A produced image's preferred container + mime type. */
export type ImageFormat = "webp" | "jpeg";

/** Whether the recolor stage may run its GPU path at all. */
export function hasGpu(kind: GpuKind): kind is "webgpu" | "webgl2" {
	return kind === "webgpu" || kind === "webgl2";
}

/** Whether we may show a wallpaper in this environment (spec: no GPU -> hide). */
export function canRecolor(kind: GpuKind): boolean {
	return hasGpu(kind);
}

/**
 * Detect which GPU compute backend exists. WebGPU wins; otherwise we test for
 * a WebGL2 context. jsdom's canvas answers null getContext, so it returns
 * 'none' there.
 * @param win - window; default globalThis.
 */
export function detectGpu(win: Window = globalThis as unknown as Window): GpuKind {
	const nav = win.navigator;
	const gpu = (nav as { gpu?: unknown }).gpu;
	if (
		typeof gpu === "object" &&
		gpu !== null &&
		typeof (gpu as { requestAdapter?: unknown }).requestAdapter === "function"
	) {
		return "webgpu";
	}
	try {
		const canvas = win.document?.createElement("canvas");
		const ctx = canvas?.getContext("webgl2");
		return ctx !== null && ctx !== undefined ? "webgl2" : "none";
	} catch {
		return "none";
	}
}

/**
 * Resolve which image format the current browser can actually encode. WebP is
 * preferred (better quality-to-size for a wallpaper). We probe synchronously
 * with `toDataURL('image/webp')` on a 1x1 canvas: jsdom reports a PNG data URL
 * for the webp type, which fails the prefix check and forces jpeg.
 * @param win - window; default globalThis.
 */
export function canEncode(
	win: Window = globalThis as unknown as Window,
): ImageFormat {
	try {
		const canvas = win.document?.createElement("canvas");
		if (!canvas || typeof canvas.toDataURL !== "function") return "jpeg";
		const probe = canvas.toDataURL("image/webp");
		return probe.startsWith("data:image/webp") ? "webp" : "jpeg";
	} catch {
		return "jpeg";
	}
}

/** The mime type + container mapping for a resolved format. */
export function mimeFor(format: ImageFormat): "image/webp" | "image/jpeg" {
	return format === "webp" ? "image/webp" : "image/jpeg";
}
