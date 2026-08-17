/**
 * Self-consistent CAM16 (HCT) color math for the md3-wallpaper recolor.
 *
 * This module ports the authoritative @material/material-color-utilities CAM16
 * forward + inverse transforms (and the D65 sRGB gamma) into plain JS. It is
 * the SINGLE source of truth for the numbers that the WebGPU (WGSL) and
 * WebGL2 (GLSL) shaders embed, so the CPU reference and both GPU paths map a
 * pixel identically:
 *
 *   sRGB -> linear -> XYZ -> CAT02 cone -> CAM16 (hue, chroma, J)
 *   remap (pull hue toward target, clamp chroma, keep J)
 *   CAM16 -> XYZ -> sRGB
 *
 * `remapPixel` is the Monet-unified tone operator used by the CPU fallback.
 * Tests exercise it; the shaders mirror the same equations.
 */

/** sRGB linearization (RGB component 0..255 -> linear 0..100), matches material. */
export function srgbComponentToLinear(rgb: number): number {
	const normalized = rgb / 255.0;
	if (normalized <= 0.040449936) return (normalized / 12.92) * 100.0;
	return Math.pow((normalized + 0.055) / 1.055, 2.4) * 100.0;
}

/** sRGB delinearization (linear 0..100 -> RGB component 0..255), matches material. */
export function linearToSrgbComponent(rgb: number): number {
	const normalized = rgb / 100.0;
	let value = 0.0;
	if (normalized <= 0.0031308) value = normalized * 12.92;
	else value = 1.055 * Math.pow(normalized, 1.0 / 2.4) - 0.055;
	return Math.max(0, Math.min(255, Math.round(value * 255.0)));
}

/** Normalize a hue into [0, 360). */
export function normalizeHue(h: number): number {
	h = h % 360.0;
	if (h < 0.0) h += 360.0;
	return h;
}

/** The shortest signed angle between two hues (degrees). */
export function shortestAngle(from: number, to: number): number {
	let d = (to - from) % 360.0;
	if (d > 180.0) d -= 360.0;
	if (d < -180.0) d += 360.0;
	return d;
}

/** ARGB integer from R/G/B 0..255 (alpha forced opaque). */
export function argbFromRgb(r: number, g: number, b: number): number {
	return ((255 << 24) | ((r & 255) << 16) | ((g & 255) << 8) | (b & 255)) >>> 0;
}

/**
 * Default CAM16 viewing conditions (ViewingConditions.DEFAULT), precomputed
 * as literals so the shader strings can interpolate the exact same numbers.
 */
export const CAM16_VC = {
	n: 0.0018418651851244416,
	aw: 38.79918481018423,
	nbb: 2.5543854913038375,
	ncb: 2.5543854913038375,
	c: 0.69,
	nc: 1.0,
	rgbD: [1.02065563, 0.98664527, 0.93558851],
	fl: 0.0778653,
	fLRoot: 0.52824572,
	z: 1.52291696,
} as const;

const SRGB_TO_XYZ = [
	[0.41233895, 0.35762064, 0.18051042],
	[0.2126, 0.7152, 0.0722],
	[0.01932141, 0.11916382, 0.95034478],
] as const;
const XYZ_TO_SRGB = [
	[3.2413774792388685, -1.5376652402851851, -0.49885366846268053],
	[-0.9691452513005321, 1.8758853451067872, 0.04156585616912061],
	[0.05562093689691305, -0.20395524564742123, 1.0571799111220335],
] as const;

function signum(v: number): number {
	return v < 0 ? -1 : v > 0 ? 1 : 0;
}

/** CAM16 forward: ARGB integer -> {hue, chroma, j}. */
export function cam16FromArgb(argb: number): { hue: number; chroma: number; j: number } {
	const red = (argb >> 16) & 0xff;
	const green = (argb >> 8) & 0xff;
	const blue = argb & 0xff;
	const redL = srgbComponentToLinear(red);
	const greenL = srgbComponentToLinear(green);
	const blueL = srgbComponentToLinear(blue);
	const x = 0.41233895 * redL + 0.35762064 * greenL + 0.18051042 * blueL;
	const y = 0.2126 * redL + 0.7152 * greenL + 0.0722 * blueL;
	const z = 0.01932141 * redL + 0.11916382 * greenL + 0.95034478 * blueL;

	const rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
	const gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
	const bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;

	const rgbD = CAM16_VC.rgbD;
	const rD = rgbD[0] * rC;
	const gD = rgbD[1] * gC;
	const bD = rgbD[2] * bC;

	const rAF = Math.pow((CAM16_VC.fl * Math.abs(rD)) / 100.0, 0.42);
	const gAF = Math.pow((CAM16_VC.fl * Math.abs(gD)) / 100.0, 0.42);
	const bAF = Math.pow((CAM16_VC.fl * Math.abs(bD)) / 100.0, 0.42);
	const rA = (signum(rD) * 400.0 * rAF) / (rAF + 27.13);
	const gA = (signum(gD) * 400.0 * gAF) / (gAF + 27.13);
	const bA = (signum(bD) * 400.0 * bAF) / (bAF + 27.13);
	const a = (11.0 * rA + -12.0 * gA + bA) / 11.0;
	const b = (rA + gA - 2.0 * bA) / 9.0;
	const u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
	const p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;
	let hue = (Math.atan2(b, a) * 180.0) / Math.PI;
	hue = normalizeHue(hue);
	const ac = p2 * CAM16_VC.nbb;
	const j = 100.0 * Math.pow(ac / CAM16_VC.aw, CAM16_VC.c * CAM16_VC.z);
	const hRad = (hue * Math.PI) / 180.0;
	const huePrime = hue < 20.14 ? hue + 360 : hue;
	const eHue = 0.25 * (Math.cos((huePrime * Math.PI) / 180.0 + 2.0) + 3.8);
	const p1 = (50000.0 / 13.0) * eHue * CAM16_VC.nc * CAM16_VC.ncb;
	const t = (p1 * Math.sqrt(a * a + b * b)) / (u + 0.305);
	const alpha =
		Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, CAM16_VC.n), 0.73);
	const chroma = alpha * Math.sqrt(j / 100.0);
	return { hue, chroma, j };
}

