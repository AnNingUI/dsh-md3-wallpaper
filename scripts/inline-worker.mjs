#!/usr/bin/env node
/**
 * Inline the standalone recolor worker into the main client bundle.
 *
 * dsh's ModuleLoader fetches exactly one plugin file (client.js) and never
 * serves sibling static files, so `new Worker("/plugins/.../recolor.worker.js")`
 * 404s at runtime. This post-build step embeds the worker source as a string
 * on globalThis; the skin then spawns the worker from a blob URL — zero
 * network requests, no path discovery, no CSP issues (the page has none).
 *
 * Usage: node scripts/inline-worker.mjs
 * Reads:  lib/recolor.worker.js
 * Writes: lib/client.js (appends the global assignment)
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const workerPath = join(root, "lib", "recolor.worker.js");
const clientPath = join(root, "lib", "client.js");

if (!existsSync(workerPath)) {
	console.error("[inline-worker] lib/recolor.worker.js missing — run tsdown first");
	process.exit(1);
}
if (!existsSync(clientPath)) {
	console.error("[inline-worker] lib/client.js missing — run tsdown first");
	process.exit(1);
}

const workerSrc = readFileSync(workerPath, "utf8");
// JSON.stringify makes a safe JS string literal (escapes quotes, backslashes,
// newlines, U+2028/2029).
const literal = JSON.stringify(workerSrc);
const marker = "/*__MD3_RECOLOR_WORKER_SRC_INLINED__*/";

let client = readFileSync(clientPath, "utf8");

if (client.includes(marker)) {
	// Replace a previous injection (idempotent rebuilds).
	client = client.replace(
		/globalThis\.__MD3_RECOLOR_WORKER_SRC__\s*=\s*[^;]+;/,
		`globalThis.__MD3_RECOLOR_WORKER_SRC__ = ${literal};`,
	);
} else {
	client += `\n${marker}\nglobalThis.__MD3_RECOLOR_WORKER_SRC__ = ${literal};\n`;
}

writeFileSync(clientPath, client);
console.log(
	`[inline-worker] embedded recolor.worker.js (${workerSrc.length} chars) into client.js (${client.length} total)`,
);
