/**
 * Wallpaper pipeline for the md3-wallpaper skin: pick a file, downscale it on
 * a canvas, hand the pixels to the Monet engine, and persist the compact
 * result (a JPEG data URL + the derived token sets) in localStorage so a
 * refresh re-applies the theme without re-decoding the image. Besides an
 * uploaded wallpaper the surface also supports selectable PRESET backdrops
 * (M3 gradients generated from the live md-sys roles, like the Hatsune Miku
 * skin's selectable art) — the preset id is persisted the same way.
 *
 * The stored wallpaper is deliberately small (<= 512px, JPEG ~0.82): it is
 * enough for both Monet's source-color extraction and a cover background, and
 * keeps the localStorage footprint far below the 5MB quota. The skin's apply()
 * owns writing the CSS variables onto document.body; this module only produces
 * and persists the state.
 * @module @anningui/dsh-client-ui-skin-md3-wallpaper/wallpaper
 */

import { rgbToJch } from "./cam16.ts";
import {
	buildMdSysTheme,
	buildThemeTokens,
	DEFAULT_SOURCE_TOKEN,
	extractSourceFromImage,
	hexFromSource,
	type ThemeTokens,
} from "./palette.ts";
import { hexToRgb01, targetFromArgs, type MonetTarget } from "./recolor.ts";

/** localStorage key for the persisted wallpaper state (versioned). */
export const STORAGE_KEY = "dsh.md3Wallpaper.v1";

/** A selectable preset backdrop (M3 gradient, rendered from live tokens). */
export interface WallpaperPreset {
	/** Stable preset id (persisted). */
	id: string;
}

/** The built-in selectable preset backdrops. */
export const WALLPAPER_PRESETS: readonly WallpaperPreset[] = [
	{ id: "monet-mesh" },
	{ id: "monet-sunset" },
	{ id: "monet-ocean" },
	{ id: "monet-mono" },
];

/** The default backdrop when nothing is chosen (a preset, like miku's art). */
export const DEFAULT_PRESET = "monet-mesh";

/** Wallpaper + theme state persisted between sessions. */
export interface WallpaperState {
	/** Downscaled JPEG data URL of an uploaded wallpaper, or null. */
	wallpaper: string | null;
	/** Optional IndexedDB key of the recolored (Monet-unified) full-res blob. */
	recoloredBlobId: string | null;
	/** Selected preset backdrop id (used while `wallpaper` is null). */
	preset: string | null;
	/** The Monet source color as an argb integer. */
	source: number;
	/** The dsw token sets for both themes. */
	tokens: ThemeTokens;
	/** The M3 role token sets for both themes. */
	mdSys: ThemeTokens;
}

/** Max dimension (px) of the persisted wallpaper. */
const MAX_DIM = 512;

/** JPEG quality for the persisted wallpaper. */
const JPEG_QUALITY = 0.82;

/** Read the persisted state; null when absent or structurally invalid. */
export function loadState(): WallpaperState | null {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw === null) return null;
		const parsed: unknown = JSON.parse(raw);
		if (typeof parsed !== "object" || parsed === null) return null;
		const state = parsed as Partial<WallpaperState>;
		if (typeof state.source !== "number" || !Number.isFinite(state.source))
			return null;
		if (
			typeof state.tokens !== "object" ||
			state.tokens === null ||
			typeof state.mdSys !== "object" ||
			state.mdSys === null
		)
			return null;
		if (state.wallpaper !== null && typeof state.wallpaper !== "string")
			return null;
		// Newer field: a stale IndexedDB key is harmless (read resolves null).
		if (
			state.recoloredBlobId !== undefined &&
			typeof state.recoloredBlobId !== "string"
		)
			return null;
		// Older persisted records predate presets: default to the first preset.
		if (typeof state.preset !== "string" && state.wallpaper === null)
			state.preset = DEFAULT_PRESET;
		if (typeof state.preset !== "string") state.preset = null;
		if (typeof state.recoloredBlobId !== "string") state.recoloredBlobId = null;
		return state as WallpaperState;
	} catch {
		return null;
	}
}

