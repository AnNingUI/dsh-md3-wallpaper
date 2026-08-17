import { defineConfig } from "vitest/config";

/**
 * Vitest config for the md3-wallpaper skin.
 *
 * @material/material-color-utilities is authored as extensionless ESM relative
 * imports ("../dynamiccolor/dynamic_scheme") — valid under esbuild/rolldown
 * (which auto-append .js) but rejected by Node's default ESM resolver that
 * Vitest uses for bare deps. Inlining the package routes its modules through
 * Vite's resolver, which appends the extension, keeping every spec that pulls
 * the Monet engine (palette, apply, and the recolor pipeline via cam16) runnable.
 */
export default defineConfig({
	test: {
		environment: "jsdom",
		server: {
			deps: {
				inline: ["@material/material-color-utilities"],
			},
		},
	},
});
