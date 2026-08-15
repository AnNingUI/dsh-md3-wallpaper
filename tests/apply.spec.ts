// @vitest-environment jsdom
/**
 * apply() owns the whole Material You surface and retracts it on fiber
 * dispose: the body attribute, the Monet token variables, the organic FAB +
 * menu chrome, the favicon, and the document title. Assert the writes and the
 * teardown both ways — including the live theme switch (data-ds-dark-theme)
 * and the session-title protection.
 */
import { Context, type Fiber } from "@deepseek-ai/cordis";
import { afterEach, describe, expect, it } from "vitest";
import { apply } from "../src/client/index.ts";
import { clearState } from "../src/client/wallpaper.ts";

let fiber: Fiber | undefined;

async function mount(): Promise<Fiber> {
	const f = new Context().plugin({ apply });
	await f.await();
	return f;
}

/** Flush the MutationObserver microtask after a body attribute change. */
async function flush(): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 0));
}

afterEach(async () => {
	await fiber?.dispose();
	fiber = undefined;
	document.body.innerHTML = "";
	document.head.querySelectorAll('link[rel="icon"]').forEach((link) => {
		link.remove();
	});
	document.body.removeAttribute("data-dsh-md3-wallpaper");
	document.body.removeAttribute("data-md3-shape");
	document.body.style.cssText = "";
	document.title = "";
	clearState();
});

describe("md3-wallpaper skin apply", () => {
	it("mounts the dynamic surface: attribute, shape gate, tokens, chrome, title, favicon", async () => {
		document.title = "DeepSeek Harness";
		fiber = await mount();

		expect(document.body.dataset.dshMd3Wallpaper).toBe("");
		expect(document.body.dataset.md3Shape).toBe("on");
		// Token variables land on body style (light theme by default).
		expect(
			document.body.style.getPropertyValue("--dsw-static-deepseek-500"),
		).toMatch(/^#[0-9a-f]{6}$/);
		expect(
			document.body.style.getPropertyValue("--dsw-static-neutral-bluish-00"),
		).toMatch(/^#[0-9a-f]{6}$/);
		expect(
			document.body.style.getPropertyValue("--md-sys-color-primary"),
		).toMatch(/^#[0-9a-f]{6}$/);
		// The aionui panel bridge consumes the live M3 role variables (the bridge
		// rules themselves ride the bundle's injected stylesheet, verified by the
		// build; here the variable source is asserted).
		expect(
			document.body.style.getPropertyValue(
				"--md-sys-color-surface-container-low",
			),
		).toMatch(/^#[0-9a-f]{6}$/);
		// The organic chrome is mounted with BOTH FAB glyphs (thermo idle, clock open).
		const fab = document.body.querySelector('[class*="md3Fab"]');
		const menu = document.body.querySelector('[class*="md3Menu"]');
		expect(fab).not.toBeNull();
		expect(menu).not.toBeNull();
		expect(menu?.querySelector('[class*="md3MenuPreview"]')).not.toBeNull();
		expect(menu?.querySelector('input[type="file"]')).not.toBeNull();
		expect(menu?.querySelectorAll("[data-preset]").length).toBe(4);
		expect(fab?.querySelector(".md3-fab-thermo")).not.toBeNull();
		expect(fab?.querySelector(".md3-fab-clock")).not.toBeNull();
		// The page scroll is locked while the skin is active.
		expect(document.documentElement.style.overflow).toBe("hidden");
		expect(document.body.style.overflow).toBe("hidden");
		// The default preset backdrop is applied (rendered gradient, no upload).
		expect(document.body.style.getPropertyValue("--md3-backdrop")).toContain(
			"radial-gradient",
		);
		expect(
			document.body.style.getPropertyValue("--md3-backdrop"),
		).not.toContain("data:image");
		expect(document.title).toBe("Material You · DeepSeek");
		expect(document.head.querySelector('link[rel="icon"]')).not.toBeNull();
	});

	it("switches to the dark token set when the shell flips data-ds-dark-theme", async () => {
		fiber = await mount();
		const lightSurface = document.body.style.getPropertyValue(
			"--dsw-static-neutral-bluish-00",
		);
		const lightBrand = document.body.style.getPropertyValue(
			"--dsw-static-deepseek-500",
		);

		document.body.dataset.dsDarkTheme = "";
		await flush();

		const darkSurface = document.body.style.getPropertyValue(
			"--dsw-static-neutral-bluish-00",
		);
		const darkBrand = document.body.style.getPropertyValue(
			"--dsw-static-deepseek-500",
		);
		expect(darkSurface).not.toBe(lightSurface);
		expect(darkBrand).not.toBe(lightBrand);
	});

	it("retracts everything on fiber dispose", async () => {
		document.title = "DeepSeek Harness";
		fiber = await mount();
		await fiber.dispose();
		fiber = undefined;

		expect(document.body.dataset.dshMd3Wallpaper).toBeUndefined();
		expect(document.body.hasAttribute("data-md3-shape")).toBe(false);
		expect(document.body.querySelector('[class*="md3Fab"]')).toBeNull();
		expect(document.body.querySelector('[class*="md3Menu"]')).toBeNull();
		expect(document.head.querySelector('link[rel="icon"]')).toBeNull();
		expect(
			document.body.style.getPropertyValue("--dsw-static-deepseek-500"),
		).toBe("");
		expect(document.body.style.getPropertyValue("--md-sys-color-primary")).toBe(
			"",
		);
		// The scroll lock is released.
		expect(document.documentElement.style.overflow).toBe("");
		expect(document.body.style.overflow).toBe("");
		expect(document.title).toBe("DeepSeek Harness");
	});

	it("never clobbers a session title projected over the skin title on teardown", async () => {
		fiber = await mount();
		document.title = "我的会话 — Material You · DeepSeek";
		await fiber.dispose();
		fiber = undefined;
		expect(document.title).toBe("我的会话 — Material You · DeepSeek");
	});

	it("restores a persisted wallpaper state instead of the default seed", async () => {
		// Seed a valid persisted state with a custom source before mounting.
		const { buildThemeTokens, buildMdSysTheme } =
			await import("../src/client/palette.ts");
		const source = 0xff4caf50;
		localStorage.setItem(
			"dsh.md3Wallpaper.v1",
			JSON.stringify({
				wallpaper: "data:image/jpeg;base64,AAAA",
				source,
				tokens: buildThemeTokens(source),
				mdSys: buildMdSysTheme(source),
			}),
		);
		fiber = await mount();
		// The persisted wallpaper becomes the backdrop (stored in the backdrop
		// variable; background-image references it).
		expect(document.body.style.getPropertyValue("--md3-backdrop")).toContain(
			"data:image/jpeg;base64,AAAA",
		);
		expect(
			document.body.style.getPropertyValue("--dsw-static-deepseek-500"),
		).toMatch(/^#[0-9a-f]{6}$/);
	});
});
