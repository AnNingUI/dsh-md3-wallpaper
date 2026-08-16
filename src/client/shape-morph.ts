/**
 * Minimal in-place shape-morph for the md3-wallpaper FAB.
 *
 * The two source paths (FAB_MORPH_CAPSULE / FAB_MORPH_FLOWER, generated
 * offline by scripts/normalize-morph.ts) share the SAME command sequence and
 * the SAME equal-polar point grid, so interpolating them point-by-point is a
 * plain per-coordinate lerp — no general path-reconciliation library needed.
 * This is a small standalone equivalent of the morph logic the skin used to
 * take from vendored svg-path-morph (dropped as a dependency).
 *
 *   - `parsePath` — a tiny SVG path-data parser (commands → tuples).
 *   - `morphPath(a, b, w)` — return the `d` string at weight `w` (0 = a, 1 = b).
 *
 * Zero runtime deps; standalone so the client bundle no longer carries a
 * vendored path-morph library (and its parser).
 * @module @AnNingUI/dsh-client-ui-skin-md3-wallpaper/shape-morph
 */

/** Number of numeric arguments each SVG path command expects (lowercase keys). */
const ARG_COUNT: Record<string, number> = {
	a: 7,
	c: 6,
	h: 1,
	l: 2,
	m: 2,
	q: 4,
	s: 4,
	t: 2,
	v: 1,
	z: 0,
};

/** Split a path-data string into [opLetter, ...numbers] command tuples. */
function parsePath(path: string): [string, ...number[]][] {
	const out: [string, ...number[]][] = [];
	const segment = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
	const number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
	path.replace(segment, (_, cmd: string, args: string) => {
		let type = cmd.toLowerCase();
		let command = cmd;
		let values = (args.match(number) ?? []).map(Number);

		// SVG: extra args after an 'm' are treated as implicit 'l' commands.
		if (type === "m" && values.length > 2) {
			out.push([command, ...values.splice(0, 2)] as [string, ...number[]]);
			type = "l";
			command = command === "m" ? "l" : "L";
		}

		while (true) {
			const len = ARG_COUNT[type] ?? 0;
			if (values.length === len) {
				out.push([command, ...values] as [string, ...number[]]);
				return "";
			}
			if (values.length < len) throw new Error("malformed path data");
			out.push([command, ...values.splice(0, len)] as [string, ...number[]]);
		}
	});
	return out;
}

/**
 * Return the `d` string at morph weight `w` between two IDENTICAL-structure
 * paths: `w=0` → `a`, `w=1` → `b`. Assumes both paths share the same command
 * type and count per command (a prerequisite the offline normalizer enforces).
 */
export function morphPath(a: string, b: string, w: number): string {
	const ca = parsePath(a);
	const cb = parsePath(b);
	let d = "";
	for (let i = 0; i < ca.length; i++) {
		d += ca[i][0];
		const na = ca[i];
		const nb = cb[i];
		for (let v = 1; v < na.length; v++) {
			const lerped = na[v] + (nb[v] - na[v]) * w;
			d += ` ${lerped}`;
		}
	}
	return d.trim();
}

/* --- Motion easing -------------------------------------------------------
   M3-emphasized cubic-bezier(0.2, 0, 0, 1) so the morph starts fast and eases
   out slowly, matching the skin's --md-sys-motion-emphasized for the glyphs.
   A tiny Newton solver over the Bézier in parameter t. */

/** Solve the parameter `t` (in [0,1]) for a cubic-bezier x-progress value. */
function solveT(p0x: number, p1x: number, p2x: number, p3x: number, x: number): number {
	if (x <= 0) return 0;
	if (x >= 1) return 1;
	let t = x;
	for (let i = 0; i < 8; i++) {
		const mt = 1 - t;
		const mx = mt * mt * mt * p0x + 3 * mt * mt * t * p1x + 3 * mt * t * t * p2x + t * t * t * p3x;
		const dx = mx - x;
		if (Math.abs(dx) < 1e-6) break;
		const dTdt = 3 * mt * mt * (p1x - p0x) + 6 * mt * t * (p2x - p1x) + 3 * t * t * (p3x - p2x);
		if (Math.abs(dTdt) < 1e-8) break;
		t -= dx / dTdt;
		t = Math.min(1, Math.max(0, t));
	}
	return t;
}

/** Evaluate cubic-bezier(x1,y1,x2,y2) at normalized progress [0,1]. */
function cubicBezier(x1: number, y1: number, x2: number, y2: number, u: number): number {
	const t = solveT(0, x1, x2, 1, u);
	const mt = 1 - t;
	return mt * mt * mt * 0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * 1;
}

/** M3 emphasized: cubic-bezier(0.2, 0, 0, 1) — fast in, very slow settle. */
export function easeEmphasized(u: number): number {
	return cubicBezier(0.2, 0, 0, 1, u);
}
