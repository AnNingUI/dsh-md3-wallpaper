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

import { remapPixel, rgbToJch } from "./cam16.ts";
import {
	canEncode,
	canRecolor,
	detectGpu,
	mimeFor,
	type GpuKind,
	type ImageFormat,
} from "./gpu.ts";
import { SHIFT_WGSL } from "./shader.wgsl.ts";
import { SHIFT_GLSL } from "./shader.frag.ts";
import { recolorInWorker } from "./worker.ts";

/** A wallpaper source ready for a GPU pass. */
export type RecolorSource =
	| Blob
	| ImageBitmap
	| HTMLCanvasElement
	| OffscreenCanvas
	| HTMLVideoElement;

/** The result of a recolor pass. */
export interface RecolorResult {
	/** The re-mapped, full-resolution image as a blob (webp or jpeg). */
	blob: Blob;
	/** Which GPU backend produced it. */
	kind: GpuKind;
	/** The format actually encoded. */
	format: ImageFormat;
	/** The pixel dimensions encoded. */
	width: number;
	height: number;
}

/** The Monet target parameters for a recolor pass. */
export interface MonetTarget {
	/** Target hue in degrees [0, 360). */
	targetH: number;
	/** Chroma ceiling. */
	targetC: number;
	/** Chroma threshold below which hue pull fades to neutral. */
	neutral: number;
	/** MD3 palette filter colors (normalized 0..1 RGB) for the light blend.
	 *  filterLow = dark-tone tint, filterMid = mid-tone (primary),
	 *  filterHigh = light-tone tint. Blended by tone with `blend` strength. */
	filterLow: [number, number, number];
	filterMid: [number, number, number];
	filterHigh: [number, number, number];
	/** Blend strength (0..1); 0 disables the filter (identity). */
	blend: number;
	/** Processing mode: 0 = MD3 light blend (tone tint mix), 1 = Monet
	 *  hue-pull remap (legacy unified-tone). */
	mode: 0 | 1;
}

/**
 * Resolve a Monet target from a source hue/chroma. A typical MD3 primary sits
 * around chroma ~50-70 in HCT; the neutral threshold stays well below so
 * grays remain gray.
 */
export function targetFromArgs(sourceH: number, sourceC: number, neutral = 24): MonetTarget {
	return {
		targetH: sourceH,
		targetC: Math.min(sourceC, 52),
		neutral,
		filterLow: [0.5, 0.5, 0.5],
		filterMid: [0.5, 0.5, 0.5],
		filterHigh: [0.5, 0.5, 0.5],
		blend: 0,
		mode: 0,
	};
}

