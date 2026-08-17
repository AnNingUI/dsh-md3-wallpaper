/**
 * Offline normalizer: turns two structurally-different closed paths into a
 * PAIR of idempotent-topology paths (same command count/sequence) that
 * svg-path-morph can interpolate.
 *
 * The two source skins:
 *   - FAB_U_PATH: M L A L A L A L A Z      (10 cmds, a rounded diamond)
 *   - FAB_K_PATH: M C l c l c ... c Z      (50 cmds, a complex K ornament)
 * share no command sequence, so svg-path-morph.compile() can't take them
 * directly. We resample each to N equal-arc-length samples along its perimeter
 * and re-emit as `M + N×C + Z` (absolute). Both are centered on the shared
 * 461×461 viewBox center (230.5) — the source bboxes already center on ~230 —
 * start the ring at polar 0°, and wind the same way, so the CSS/JS morph
 * interpolates without drift.
 *
 * Run: bun run scripts/normalize-morph.ts   (not node — the sandbox node here
 * OOMs; bun is available and skips the tsconfig-baseUrl warning harmlessly)
 */

/** A parsed path command tuple: [opLetter, ...numerics]. */
type Command = [string, ...number[]];

const VIEWBOX = 461;
const CENTER = VIEWBOX / 2; // 230.5
const SEG = 96; // enough to keep the 50-command K ornament's shape

/* source paths (must stay in sync with art.ts) */
const U =
	"M 357.857 103.142 L 357.858 103.143 A 145.865 145.865 0 0 1 357.858 309.428 L 309.428 357.858 A 145.865 145.865 0 0 1 103.143 357.858 L 103.142 357.857 A 145.865 145.865 0 0 1 103.142 151.572 L 151.572 103.142 A 145.865 145.865 0 0 1 357.857 103.142 Z";
const K =
	"M93.6379 63.9405C89.7543 78.4344 78.4333 89.7554 63.9394 93.639l-7.4405 1.9937c-22.4055 6.0033-35.702 29.0333-29.6984 51.4393l1.9196 7.164c3.8837 14.494-.2601 29.959-10.8704 40.569l-5.5482 5.548c-16.402 16.402-16.402 42.995 0 59.397l5.6221 5.622c10.6102 10.611 14.754 26.075 10.8704 40.569l-1.9936 7.441c-6.0036 22.405 7.2929 45.435 29.6985 51.439l7.4406 1.994c14.4939 3.883 25.8149 15.204 29.6985 29.698l1.9942 7.443c6.0038 22.405 29.0338 35.702 51.4388 29.698l7.442-1.994c14.494-3.883 29.959.26 40.569 10.871l5.271 5.271c16.402 16.402 42.995 16.402 59.397 0l5.347-5.347c10.61-10.61 26.075-14.754 40.569-10.87l7.717 2.068c22.405 6.003 45.435-7.293 51.439-29.699l1.993-7.439c3.884-14.494 15.205-25.815 29.699-29.699l7.441-1.994c22.406-6.003 35.702-29.033 29.699-51.439l-2.068-7.718c-3.884-14.493.26-29.958 10.87-40.569l5.346-5.346c16.402-16.402 16.402-42.995 0-59.397l-5.272-5.272c-10.61-10.61-14.754-26.075-10.87-40.569l1.994-7.441c6.003-22.406-7.293-45.436-29.699-51.4398l-7.441-1.9939c-14.494-3.8836-25.815-15.2046-29.699-29.6984l-1.993-7.4395c-6.004-22.4056-29.034-35.702-51.439-29.6985l-7.441 1.9937c-14.494 3.8836-29.959-.2601-40.569-10.8704l-5.623-5.6227c-16.402-16.402-42.995-16.402-59.397 0l-5.547 5.5476c-10.61 10.6102-26.075 14.754-40.569 10.8704l-7.166-1.92c-22.405-6.0036-45.435 7.2929-51.4388 29.6985l-1.9943 7.4425Z";

