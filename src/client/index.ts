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
	FAB_MORPH_CAPSULE,
	FAB_MORPH_FLOWER,
	fabMarkup,
	faviconSvg,
	ICON_PALETTE,
	ICON_RESET,
	ICON_SHAPE,
	ICON_UPLOAD,
	menuIcon,
} from "./art.ts";
import { canRecolor, detectGpu } from "./gpu.ts";
import {
	deleteBlob,
	getBlob,
	KEY_RAW,
	KEY_RECOLORED,
	objectUrlFor,
	putBlob,
} from "./indexeddb.ts";
import css from "./md3-wallpaper.module.css";
import { recolorBitmap } from "./recolor.ts";
import { easeEmphasized, morphPath } from "./shape-morph.ts";
import {
	clearState,
	defaultState,
	loadState,
	monetTargetFromSource,
	processWallpaper,
	saveState,
	sourceHex,
	WALLPAPER_PRESETS,
	type WallpaperState,
} from "./wallpaper.ts";
import { terminateWorker } from "./worker.ts";

/** The product title the skin pins (captured by the shell's DocumentTitle). */
const SKIN_TITLE = "Material You · DeepSeek";

/** Shape preference key (M3 shape system on/off). */
const SHAPE_KEY = "dsh.md3Wallpaper.shape";

/** Background-visible preference key (frosted panes vs opaque surfaces). */
const SHOW_BG_KEY = "dsh.md3Wallpaper.showBg";

/** Import-effect preference key (how uploaded wallpapers are processed). */
const EFFECT_KEY = "dsh.md3Wallpaper.importEffect";

/** The import-effect modes offered by the split button. */
type EffectId = "original" | "md3filter" | "monet";
const EFFECTS: readonly EffectId[] = ["original", "md3filter", "monet"];
const DEFAULT_EFFECT: EffectId = "md3filter";

/** Current import-effect preference. */
function effectPref(): EffectId {
	try {
		const v = localStorage.getItem(EFFECT_KEY) as EffectId | null;
		return v !== null && (EFFECTS as readonly string[]).includes(v)
			? v
			: DEFAULT_EFFECT;
	} catch {
		return DEFAULT_EFFECT;
	}
}

/** Persist the import-effect preference. */
function setEffectPref(value: EffectId): void {
	try {
		localStorage.setItem(EFFECT_KEY, value);
	} catch {
		// best-effort
	}
}

/** Locale-aware chrome copy (the skin registers no locale namespace; the
 *  chrome follows the html lang attribute like the sibling skins' chrome). */