/** Parse a `#rrggbb` (or `#rgb`) hex into normalized 0..1 RGB. */
export function hexToRgb01(hex: string): [number, number, number] {
	const clean = hex.replace(/^#/, "");
	if (clean.length === 3) {
		return [
			parseInt(clean[0] + clean[0], 16) / 255,
			parseInt(clean[1] + clean[1], 16) / 255,
			parseInt(clean[2] + clean[2], 16) / 255,
		];
	}
	if (clean.length === 6) {
		return [
			parseInt(clean.slice(0, 2), 16) / 255,
			parseInt(clean.slice(2, 4), 16) / 255,
			parseInt(clean.slice(4, 6), 16) / 255,
		];
	}
	return [0.5, 0.5, 0.5];
}

/**
 * Run the recolor pipeline on a source image, producing a full-resolution
 * blob. Returns null when no GPU backend is available (per spec, callers then
 * hide the wallpaper).
 *
 * Blob inputs prefer the dedicated worker (off-thread: 8K stays responsive);
 * non-Blob drawables and no-worker environments run the main-thread path,
 * which still keeps full precision (no downscale).
 */
export async function recolorBitmap(
	source: RecolorSource,
	target: MonetTarget,
	win: Window = globalThis as unknown as Window,
): Promise<RecolorResult | null> {
	const kind = detectGpu(win);
	if (!canRecolor(kind)) return null;

	// Worker path: post the original blob; the worker decodes, remaps and
	// encodes off-thread at full resolution. No main-thread pixel work.
	if (source instanceof Blob) {
		try {
			const workerBlob = await recolorInWorker(source, target);
			if (workerBlob !== null) {
				const format = canEncode(win);
				const dims = await probeBlobSize(workerBlob, win);
				return { blob: workerBlob, kind, format, ...dims };
			}
		} catch {
			// Worker failed. Deliberately do NOT fall back to the main-thread
			// 8K pass — that path stalls the UI. Return null so the caller
			// degrades (hides the wallpaper) instead of freezing.
			return null;
		}
		// recolorInWorker resolved null (worker unavailable): degrade the same
		// way instead of running an oversized pass on the main thread.
		return null;
	}

	// Normalize to a drawable.
	let drawable: ImageBitmap | HTMLCanvasElement | OffscreenCanvas | HTMLVideoElement;
	if (source instanceof Blob) {
		if (typeof createImageBitmap !== "function") return null;
		drawable = await createImageBitmap(source);
	} else {
		drawable = source;
	}

	try {
		const width = drawable.width;
		const height = drawable.height;
		if (!width || !height) return null;

		const format = canEncode(win);
		const mime = mimeFor(format);
		const canvas = win.document?.createElement("canvas");
		if (!canvas) return null;
		canvas.width = width;
		canvas.height = height;

		const ctxDraw = canvas.getContext("2d");
		if (!ctxDraw) return null;
		ctxDraw.clearRect(0, 0, width, height);
		ctxDraw.drawImage(drawable, 0, 0, width, height);
		const imageData = ctxDraw.getImageData(0, 0, width, height);

		// Run the GPU backend; on any failure fall back to the CPU reference so
		// a wallpaper is still produced.
		let succeeded = false;
		if (kind === "webgpu") {
			succeeded = await runWebGPU(imageData.data, width, height, target);
		} else if (kind === "webgl2") {
			succeeded = runWebGL2(imageData, target, canvas, win);
		}
		if (!succeeded) remapInPlace(imageData.data, target);

		ctxDraw.putImageData(imageData, 0, 0);

		// Encode.
		if (typeof (canvas as unknown as OffscreenCanvas).convertToBlob === "function") {
			const blob = await (canvas as unknown as OffscreenCanvas).convertToBlob({
				type: mime,
				quality: 0.85,
			});
			return { blob, kind, format, width, height };
		}
		const blob = await new Promise<Blob | null>((resolve) => {
			canvas.toBlob((b) => resolve(b), mime, 0.85);
		});
		if (!blob) return null;
		return { blob, kind, format, width, height };
	} finally {
		if (source instanceof Blob && typeof (drawable as ImageBitmap).close === "function") {
			try {
				(drawable as ImageBitmap).close();
			} catch {
				// non-ImageBitmap drawable has no close().
			}
		}
	}
}

/* ---------------------------------------------------------------------------
 * WebGPU compute path.
 */

const GPU_FLAGS = {
	STORAGE: 0x80,
	UNIFORM: 0x40,
	COPY_DST: 0x08,
	COPY_SRC: 0x04,
	MAP_READ: 0x01,
} as const;

/** Actual WebGPU compute dispatch. @internal */
async function runWebGPU(
	data: Uint8ClampedArray,
	width: number,
	height: number,
	target: MonetTarget,
): Promise<boolean> {
	if (typeof navigator === "undefined") return false;
	const nav = navigator as {
		gpu?: { requestAdapter(): Promise<unknown> };
	};
	if (typeof nav.gpu?.requestAdapter !== "function") return false;
	let adapter: { requestDevice(): Promise<unknown> } | null = null;
	try {
		adapter = (await nav.gpu.requestAdapter()) as { requestDevice(): Promise<unknown> };
	} catch {
		return false;
	}
	if (!adapter) return false;

	const device = (await adapter.requestDevice()) as {
		createShaderModule(o: { code: string }): unknown;
		createBuffer(o: { size: number; usage: number }): {
			mapAsync(mode: number): Promise<void>;
			getMappedRange(s?: number, e?: number): ArrayBuffer;
			unmap(): void;
			writeBuffer(data: ArrayBufferView): void;
		};
		createBindGroup(pipelineLayout: unknown, o: { entries: unknown[] }): unknown;
		createComputePipeline(o: { layout: unknown; compute: { module: unknown; entryPoint: string } }): {
			getBindGroupLayout(i: number): unknown;
		};
		createCommandEncoder(): {
			beginComputePass(): {
				setPipeline(p: unknown): void;
				setBindGroup(i: number, g: unknown): void;
				dispatchWorkgroups(x: number, y: number): void;
				end(): void;
			};
			finish(): unknown;
		};
		queue: { submit(cmd: unknown[]): void };
	};

	try {
		const pixelCount = width * height;
		const packed = new Uint32Array(pixelCount);
		for (let i = 0; i < pixelCount; i++) {
			const o = i * 4;
			packed[i] =
				data[o] | (data[o + 1] << 8) | (data[o + 2] << 16) | (data[o + 3] << 24);
		}

		const module = device.createShaderModule({ code: SHIFT_WGSL });
		// read_write storage buffer (the shader rewrites pixels in place).
		const storage = device.createBuffer({
			size: packed.byteLength,
			usage: GPU_FLAGS.STORAGE | GPU_FLAGS.COPY_DST | GPU_FLAGS.MAP_READ,
		});
		storage.writeBuffer(packed);

		const params = new Float32Array([target.targetH, target.targetC, target.neutral, target.mode]);
		const paramsBuf = device.createBuffer({
			size: params.byteLength,
			usage: GPU_FLAGS.UNIFORM | GPU_FLAGS.COPY_DST,
		});
		paramsBuf.writeBuffer(params);

		const dims = new Uint32Array([width, height, 0, 0]);
		const dimsBuf = device.createBuffer({
			size: dims.byteLength,
			usage: GPU_FLAGS.UNIFORM | GPU_FLAGS.COPY_DST,
		});
		dimsBuf.writeBuffer(dims);

		// Light MD3 palette blend filter (binding 3): 4 × vec4f.
		// [0]=filterLow, [1]=filterMid, [2]=filterHigh (rgb + pad), [3]=(blend,0,0,0).
		const filterArr = new Float32Array(16);
		filterArr[0] = target.filterLow[0]; filterArr[1] = target.filterLow[1]; filterArr[2] = target.filterLow[2];
		filterArr[4] = target.filterMid[0]; filterArr[5] = target.filterMid[1]; filterArr[6] = target.filterMid[2];
		filterArr[8] = target.filterHigh[0]; filterArr[9] = target.filterHigh[1]; filterArr[10] = target.filterHigh[2];
		filterArr[12] = target.blend;
		const filterBuf = device.createBuffer({
			size: filterArr.byteLength,
			usage: GPU_FLAGS.UNIFORM | GPU_FLAGS.COPY_DST,
		});
		filterBuf.writeBuffer(filterArr);

		// Auto pipeline layout; the bind group derives from the pipeline layout
		// so entry types (read_write storage + 3 uniforms) match the shader.
		const pipeline = device.createComputePipeline({
			layout: "auto",
			compute: { module, entryPoint: "cs_main" },
		});
		const group = device.createBindGroup(pipeline.getBindGroupLayout(0), {
			entries: [
				{ binding: 0, resource: { buffer: storage } },
				{ binding: 1, resource: { buffer: paramsBuf } },
				{ binding: 2, resource: { buffer: dimsBuf } },
				{ binding: 3, resource: { buffer: filterBuf } },
			],
		});

		const encoder = device.createCommandEncoder();
		const pass = encoder.beginComputePass();
		pass.setPipeline(pipeline);
		pass.setBindGroup(0, group);
		pass.dispatchWorkgroups(Math.ceil(width / 16), Math.ceil(height / 16));
		pass.end();
		device.queue.submit([encoder.finish()]);

		// Read back the remapped pixels.
		await storage.mapAsync(GPU_FLAGS.MAP_READ);
		const mapped = new Uint32Array(storage.getMappedRange());
		for (let i = 0; i < pixelCount; i++) {
			const v = mapped[i];
			const o = i * 4;
			data[o] = v & 0xff;
			data[o + 1] = (v >> 8) & 0xff;
			data[o + 2] = (v >> 16) & 0xff;
			data[o + 3] = (v >> 24) & 0xff;
		}
		storage.unmap();
		return true;
	} catch {
		return false;
	}
}

/* ---------------------------------------------------------------------------
 * WebGL2 fallback (fragment pass + readPixels).
 */

/** Actual WebGL2 dispatch. @internal */
function runWebGL2(
	imageData: ImageData,
	target: MonetTarget,
	canvas: HTMLCanvasElement,
	win: Window,
): boolean {
	let gl: WebGL2RenderingContext | null = null;
	let tex = 0;
	let fbo = 0;
	let depthRb = 0;
	let prog: WebGLProgram | null = null;
	try {
		gl = canvas.getContext("webgl2");
		if (!gl) return false;
		const width = imageData.width;
		const height = imageData.height;

		// Shader source compiled here (imported string).
		const vs = `#version 300 es
precision highp float;
out vec2 v_uv;
const vec2 pos[3] = vec2[3](vec2(-1.0,-1.0), vec2(3.0,-1.0), vec2(-1.0, 3.0));
void main(){ v_uv = 0.5 * (pos[gl_VertexID] + 1.0); gl_Position = vec4(pos[gl_VertexID], 0.0, 1.0); }`;
		const fs = SHIFT_GLSL;

		prog = gl.createProgram()!;
		const compile = (type: number, src: string): WebGLShader => {
			const sh = gl!.createShader(type)!;
			gl!.shaderSource(sh, src);
			gl!.compileShader(sh);
			return sh;
		};
		const vsh = compile(gl.VERTEX_SHADER, vs);
		const fsh = compile(gl.FRAGMENT_SHADER, fs);
		gl.attachShader(prog, vsh);
		gl.attachShader(prog, fsh);
		gl.linkProgram(prog);
		if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return false;

		// Source texture from the pixel data.
		tex = gl.createTexture()!;
		gl.bindTexture(gl.TEXTURE_2D, tex);
		gl.texImage2D(
			gl.TEXTURE_2D, 0, gl.RGBA8, width, height, 0,
			gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(imageData.data),
		);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

		// Offscreen framebuffer + renderbuffer for output.
		fbo = gl.createFramebuffer()!;
		gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
		depthRb = gl.createRenderbuffer()!;
		gl.bindRenderbuffer(gl.RENDERBUFFER, depthRb);
		gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA8, width, height);
		gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, depthRb);

		gl.useProgram(prog);
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, tex);
		gl.uniform1i(gl.getUniformLocation(prog, "u_tex"), 0);
		gl.uniform3f(
			gl.getUniformLocation(prog, "u_target"),
			target.targetH, target.targetC, target.neutral,
		);
		gl.uniform3f(gl.getUniformLocation(prog, "u_filterLow"),
			target.filterLow[0], target.filterLow[1], target.filterLow[2]);
		gl.uniform3f(gl.getUniformLocation(prog, "u_filterMid"),
			target.filterMid[0], target.filterMid[1], target.filterMid[2]);
		gl.uniform3f(gl.getUniformLocation(prog, "u_filterHigh"),
			target.filterHigh[0], target.filterHigh[1], target.filterHigh[2]);
		gl.uniform1f(gl.getUniformLocation(prog, "u_blend"), target.blend);
		gl.uniform1f(gl.getUniformLocation(prog, "u_mode"), target.mode);
		gl.viewport(0, 0, width, height);
		gl.drawArrays(gl.TRIANGLES, 0, 3);

		// Read back.
		const out = new Uint8Array(width * height * 4);
		gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, out);
		imageData.data.set(out);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		return true;
	} catch {
		return false;
	} finally {
		try {
			gl?.deleteProgram(prog);
			gl?.deleteTexture(tex);
			gl?.deleteRenderbuffer(depthRb);
			gl?.deleteFramebuffer(fbo);
		} catch {
			// best-effort cleanup
		}
	}
}

