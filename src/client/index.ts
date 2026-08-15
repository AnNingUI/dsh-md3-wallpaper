/**
 * md3-wallpaper skin — Material You (MD3) dynamic color for the dsh web GUI.
 *
 * apply() owns the whole dynamic surface and retracts it on dispose (the
 * ThemePresenter retraction discipline: the plugin only ever removes what it
 * wrote): the `data-dsh-md3-wallpaper` body attribute, the Monet-derived
 * token variables on body style, the backdrop (uploaded wallpaper or a
 * selectable M3 preset gradient), the scroll lock on html/body, the organic
 * FAB + menu chrome, the injected favicon, and the pinned document title.
 *
 * The token surface is applied as CSS variables on document.body, switched
 * live by a MutationObserver on the shell's `data-ds-dark-theme` attribute —
 * every `--dsw-static-*` token (all 73), the hard-coded interaction/scrollbar
 * aliases, and the standard `--md-sys-color-*` roles the chrome and the
 * aionui-panel surfaces (file tree / git tree / preview) consume via the
 * stylesheet's --aion-* bridge. Nothing is left behind: the shell's alias
 * layer references the static tokens, so the whole UI — sidebar,
 * conversation, details, dialogs, menus, scrollbars, status colors and every
 * currentColor SVG — follows the wallpaper. The page itself never scrolls:
 * html/body overflow is locked while the skin is active.
 *
 * The FAB is a four-petal blossom whose glyph is the MaterialYouNewTab
 * temperature icon at rest; opening the menu morphs it (M3 motion) into the
 * clock icon.
 *
 * No services are injected: the skin needs only the DOM.
 * @module @AnNingUI/dsh-client-ui-skin-md3-wallpaper/client
 */

import type { Context } from "@deepseek-ai/cordis";
import {
	fabMarkup,
	faviconSvg,
	ICON_PALETTE,
	ICON_RESET,
	ICON_SHAPE,
	ICON_UPLOAD,
	menuIcon,
} from "./art.ts";
import css from "./md3-wallpaper.module.css";
import {
	clearState,
	defaultState,
	loadState,
	processWallpaper,
	saveState,
	sourceHex,
	WALLPAPER_PRESETS,
	type WallpaperState,
} from "./wallpaper.ts";

/** The product title the skin pins (captured by the shell's DocumentTitle). */
const SKIN_TITLE = "Material You · DeepSeek";

/** Shape preference key (M3 shape system on/off). */
const SHAPE_KEY = "dsh.md3Wallpaper.shape";

/** Locale-aware chrome copy (the skin registers no locale namespace; the
 *  chrome follows the html lang attribute like the sibling skins' chrome). */
function copy(): {
	upload: string;
	reset: string;
	shape: string;
	shapeHint: string;
	title: string;
	presets: string;
	presetNames: Record<string, string>;
} {
	const zh =
		document.documentElement.lang?.toLowerCase().startsWith("zh") ?? false;
	return zh
		? {
				upload: "上传壁纸",
				reset: "恢复默认",
				shape: "M3 圆角形状",
				shapeHint:
					"Material 3 形状系统：按钮胶囊圆角、输入框小圆角、对话框大圆角",
				title: "壁纸取色",
				presets: "预设背景",
				presetNames: {
					"monet-mesh": "莫奈网格",
					"monet-sunset": "落日余晖",
					"monet-ocean": "深海",
					"monet-mono": "素色",
				},
			}
		: {
				upload: "Upload wallpaper",
				reset: "Restore default",
				shape: "M3 shape system",
				shapeHint:
					"Material 3 corners: pill buttons, small inputs, large dialogs",
				title: "Wallpaper theme",
				presets: "Preset backdrops",
				presetNames: {
					"monet-mesh": "Monet mesh",
					"monet-sunset": "Sunset",
					"monet-ocean": "Deep ocean",
					"monet-mono": "Monochrome",
				},
			};
}

