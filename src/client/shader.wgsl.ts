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

import { CAM16_VC } from "./cam16-gpu.ts";

const VC = CAM16_VC;
const SRGB_TO_XYZ_FLAT = "0.41233895, 0.35762064, 0.18051042, 0.2126, 0.7152, 0.0722, 0.01932141, 0.11916382, 0.95034478";
const XYZ_TO_SRGB_FLAT = "3.2413774792388685, -1.5376652402851851, -0.49885366846268053, -0.9691452513005321, 1.8758853451067872, 0.04156585616912061, 0.05562093689691305, -0.20395524564742123, 1.0571799111220335";

/**
 * The full WGSL source. Dispatched by `recolor.ts`'s WebGPU path.
 * @internal
 */
export const SHIFT_WGSL = /* wgsl */ `
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

const SRGB_TO_XYZ = mat3x3f(${SRGB_TO_XYZ_FLAT});
const XYZ_TO_SRGB = mat3x3f(${XYZ_TO_SRGB_FLAT});
const RGBD0 : f32 = ${VC.rgbD[0]};
const RGBD1 : f32 = ${VC.rgbD[1]};
const RGBD2 : f32 = ${VC.rgbD[2]};
const FL : f32 = ${VC.fl};
const N : f32 = ${VC.n};
const AW : f32 = ${VC.aw};
const NBB : f32 = ${VC.nbb};
const NCB : f32 = ${VC.ncb};
const CC : f32 = ${VC.c};
const NC : f32 = ${VC.nc};
const Z : f32 = ${VC.z};

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