/**
 * Re-map a Uint8ClampedArray RGBA8 buffer in place. Mode 0 = MD3 light
 * palette blend (tone interpolates across filterLow/Mid/High, mixed with the
 * original at `blend`); mode 1 = Monet hue-pull remap (legacy). Pure and
 * deterministic — the CPU reference mirrors the WGSL/GLSL shaders.
 */
export function remapInPlace(
	data: Uint8ClampedArray,
	target: MonetTarget,
): void {
	const n = data.length / 4;
	if (target.mode === 1) {
		// Monet hue-pull (legacy unified tone).
		const { targetH, targetC, neutral } = target;
		for (let i = 0; i < n; i++) {
			const o = i * 4;
			const { r: nr, g: ng, b: nb } = remapPixel(
				data[o] / 255,
				data[o + 1] / 255,
				data[o + 2] / 255,
				targetH,
				targetC,
				neutral,
			);
			data[o] = Math.round(clamp01(nr) * 255);
			data[o + 1] = Math.round(clamp01(ng) * 255);
			data[o + 2] = Math.round(clamp01(nb) * 255);
		}
		return;
	}
	const blend = clamp01(target.blend);
	if (blend <= 0) return; // identity.
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
		let tR: number, tG: number, tB: number;
		if (t < 0.5) {
			const k = t * 2;
			tR = loR + (miR - loR) * k;
			tG = loG + (miG - loG) * k;
			tB = loB + (miB - loB) * k;
		} else {
			const k = (t - 0.5) * 2;
			tR = miR + (hiR - miR) * k;
			tG = miG + (hiG - miG) * k;
			tB = miB + (hiB - miB) * k;
		}
		data[o] = Math.round(clamp01(origR + (tR - origR) * blend) * 255);
		data[o + 1] = Math.round(clamp01(origG + (tG - origG) * blend) * 255);
		data[o + 2] = Math.round(clamp01(origB + (tB - origB) * blend) * 255);
	}
}

/**
 * Probe a blob's pixel dimensions without keeping the raster. Used to report
 * the worker-produced blob's size in the result.
 * @internal
 */
async function probeBlobSize(
	blob: Blob,
	win: Window,
): Promise<{ width: number; height: number }> {
	try {
		if (typeof createImageBitmap !== "function") return { width: 0, height: 0 };
		const bmp = await createImageBitmap(blob);
		const size = { width: bmp.width, height: bmp.height };
		bmp.close();
		return size;
	} catch {
		return { width: 0, height: 0 };
	}
}

function clamp01(v: number): number {
	return v < 0 ? 0 : v > 1 ? 1 : v;
}