/** Resolve one module class name (fallback satisfies noUncheckedIndexedAccess). */
const cls = (name: keyof typeof css): string => css[name] ?? "";

/** Current shape preference. */
function shapePref(): "on" | "off" {
	try {
		return localStorage.getItem(SHAPE_KEY) === "off" ? "off" : "on";
	} catch {
		return "on";
	}
}

/** Persist the shape preference. */
function setShapePref(value: "on" | "off"): void {
	try {
		localStorage.setItem(SHAPE_KEY, value);
	} catch {
		// best-effort
	}
}

// --- dev hot reload ----------------------------------------------------------
// 手改源码时：开 `pnpm watch`（tsdown 自动重建 lib/client.js），皮肤轮询自身
// bundle 的指纹，内容变化即自动刷新页面——改代码 → 保存 → 秒级生效，无需
// 重启 dsh。默认开启；彻底关闭：
//   localStorage.setItem('dsh.md3Wallpaper.devReload', '0') 后刷新一次
// 重新开启：删除该键或设为 '1' 后刷新一次。轮询只在页面可见时进行。

/** localStorage key controlling the dev auto-reload watcher: absent or '1' =
 *  on (the default), '0' = off. */
export const DEV_RELOAD_KEY = "dsh.md3Wallpaper.devReload";

/** Poll interval (ms) for the dev bundle watcher. */
export const DEV_RELOAD_INTERVAL_MS = 2000;

/** The skin's own bundle path (same origin; the live URL adds its rev). */
const BUNDLE_PATH =
	"/plugins/@AnNingUI/dsh-client-ui-skin-md3-wallpaper/client.js";

/** The URL this very script was loaded from, captured while it executes
 *  (document.currentScript is only valid during script evaluation). */
const SELF_SRC =
	typeof document !== "undefined"
		? ((document.currentScript as HTMLScriptElement | null)?.src ?? "")
		: "";

/** FNV-1a fingerprint of a bundle text (stable across reloads of the same
 *  content; a rebuild changes it). Pure and testable. */
export function fingerprint(text: string): number {
	let hash = 0x811c9dc5;
	for (let i = 0; i < text.length; i++) {
		hash ^= text.charCodeAt(i);
		hash = Math.imul(hash, 0x01000193);
	}
	return hash >>> 0;
}

/** The exact URL the shell loaded this bundle from (includes its rev query),
 *  discovered from the captured self src or the page's script tags; falls
 *  back to the plain path. */
export function bundleSrc(): string {
	if (SELF_SRC.includes(BUNDLE_PATH)) return SELF_SRC;
	for (const script of Array.from(document.scripts)) {
		const src = script.src ?? "";
		if (src.includes(BUNDLE_PATH)) return src;
	}
	return BUNDLE_PATH;
}

/** Cache-bust a served URL by appending a unique query parameter. */
export function busted(src: string): string {
	return src.includes("?")
		? `${src}&v=${Date.now()}`
		: `${src}?v=${Date.now()}`;
}

/** Reload the page (a seam so the watcher stays testable). */
export function reloadPage(): void {
	location.reload();
}

/** Start the dev watcher unless explicitly disabled; returns a disposer. */
function startDevReload(): (() => void) | undefined {
	let enabled = true;
	try {
		enabled = localStorage.getItem(DEV_RELOAD_KEY) !== "0";
	} catch {
		enabled = true;
	}
	if (!enabled) return undefined;
	// Environment without fetch (e.g. jsdom): nothing to poll.
	const doFetch = typeof fetch === "function" ? fetch : undefined;
	if (doFetch === undefined) return undefined;
	let baseline: number | null = null;
	const timer = setInterval(() => {
		// Only poll while the tab is visible (no background churn). jsdom does
		// not implement visibilityState, so treat anything but 'hidden' as
		// visible (test environments keep polling; the interval is cleared on
		// dispose either way).
		if (document.visibilityState === "hidden") return;
		void doFetch(busted(bundleSrc()))
			.then((res) => {
				if (!res.ok) throw new Error(String(res.status));
				return res.text();
			})
			.then((text) => {
				const current = fingerprint(text);
				if (baseline === null) {
					baseline = current;
					return;
				}
				if (current !== baseline) reloadPage();
			})
			.catch(() => {
				// Transient fetch failure: keep polling.
			});
	}, DEV_RELOAD_INTERVAL_MS);
	return () => clearInterval(timer);
}

