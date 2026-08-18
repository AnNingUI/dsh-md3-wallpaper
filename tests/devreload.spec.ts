// @vitest-environment jsdom
/**
 * Dev hot reload: the fingerprint helpers and the bundle watcher. The watcher
 * is on by default (the user hand-edits the theme while `pnpm watch` rebuilds
 * lib/client.js): it polls the served bundle URL, compares FNV-1a
 * fingerprints, and reloads the page when the content changed — no dsh
 * restart needed. Disabling via the DEV_RELOAD_KEY is also covered.
 */
import { Context, type Fiber } from "@deepseek-ai/cordis";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
	apply,
	bundleSrc,
	busted,
	DEV_RELOAD_INTERVAL_MS,
	DEV_RELOAD_KEY,
	fingerprint,
} from "../src/client/index.ts";
import { clearState } from "../src/client/wallpaper.ts";

// Route the page reload through a spy. jsdom's window.location.reload is a
// non-configurable own property, so stub the global `location` binding the
// bundle resolves (bare `location` in source code) with a stand-in object.
const reloadSpy = vi.fn();

let fiber: Fiber | undefined;

async function mount(): Promise<Fiber> {
	const f = new Context().plugin({ apply });
	await f.await();
	return f;
}

beforeEach(() => {
	reloadSpy.mockReset();
	vi.stubGlobal("location", { reload: reloadSpy });
});

afterEach(async () => {
	await fiber?.dispose();
	fiber = undefined;
	document.body.innerHTML = "";
	document.body.removeAttribute("data-dsh-md3-wallpaper");
	document.body.removeAttribute("data-md3-shape");
	document.body.style.cssText = "";
	document.title = "";
	localStorage.removeItem(DEV_RELOAD_KEY);
	clearState();
	reloadSpy.mockReset();
	vi.unstubAllGlobals();
	vi.useRealTimers();
});

describe("dev hot reload helpers", () => {
	it("fingerprints bundle text deterministically and sensitively", () => {
		const a = 'console.log("x")';
		expect(fingerprint(a)).toBe(fingerprint(a));
		expect(fingerprint(a)).not.toBe(fingerprint('console.log("y")'));
		expect(fingerprint("")).toBe(2166136261); // FNV-1a offset basis
	});

	it("cache-busts a served URL with a unique query", () => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date(1234));
		expect(busted("/p/client.js")).toBe("/p/client.js?v=1234");
		expect(busted("/p/client.js?rev=abc")).toBe("/p/client.js?rev=abc&v=1234");
	});

	it("discovers the bundle src from the page script tags, with fallback", () => {
		const script = document.createElement("script");
		script.src =
			"/plugins/@anningui/dsh-client-ui-skin-md3-wallpaper/client.js?rev=abc123";
		document.head.appendChild(script);
		expect(bundleSrc()).toBe(script.src);
		script.remove();
		expect(bundleSrc()).toBe(
			"/plugins/@anningui/dsh-client-ui-skin-md3-wallpaper/client.js",
		);
	});
});

describe("dev hot reload watcher", () => {
	it("reloads the page when the served bundle content changes", async () => {
		localStorage.setItem(DEV_RELOAD_KEY, "1");
		vi.useFakeTimers();
		let served = "version one";
		const fetchMock = vi.fn(async () => ({
			ok: true,
			text: async () => served,
		}));
		vi.stubGlobal("fetch", fetchMock);

		fiber = await mount();
		// First poll establishes the baseline; no reload yet.
		await vi.advanceTimersByTimeAsync(DEV_RELOAD_INTERVAL_MS);
		expect(reloadSpy).not.toHaveBeenCalled();
		expect(fetchMock).toHaveBeenCalled();

		// Rebuild: served content changes -> the page reloads.
		served = "version two";
		await vi.advanceTimersByTimeAsync(DEV_RELOAD_INTERVAL_MS);
		expect(reloadSpy).toHaveBeenCalledTimes(1);
	});

	it("skips polling entirely when disabled", async () => {
		localStorage.setItem(DEV_RELOAD_KEY, "0");
		vi.useFakeTimers();
		const fetchMock = vi.fn();
		vi.stubGlobal("fetch", fetchMock);
		fiber = await mount();
		await vi.advanceTimersByTimeAsync(DEV_RELOAD_INTERVAL_MS * 2);
		expect(fetchMock).not.toHaveBeenCalled();
	});

	it("stops polling on dispose", async () => {
		localStorage.setItem(DEV_RELOAD_KEY, "1");
		vi.useFakeTimers();
		let served = "v1";
		const fetchMock = vi.fn(async () => ({
			ok: true,
			text: async () => served,
		}));
		vi.stubGlobal("fetch", fetchMock);

		fiber = await mount();
		await vi.advanceTimersByTimeAsync(DEV_RELOAD_INTERVAL_MS);
		await fiber.dispose();
		fiber = undefined;
		const calls = fetchMock.mock.calls.length;
		served = "v2";
		await vi.advanceTimersByTimeAsync(DEV_RELOAD_INTERVAL_MS * 2);
		expect(reloadSpy).not.toHaveBeenCalled();
		expect(fetchMock.mock.calls.length).toBe(calls);
	});
});