/** CAM16 inverse: {hue, chroma, j} -> ARGB integer. */
export function cam16ViewedToArgb(hue: number, chroma: number, j: number): number {
	const alpha =
		chroma === 0.0 || j === 0.0 ? 0.0 : chroma / Math.sqrt(j / 100.0);
	const t = Math.pow(
		alpha / Math.pow(1.64 - Math.pow(0.29, CAM16_VC.n), 0.73),
		1.0 / 0.9,
	);
	const hRad = (hue * Math.PI) / 180.0;
	const eHue = 0.25 * (Math.cos(hRad + 2.0) + 3.8);
	const ac =
		CAM16_VC.aw *
		Math.pow(j / 100.0, 1.0 / CAM16_VC.c / CAM16_VC.z);
	const p1 = eHue * (50000.0 / 13.0) * CAM16_VC.nc * CAM16_VC.ncb;
	const p2 = ac / CAM16_VC.nbb;
	const hSin = Math.sin(hRad);
	const hCos = Math.cos(hRad);
	const gamma =
		(23.0 * (p2 + 0.305) * t) /
		(23.0 * p1 + 11.0 * t * hCos + 108.0 * t * hSin);
	const a = gamma * hCos;
	const b = gamma * hSin;
	const rA = (460.0 * p2 + 451.0 * a + 288.0 * b) / 1403.0;
	const gA = (460.0 * p2 - 891.0 * a - 261.0 * b) / 1403.0;
	const bA = (460.0 * p2 - 220.0 * a - 6300.0 * b) / 1403.0;
	const rCBase = Math.max(0, (27.13 * Math.abs(rA)) / (400.0 - Math.abs(rA)));
	const rC =
		signum(rA) * (100.0 / CAM16_VC.fl) * Math.pow(rCBase, 1.0 / 0.42);
	const gCBase = Math.max(0, (27.13 * Math.abs(gA)) / (400.0 - Math.abs(gA)));
	const gC =
		signum(gA) * (100.0 / CAM16_VC.fl) * Math.pow(gCBase, 1.0 / 0.42);
	const bCBase = Math.max(0, (27.13 * Math.abs(bA)) / (400.0 - Math.abs(bA)));
	const bC =
		signum(bA) * (100.0 / CAM16_VC.fl) * Math.pow(bCBase, 1.0 / 0.42);
	const rF = rC / CAM16_VC.rgbD[0];
	const gF = gC / CAM16_VC.rgbD[1];
	const bF = bC / CAM16_VC.rgbD[2];
	const x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
	const y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
	const z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
	const linearR = XYZ_TO_SRGB[0][0] * x + XYZ_TO_SRGB[0][1] * y + XYZ_TO_SRGB[0][2] * z;
	const linearG = XYZ_TO_SRGB[1][0] * x + XYZ_TO_SRGB[1][1] * y + XYZ_TO_SRGB[1][2] * z;
	const linearB = XYZ_TO_SRGB[2][0] * x + XYZ_TO_SRGB[2][1] * y + XYZ_TO_SRGB[2][2] * z;
	const rOut = linearToSrgbComponent(linearR);
	const gOut = linearToSrgbComponent(linearG);
	const bOut = linearToSrgbComponent(linearB);
	return argbFromRgb(rOut, gOut, bOut);
}

/**
 * Monet-unified tone remap. Convert to CAM16, clamp chroma toward `targetC`,
 * pull the hue toward `targetH` weighted by the pixel's own chroma (grays stay
 * gray below `neutralThreshold`), preserve tone J, and convert back.
 */
export function remapPixel(
	r: number,
	g: number,
	b: number,
	targetH: number,
	targetC: number,
	neutralThreshold: number,
): { r: number; g: number; b: number } {
	const argb = argbFromRgb(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
	const { hue, chroma, j } = cam16FromArgb(argb);
	const newC = Math.min(chroma, targetC);
	const t = chroma >= neutralThreshold ? 1 : chroma / Math.max(neutralThreshold, 1e-5);
	const newH = normalizeHue(hue + shortestAngle(hue, targetH) * t);
	const out = cam16ViewedToArgb(newH, newC, j);
	return {
		r: ((out >> 16) & 0xff) / 255,
		g: ((out >> 8) & 0xff) / 255,
		b: (out & 0xff) / 255,
	};
}