const CMD: Record<string, number> = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7, z: 0 };
function parse(path: string): Command[] {
	const out: Command[] = [];
	const segR = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
	const numR = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
	path.replace(segR, (_, cmd: string, args: string) => {
		const t = cmd.toLowerCase();
		const values = (args.match(numR) ?? []).map(Number);
		let command = cmd;
		if (t === "m" && values.length > 2) { out.push([command, ...values.splice(0, 2)] as Command); command = cmd === "m" ? "l" : "L"; }
		while (true) {
			if (values.length === CMD[t]) { out.push([command, ...values] as Command); return ""; }
			if (values.length < CMD[t]) throw new Error("malformed path data");
			out.push([command, ...values.splice(0, CMD[t])] as Command);
		}
	});
	return out;
}

function fmt(n: number): string { const r = Math.round(n * 10000) / 10000; return `${r}`; }

/** Dense polyline (absolute) of the perimeter, honoring arcs & cubics. */
function sampleOutline(path: string): { x: number; y: number }[] {
	const cmds = parse(path);
	const pts: { x: number; y: number }[] = [];
	let x = 0, y = 0;
	const push = (nx: number, ny: number): void => { pts.push({ x: nx, y: ny }); x = nx; y = ny; };
	const isAbs = (op: string) => op === op.toUpperCase();
	for (const [op, ...a] of cmds) {
		const t = op.toLowerCase(), abs = isAbs(op);
		if (op === "M") { x = a[0]; y = a[1]; pts.push({ x, y }); }
		else if (t === "l") push(abs ? a[0] : x + a[0], abs ? a[1] : y + a[1]);
		else if (t === "h") push(abs ? a[0] : x + a[0], y);
		else if (t === "v") push(x, abs ? a[0] : y + a[0]);
		else if (t === "c") {
			const x1 = abs ? a[0] : x + a[0], y1 = abs ? a[1] : y + a[1];
			const x2 = abs ? a[2] : x + a[2], y2 = abs ? a[3] : y + a[3];
			const xe = abs ? a[4] : x + a[4], ye = abs ? a[5] : y + a[5];
			const sub = 8;
			for (let i = 1; i <= sub; i++) { const tt = i / sub, u = 1 - tt; push(u * u * u * x + 3 * u * u * tt * x1 + 3 * u * tt * tt * x2 + tt * tt * tt * xe, u * u * u * y + 3 * u * u * tt * y1 + 3 * u * tt * tt * y2 + tt * tt * tt * ye); }
		} else if (t === "a") {
			const rx = a[0], ry = a[1], rot = ((a[2] * Math.PI) / 180), large = a[3], sweep = a[4], xe = abs ? a[5] : x + a[5], ye = abs ? a[6] : y + a[6];
			// endpoint→center parameterization (standard arc conversion)
			const cosr = Math.cos(rot), sinr = Math.sin(rot);
			const dx = (x - xe) / 2, dy = (y - ye) / 2;
			const x1p = cosr * dx + sinr * dy, y1p = -sinr * dx + cosr * dy;
			let rx2 = rx * rx, ry2 = ry * ry, x1p2 = x1p * x1p, y1p2 = y1p * y1p;
			let lambda = x1p2 / rx2 + y1p2 / ry2;
			if (lambda > 1) { const s = Math.sqrt(lambda); rx2 = rx * s * rx * s; ry2 = ry * s * ry * s; }
			const num = rx2 * ry2 - rx2 * y1p2 - ry2 * x1p2, den = rx2 * y1p2 + ry2 * x1p2;
			// sign for the center-side choice (per SVG endpoint→center spec):
			// sign = (largeArcFlag !== sweepFlag) ? 1 : -1 — with sweepFlag
			// interpreted in SVG's y-down frame so short arcs stay short.
			const coef = (large === 1) !== (sweep === 1) ? 1 : -1, co = coef * Math.sqrt(Math.max(0, num / den));
			const cxp = (co * rx * y1p) / ry, cyp = (co * -ry * x1p) / rx;
			const cxx = cosr * cxp - sinr * cyp + (x + xe) / 2, cyy = sinr * cxp + cosr * cyp + (y + ye) / 2;
			let th1 = Math.atan2((y1p - cyp) / ry, (x1p - cxp) / rx);
			let dth = Math.atan2((-y1p - cyp) / ry, (-x1p - cxp) / rx) - th1;
			if (sweep === 0 && dth > 0) dth -= 2 * Math.PI;
			if (sweep === 1 && dth < 0) dth += 2 * Math.PI;
			const sub = 10;
			for (let i = 1; i <= sub; i++) { const aa = th1 + (dth * i) / sub; push(cxx + rx * Math.cos(aa) * cosr - ry * Math.sin(aa) * sinr, cyy + rx * Math.cos(aa) * sinr + ry * Math.sin(aa) * cosr); }
		}
		// z: implicit close handled by closedCubicRing
	}
	return pts;
}

