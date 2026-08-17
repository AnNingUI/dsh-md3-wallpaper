/**
 * HCT color math facade for the md3-wallpaper recolor pipeline.
 *
 * Re-exports the self-consistent CAM16 model from `cam16-gpu.ts` under the
 * names the skin and tests consume, plus a `rgbToJch` convenience and the
 * conventional 0..1 sRGB gamma helpers. Keeping this as a thin facade means
 * `cam16-gpu.ts` stays the single source of truth that the WGSL/GLSL shaders
 * also embed.
 */

import { remapPixel, normalizeHue, shortestAngle, cam16FromArgb } from "./cam16-gpu.ts";

export { remapPixel, normalizeHue, shortestAngle };

export { CAM16_VC } from "./cam16-gpu.ts";

/** sRGB gamma (0..1 -> 0..1 linear). */
export function srgbToLinear(v: number): number {
	if (v <= 0.04045) return v / 12.92;
	return Math.pow((v + 0.055) / 1.055, 2.4);
}

/** sRGB gamma inverse (0..1 linear -> 0..1). */
export function linearToSrgb(v: number): number {
	if (v <= 0.0031308) return v * 12.92;
	return 1.055 * Math.pow(v, 1 / 2.4) - 0.055;
}

/** sRGB (0..1) -> CAM16/HCT J, C, h. */
export function rgbToJch(r: number, g: number, b: number): {
	j: number;
	c: number;
	h: number;
} {
	const argb =
		((255 << 24) | ((Math.round(r * 255) & 255) << 16) | ((Math.round(g * 255) & 255) << 8) | (Math.round(b * 255) & 255)) >>> 0;
	const { hue, chroma, j } = cam16FromArgb(argb);
	return { j, c: chroma, h: hue };
}