/**
 * Apply the md3-wallpaper skin: body attribute, Monet tokens, backdrop,
 * scroll lock, organic chrome, favicon, title. All writes are retracted by
 * the effect disposer on dispose.
 * @param ctx - owning context (the effect lifecycle owns retraction).
 */
export function apply(ctx: Context): void {
	const body = document.body;
	const originalTitle = document.title;
	const text = copy();
	body.dataset.dshMd3Wallpaper = "";
	body.setAttribute("data-md3-shape", shapePref());
	const stopDevReload = startDevReload();

	// --- persisted state (wallpaper/preset + tokens) or the default seed ----
	let state: WallpaperState = loadState() ?? defaultState();

	/** Keys this skin has written onto body style (retracted on dispose). */
	const writtenKeys = new Set<string>();
	const setVar = (key: string, value: string): void => {
		body.style.setProperty(key, value);
		writtenKeys.add(key);
	};

	/** One preset's backdrop gradient, generated from the live md-sys roles. */
	const presetBackdrop = (
		id: string,
		sys: Record<string, string>,
		dark: boolean,
	): string => {
		const primary = sys["--md-sys-color-primary"] ?? "#6750a4";
		const secondary = sys["--md-sys-color-secondary"] ?? "#625b71";
		const tertiary = sys["--md-sys-color-tertiary"] ?? "#7d5260";
		const surface =
			sys["--md-sys-color-surface-container-lowest"] ??
			(dark ? "#141218" : "#f7f2fa");
		const container = sys["--md-sys-color-surface-container"] ?? surface;
		const veil = dark ? "rgba(0, 0, 0, 0.38)" : "rgba(0, 0, 0, 0.16)";
		switch (id) {
			case "monet-sunset":
				return `linear-gradient(160deg, ${primary} 0%, ${tertiary} 70%, ${surface} 140%), ${veil}`;
			case "monet-ocean":
				return `radial-gradient(120% 90% at 20% 10%, ${secondary} 0%, transparent 60%), radial-gradient(120% 90% at 85% 90%, ${primary} 0%, transparent 65%), ${surface}`;
			case "monet-mono":
				return `linear-gradient(180deg, ${surface} 0%, ${container} 100%), ${veil}`;
			case "monet-mesh":
			default:
				return `radial-gradient(110% 90% at 12% 8%, ${primary} 0%, transparent 58%), radial-gradient(110% 90% at 88% 16%, ${secondary} 0%, transparent 56%), radial-gradient(120% 100% at 55% 105%, ${tertiary} 0%, transparent 62%), ${surface}`;
		}
	};

	const backdropFor = (dark: boolean): string => {
		const sys = dark ? state.mdSys.dark : state.mdSys.light;
		if (state.wallpaper !== null) {
			const veil = dark ? 0.5 : 0.3;
			return `linear-gradient(rgba(0, 0, 0, ${veil}), rgba(0, 0, 0, ${veil + 0.08})), url(${state.wallpaper})`;
		}
		if (
			state.preset !== null &&
			WALLPAPER_PRESETS.some((p) => p.id === state.preset)
		) {
			return presetBackdrop(state.preset, sys, dark);
		}
		const from = sys["--md-sys-color-surface-container-lowest"] ?? "#ffffff";
		const mid = sys["--md-sys-color-surface-container"] ?? from;
		const to = sys["--md-sys-color-primary-container"] ?? "#6750a4";
		return `linear-gradient(160deg, ${from} 0%, ${mid} 55%, ${to} 130%)`;
	};

	/** (Re)apply the current theme's token set + backdrop onto body. */
	const applyTheme = (): void => {
		const dark = body.dataset.dsDarkTheme !== undefined;
		const tokens = dark ? state.tokens.dark : state.tokens.light;
		const sys = dark ? state.mdSys.dark : state.mdSys.light;
		for (const [key, value] of Object.entries(tokens)) setVar(key, value);
		for (const [key, value] of Object.entries(sys)) setVar(key, value);
		setVar("--md3-backdrop", backdropFor(dark));
		setVar("background-image", "var(--md3-backdrop)");
		setVar("background-size", "cover");
		setVar("background-position", "center");
		setVar("background-attachment", "fixed");
		setVar("background-repeat", "no-repeat");
	};

	const themeObserver = new MutationObserver(applyTheme);
	themeObserver.observe(body, {
		attributes: true,
		attributeFilter: ["data-ds-dark-theme"],
	});

	// --- scroll lock: the skin's page never scrolls in any direction ---------
	const html = document.documentElement;
	const prevHtmlOverflow = html.style.overflow;
	const prevBodyOverflow = body.style.overflow;
	html.style.overflow = "hidden";
	body.style.overflow = "hidden";

	// --- favicon (Monet source dot) -----------------------------------------
	const favicon = document.createElement("link");
	favicon.rel = "icon";
	const setFavicon = (): void => {
		favicon.href = `data:image/svg+xml;utf8,${encodeURIComponent(faviconSvg(sourceHex(state)))}`;
	};
	document.head.append(favicon);
	setFavicon();

	// --- organic chrome: blossom FAB + wallpaper menu -----------------------
	const fab = document.createElement("button");
	fab.type = "button";
	fab.className = cls("md3Fab");
	fab.dataset.skinChrome = "fab";
	fab.setAttribute("aria-label", text.title);
	fab.innerHTML = fabMarkup();

	const menu = document.createElement("div");
	menu.className = cls("md3Menu");
	menu.dataset.skinChrome = "menu";

	const preview = document.createElement("div");
	preview.className = cls("md3MenuPreview");
	preview.setAttribute("role", "img");
	preview.setAttribute("aria-label", text.title);

	const refreshPreview = (): void => {
		preview.style.backgroundImage = "var(--md3-backdrop)";
		preview.style.backgroundSize = "cover";
		preview.style.backgroundPosition = "center";
	};

	const fileInput = document.createElement("input");
	fileInput.type = "file";
	fileInput.accept = "image/*";
	fileInput.className = cls("md3FileInput");
	fileInput.tabIndex = -1;
	fileInput.setAttribute("aria-hidden", "true");

	const uploadRow = document.createElement("button");
	uploadRow.type = "button";
	uploadRow.className = cls("md3MenuRow");
	uploadRow.innerHTML = `${menuIcon(ICON_UPLOAD)}<span>${text.upload}</span>`;
	uploadRow.addEventListener("click", () => fileInput.click());

	// Preset backdrop picker (M3 gradient swatches, like miku's selectable art).
	const presetLabel = document.createElement("div");
	presetLabel.className = cls("md3MenuLabel");
	presetLabel.innerHTML = `${menuIcon(ICON_PALETTE)}<span>${text.presets}</span>`;

	const presetRow = document.createElement("div");
	presetRow.className = cls("md3MenuPresets");
	for (const preset of WALLPAPER_PRESETS) {
		const swatch = document.createElement("button");
		swatch.type = "button";
		swatch.className = cls("md3PresetSwatch");
		swatch.title = text.presetNames[preset.id] ?? preset.id;
		swatch.setAttribute("aria-label", text.presetNames[preset.id] ?? preset.id);
		swatch.dataset.preset = preset.id;
		swatch.addEventListener("click", () => {
			state = { ...state, wallpaper: null, preset: preset.id };
			saveState(state);
			applyTheme();
			refreshPreview();
			setFavicon();
		});
		presetRow.append(swatch);
	}

	const resetRow = document.createElement("button");
	resetRow.type = "button";
	resetRow.className = cls("md3MenuRow");
	resetRow.innerHTML = `${menuIcon(ICON_RESET)}<span>${text.reset}</span>`;
	resetRow.addEventListener("click", () => {
		clearState();
		state = defaultState();
		applyTheme();
		refreshPreview();
		setFavicon();
	});

	const shapeRow = document.createElement("label");
	shapeRow.className = cls("md3MenuRow");
	shapeRow.title = text.shapeHint;
	const shapeSwitch = document.createElement("input");
	shapeSwitch.type = "checkbox";
	shapeSwitch.checked = body.getAttribute("data-md3-shape") === "on";
	const shapeIcon = document.createElement("span");
	shapeIcon.className = cls("md3MenuRowIcon");
	shapeIcon.innerHTML = menuIcon(ICON_SHAPE);
	const shapeText = document.createElement("span");
	shapeText.className = cls("md3MenuRowText");
	shapeText.textContent = text.shape;
	shapeRow.append(shapeIcon, shapeText, shapeSwitch);
	shapeSwitch.addEventListener("change", () => {
		const next = shapeSwitch.checked ? "on" : "off";
		body.setAttribute("data-md3-shape", next);
		setShapePref(next);
	});

	menu.append(
		preview,
		presetLabel,
		presetRow,
		uploadRow,
		resetRow,
		shapeRow,
		fileInput,
	);

	// Menu + FAB glyph morph (temperature -> clock) driven by the same toggle.
	function toggleMenu(): void {
		const open = menu.classList.toggle(cls("md3MenuOpen"));
		fab.classList.toggle(cls("md3FabOpen"), open);
	}
	function closeMenu(): void {
		menu.classList.remove(cls("md3MenuOpen"));
		fab.classList.remove(cls("md3FabOpen"));
	}
	function onDocClick(event: MouseEvent): void {
		const target = event.target as Node | null;
		if (target === null) return;
		if (menu.contains(target) || fab.contains(target)) return;
		closeMenu();
	}
	function onDocKeydown(event: KeyboardEvent): void {
		if (event.key === "Escape") closeMenu();
	}
	fab.addEventListener("click", toggleMenu);
	document.addEventListener("click", onDocClick);
	document.addEventListener("keydown", onDocKeydown);

	fileInput.addEventListener("change", () => {
		const file = fileInput.files?.[0];
		fileInput.value = "";
		if (file === undefined) return;
		console.log(
			"md3-wallpaper: user uploaded",
			file.name,
			file.type,
			file.size,
		);
		void processWallpaper(file)
			.then((next) => {
				state = next;
				applyTheme();
				refreshPreview();
				setFavicon();
			})
			.catch(() => {
				// Unreadable image: keep the current theme untouched.
			});
	});

	body.append(fab, menu);

	document.title = SKIN_TITLE;
	applyTheme();
	refreshPreview();

	ctx.effect(
		() => () => {
			delete body.dataset.dshMd3Wallpaper;
			body.removeAttribute("data-md3-shape");
			themeObserver.disconnect();
			html.style.overflow = prevHtmlOverflow;
			body.style.overflow = prevBodyOverflow;
			document.removeEventListener("click", onDocClick);
			document.removeEventListener("keydown", onDocKeydown);
			fab.remove();
			menu.remove();
			favicon.remove();
			stopDevReload?.();
			for (const key of writtenKeys) body.style.removeProperty(key);
			if (document.title === SKIN_TITLE) document.title = originalTitle;
		},
		"ui-skin-md3-wallpaper: dynamic color surface",
	);
}
