({ exports: {} }).exports;
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/client/cam16-gpu.ts
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
function srgbComponentToLinear(rgb) {
	const normalized = rgb / 255;
	if (normalized <= .040449936) return normalized / 12.92 * 100;
	return Math.pow((normalized + .055) / 1.055, 2.4) * 100;
}
/** sRGB delinearization (linear 0..100 -> RGB component 0..255), matches material. */
function linearToSrgbComponent(rgb) {
	const normalized = rgb / 100;
	let value = 0;
	if (normalized <= .0031308) value = normalized * 12.92;
	else value = 1.055 * Math.pow(normalized, 1 / 2.4) - .055;
	return Math.max(0, Math.min(255, Math.round(value * 255)));
}
/** Normalize a hue into [0, 360). */
function normalizeHue(h) {
	h = h % 360;
	if (h < 0) h += 360;
	return h;
}
/** The shortest signed angle between two hues (degrees). */
function shortestAngle(from, to) {
	let d = (to - from) % 360;
	if (d > 180) d -= 360;
	if (d < -180) d += 360;
	return d;
}
/** ARGB integer from R/G/B 0..255 (alpha forced opaque). */
function argbFromRgb(r, g, b) {
	return (255 << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255) >>> 0;
}
/**
* Default CAM16 viewing conditions (ViewingConditions.DEFAULT), precomputed
* as literals so the shader strings can interpolate the exact same numbers.
*/
const CAM16_VC = {
	n: .0018418651851244416,
	aw: 38.79918481018423,
	nbb: 2.5543854913038375,
	ncb: 2.5543854913038375,
	c: .69,
	nc: 1,
	rgbD: [
		1.02065563,
		.98664527,
		.93558851
	],
	fl: .0778653,
	fLRoot: .52824572,
	z: 1.52291696
};
const XYZ_TO_SRGB = [
	[
		3.2413774792388685,
		-1.5376652402851851,
		-.49885366846268053
	],
	[
		-.9691452513005321,
		1.8758853451067872,
		.04156585616912061
	],
	[
		.05562093689691305,
		-.20395524564742123,
		1.0571799111220335
	]
];
function signum(v) {
	return v < 0 ? -1 : v > 0 ? 1 : 0;
}
/** CAM16 forward: ARGB integer -> {hue, chroma, j}. */
function cam16FromArgb(argb) {
	const red = argb >> 16 & 255;
	const green = argb >> 8 & 255;
	const blue = argb & 255;
	const redL = srgbComponentToLinear(red);
	const greenL = srgbComponentToLinear(green);
	const blueL = srgbComponentToLinear(blue);
	const x = .41233895 * redL + .35762064 * greenL + .18051042 * blueL;
	const y = .2126 * redL + .7152 * greenL + .0722 * blueL;
	const z = .01932141 * redL + .11916382 * greenL + .95034478 * blueL;
	const rC = .401288 * x + .650173 * y - .051461 * z;
	const gC = -.250268 * x + 1.204414 * y + .045854 * z;
	const bC = -.002079 * x + .048952 * y + .953127 * z;
	const rgbD = CAM16_VC.rgbD;
	const rD = rgbD[0] * rC;
	const gD = rgbD[1] * gC;
	const bD = rgbD[2] * bC;
	const rAF = Math.pow(CAM16_VC.fl * Math.abs(rD) / 100, .42);
	const gAF = Math.pow(CAM16_VC.fl * Math.abs(gD) / 100, .42);
	const bAF = Math.pow(CAM16_VC.fl * Math.abs(bD) / 100, .42);
	const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
	const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
	const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
	const a = (11 * rA + -12 * gA + bA) / 11;
	const b = (rA + gA - 2 * bA) / 9;
	const u = (20 * rA + 20 * gA + 21 * bA) / 20;
	const p2 = (40 * rA + 20 * gA + bA) / 20;
	let hue = Math.atan2(b, a) * 180 / Math.PI;
	hue = normalizeHue(hue);
	const ac = p2 * CAM16_VC.nbb;
	const j = 100 * Math.pow(ac / CAM16_VC.aw, CAM16_VC.c * CAM16_VC.z);
	hue * Math.PI / 180;
	const huePrime = hue < 20.14 ? hue + 360 : hue;
	const t = 5e4 / 13 * (.25 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8)) * CAM16_VC.nc * CAM16_VC.ncb * Math.sqrt(a * a + b * b) / (u + .305);
	const chroma = Math.pow(t, .9) * Math.pow(1.64 - Math.pow(.29, CAM16_VC.n), .73) * Math.sqrt(j / 100);
	return {
		hue,
		chroma,
		j
	};
}
/** CAM16 inverse: {hue, chroma, j} -> ARGB integer. */
function cam16ViewedToArgb(hue, chroma, j) {
	const alpha = chroma === 0 || j === 0 ? 0 : chroma / Math.sqrt(j / 100);
	const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(.29, CAM16_VC.n), .73), 1 / .9);
	const hRad = hue * Math.PI / 180;
	const eHue = .25 * (Math.cos(hRad + 2) + 3.8);
	const ac = CAM16_VC.aw * Math.pow(j / 100, 1 / CAM16_VC.c / CAM16_VC.z);
	const p1 = eHue * (5e4 / 13) * CAM16_VC.nc * CAM16_VC.ncb;
	const p2 = ac / CAM16_VC.nbb;
	const hSin = Math.sin(hRad);
	const hCos = Math.cos(hRad);
	const gamma = 23 * (p2 + .305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
	const a = gamma * hCos;
	const b = gamma * hSin;
	const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
	const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
	const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
	const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
	const rC = signum(rA) * (100 / CAM16_VC.fl) * Math.pow(rCBase, 1 / .42);
	const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
	const gC = signum(gA) * (100 / CAM16_VC.fl) * Math.pow(gCBase, 1 / .42);
	const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
	const bC = signum(bA) * (100 / CAM16_VC.fl) * Math.pow(bCBase, 1 / .42);
	const rF = rC / CAM16_VC.rgbD[0];
	const gF = gC / CAM16_VC.rgbD[1];
	const bF = bC / CAM16_VC.rgbD[2];
	const x = 1.86206786 * rF - 1.01125463 * gF + .14918677 * bF;
	const y = .38752654 * rF + .62144744 * gF - .00897398 * bF;
	const z = -.0158415 * rF - .03412294 * gF + 1.04996444 * bF;
	const linearR = XYZ_TO_SRGB[0][0] * x + XYZ_TO_SRGB[0][1] * y + XYZ_TO_SRGB[0][2] * z;
	const linearG = XYZ_TO_SRGB[1][0] * x + XYZ_TO_SRGB[1][1] * y + XYZ_TO_SRGB[1][2] * z;
	const linearB = XYZ_TO_SRGB[2][0] * x + XYZ_TO_SRGB[2][1] * y + XYZ_TO_SRGB[2][2] * z;
	return argbFromRgb(linearToSrgbComponent(linearR), linearToSrgbComponent(linearG), linearToSrgbComponent(linearB));
}
/**
* Monet-unified tone remap. Convert to CAM16, clamp chroma toward `targetC`,
* pull the hue toward `targetH` weighted by the pixel's own chroma (grays stay
* gray below `neutralThreshold`), preserve tone J, and convert back.
*/
function remapPixel(r, g, b, targetH, targetC, neutralThreshold) {
	const { hue, chroma, j } = cam16FromArgb(argbFromRgb(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)));
	const newC = Math.min(chroma, targetC);
	const t = chroma >= neutralThreshold ? 1 : chroma / Math.max(neutralThreshold, 1e-5);
	const out = cam16ViewedToArgb(normalizeHue(hue + shortestAngle(hue, targetH) * t), newC, j);
	return {
		r: (out >> 16 & 255) / 255,
		g: (out >> 8 & 255) / 255,
		b: (out & 255) / 255
	};
}
//#endregion
//#region src/client/cam16.ts
/**
* HCT color math facade for the md3-wallpaper recolor pipeline.
*
* Re-exports the self-consistent CAM16 model from `cam16-gpu.ts` under the
* names the skin and tests consume, plus a `rgbToJch` convenience and the
* conventional 0..1 sRGB gamma helpers. Keeping this as a thin facade means
* `cam16-gpu.ts` stays the single source of truth that the WGSL/GLSL shaders
* also embed.
*/
/** sRGB (0..1) -> CAM16/HCT J, C, h. */
function rgbToJch(r, g, b) {
	const { hue, chroma, j } = cam16FromArgb((255 << 24 | (Math.round(r * 255) & 255) << 16 | (Math.round(g * 255) & 255) << 8 | Math.round(b * 255) & 255) >>> 0);
	return {
		j,
		c: chroma,
		h: hue
	};
}
//#endregion
//#region src/client/gpu.ts
/** Whether the recolor stage may run its GPU path at all. */
function hasGpu(kind) {
	return kind === "webgpu" || kind === "webgl2";
}
/**
* Detect which GPU compute backend exists. WebGPU wins; otherwise we test for
* a WebGL2 context. jsdom's canvas answers null getContext, so it returns
* 'none' there.
* @param win - window; default globalThis.
*/
function detectGpu(win = globalThis) {
	const gpu = win.navigator.gpu;
	if (typeof gpu === "object" && gpu !== null && typeof gpu.requestAdapter === "function") return "webgpu";
	try {
		const ctx = (win.document?.createElement("canvas"))?.getContext("webgl2");
		return ctx !== null && ctx !== void 0 ? "webgl2" : "none";
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
function canEncode(win = globalThis) {
	try {
		const canvas = win.document?.createElement("canvas");
		if (!canvas || typeof canvas.toDataURL !== "function") return "jpeg";
		return canvas.toDataURL("image/webp").startsWith("data:image/webp") ? "webp" : "jpeg";
	} catch {
		return "jpeg";
	}
}
/** The mime type + container mapping for a resolved format. */
function mimeFor(format) {
	return format === "webp" ? "image/webp" : "image/jpeg";
}
//#endregion
//#region src/client/shader.wgsl.ts
/**
* WGSL compute shader for the md3-wallpaper HCT tone re-map.
*
* Embeds the SAME faithful CAM16 forward + inverse math as `cam16-gpu.ts` so
* GPU output matches the CPU reference. Constants (viewing conditions + sRGB
* matrices) are interpolated from `CAM16_VC` at module load, so they can
* never drift from the JS path.
*
* Buffers (layout):
*   @group(0) @binding(0) pixels : array<u32>      // RGBA8 packed, in+out
*   @group(0) @binding(1) params : uniform          // (targetH, targetC, neutral)
*   @group(0) @binding(2) dims   : uniform vec2u   // (width, height)
*
* strided: each invocation handles one RGBA8 pixel packed into a u32
* (R low byte .. A high byte).
*/
var shader_wgsl_exports = /* @__PURE__ */ __exportAll({ SHIFT_WGSL: () => SHIFT_WGSL });
const VC$1 = CAM16_VC;
/**
* The full WGSL source. Dispatched by `recolor.ts`'s WebGPU path.
* @internal
*/
const SHIFT_WGSL = `
struct Params {
  targetH : f32,
  targetC : f32,
  neutral : f32,
  pad     : f32,
};

@group(0) @binding(0) var<storage, read_write> pixels : array<u32>;
@group(0) @binding(1) var<uniform> params : Params;
@group(0) @binding(2) var<uniform> dims : vec2u;
// Light MD3 palette blend: [0]=filterLow, [1]=filterMid, [2]=filterHigh
// (vec4 -> rgb normalized 0..1, a unused), [3] = (blend, 0, 0, 0).
@group(0) @binding(3) var<uniform> filterBUF : array<vec4f, 4>;

const SRGB_TO_XYZ = mat3x3f(0.41233895, 0.35762064, 0.18051042, 0.2126, 0.7152, 0.0722, 0.01932141, 0.11916382, 0.95034478);
const XYZ_TO_SRGB = mat3x3f(3.2413774792388685, -1.5376652402851851, -0.49885366846268053, -0.9691452513005321, 1.8758853451067872, 0.04156585616912061, 0.05562093689691305, -0.20395524564742123, 1.0571799111220335);
const RGBD0 : f32 = ${VC$1.rgbD[0]};
const RGBD1 : f32 = ${VC$1.rgbD[1]};
const RGBD2 : f32 = ${VC$1.rgbD[2]};
const FL : f32 = ${VC$1.fl};
const N : f32 = ${VC$1.n};
const AW : f32 = ${VC$1.aw};
const NBB : f32 = ${VC$1.nbb};
const NCB : f32 = ${VC$1.ncb};
const CC : f32 = ${VC$1.c};
const NC : f32 = ${VC$1.nc};
const Z : f32 = ${VC$1.z};

fn signum(v : f32) -> f32 {
  if (v < 0.0) { return -1.0; }
  if (v > 0.0) { return 1.0; }
  return 0.0;
}

fn normalizeHue(h : f32) -> f32 {
  var v = h % 360.0;
  if (v < 0.0) { v = v + 360.0; }
  return v;
}

fn shortestAngle(from : f32, to : f32) -> f32 {
  var d = (to - from) % 360.0;
  if (d > 180.0) { d = d - 360.0; }
  if (d < -180.0) { d = d + 360.0; }
  return d;
}

fn srgbComponentToLinear(v : f32) -> f32 {
  let n = v / 255.0;
  if (n <= 0.040449936) { return n / 12.92 * 100.0; }
  return pow((n + 0.055) / 1.055, 2.4) * 100.0;
}

fn linearToSrgbComponent(v : f32) -> f32 {
  let n = v / 100.0;
  var val : f32;
  if (n <= 0.0031308) { val = n * 12.92; } else { val = 1.055 * pow(n, 1.0 / 2.4) - 0.055; }
  return clamp(val * 255.0, 0.0, 255.0);
}

// CAM16 forward: (rL,gL,bL linear 0..100) -> (hue, chroma, j).
fn cam16FromLin(rL : f32, gL : f32, bL : f32) -> vec3f {
  let x = 0.41233895 * rL + 0.35762064 * gL + 0.18051042 * bL;
  let y = 0.2126 * rL + 0.7152 * gL + 0.0722 * bL;
  let z = 0.01932141 * rL + 0.11916382 * gL + 0.95034478 * bL;
  let rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
  let gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
  let bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;
  let rD = RGBD0 * rC;
  let gD = RGBD1 * gC;
  let bD = RGBD2 * bC;
  let rAF = pow(FL * abs(rD) / 100.0, 0.42);
  let gAF = pow(FL * abs(gD) / 100.0, 0.42);
  let bAF = pow(FL * abs(bD) / 100.0, 0.42);
  let rA = signum(rD) * 400.0 * rAF / (rAF + 27.13);
  let gA = signum(gD) * 400.0 * gAF / (gAF + 27.13);
  let bA = signum(bD) * 400.0 * bAF / (bAF + 27.13);
  let aAxis = (11.0 * rA + -12.0 * gA + bA) / 11.0;
  let bAxis = (rA + gA - 2.0 * bA) / 9.0;
  let u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
  let p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;
  var hue = atan2(bAxis, aAxis) * 57.2957795;
  hue = normalizeHue(hue);
  let ac = p2 * NBB;
  let j = 100.0 * pow(ac / AW, CC * Z);
  var huePrime = hue;
  if (hue < 20.14) { huePrime = hue + 360.0; }
  let eHue = 0.25 * (cos(huePrime * 0.0174532925 + 2.0) + 3.8);
  let p1 = (50000.0 / 13.0) * eHue * NC * NCB;
  let t = (p1 * sqrt(aAxis * aAxis + bAxis * bAxis)) / (u + 0.305);
  let alpha = pow(t, 0.9) * pow(1.64 - pow(0.29, N), 0.73);
  let c = alpha * sqrt(j / 100.0);
  return vec3f(hue, c, j);
}

// CAM16 inverse: (hue, chroma, j) -> linear RGB 0..100.
fn cam16ToLin(hue : f32, c : f32, j : f32) -> vec3f {
  var alpha : f32;
  if (c == 0.0 || j == 0.0) { alpha = 0.0; } else { alpha = c / sqrt(j / 100.0); }
  let t = pow(alpha / pow(1.64 - pow(0.29, N), 0.73), 1.0 / 0.9);
  let hRad = hue * 0.0174532925;
  let eHue = 0.25 * (cos(hRad + 2.0) + 3.8);
  let ac = AW * pow(j / 100.0, 1.0 / CC / Z);
  let p1 = eHue * (50000.0 / 13.0) * NC * NCB;
  let p2 = ac / NBB;
  let hSin = sin(hRad);
  let hCos = cos(hRad);
  let gamma = 23.0 * (p2 + 0.305) * t / (23.0 * p1 + 11.0 * t * hCos + 108.0 * t * hSin);
  let aA = gamma * hCos;
  let bA = gamma * hSin;
  let rA = (460.0 * p2 + 451.0 * aA + 288.0 * bA) / 1403.0;
  let gA = (460.0 * p2 - 891.0 * aA - 261.0 * bA) / 1403.0;
  let bA2 = (460.0 * p2 - 220.0 * aA - 6300.0 * bA) / 1403.0;
  let rCBase = max(0.0, 27.13 * abs(rA) / (400.0 - abs(rA)));
  let gCBase = max(0.0, 27.13 * abs(gA) / (400.0 - abs(gA)));
  let bCBase = max(0.0, 27.13 * abs(bA2) / (400.0 - abs(bA2)));
  let rC = signum(rA) * (100.0 / FL) * pow(rCBase, 1.0 / 0.42);
  let gC = signum(gA) * (100.0 / FL) * pow(gCBase, 1.0 / 0.42);
  let bC = signum(bA2) * (100.0 / FL) * pow(bCBase, 1.0 / 0.42);
  let rF = rC / RGBD0;
  let gF = gC / RGBD1;
  let bF = bC / RGBD2;
  let x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
  let y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
  let z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
  let m = mat3x3f(XYZ_TO_SRGB);
  let lin = m * vec3f(x, y, z);
  return lin;
}

@compute @workgroup_size(16, 16)
fn cs_main(@builtin(global_invocation_id) gid : vec3u) {
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  let idx = gid.y * dims.x + gid.x;
  let packed = pixels[idx];
  let r8 = packed & 255u;
  let g8 = (packed >> 8u) & 255u;
  let b8 = (packed >> 16u) & 255u;

  let rL = srgbComponentToLinear(f32(r8));
  let gL = srgbComponentToLinear(f32(g8));
  let bL = srgbComponentToLinear(f32(b8));

  // mode (params.pad): 0 = MD3 light blend, 1 = Monet hue-pull remap.
  var out : vec3f;
  if (params.pad >= 1.0) {
    // Monet unified tone: pull hue toward target, clamp chroma, keep tone.
    let jch = cam16FromLin(rL, gL, bL);
    var t = 1.0;
    if (jch.y < params.neutral) { t = jch.y / max(params.neutral, 1e-5); }
    let delta = shortestAngle(jch.x, params.targetH) * t;
    let newH = normalizeHue(jch.x + delta);
    let newC = min(jch.y, params.targetC);
    let lin = cam16ToLin(newH, newC, jch.z);
    out = vec3f(linearToSrgbComponent(lin.x), linearToSrgbComponent(lin.y), linearToSrgbComponent(lin.z)) / 255.0;
  } else {
    // MD3 light palette blend by tone (default).
    let blend = filterBUF[3].x;
    let orig = vec3f(f32(r8) / 255.0, f32(g8) / 255.0, f32(b8) / 255.0);
    if (blend <= 0.0) {
      out = orig;
    } else {
      let jch = cam16FromLin(rL, gL, bL);
      let t = clamp(jch.z / 100.0, 0.0, 1.0);
      var tint : vec3f;
      if (t < 0.5) {
        tint = mix(filterBUF[0].xyz, filterBUF[1].xyz, t * 2.0);
      } else {
        tint = mix(filterBUF[1].xyz, filterBUF[2].xyz, (t - 0.5) * 2.0);
      }
      out = mix(orig, tint, clamp(blend, 0.0, 1.0));
    }
  }

  let outR = u32(clamp(out.r, 0.0, 1.0) * 255.0 + 0.5);
  let outG = u32(clamp(out.g, 0.0, 1.0) * 255.0 + 0.5);
  let outB = u32(clamp(out.b, 0.0, 1.0) * 255.0 + 0.5);
  pixels[idx] = (packed & 0xFF000000u) | (outB << 16u) | (outG << 8u) | outR;
}
`.trim();
//#endregion
//#region src/client/shader.frag.ts
/**
* WebGL2 fragment shader for the md3-wallpaper HCT tone re-map.
*
* Mirrors `cam16-gpu.ts` and `shader.wgsl.ts` exactly (same constants, same
* CAM16 forward/inverse) so the WebGL2 fallback produces identical output to
* the WebGPU path and the CPU reference. It renders each texel of the source
* texture through a fullscreen pass; the host reads the remapped pixels back
* with gl.readPixels.
*
* Input:  u_tex (source RGBA8, sRGB, linear-off)
* Uniform: u_target (vec3: targetH, targetC, neutral)
*/
const VC = CAM16_VC;
`${VC.fl}${VC.n}${VC.aw}${VC.nbb}${VC.ncb}${VC.c}${VC.nc}${VC.z}${VC.rgbD[0]}${VC.rgbD[1]}${VC.rgbD[2]}`;
typeof globalThis !== "undefined" && globalThis.__MD3_RECOLOR_WORKER_SRC__;
//#endregion
//#region src/client/recolor.ts
/**
* Recolor orchestration for the md3-wallpaper skin.
*
* Given a source image and a Monet-derived primary hue/chroma target, produce
* a full-resolution wallpaper tone-mapped into a single unified hue (the
* "Monet unified tone" look): WebGPU compute when available, WebGL2 fragment
* pass as fallback, and — per the spec — NO wallpaper at all when no GPU
* backend is present (the caller hides it).
*
* The color science lives in `cam16-gpu.ts` (JS reference) and is embedded
* verbatim in `shader.wgsl.ts` / `shader.frag.ts`, so any GPU path and the CPU
* fallback map a pixel identically. The pipeline draws the source onto a
* canvas, hands the RGBA8 buffer to the selected GPU backend, reads the
* remapped pixels back, and encodes to webp/jpeg.
*/
/**
* Re-map a Uint8ClampedArray RGBA8 buffer in place. Mode 0 = MD3 light
* palette blend (tone interpolates across filterLow/Mid/High, mixed with the
* original at `blend`); mode 1 = Monet hue-pull remap (legacy). Pure and
* deterministic — the CPU reference mirrors the WGSL/GLSL shaders.
*/
function remapInPlace(data, target) {
	const n = data.length / 4;
	if (target.mode === 1) {
		const { targetH, targetC, neutral } = target;
		for (let i = 0; i < n; i++) {
			const o = i * 4;
			const { r: nr, g: ng, b: nb } = remapPixel(data[o] / 255, data[o + 1] / 255, data[o + 2] / 255, targetH, targetC, neutral);
			data[o] = Math.round(clamp01(nr) * 255);
			data[o + 1] = Math.round(clamp01(ng) * 255);
			data[o + 2] = Math.round(clamp01(nb) * 255);
		}
		return;
	}
	const blend = clamp01(target.blend);
	if (blend <= 0) return;
	const [loR, loG, loB] = target.filterLow;
	const [miR, miG, miB] = target.filterMid;
	const [hiR, hiG, hiB] = target.filterHigh;
	for (let i = 0; i < n; i++) {
		const o = i * 4;
		const origR = data[o] / 255;
		const origG = data[o + 1] / 255;
		const origB = data[o + 2] / 255;
		const { j: tone } = rgbToJch(origR, origG, origB);
		const t = clamp01(tone / 100);
		let tR, tG, tB;
		if (t < .5) {
			const k = t * 2;
			tR = loR + (miR - loR) * k;
			tG = loG + (miG - loG) * k;
			tB = loB + (miB - loB) * k;
		} else {
			const k = (t - .5) * 2;
			tR = miR + (hiR - miR) * k;
			tG = miG + (hiG - miG) * k;
			tB = miB + (hiB - miB) * k;
		}
		data[o] = Math.round(clamp01(origR + (tR - origR) * blend) * 255);
		data[o + 1] = Math.round(clamp01(origG + (tG - origG) * blend) * 255);
		data[o + 2] = Math.round(clamp01(origB + (tB - origB) * blend) * 255);
	}
}
function clamp01(v) {
	return v < 0 ? 0 : v > 1 ? 1 : v;
}
//#endregion
//#region src/client/recolor.worker.ts
/**
* Standalone recolor worker (classic worker).
*
* Receives `{ blob, target, token }`, decodes the image in this worker,
* performs the Monet-unified tone re-map (WebGPU compute when available in the
* worker, else the CPU CAM16 reference), encodes to webp/jpeg, and posts the
* resulting Blob back as `{ token, blob }`.
*
* The main thread stays fully responsive: all pixel work — decode, canvas
* raster, getImageData, re-map, encode — happens here, never on the UI thread.
* No downscaling is applied: an 8K upload keeps full precision; the cost is
* paid off-thread instead.
*/
self.onmessage = (event) => {
	const { token, blob, target } = event.data;
	run(token, blob, target);
};
async function run(token, blob, target) {
	try {
		const bitmap = await createImageBitmap(blob);
		try {
			const width = bitmap.width;
			const height = bitmap.height;
			if (!width || !height) throw new Error("empty image");
			const canvas = new OffscreenCanvas(width, height);
			const ctx = canvas.getContext("2d");
			if (!ctx) throw new Error("worker 2d context unavailable");
			ctx.drawImage(bitmap, 0, 0);
			const imageData = ctx.getImageData(0, 0, width, height);
			let kind = "cpu";
			if (hasGpu(detectGpu())) {
				if (await runWebGPUInWorker(imageData.data, width, height, target)) kind = "webgpu";
			}
			if (kind === "cpu") remapInPlace(imageData.data, target);
			ctx.putImageData(imageData, 0, 0);
			const mime = mimeFor(canEncode());
			const reply = {
				token,
				blob: await canvas.convertToBlob({
					type: mime,
					quality: .85
				}),
				kind
			};
			self.postMessage(reply);
		} finally {
			bitmap.close();
		}
	} catch (error) {
		const reply = {
			token,
			error: error instanceof Error ? error.message : String(error)
		};
		self.postMessage(reply);
	}
}
/**
* Best-effort WebGPU compute inside the worker: reuses the same WGSL shader
* and dispatch shape as the main thread. Returns true when the dispatch +
* readback succeeded, false to fall back to the CPU remap.
*/
async function runWebGPUInWorker(data, width, height, target) {
	const nav = navigator;
	if (typeof nav.gpu?.requestAdapter !== "function") return false;
	try {
		const adapter = await nav.gpu.requestAdapter();
		if (!adapter) return false;
		const device = await adapter.requestDevice();
		const { SHIFT_WGSL } = await Promise.resolve().then(() => shader_wgsl_exports);
		const module = device.createShaderModule({ code: SHIFT_WGSL });
		const pixelCount = width * height;
		const packed = new Uint32Array(pixelCount);
		for (let i = 0; i < pixelCount; i++) {
			const o = i * 4;
			packed[i] = data[o] | data[o + 1] << 8 | data[o + 2] << 16 | data[o + 3] << 24;
		}
		const MAP_READ = 1;
		const storage = device.createBuffer({
			size: packed.byteLength,
			usage: 137
		});
		storage.writeBuffer(packed);
		const params = new Float32Array([
			target.targetH,
			target.targetC,
			target.neutral,
			target.mode
		]);
		const paramsBuf = device.createBuffer({
			size: params.byteLength,
			usage: 72
		});
		paramsBuf.writeBuffer(params);
		const dims = new Uint32Array([
			width,
			height,
			0,
			0
		]);
		const dimsBuf = device.createBuffer({
			size: dims.byteLength,
			usage: 72
		});
		dimsBuf.writeBuffer(dims);
		const filterArr = /* @__PURE__ */ new Float32Array(16);
		filterArr[0] = target.filterLow[0];
		filterArr[1] = target.filterLow[1];
		filterArr[2] = target.filterLow[2];
		filterArr[4] = target.filterMid[0];
		filterArr[5] = target.filterMid[1];
		filterArr[6] = target.filterMid[2];
		filterArr[8] = target.filterHigh[0];
		filterArr[9] = target.filterHigh[1];
		filterArr[10] = target.filterHigh[2];
		filterArr[12] = target.blend;
		const filterBuf = device.createBuffer({
			size: filterArr.byteLength,
			usage: 72
		});
		filterBuf.writeBuffer(filterArr);
		const pipeline = device.createComputePipeline({
			layout: "auto",
			compute: {
				module,
				entryPoint: "cs_main"
			}
		});
		const group = device.createBindGroup(pipeline.getBindGroupLayout(0), { entries: [
			{
				binding: 0,
				resource: { buffer: storage }
			},
			{
				binding: 1,
				resource: { buffer: paramsBuf }
			},
			{
				binding: 2,
				resource: { buffer: dimsBuf }
			},
			{
				binding: 3,
				resource: { buffer: filterBuf }
			}
		] });
		const encoder = device.createCommandEncoder();
		const pass = encoder.beginComputePass();
		pass.setPipeline(pipeline);
		pass.setBindGroup(0, group);
		pass.dispatchWorkgroups(Math.ceil(width / 16), Math.ceil(height / 16));
		pass.end();
		device.queue.submit([encoder.finish()]);
		await storage.mapAsync(MAP_READ);
		const mapped = new Uint32Array(storage.getMappedRange());
		for (let i = 0; i < pixelCount; i++) {
			const v = mapped[i];
			const o = i * 4;
			data[o] = v & 255;
			data[o + 1] = v >> 8 & 255;
			data[o + 2] = v >> 16 & 255;
			data[o + 3] = v >> 24 & 255;
		}
		storage.unmap();
		return true;
	} catch {
		return false;
	}
}
//#endregion

//# sourceMappingURL=recolor.worker.js.map