/** Evenly resample a closed polyline to `n` points (by arc length). */
function resample(poly: { x: number; y: number }[], n: number): { x: number; y: number }[] {
	const arcs: number[] = [0]; let total = 0;
	for (let i = 1; i < poly.length; i++) { const dx = poly[i].x - poly[i - 1].x, dy = poly[i].y - poly[i - 1].y; total += Math.hypot(dx, dy); arcs.push(total); }
	const ldx = poly[0].x - poly[poly.length - 1].x, ldy = poly[0].y - poly[poly.length - 1].y; total += Math.hypot(ldx, ldy);
	const per = total / n, out: { x: number; y: number }[] = [];
	for (let k = 0; k < n; k++) {
		const target = per * k; let i = 1; while (i < arcs.length && arcs[i] < target) i++;
		const i0 = i - 1, a0 = arcs[i0], a1 = i < arcs.length ? arcs[i] : total, frac = a1 === a0 ? 0 : (target - a0) / (a1 - a0);
		const p0 = poly[i0], p1 = i < arcs.length ? poly[i] : poly[0];
		out.push({ x: p0.x + (p1.x - p0.x) * frac, y: p0.y + (p1.y - p0.y) * frac });
	}
	return out;
}

/**
 * Equal-angular sampler: walks the dense outline polyline (must be closed) and,
 * for each of the `n` fixed polar angles θᵢ = (360/n)*i (from the +X axis,
 * CCW), returns the OUTERMOST point where the ray from `center` at θᵢ crosses
 * the outline. Using identical angle grids for both shapes guarantees sample i
 * sits at the same azimuth in both — so interleaving them morphs the shape by
 * expanding/shrinking each azimuth in place (no rotation / no y=x flip).
 */
function sampleAtAngles(
	poly: { x: number; y: number }[],
	center: { x: number; y: number },
	n: number,
): { x: number; y: number }[] {
	const out: { x: number; y: number }[] = [];
	// ray: P(s) = center + s*cos/sin; intersect each outline edge (a,b).
	for (let k = 0; k < n; k++) {
		const th = ((360 / n) * k * Math.PI) / 180;
		const dx = Math.cos(th), dy = Math.sin(th);
		let bestS = -Infinity, bestPt: { x: number; y: number } | null = null;
		for (let i = 0; i < poly.length; i++) {
			const a = poly[i], b = poly[(i + 1) % poly.length];
			// line a + t(b-a); ray center + s(dir). Solve for s,t.
			const rx = b.x - a.x, ry = b.y - a.y;
			const denom = dx * ry - dy * rx;
			if (Math.abs(denom) < 1e-9) continue; // parallel
			const cdx = a.x - center.x, cdy = a.y - center.y;
			const s = (cdx * ry - cdy * rx) / (-denom);
			const t = (cdx * dy - cdy * dx) / denom;
			if (t < 0 || t > 1) continue;
			if (s < 0) continue; // behind the center (opposite ray dir)
			if (s > bestS) { bestS = s; bestPt = { x: a.x + rx * t, y: a.y + ry * t }; }
		}
		out.push(bestPt ?? { x: center.x, y: center.y });
	}
	return out;
}