function copy(): {
	upload: string;
	reset: string;
	shape: string;
	shapeHint: string;
	showBg: string;
	showBgHint: string;
	title: string;
	presets: string;
	presetNames: Record<string, string>;
	effectLabel: string;
	effects: Record<EffectId, string>;
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
				showBg: "显示壁纸背景",
				showBgHint: "开启后主面板变为半透明毛玻璃，壁纸透过面板显示",
				title: "壁纸取色",
				presets: "预设背景",
				presetNames: {
					"monet-mesh": "莫奈网格",
					"monet-sunset": "落日余晖",
					"monet-ocean": "深海",
					"monet-mono": "素色",
				},
				effectLabel: "导入效果",
				effects: {
					original: "原图导入",
					md3filter: "MD3 色彩滤镜",
					monet: "Monet 统一色调",
				},
			}
		: {
				upload: "Upload wallpaper",
				reset: "Restore default",
				shape: "M3 shape system",
				shapeHint:
					"Material 3 corners: pill buttons, small inputs, large dialogs",
				showBg: "Show wallpaper",
				showBgHint: "Frost the main panes so the wallpaper glows through",
				title: "Wallpaper theme",
				presets: "Preset backdrops",
				presetNames: {
					"monet-mesh": "Monet mesh",
					"monet-sunset": "Sunset",
					"monet-ocean": "Deep ocean",
					"monet-mono": "Monochrome",
				},
				effectLabel: "Import effect",
				effects: {
					original: "Original",
					md3filter: "MD3 color filter",
					monet: "Monet unified tone",
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

/** Current background-visibility preference (default off = MD3 opaque). */
function showBgPref(): "on" | "off" {
	try {
		return localStorage.getItem(SHOW_BG_KEY) === "on" ? "on" : "off";
	} catch {
		return "off";
	}
}

/** Persist the background-visibility preference. */
function setShowBgPref(value: "on" | "off"): void {
	try {
		localStorage.setItem(SHOW_BG_KEY, value);
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
	body.setAttribute("data-md3-show-bg", showBgPref());
	const stopDevReload = startDevReload();

	// --- persisted state (wallpaper/preset + tokens) or the default seed ----
	let state: WallpaperState = loadState() ?? defaultState();

	/** GPU backend this environment offers (spec: none hides the wallpaper). */
	const gpuKind = detectGpu();
	/** Active object URL of the recolored (Monet-unified) full-res wallpaper. */
	let recoloredUrl: string | null = null;
	/** Object URLs this apply() created; revoked on dispose. */
	const ownedUrls = new Set<string>();
	/** True once recoloredUrl has been rendered / attempted (no-GPU short circuit). */
	let recolorSettled = false;

	/** Adopt a fresh object URL and retire any predecessor. Empty clears. */
	const takeUrl = (url: string): void => {
		if (recoloredUrl) {
			URL.revokeObjectURL(recoloredUrl);
			ownedUrls.delete(recoloredUrl);
		}
		recoloredUrl = url || null;
		if (url) ownedUrls.add(url);
	};

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
		// MD3 wallpaper-as-atmosphere: a light neutral tint over the image so
		// the wallpaper is legible where the canvas peeks through, without the
		// heavy surface-color veil that previously buried it. Panels stay
		// opaque (surface-container), so the tone comes from Monet, not from
		// forcing the image through the chrome.
		const veil = dark ? 0.78 : 0.78;
		const tint = dark ? "#0a0a0e" : "#ffffff";
		const scrim = `linear-gradient(color-mix(in srgb, ${tint} ${veil * 100}%, transparent))`;
		// The image layer rides a dedicated CSS var so it can be swapped
		// independently of the scrim geometry/elevation in --md3-backdrop.
		if (recoloredUrl || (state.wallpaper !== null && canRecolor(gpuKind))) {
			return `${scrim}, var(--md3-image-bg)`;
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

	/** The current wallpaper image URL (`url(...)`) or `none` when hidden. */
	const imageFor = (): string => {
		if (recoloredUrl) return `url(${recoloredUrl})`;
		if (state.wallpaper !== null && canRecolor(gpuKind))
			return `url(${state.wallpaper})`;
		return "none";
	};

	/** (Re)apply the current theme's token set + backdrop onto body. */
	const applyTheme = (): void => {
		const dark = body.dataset.dsDarkTheme !== undefined;
		const tokens = dark ? state.tokens.dark : state.tokens.light;
		const sys = dark ? state.mdSys.dark : state.mdSys.light;
		for (const [key, value] of Object.entries(tokens)) setVar(key, value);
		for (const [key, value] of Object.entries(sys)) setVar(key, value);
		// Dedicated image layer: swap the wallpaper URL independent of the
		// scrim/surface declared in --md3-backdrop.
		setVar("--md3-image-bg", imageFor());
		setVar("--md3-backdrop", backdropFor(dark));
		setVar("background-image", "var(--md3-backdrop)");
		// Backdrop blur is driven by the skin-center's --dsw-skin-scrim
		// (0..1): 0 → no blur, 1 → 100px. The browser re-rasterizes the
		// backdrop-filter live as the control moves — no JS wiring needed.
		setVar("backdrop-filter", "blur(calc(var(--dsw-skin-scrim, 0) * 100px))");
		setVar("-webkit-backdrop-filter", "blur(calc(var(--dsw-skin-scrim, 0) * 100px))");
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
		preview.style.backgroundImage = "var(--md3-image-bg)";
		preview.style.backgroundSize = "cover";
		preview.style.backgroundPosition = "center";
	};

	/**
	 * Recolor a full-resolution source into a Monet-unified blob and adopt it as
	 * the live backdrop. Stores the blob in IndexedDB, records the key on the
	 * persisted state, and re-renders. On failure (decoding / no GPU output)
	 * it falls back to the compact 512px wallpaper rather than losing the theme.
	 */
	const runRecolor = async (source: Blob | ImageBitmap): Promise<void> => {
		if (!canRecolor(gpuKind)) {
			recolorSettled = true;
			return;
		}
		try {
			const dark = body.dataset.dsDarkTheme !== undefined;
			const mdSys = dark ? state.mdSys.dark : state.mdSys.light;
			const effect = effectPref();
			// original → blend 0 (identity); md3filter → light tone blend;
			// monet → legacy hue-pull remap.
			const target = monetTargetFromSource(
				state.source,
				mdSys,
				dark,
				effect === "md3filter" ? 0.35 : 0,
				effect === "monet" ? 1 : 0,
			);
			const result = await recolorBitmap(source, target);
			if (result === null) {
				recolorSettled = true;
				applyTheme();
				refreshPreview();
				return;
			}
			// Only persist the blob id when IndexedDB actually stored it —
			// otherwise a refresh would see a dangling id and fall back to the
			// compact wallpaper.
			if (!(await putBlob(KEY_RECOLORED, result.blob))) {
				recolorSettled = true;
				applyTheme();
				refreshPreview();
				return;
			}
			state = { ...state, recoloredBlobId: KEY_RECOLORED };
			saveState(state);
			takeUrl(objectUrlFor(result.blob));
			recolorSettled = true;
			applyTheme();
			refreshPreview();
		} catch {
			// Keep the current backdrop; recolor is best-effort.
			recolorSettled = true;
		}
	};

	/**
	 * Restore a previously persisted recolored blob from IndexedDB on mount.
	 * Without a GPU backend the spec hides the wallpaper, so we never attempt
	 * a render path there.
	 */
	const restoreRecolored = async (): Promise<void> => {
		if (!canRecolor(gpuKind)) {
			recolorSettled = true;
			return;
		}
		if (!state.recoloredBlobId) return;
		const blob = await getBlob(state.recoloredBlobId);
		if (!blob) return;
		takeUrl(objectUrlFor(blob));
		recolorSettled = true;
		applyTheme();
		refreshPreview();
	};

	const fileInput = document.createElement("input");
	fileInput.type = "file";
	fileInput.accept = "image/*";
	fileInput.className = cls("md3FileInput");
	fileInput.tabIndex = -1;
	fileInput.setAttribute("aria-hidden", "true");

	// Split button: main area uploads the wallpaper; the trailing chevron
	// opens the import-effect menu (original / MD3 filter / Monet unified).
	const split = document.createElement("div");
	split.className = cls("md3Split");

	const uploadRow = document.createElement("button");
	uploadRow.type = "button";
	uploadRow.className = cls("md3SplitMain");
	uploadRow.innerHTML = `${menuIcon(ICON_UPLOAD)}<span>${text.upload}</span>`;
	uploadRow.addEventListener("click", () => fileInput.click());

	const splitDivider = document.createElement("span");
	splitDivider.className = cls("md3SplitDivider");

	const splitTrail = document.createElement("button");
	splitTrail.type = "button";
	splitTrail.className = cls("md3SplitTrail");
	splitTrail.setAttribute("aria-haspopup", "menu");
	splitTrail.setAttribute("aria-expanded", "false");
	splitTrail.setAttribute("aria-label", text.effectLabel);
	splitTrail.innerHTML =
		'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="currentColor"/></svg>';

	split.append(uploadRow, splitDivider, splitTrail);

	// Import-effect menu (radio-style; check marks the active effect).
	const splitMenu = document.createElement("div");
	splitMenu.className = cls("md3SplitMenu");
	splitMenu.setAttribute("role", "menu");
	splitMenu.setAttribute("aria-label", text.effectLabel);
	const renderEffectMenu = (): void => {
		splitMenu.textContent = "";
		const current = effectPref();
		for (const id of EFFECTS) {
			const option = document.createElement("button");
			option.type = "button";
			option.className = cls("md3SplitOption");
			option.setAttribute("role", "menuitemradio");
			option.setAttribute("aria-checked", String(id === current));
			const check = document.createElement("span");
			check.className = cls("md3SplitOptionCheck");
			check.textContent = "✓";
			const label = document.createElement("span");
			label.className = cls("md3SplitOptionText");
			label.textContent = text.effects[id];
			option.append(check, label);
			option.addEventListener("click", () => {
				setEffectPref(id);
				renderEffectMenu();
				splitTrail.setAttribute("aria-expanded", "false");
				splitMenu.classList.remove(cls("md3SplitMenuOpen"));
			});
			splitMenu.append(option);
		}
	};
	renderEffectMenu();

	const toggleSplitMenu = (): void => {
		const open = splitMenu.classList.toggle(cls("md3SplitMenuOpen"));
		splitTrail.setAttribute("aria-expanded", String(open));
	};
	splitTrail.addEventListener("click", (event) => {
		event.stopPropagation();
		toggleSplitMenu();
	});
	// Clicking anywhere else closes the effect menu.
	splitMenu.addEventListener("click", (event) => event.stopPropagation());
	document.addEventListener("click", () => {
		splitMenu.classList.remove(cls("md3SplitMenuOpen"));
		splitTrail.setAttribute("aria-expanded", "false");
	});

	const resetRow = document.createElement("button");
	resetRow.type = "button";
	resetRow.className = cls("md3MenuRow");
	resetRow.innerHTML = `${menuIcon(ICON_RESET)}<span>${text.reset}</span>`;
	resetRow.addEventListener("click", () => {
		clearState();
		state = defaultState();
		takeUrl("");
		recolorSettled = false;
		// The user explicitly reset: purge the persisted full-res blobs too,
		// so a later refresh does not resurrect the recolored wallpaper.
		void deleteBlob(KEY_RAW);
		void deleteBlob(KEY_RECOLORED);
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

	const bgRow = document.createElement("label");
	bgRow.className = cls("md3MenuRow");
	bgRow.title = text.showBgHint;
	const bgSwitch = document.createElement("input");
	bgSwitch.type = "checkbox";
	bgSwitch.checked = body.getAttribute("data-md3-show-bg") === "on";
	const bgIcon = document.createElement("span");
	bgIcon.className = cls("md3MenuRowIcon");
	bgIcon.innerHTML = menuIcon(ICON_PALETTE);
	const bgText = document.createElement("span");
	bgText.className = cls("md3MenuRowText");
	bgText.textContent = text.showBg;
	bgRow.append(bgIcon, bgText, bgSwitch);
	bgSwitch.addEventListener("change", () => {
		const next = bgSwitch.checked ? "on" : "off";
		body.setAttribute("data-md3-show-bg", next);
		setShowBgPref(next);
	});

	menu.append(preview, split, splitMenu, resetRow, shapeRow, bgRow, fileInput);

	// Menu open/close drives two things: the `.md3FabOpen` glyph morph and the
	// petal shape morph. The two FAB_MORPH_ paths share the SAME equal-polar
	// sampling grid (index i is the same azimuth in both), so interpolating
	// `d` expands each azimuth in place — the capsule "inflates" into the K
	// ornament with no rotation / y=x flip.
	const fabPetal = fab.querySelector(".bgLightTint") as SVGPathElement | null;
	const MORPH_MS = 520; // slightly slower so the inflation is readable
	let shapeRaf = 0;
	// running capsule-weight: 1 = capsule (default), 0 = K-ornament.
	let shapeWeight = 1;
	/**
	 * Animate the petal `d` toward `toWeight` (0 = ornament, 1 = capsule).
	 * rAF steps morphPath() from the current weight.
	 */
	function runShapeMorph(toWeight: number): void {
		if (fabPetal === null) return;
		cancelAnimationFrame(shapeRaf);
		const from = shapeWeight,
			start = performance.now();
		const step = (now: number): void => {
			const k = Math.min(1, (now - start) / MORPH_MS);
			// M3 emphasized easing: fast in, very slow settle (matches the glyphs).
			const eased = easeEmphasized(k);
			const w = from + (toWeight - from) * eased;
			shapeWeight = w;
			// w=1 → capsule, w=0 → flower (morphPath lerps capsule→flower).
			fabPetal.setAttribute(
				"d",
				morphPath(FAB_MORPH_CAPSULE, FAB_MORPH_FLOWER, 1 - w),
			);
			if (k < 1) shapeRaf = requestAnimationFrame(step);
		};
		shapeRaf = requestAnimationFrame(step);
	}
	function toggleMenu(): void {
		const open = menu.classList.toggle(cls("md3MenuOpen"));
		// `.md3FabOpen` is a literal global class (defined inside a `:global()`
		// block in the stylesheet), so it is NOT exported through the CSS
		// Modules hashed map — using cls() would return "" and blow up. Use the
		// exact class name the CSS expects.
		fab.classList.toggle("md3FabOpen", open);
		runShapeMorph(open ? 0 : 1);
	}
	function closeMenu(): void {
		menu.classList.remove(cls("md3MenuOpen"));
		fab.classList.remove("md3FabOpen");
		runShapeMorph(1);
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
			.then(async (next) => {
				state = next;
				// Persist the original full-res file so a bare re-render (or a
				// future recolor) never depends on the caller keeping the File.
				await putBlob(KEY_RAW, file);
				saveState(state);
				applyTheme();
				refreshPreview();
				setFavicon();
				// Kick off the Monet-unified recolor on the original image.
				void runRecolor(file);
			})
			.catch(() => {
				// Unreadable image: keep the current theme untouched.
			});
	});

	body.append(fab, menu);

	document.title = SKIN_TITLE;
	applyTheme();
	refreshPreview();
	// Restore a persisted recolored wallpaper (or settle the no-GPU case).
	void restoreRecolored();

	ctx.effect(
		() => () => {
			delete body.dataset.dshMd3Wallpaper;
			body.removeAttribute("data-md3-shape");
			body.removeAttribute("data-md3-show-bg");
			themeObserver.disconnect();
			html.style.overflow = prevHtmlOverflow;
			body.style.overflow = prevBodyOverflow;
			document.removeEventListener("click", onDocClick);
			document.removeEventListener("keydown", onDocKeydown);
			cancelAnimationFrame(shapeRaf);
			body.removeAttribute("data-md3-fab-open");
			fab.remove();
			menu.remove();
			favicon.remove();
			stopDevReload?.();
			// Shut down the recolor worker so no off-thread job outlives the skin.
			terminateWorker();
			for (const key of writtenKeys) body.style.removeProperty(key);
			// Release object URLs on teardown. The IndexedDB blobs are the
			// persisted wallpaper — they must SURVIVE dispose so a refresh or
			// re-mount restores the recolored wallpaper (deleting them here
			// would leave a dangling recoloredBlobId and fall back to 512px).
			for (const url of ownedUrls) URL.revokeObjectURL(url);
			ownedUrls.clear();
			if (document.title === SKIN_TITLE) document.title = originalTitle;
		},
		"ui-skin-md3-wallpaper: dynamic color surface",
	);
}
