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

import { remapInPlace, type MonetTarget } from "./recolor.ts";
import { canEncode, detectGpu, hasGpu, mimeFor } from "./gpu.ts";

/** Inbound work item from the main thread. */
interface RecolorJob {
	token: number;
	blob: Blob;
	target: MonetTarget;
}

/** Outbound result (blob) or error. */
interface RecolorReply {
	token: number;
	blob?: Blob;
	error?: string;
	kind?: string;
}

self.onmessage = (event: MessageEvent<RecolorJob>): void => {
	const { token, blob, target } = event.data;
	void run(token, blob, target);
};

async function run(token: number, blob: Blob, target: MonetTarget): Promise<void> {
	try {
		const bitmap = await createImageBitmap(blob);
		try {
			const width = bitmap.width;
			const height = bitmap.height;
			if (!width || !height) throw new Error("empty image");

			// OffscreenCanvas keeps the raster off the main thread. 2d context
			// works in every worker; WebGPU is attempted when the worker has it.
			const canvas = new OffscreenCanvas(width, height);
			const ctx = canvas.getContext("2d");
			if (!ctx) throw new Error("worker 2d context unavailable");
			ctx.drawImage(bitmap, 0, 0);
			const imageData = ctx.getImageData(0, 0, width, height);

			// Try WebGPU in the worker; fall back to the CPU reference.
			let kind = "cpu";
			if (hasGpu(detectGpu())) {
				const ok = await runWebGPUInWorker(imageData.data, width, height, target);
				if (ok) kind = "webgpu";
			}
			if (kind === "cpu") remapInPlace(imageData.data, target);
			ctx.putImageData(imageData, 0, 0);

			const format = canEncode();
			const mime = mimeFor(format);
			const replyBlob = await canvas.convertToBlob({ type: mime, quality: 0.85 });

			const reply: RecolorReply = { token, blob: replyBlob, kind };
			// Blob is NOT a transferable type — it must be structured-cloned as
			// a value, never placed in the transfer list (that throws
			// "does not have a transferable type").
			(self as unknown as Worker).postMessage(reply);
		} finally {
			bitmap.close();
		}
	} catch (error) {
		const reply: RecolorReply = {
			token,
			error: error instanceof Error ? error.message : String(error),
		};
		(self as unknown as Worker).postMessage(reply);
	}
}

/**
 * Best-effort WebGPU compute inside the worker: reuses the same WGSL shader
 * and dispatch shape as the main thread. Returns true when the dispatch +
 * readback succeeded, false to fall back to the CPU remap.
 */
async function runWebGPUInWorker(
	data: Uint8ClampedArray,
	width: number,
	height: number,
	target: MonetTarget,
): Promise<boolean> {
	const nav = navigator as unknown as {
		gpu?: { requestAdapter(): Promise<unknown> };
	};
	if (typeof nav.gpu?.requestAdapter !== "function") return false;
	try {
		const adapter = (await nav.gpu.requestAdapter()) as
			| { requestDevice(): Promise<unknown> }
			| null;
		if (!adapter) return false;
		const device = (await adapter.requestDevice()) as {
			createShaderModule(o: { code: string }): unknown;
			createBuffer(o: { size: number; usage: number }): {
				mapAsync(mode: number): Promise<void>;
				getMappedRange(s?: number, e?: number): ArrayBuffer;
				unmap(): void;
				writeBuffer(d: ArrayBufferView): void;
			};
			createComputePipeline(o: {
				layout: unknown;
				compute: { module: unknown; entryPoint: string };
			}): { getBindGroupLayout(i: number): unknown };
			createBindGroup(layout: unknown, o: { entries: unknown[] }): unknown;
			createCommandEncoder(): {
				beginComputePass(): {
					setPipeline(p: unknown): void;
					setBindGroup(i: number, g: unknown): void;
					dispatchWorkgroups(x: number, y: number): void;
					end(): void;
				};
				finish(): unknown;
			};
			queue: { submit(c: unknown[]): void };
		};

		const { SHIFT_WGSL } = await import("./shader.wgsl.ts");
		const module = device.createShaderModule({ code: SHIFT_WGSL });

		const pixelCount = width * height;
		const packed = new Uint32Array(pixelCount);
		for (let i = 0; i < pixelCount; i++) {
			const o = i * 4;
			packed[i] = data[o] | (data[o + 1] << 8) | (data[o + 2] << 16) | (data[o + 3] << 24);
		}
		const STORAGE = 0x80, UNIFORM = 0x40, COPY_DST = 0x08, MAP_READ = 0x01;
		const storage = device.createBuffer({
			size: packed.byteLength,
			usage: STORAGE | COPY_DST | MAP_READ,
		});
		storage.writeBuffer(packed);

		const params = new Float32Array([target.targetH, target.targetC, target.neutral, target.mode]);
		const paramsBuf = device.createBuffer({ size: params.byteLength, usage: UNIFORM | COPY_DST });
		paramsBuf.writeBuffer(params);

		const dims = new Uint32Array([width, height, 0, 0]);
		const dimsBuf = device.createBuffer({ size: dims.byteLength, usage: UNIFORM | COPY_DST });
		dimsBuf.writeBuffer(dims);

		// Light MD3 palette blend filter (binding 3): 4 × vec4f.
		const filterArr = new Float32Array(16);
		filterArr[0] = target.filterLow[0]; filterArr[1] = target.filterLow[1]; filterArr[2] = target.filterLow[2];
		filterArr[4] = target.filterMid[0]; filterArr[5] = target.filterMid[1]; filterArr[6] = target.filterMid[2];
		filterArr[8] = target.filterHigh[0]; filterArr[9] = target.filterHigh[1]; filterArr[10] = target.filterHigh[2];
		filterArr[12] = target.blend;
		const filterBuf = device.createBuffer({ size: filterArr.byteLength, usage: UNIFORM | COPY_DST });
		filterBuf.writeBuffer(filterArr);

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

		await storage.mapAsync(MAP_READ);
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