/** Normalize one source path to `M + SEG×C + Z` shared-center/equal-angle.
 *  Samples at SEG equal polar angles (same grid for every shape) so sample i
 *  is at the same azimuth in both — the morph expands each azimuth in place.
 *  An optional `scale` (about the shared center) shrinks a shape to match
 *  another's size while keeping proportion. */
function normalizeToSeg(src: string, scale = 1): string {
	const outline = sampleOutline(src);
	let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
	for (const p of outline) { if (p.x < minX) minX = p.x; if (p.y < minY) minY = p.y; if (p.x > maxX) maxX = p.x; if (p.y > maxY) maxY = p.y; }
	const srcCx = (minX + maxX) / 2, srcCy = (minY + maxY) / 2;
	const mapped = outline.map((p) => ({ x: (p.x - srcCx) * scale + CENTER, y: (p.y - srcCy) * scale + CENTER }));
	// Equal-angle sampling around the shared center — NO reorient (it would
	// scramble the azimuth ordering). Index i is the same azimuth in all shapes.
	const pts = sampleAtAngles(mapped, { x: CENTER, y: CENTER }, SEG);
	// Emit M + SEG×C + Z via Catmull-Rom tangents (through the sampled pts).
	const count = pts.length;
	let d = `M${fmt(pts[0].x)} ${fmt(pts[0].y)}`;
	for (let i = 0; i < count; i++) {
		const p0 = pts[(i - 1 + count) % count], p1 = pts[i], p2 = pts[(i + 1) % count], p3 = pts[(i + 2) % count];
		const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
		const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
		d += ` C${fmt(c1x)} ${fmt(c1y)} ${fmt(c2x)} ${fmt(c2y)} ${fmt(p2.x)} ${fmt(p2.y)}`;
	}
	return d + " Z";
}

/** bbox (width/height) of a path's outline (used to equalize sizes). */
function bboxWH(src: string): { w: number; h: number } {
	const outline = sampleOutline(src);
	let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
	for (const p of outline) { if (p.x < minX) minX = p.x; if (p.y < minY) minY = p.y; if (p.x > maxX) maxX = p.x; if (p.y > maxY) maxY = p.y; }
	return { w: maxX - minX, h: maxY - minY };
}

const normU = normalizeToSeg(U, 1);
// Shrink K to the same bbox size as U (keep K's own proportions).
const uk = bboxWH(U);
const kk = bboxWH(K);
const kScale = Math.min(uk.w / kk.w, uk.h / kk.h);
const normK = normalizeToSeg(K, kScale);
if (process.argv.includes("--verify")) {
	const bbox = (d: string) => {
		const nums = d.match(/-?\d+(?:\.\d+)?/g)?.map(Number) ?? [];
		const xs = nums.filter((_, i) => i % 2 === 0), ys = nums.filter((_, i) => i % 2 === 1);
		return `x ${Math.min(...xs).toFixed(0)}→${Math.max(...xs).toFixed(0)}  y ${Math.min(...ys).toFixed(0)}→${Math.max(...ys).toFixed(0)}  c${(d.match(/C/g) ?? []).length}`;
	};
	console.log("U(capsule) bbox:", bbox(normU));
	console.log("K(flower)  bbox:", bbox(normK));
}

// Optionally patch art.ts with the regenerated constants.
if (process.argv.includes("--write")) {
	const fs = await import("node:fs/promises");
	const p = new URL("../src/client/art.ts", import.meta.url);
	let src = await fs.readFile(p, "utf8");
	src = src.replace(
		/export const FAB_MORPH_CAPSULE =\s*\n\s*"[^"]*";/,
		`export const FAB_MORPH_CAPSULE =\n\t"${normU}";`,
	);
	src = src.replace(
		/export const FAB_MORPH_FLOWER =\s*\n\s*"[^"]*";/,
		`export const FAB_MORPH_FLOWER =\n\t"${normK}";`,
	);
	await fs.writeFile(p, src);
	console.log("art.ts updated.");
} else {
	console.log('export const FAB_MORPH_CAPSULE =');
	console.log('\t"' + normU + '";');
	console.log('\nexport const FAB_MORPH_FLOWER =');
	console.log('\t"' + normK + '";');
}