/** Persist the state (best-effort; quota failures are swallowed). */
export function saveState(state: WallpaperState): void {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	} catch {
		// Quota exceeded / private mode: the theme still applies for this session.
	}
}

/** Drop the persisted state (restore the default preset look). */
export function clearState(): void {
	try {
		localStorage.removeItem(STORAGE_KEY);
	} catch {
		// best-effort
	}
}

/** Default state: default preset backdrop, baseline M3 purple seed. */
export function defaultState(): WallpaperState {
	const tokens = buildThemeTokens(DEFAULT_SOURCE_TOKEN);
	const mdSys = buildMdSysTheme(DEFAULT_SOURCE_TOKEN);
	return {
		wallpaper: null,
		recoloredBlobId: null,
		preset: DEFAULT_PRESET,
		source: DEFAULT_SOURCE_TOKEN,
		tokens,
		mdSys,
	};
}

/**
 * Process an uploaded image file into a persisted wallpaper state: decode,
 * downscale on a canvas, run Monet's source-color extraction, derive both
 * token sets, and store the result. An upload clears the preset selection.
 * @param file - the image file picked by the user.
 * @returns the new wallpaper state (already persisted).
 */
export async function processWallpaper(file: File): Promise<WallpaperState> {
	const bitmap = await createImageBitmap(file);
	try {
		const scale = Math.min(1, MAX_DIM / Math.max(bitmap.width, bitmap.height));
		const width = Math.max(1, Math.round(bitmap.width * scale));
		const height = Math.max(1, Math.round(bitmap.height * scale));
		const canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		const context = canvas.getContext("2d");
		if (context === null)
			throw new Error("md3-wallpaper: canvas 2d context unavailable");
		context.drawImage(bitmap, 0, 0, width, height);
		const imageData = context.getImageData(0, 0, width, height);
		const source = extractSourceFromImage(imageData);
		const wallpaper = canvas.toDataURL("image/jpeg", JPEG_QUALITY);
		const state: WallpaperState = {
			wallpaper,
			recoloredBlobId: null,
			preset: null,
			source,
			tokens: buildThemeTokens(source),
			mdSys: buildMdSysTheme(source),
		};
		saveState(state);
		return state;
	} finally {
		bitmap.close();
	}
}

/** The persisted wallpaper's data URL (null when on a preset backdrop). */
export function wallpaperUrl(state: WallpaperState): string | null {
	return state.wallpaper;
}

/** The source color as a hex string (favicon/accent hue). */
export function sourceHex(state: WallpaperState): string {
	return hexFromSource(state.source);
}

/**
 * Derive the Monet recolor target from a source color (argb integer). The
 * hue comes from the source's own CAM16 hue so the unified-tone wallpaper
 * always leans toward its own primary; the chroma ceiling and neutral
 * threshold keep grays gray.
 *
 * The MD3 light palette blend is filled from the mdSys role tokens when
 * provided: filterLow = surface-container-lowest, filterMid = primary,
 * filterHigh = surface-container-high, blended at `blend` strength (0.35 for
 * the light wallpaper tint; pass 0 to disable the filter).
 */
export function monetTargetFromSource(
	source: number,
	mdSys?: Record<string, string>,
	dark = false,
	blend = 0.35,
	mode: 0 | 1 = 0,
): MonetTarget {
	const r = ((source >> 16) & 0xff) / 255;
	const g = ((source >> 8) & 0xff) / 255;
	const b = (source & 0xff) / 255;
	// rgbToJch expects sRGB (0..1) and linearizes internally.
	const { c, h } = rgbToJch(r, g, b);
	const target = targetFromArgs(h, c);
	target.mode = mode;
	if (mdSys) {
		target.filterLow = hexToRgb01(
			mdSys["--md-sys-color-surface-container-lowest"] ??
				(dark ? "#141218" : "#f7f2fa"),
		);
		target.filterMid = hexToRgb01(mdSys["--md-sys-color-primary"] ?? "#6750a4");
		target.filterHigh = hexToRgb01(
			mdSys["--md-sys-color-surface-container-high"] ??
				(dark ? "#1d3668" : "#ece6f0"),
		);
		target.blend = blend;
	}
	return target;
}
