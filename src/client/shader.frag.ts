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

import { CAM16_VC } from "./cam16-gpu.ts";

const VC = CAM16_VC;

/**
 * The GLSL ES 300 source.
 * @internal
 */
export const SHIFT_GLSL = /* glsl */ `#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 v_uv;
out vec4 outColor;
uniform sampler2D u_tex;
uniform vec3 u_target;
uniform vec3 u_filterLow;
uniform vec3 u_filterMid;
uniform vec3 u_filterHigh;
uniform float u_blend;
uniform float u_mode;

const float FL = ${VC.fl};
const float N = ${VC.n};
const float AW = ${VC.aw};
const float NBB = ${VC.nbb};
const float NCB = ${VC.ncb};
const float CC = ${VC.c};
const float NC = ${VC.nc};
const float Z = ${VC.z};
const vec3 RGBD = vec3(${VC.rgbD[0]}, ${VC.rgbD[1]}, ${VC.rgbD[2]});

float signumf(float v) { return v < 0.0 ? -1.0 : v > 0.0 ? 1.0 : 0.0; }
float normalizeHue(float h) { h = mod(h, 360.0); if (h < 0.0) h += 360.0; return h; }
float shortestAngle(float from, float to) { float d = mod(to - from, 360.0); if (d > 180.0) d -= 360.0; if (d < -180.0) d += 360.0; return d; }
float srgbC(float v) { float n = v / 255.0; if (n <= 0.040449936) return n / 12.92 * 100.0; return pow((n + 0.055) / 1.055, 2.4) * 100.0; }
float delin(float v) { float n = v / 100.0; float x; if (n <= 0.0031308) x = n * 12.92; else x = 1.055 * pow(n, 1.0 / 2.4) - 0.055; return clamp(x * 255.0, 0.0, 255.0); }

vec3 cam16FromLin(vec3 lin) {
  float x = 0.41233895 * lin.r + 0.35762064 * lin.g + 0.18051042 * lin.b;
  float y = 0.2126 * lin.r + 0.7152 * lin.g + 0.0722 * lin.b;
  float z = 0.01932141 * lin.r + 0.11916382 * lin.g + 0.95034478 * lin.b;
  float rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
  float gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
  float bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;
  float rD = RGBD.r * rC, gD = RGBD.g * gC, bD = RGBD.b * bC;
  float rAF = pow(FL * abs(rD) / 100.0, 0.42);
  float gAF = pow(FL * abs(gD) / 100.0, 0.42);
  float bAF = pow(FL * abs(bD) / 100.0, 0.42);
  float rA = signumf(rD) * 400.0 * rAF / (rAF + 27.13);
  float gA = signumf(gD) * 400.0 * gAF / (gAF + 27.13);
  float bA = signumf(bD) * 400.0 * bAF / (bAF + 27.13);
  float aAxis = (11.0 * rA - 12.0 * gA + bA) / 11.0;
  float bAxis = (rA + gA - 2.0 * bA) / 9.0;
  float u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;
  float p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;
  float hue = normalizeHue(atan(bAxis, aAxis) * 57.2957795);
  float ac = p2 * NBB;
  float j = 100.0 * pow(ac / AW, CC * Z);
  float huePrime = hue < 20.14 ? hue + 360.0 : hue;
  float eHue = 0.25 * (cos(huePrime * 0.0174532925 + 2.0) + 3.8);
  float p1 = (50000.0 / 13.0) * eHue * NC * NCB;
  float t = p1 * sqrt(aAxis * aAxis + bAxis * bAxis) / (u + 0.305);
  float alpha = pow(t, 0.9) * pow(1.64 - pow(0.29, N), 0.73);
  float c = alpha * sqrt(j / 100.0);
  return vec3(hue, c, j);
}

vec3 cam16ToLin(vec3 jch) {
  float hue = jch.r, c = jch.g, j = jch.b;
  float alpha = (c == 0.0 || j == 0.0) ? 0.0 : c / sqrt(j / 100.0);
  float t = pow(alpha / pow(1.64 - pow(0.29, N), 0.73), 1.0 / 0.9);
  float hRad = hue * 0.0174532925;
  float eHue = 0.25 * (cos(hRad + 2.0) + 3.8);
  float ac = AW * pow(j / 100.0, 1.0 / CC / Z);
  float p1 = eHue * (50000.0 / 13.0) * NC * NCB;
  float p2 = ac / NBB;
  float hSin = sin(hRad), hCos = cos(hRad);
  float gamma = 23.0 * (p2 + 0.305) * t / (23.0 * p1 + 11.0 * t * hCos + 108.0 * t * hSin);
  float aA = gamma * hCos, bA = gamma * hSin;
  float rA = (460.0 * p2 + 451.0 * aA + 288.0 * bA) / 1403.0;
  float gA = (460.0 * p2 - 891.0 * aA - 261.0 * bA) / 1403.0;
  float bA2 = (460.0 * p2 - 220.0 * aA - 6300.0 * bA) / 1403.0;
  float rCB = max(0.0, 27.13 * abs(rA) / (400.0 - abs(rA)));
  float gCB = max(0.0, 27.13 * abs(gA) / (400.0 - abs(gA)));
  float bCB = max(0.0, 27.13 * abs(bA2) / (400.0 - abs(bA2)));
  float rC = signumf(rA) * (100.0 / FL) * pow(rCB, 1.0 / 0.42);
  float gC = signumf(gA) * (100.0 / FL) * pow(gCB, 1.0 / 0.42);
  float bC = signumf(bA2) * (100.0 / FL) * pow(bCB, 1.0 / 0.42);
  float rF = rC / RGBD.r, gF = gC / RGBD.g, bF = bC / RGBD.b;
  float x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
  float y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
  float z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;
  float lr = 3.2413774792388685 * x - 1.5376652402851851 * y - 0.49885366846268053 * z;
  float lg = -0.9691452513005321 * x + 1.8758853451067872 * y + 0.04156585616912061 * z;
  float lb = 0.05562093689691305 * x - 0.20395524564742123 * y + 1.0571799111220335 * z;
  return vec3(lr, lg, lb);
}

void main() {
  vec4 src = texture(u_tex, v_uv);
  vec3 orig = vec3(src.r, src.g, src.b);
  vec3 lin = vec3(srgbC(src.r * 255.0), srgbC(src.g * 255.0), srgbC(src.b * 255.0));
  vec3 outC;
  if (u_mode >= 1.0) {
    // Monet hue-pull remap (legacy).
    vec3 jch = cam16FromLin(lin);
    float t = jch.y >= u_target.z ? 1.0 : jch.y / max(u_target.z, 1e-5);
    float newH = normalizeHue(jch.x + shortestAngle(jch.x, u_target.x) * t);
    float newC = min(jch.y, u_target.y);
    vec3 outLin = cam16ToLin(vec3(newH, newC, jch.z));
    outC = vec3(
      clamp(delin(outLin.r) / 255.0, 0.0, 1.0),
      clamp(delin(outLin.g) / 255.0, 0.0, 1.0),
      clamp(delin(outLin.b) / 255.0, 0.0, 1.0)
    );
  } else if (u_blend <= 0.0) {
    outC = orig;
  } else {
    vec3 jch = cam16FromLin(lin);
    float t = clamp(jch.z / 100.0, 0.0, 1.0);
    vec3 tint;
    if (t < 0.5) {
      tint = mix(u_filterLow, u_filterMid, t * 2.0);
    } else {
      tint = mix(u_filterMid, u_filterHigh, (t - 0.5) * 2.0);
    }
    outC = mix(orig, tint, clamp(u_blend, 0.0, 1.0));
  }
  outColor = vec4(clamp(outC, 0.0, 1.0), src.a);
}
`;
