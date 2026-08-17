// @vitest-environment jsdom
/**
 * Unit tests for the recolor pipeline's pure math and GPU/format detection.
 *
 * These deliberately avoid importing palette.ts (which pulls in the
 * @material/material-color-utilities engine) so the tests stay runnable even
 * when that dependency's ESM resolution is broken in the working tree.
 */
import { describe, expect, it } from "vitest";
import {
	normalizeHue,
	rgbToJch,
	shortestAngle,
	srgbToLinear,
	linearToSrgb,
	remapPixel,
} from "../src/client/cam16.ts";
import {
	canEncode,
	canRecolor,
	detectGpu,
	hasGpu,
	mimeFor,
} from "../src/client/gpu.ts";
import {
	remapInPlace,
	targetFromArgs,
} from "../src/client/recolor.ts";

describe("gpu.ts", () => {
	it("classifies GPU availability purely", () => {
		// jsdom exposes no WebGPU / no working WebGL2 context.
		expect(hasGpu("webgpu")).toBe(true);
		expect(hasGpu("webgl2")).toBe(true);
		expect(hasGpu("none")).toBe(false);
		expect(canRecolor("none")).toBe(false);
		expect(canRecolor("webgpu")).toBe(true);
		expect(canRecolor("webgl2")).toBe(true);
	});

	it("detects 'none' in jsdom (no navigator.gpu, no WebGL2 context)", () => {
		expect(detectGpu()).toBe("none");
	});

	it("falls back to jpeg encoding when webp is unavailable", () => {
		// jsdom's canvas.toDataURL('image/webp') returns a png data URL.
		expect(canEncode()).toBe("jpeg");
		expect(mimeFor("jpeg")).toBe("image/jpeg");
		expect(mimeFor("webp")).toBe("image/webp");
	});
});

describe("cam16.ts color math", () => {
	it("keeps pure gray neutral regardless of hue pull", () => {
		// A neutral pixel (~zero chroma) must stay neutral after a remap.
		const out = remapPixel(0.5, 0.5, 0.5, 180, 52, 24);
		expect(out.r).toBeGreaterThan(0.4);
		expect(out.g).toBeGreaterThan(0.4);
		expect(out.b).toBeGreaterThan(0.4);
		expect(out.r).toBeLessThan(0.6);
		expect(out.g).toBeLessThan(0.6);
		expect(out.b).toBeLessThan(0.6);
	});

	it("shifts a red-tinted pixel toward a green target hue", () => {
		// Red (chrome, hue ~0) pulled toward hue ~120 (green).
		const out = remapPixel(0.9, 0.1, 0.1, 120, 52, 24);
		// The green channel must rise well above its original 0.1 (hue pull),
		// and the pixel stays a legible mid-tone (not crushed to black/white).
		expect(out.g).toBeGreaterThan(0.4);
		expect(out.r + out.g + out.b).toBeGreaterThan(0.7);
	});

	it("preserves a readable level through the HCT round-trip", () => {
		// rgbToJch now returns the HCT tone; verify it is a valid 0..100 and the
		// channel stays legible.
		const jch = rgbToJch(0.3, 0.5, 0.8);
		expect(jch.j).toBeGreaterThan(20);
		expect(jch.j).toBeLessThan(90);
		expect(jch.h).toBeGreaterThanOrEqual(0);
		expect(jch.h).toBeLessThan(360);
	});

	it("normalizes and computes shortest hue angles", () => {
		expect(normalizeHue(370)).toBe(10);
		expect(normalizeHue(-20)).toBe(340);
		expect(shortestAngle(10, 20)).toBe(10);
		expect(shortestAngle(350, 10)).toBe(20);
		expect(shortestAngle(20, 350)).toBe(-30);
	});

	it("srgb gamma round-trips", () => {
		expect(linearToSrgb(srgbToLinear(0.0))).toBeCloseTo(0, 3);
		expect(linearToSrgb(srgbToLinear(1.0))).toBeCloseTo(1, 3);
		expect(linearToSrgb(srgbToLinear(0.5))).toBeCloseTo(0.5, 2);
	});
});

describe("recolor.ts", () => {
	it("builds a Monet target with a chroma ceiling", () => {
		const t = targetFromArgs(220, 80, 24);
		expect(t.targetH).toBe(220);
		expect(t.targetC).toBe(52); // clamped from 80.
		expect(t.neutral).toBe(24);
	});

	it("remaps a small RGBA buffer in place, preserving alpha", () => {
		const data = new Uint8ClampedArray([
			255, 0, 0, 255, // red
			0, 255, 0, 200, // green with alpha 200
			0, 0, 0, 255, // black
		]);
		const target = targetFromArgs(120, 60, 24);
		remapInPlace(data, target);
		// Alpha untouched.
		expect(data[3]).toBe(255);
		expect(data[7]).toBe(200);
		expect(data[11]).toBe(255);
		// Buffer length unchanged.
		expect(data.length).toBe(12);
	});

	it("blends pixels toward the MD3 filter tint when blend > 0", () => {
		const data = new Uint8ClampedArray([200, 200, 200, 255]);
		const target = targetFromArgs(120, 60, 24);
		// Force a visible tint: dark surface low / bright primary / light high,
		// blend 0.5. A mid-gray (tone ~50) should lean toward filterMid.
		target.filterLow = [0.1, 0.1, 0.1];
		target.filterMid = [0.8, 0.2, 0.2];
		target.filterHigh = [0.9, 0.9, 0.9];
		target.blend = 0.5;
		remapInPlace(data, target);
		// Red channel should rise well above the original 200/255 = 0.784 mix.
		expect(data[0]).toBeGreaterThan(200);
		// Blue channel should fall (tint's blue 0.2 pulls it down).
		expect(data[2]).toBeLessThan(195);
	});
});
