window.__ModuleLoader__.load({
	id: "@AnNingUI/dsh-client-ui-skin-md3-wallpaper",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region src/client/art.ts
		/**
		* Inline art for the md3-wallpaper skin — no static assets, everything is a
		* data-URI SVG. The chrome follows Material You's organic-shape language:
		* the wallpaper FAB is a four-petal blossom (not a plain circle) whose glyph
		* is the MaterialYouNewTab temperature icon by default and morphs (M3 motion)
		* into its clock icon once the menu opens; the menu panel wears the M3
		* large-corner silhouette; the favicon is a dynamic dot in the Monet hue.
		* @module @AnNingUI/dsh-client-ui-skin-md3-wallpaper/art
		*/
		/** The four-petal blossom silhouette (56x56 viewBox) the FAB is cut into. */
		const FAB_PETAL_PATH = "M28 2.5 C30.6 17.2 38.8 25.4 53.5 28 C38.8 30.6 30.6 38.8 28 53.5 C25.4 38.8 17.2 30.6 2.5 28 C17.2 25.4 25.4 17.2 28 2.5 Z";
		/** Temperature glyph — the MaterialYouNewTab feels-like (thermostat) icon,
		*  verbatim. */
		const FAB_THERMO_PATH = "M8 10.255V5a4 4 0 0 1 8 0v5.255a7 7 0 1 1-8 0ZM8 16a4 4 0 1 0 8 0H8Z";
		/** Clock glyph — the MaterialYouNewTab default-weather (dial + ticks + hand)
		*  icon, verbatim. */
		const FAB_CLOCK_PATH = "M11.997 17.887a.903.903 0 0 1 .896.796l.006.105v1.313a.9.9 0 0 1-.85.898.903.903 0 0 1-.948-.794l-.006-.104v-1.313a.9.9 0 0 1 .902-.9Zm5.446-1.74.929.927a.9.9 0 0 1-1.277 1.274l-.928-.928a.9.9 0 0 1 1.276-1.274Zm-9.618 0a.9.9 0 0 1 0 1.273l-.928.929a.903.903 0 0 1-1.276-1.276l.93-.928a.903.903 0 0 1 1.275 0l-.001.001Zm4.184-9.128c1.322 0 2.59.524 3.524 1.458a4.976 4.976 0 0 1 0 7.042 4.987 4.987 0 0 1-8.51-3.521c0-1.32.526-2.587 1.46-3.521a4.988 4.988 0 0 1 3.526-1.458Zm-.686 2.278a.677.677 0 0 0-.67.584l-.007.092v2.707l.006.092a.676.676 0 0 0 .58.578l.09.006h1.805l.092-.006a.676.676 0 0 0 .579-.578l.006-.092-.006-.092a.676.676 0 0 0-.579-.578l-.092-.006H12V9.973l-.006-.092a.675.675 0 0 0-.671-.584Zm8.776 1.819a.902.902 0 0 1 .105 1.796l-.105.006h-1.313a.902.902 0 0 1-.106-1.796l.106-.006h1.313ZM5.215 11.09a.902.902 0 0 1 .69 1.48.902.902 0 0 1-.585.316l-.105.007H3.9a.903.903 0 0 1-.69-1.48.902.902 0 0 1 .586-.316l.104-.007h1.315Zm1.597-5.512.085.075.929.928a.9.9 0 0 1-1.191 1.35l-.085-.076-.93-.927a.9.9 0 0 1 1.192-1.35Zm11.56.075a.9.9 0 0 1 .075 1.19l-.075.085-.93.928a.903.903 0 0 1-1.35-1.19l.075-.085.93-.929a.903.903 0 0 1 1.275.001ZM12 3a.903.903 0 0 1 .896.796l.006.105v1.312a.9.9 0 0 1-1.485.695.901.901 0 0 1-.314-.59l-.006-.105V3.9A.9.9 0 0 1 12 3Z";
		/**
		* Full FAB markup: petal (primary container) + two stacked glyphs — the
		* temperature icon (idle state) and the clock icon (menu-open state). The
		* glyph switch rides M3 motion: the CSS toggles the `md3-fab-open` class on
		* the FAB element; both glyphs are absolutely stacked and cross-fade/rotate.
		*/
		function fabMarkup() {
			return [
				`<svg class="md3-fab-petal" viewBox="0 0 56 56" width="56" height="56" aria-hidden="true">`,
				`<path d="${FAB_PETAL_PATH}" fill="var(--md-sys-color-primary-container)"/>`,
				`</svg>`,
				`<svg class="md3-fab-glyph md3-fab-thermo" viewBox="0 0 24 24" aria-hidden="true">`,
				`<path d="${FAB_THERMO_PATH}" fill="var(--md-sys-color-on-primary-container)"/>`,
				`</svg>`,
				`<svg class="md3-fab-glyph md3-fab-clock" viewBox="0 0 24 24" aria-hidden="true">`,
				`<path d="${FAB_CLOCK_PATH}" fill="var(--md-sys-color-on-primary-container)"/>`,
				`</svg>`
			].join("");
		}
		/** A 24px inline icon (generic shape used inside the menu rows). */
		function menuIcon(path) {
			return [
				`<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">`,
				`<path d="${path}" fill="currentColor"/>`,
				`</svg>`
			].join("");
		}
		/** Upload glyph. */
		const ICON_UPLOAD = "M12 16l4-4h-3V4h-2v8H8l4 4zm-8 4h16v-2H4v2z";
		/** Reset glyph. */
		const ICON_RESET = "M12 6V2L7 7l5 5V8c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z";
		/** Shape-system glyph (rounded square). */
		const ICON_SHAPE = "M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5z";
		/** Palette glyph (M3 dynamic color). */
		const ICON_PALETTE = "M12 3a9 9 0 0 0 0 18h.5a1.5 1.5 0 0 0 1.1-2.5 1.5 1.5 0 0 1 1.1-2.5H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z";
		/** Dynamic favicon: a dot in the Monet source hue (M3 style). */
		function faviconSvg(sourceHex) {
			return [
				"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">",
				`<circle cx="24" cy="24" r="22" fill="${sourceHex}"/>`,
				"<circle cx=\"24\" cy=\"24\" r=\"9\" fill=\"rgba(255,255,255,0.92)\"/>",
				"</svg>"
			].join("");
		}
		//#endregion
		//#region \0dsh-css:src/client/md3-wallpaper.module.css.mjs
		const css = "body[data-dsh-md3-wallpaper] g[clip-path=\"url(#dsh-wordmark-badge-clip)\"]:has(path[fill=\"var(--dsw-alias-label-primary-inverted)\"]){color:var(--md-sys-color-on-surface)}body[data-dsh-md3-wallpaper][data-ds-dark-theme]{background-color:var(--md-sys-color-surface-container-lowest,#141218)}html:has(body[data-dsh-md3-wallpaper]),body[data-dsh-md3-wallpaper]{overflow:hidden}body[data-dsh-md3-wallpaper]{--aion-bg-base:var(--md-sys-color-surface-container-lowest);--aion-bg-1:var(--md-sys-color-surface-container-low);--aion-bg-2:var(--md-sys-color-surface-container);--aion-bg-3:var(--md-sys-color-surface-container-high);--aion-bg-hover:var(--md-sys-color-surface-container-high);--aion-bg-active:var(--md-sys-color-surface-container-highest);--aion-text-primary:var(--md-sys-color-on-surface);--aion-text-secondary:var(--md-sys-color-on-surface-variant);--aion-text-tertiary:var(--md-sys-color-outline);--aion-text-disabled:var(--md-sys-color-outline);--aion-primary:var(--md-sys-color-primary);--aion-success:var(--md-sys-color-tertiary);--aion-warning:var(--md-sys-color-secondary);--aion-danger:var(--md-sys-color-error);--aion-brand:var(--md-sys-color-primary);--aion-aou-1:var(--md-sys-color-surface-container);--aion-aou-2:var(--md-sys-color-surface-container-high);--aion-aou-3:var(--md-sys-color-surface-container-highest);--aion-aou-4:var(--md-sys-color-outline-variant);--aion-aou-5:var(--md-sys-color-outline);--aion-aou-6:var(--md-sys-color-primary);--aion-fill-2:var(--md-sys-color-surface-container-high);--aion-fill-3:var(--md-sys-color-surface-container-highest);--aion-border-base:var(--md-sys-color-outline-variant);--aion-overlay-shadow:0 8px 24px #00000029;--aion-font-sans:var(--dsw-font-family);--aion-font-mono:var(--ds-font-family-code)}.JgxNmG_md3Fab{z-index:2147482000;cursor:pointer;width:56px;height:56px;transition:transform .18s var(--md-sys-motion-ease,cubic-bezier(.2, 0, 0, 1));background:0 0;border:none;padding:0;display:block;position:fixed;bottom:24px;right:24px}.JgxNmG_md3Fab:hover{transform:scale(1.06)rotate(8deg)}.JgxNmG_md3Fab:active{transform:scale(.94)}.JgxNmG_md3Fab:focus-visible{outline:2px solid var(--md-sys-color-primary,#6750a4);outline-offset:3px;border-radius:28px}body[data-dsh-md3-wallpaper] .md3-fab-petal{filter:drop-shadow(0 3px 8px #0000003d);display:block}body[data-dsh-md3-wallpaper] .md3-fab-glyph{pointer-events:none;width:26px;height:26px;transition:opacity .24s var(--md-sys-motion-emphasized,cubic-bezier(.2, 0, 0, 1)), transform .24s var(--md-sys-motion-emphasized,cubic-bezier(.2, 0, 0, 1));margin:auto;position:absolute;inset:0}body[data-dsh-md3-wallpaper] .md3-fab-thermo{opacity:1;transform:rotate(0)scale(1)}body[data-dsh-md3-wallpaper] .md3-fab-clock{opacity:0;transform:rotate(-90deg)scale(.4)}body[data-dsh-md3-wallpaper] .md3FabOpen .md3-fab-thermo{opacity:0;transform:rotate(90deg)scale(.4)}body[data-dsh-md3-wallpaper] .md3FabOpen .md3-fab-clock{opacity:1;transform:rotate(0)scale(1)}.JgxNmG_md3Menu{z-index:2147482001;border:1px solid var(--md-sys-color-outline-variant,#cac4d0);background:var(--md-sys-color-surface-container-high,#ece6f0);width:284px;color:var(--md-sys-color-on-surface,#1d1b20);font-family:var(--dsw-font-family);border-radius:28px;flex-direction:column;gap:4px;padding:10px;font-size:13px;line-height:1.5;display:none;position:fixed;bottom:96px;right:24px;box-shadow:0 12px 32px #0000004d}.JgxNmG_md3MenuOpen{animation:.16s cubic-bezier(.2,0,0,1) JgxNmG_md3-menu-in;display:flex}@keyframes JgxNmG_md3-menu-in{0%{opacity:0;transform:translateY(8px)scale(.98)}to{opacity:1;transform:translateY(0)scale(1)}}.JgxNmG_md3MenuPreview{background-color:var(--md-sys-color-surface-variant,#e7e0ec);border:1px solid var(--md-sys-color-outline-variant,#cac4d0);background-position:50%;background-size:cover;border-radius:18px;flex:none;height:120px;margin-bottom:6px}.JgxNmG_md3MenuLabel{color:var(--md-sys-color-on-surface-variant,#49454f);align-items:center;gap:10px;padding:6px 12px 2px;font-size:12px;display:flex}.JgxNmG_md3MenuLabel svg{flex:none}.JgxNmG_md3MenuPresets{gap:8px;padding:4px 12px 8px;display:flex}.JgxNmG_md3PresetSwatch{border:1px solid var(--md-sys-color-outline-variant,#cac4d0);cursor:pointer;border-radius:999px;flex:1;height:34px;padding:0;transition:transform .12s,box-shadow .12s}.JgxNmG_md3PresetSwatch:hover{transform:translateY(-2px);box-shadow:0 3px 8px #0003}.JgxNmG_md3PresetSwatch:active{transform:scale(.94)}.JgxNmG_md3PresetSwatch:focus-visible{outline:2px solid var(--md-sys-color-primary,#6750a4);outline-offset:2px}.JgxNmG_md3MenuRow{width:100%;color:var(--md-sys-color-on-surface,#1d1b20);font:inherit;text-align:left;cursor:pointer;background:0 0;border:none;border-radius:12px;align-items:center;gap:10px;padding:9px 12px;transition:background-color .12s;display:flex}.JgxNmG_md3MenuRow:hover{background:color-mix(in srgb, var(--md-sys-color-on-surface,#1d1b20) 8%, transparent)}.JgxNmG_md3MenuRow:active{background:color-mix(in srgb, var(--md-sys-color-on-surface,#1d1b20) 14%, transparent)}.JgxNmG_md3MenuRow:focus-visible{outline:2px solid var(--md-sys-color-primary,#6750a4);outline-offset:-2px}.JgxNmG_md3MenuRow svg{color:var(--md-sys-color-on-surface-variant,#49454f);flex:none}.JgxNmG_md3MenuRowText{flex:1;min-width:0}.JgxNmG_md3MenuRow input[type=checkbox]{width:40px;height:20px;accent-color:var(--md-sys-color-primary,#6750a4);cursor:pointer;flex:none}.JgxNmG_md3FileInput{display:none}body[data-dsh-md3-wallpaper] [class*=logoRow]{color:var(--md-sys-color-primary,#6750a4)}body[data-dsh-md3-wallpaper] [class*=logoRow] svg [fill]:not([fill=none]):not([fill=currentColor]){fill:currentColor}body[data-dsh-md3-wallpaper] [class*=logoRow] svg [stroke]:not([stroke=none]){stroke:currentColor}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) button{border-radius:999px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) input:not([type=checkbox]):not([type=radio]):not([type=range]),body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) textarea,body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) select{border-radius:4px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [role=dialog]{border-radius:28px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [role=tooltip],body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [role=menu],body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [role=listbox]{border-radius:4px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [class*=sessionRow],body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [class*=logoRow],body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [class*=searchResult]{border-radius:8px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) ::-webkit-scrollbar-thumb{border-radius:999px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) .JgxNmG_aionui-root button{border-radius:999px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) .JgxNmG_aionui-root [class*=treeRow],body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) .JgxNmG_aionui-root [class*=fileRow]{border-radius:8px}";
		const tagId = "@AnNingUI/dsh-client-ui-skin-md3-wallpaper/md3-wallpaper.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@AnNingUI/dsh-client-ui-skin-md3-wallpaper";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var md3_wallpaper_module_css_default = {
			"aionui-root": "JgxNmG_aionui-root",
			"md3-menu-in": "JgxNmG_md3-menu-in",
			"md3Fab": "JgxNmG_md3Fab",
			"md3FileInput": "JgxNmG_md3FileInput",
			"md3Menu": "JgxNmG_md3Menu",
			"md3MenuLabel": "JgxNmG_md3MenuLabel",
			"md3MenuOpen": "JgxNmG_md3MenuOpen",
			"md3MenuPresets": "JgxNmG_md3MenuPresets",
			"md3MenuPreview": "JgxNmG_md3MenuPreview",
			"md3MenuRow": "JgxNmG_md3MenuRow",
			"md3MenuRowText": "JgxNmG_md3MenuRowText",
			"md3PresetSwatch": "JgxNmG_md3PresetSwatch"
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/utils/math_utils.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* Utility methods for mathematical operations.
		*/
		/**
		* The signum function.
		*
		* @return 1 if num > 0, -1 if num < 0, and 0 if num = 0
		*/
		function signum(num) {
			if (num < 0) return -1;
			else if (num === 0) return 0;
			else return 1;
		}
		/**
		* The linear interpolation function.
		*
		* @return start if amount = 0 and stop if amount = 1
		*/
		function lerp(start, stop, amount) {
			return (1 - amount) * start + amount * stop;
		}
		/**
		* Clamps an integer between two integers.
		*
		* @return input when min <= input <= max, and either min or max
		* otherwise.
		*/
		function clampInt(min, max, input) {
			if (input < min) return min;
			else if (input > max) return max;
			return input;
		}
		/**
		* Clamps an integer between two floating-point numbers.
		*
		* @return input when min <= input <= max, and either min or max
		* otherwise.
		*/
		function clampDouble(min, max, input) {
			if (input < min) return min;
			else if (input > max) return max;
			return input;
		}
		/**
		* Sanitizes a degree measure as an integer.
		*
		* @return a degree measure between 0 (inclusive) and 360
		* (exclusive).
		*/
		function sanitizeDegreesInt(degrees) {
			degrees = degrees % 360;
			if (degrees < 0) degrees = degrees + 360;
			return degrees;
		}
		/**
		* Sanitizes a degree measure as a floating-point number.
		*
		* @return a degree measure between 0.0 (inclusive) and 360.0
		* (exclusive).
		*/
		function sanitizeDegreesDouble(degrees) {
			degrees = degrees % 360;
			if (degrees < 0) degrees = degrees + 360;
			return degrees;
		}
		/**
		* Distance of two points on a circle, represented using degrees.
		*/
		function differenceDegrees(a, b) {
			return 180 - Math.abs(Math.abs(a - b) - 180);
		}
		/**
		* Multiplies a 1x3 row vector with a 3x3 matrix.
		*/
		function matrixMultiply(row, matrix) {
			return [
				row[0] * matrix[0][0] + row[1] * matrix[0][1] + row[2] * matrix[0][2],
				row[0] * matrix[1][0] + row[1] * matrix[1][1] + row[2] * matrix[1][2],
				row[0] * matrix[2][0] + row[1] * matrix[2][1] + row[2] * matrix[2][2]
			];
		}
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/utils/color_utils.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* Color science utilities.
		*
		* Utility methods for color science constants and color space
		* conversions that aren't HCT or CAM16.
		*/
		const SRGB_TO_XYZ = [
			[
				.41233895,
				.35762064,
				.18051042
			],
			[
				.2126,
				.7152,
				.0722
			],
			[
				.01932141,
				.11916382,
				.95034478
			]
		];
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
		const WHITE_POINT_D65 = [
			95.047,
			100,
			108.883
		];
		/**
		* Converts a color from RGB components to ARGB format.
		*/
		function argbFromRgb(red, green, blue) {
			return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>> 0;
		}
		/**
		* Converts a color from linear RGB components to ARGB format.
		*/
		function argbFromLinrgb(linrgb) {
			return argbFromRgb(delinearized(linrgb[0]), delinearized(linrgb[1]), delinearized(linrgb[2]));
		}
		/**
		* Returns the alpha component of a color in ARGB format.
		*/
		function alphaFromArgb(argb) {
			return argb >> 24 & 255;
		}
		/**
		* Returns the red component of a color in ARGB format.
		*/
		function redFromArgb(argb) {
			return argb >> 16 & 255;
		}
		/**
		* Returns the green component of a color in ARGB format.
		*/
		function greenFromArgb(argb) {
			return argb >> 8 & 255;
		}
		/**
		* Returns the blue component of a color in ARGB format.
		*/
		function blueFromArgb(argb) {
			return argb & 255;
		}
		/**
		* Converts a color from ARGB to XYZ.
		*/
		function argbFromXyz(x, y, z) {
			const matrix = XYZ_TO_SRGB;
			const linearR = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z;
			const linearG = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z;
			const linearB = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z;
			return argbFromRgb(delinearized(linearR), delinearized(linearG), delinearized(linearB));
		}
		/**
		* Converts a color from XYZ to ARGB.
		*/
		function xyzFromArgb(argb) {
			return matrixMultiply([
				linearized(redFromArgb(argb)),
				linearized(greenFromArgb(argb)),
				linearized(blueFromArgb(argb))
			], SRGB_TO_XYZ);
		}
		/**
		* Converts a color represented in Lab color space into an ARGB
		* integer.
		*/
		function argbFromLab(l, a, b) {
			const whitePoint = WHITE_POINT_D65;
			const fy = (l + 16) / 116;
			const fx = a / 500 + fy;
			const fz = fy - b / 200;
			const xNormalized = labInvf(fx);
			const yNormalized = labInvf(fy);
			const zNormalized = labInvf(fz);
			return argbFromXyz(xNormalized * whitePoint[0], yNormalized * whitePoint[1], zNormalized * whitePoint[2]);
		}
		/**
		* Converts a color from ARGB representation to L*a*b*
		* representation.
		*
		* @param argb the ARGB representation of a color
		* @return a Lab object representing the color
		*/
		function labFromArgb(argb) {
			const linearR = linearized(redFromArgb(argb));
			const linearG = linearized(greenFromArgb(argb));
			const linearB = linearized(blueFromArgb(argb));
			const matrix = SRGB_TO_XYZ;
			const x = matrix[0][0] * linearR + matrix[0][1] * linearG + matrix[0][2] * linearB;
			const y = matrix[1][0] * linearR + matrix[1][1] * linearG + matrix[1][2] * linearB;
			const z = matrix[2][0] * linearR + matrix[2][1] * linearG + matrix[2][2] * linearB;
			const whitePoint = WHITE_POINT_D65;
			const xNormalized = x / whitePoint[0];
			const yNormalized = y / whitePoint[1];
			const zNormalized = z / whitePoint[2];
			const fx = labF(xNormalized);
			const fy = labF(yNormalized);
			const fz = labF(zNormalized);
			return [
				116 * fy - 16,
				500 * (fx - fy),
				200 * (fy - fz)
			];
		}
		/**
		* Converts an L* value to an ARGB representation.
		*
		* @param lstar L* in L*a*b*
		* @return ARGB representation of grayscale color with lightness
		* matching L*
		*/
		function argbFromLstar(lstar) {
			const component = delinearized(yFromLstar(lstar));
			return argbFromRgb(component, component, component);
		}
		/**
		* Computes the L* value of a color in ARGB representation.
		*
		* @param argb ARGB representation of a color
		* @return L*, from L*a*b*, coordinate of the color
		*/
		function lstarFromArgb(argb) {
			const y = xyzFromArgb(argb)[1];
			return 116 * labF(y / 100) - 16;
		}
		/**
		* Converts an L* value to a Y value.
		*
		* L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
		*
		* L* measures perceptual luminance, a linear scale. Y in XYZ
		* measures relative luminance, a logarithmic scale.
		*
		* @param lstar L* in L*a*b*
		* @return Y in XYZ
		*/
		function yFromLstar(lstar) {
			return 100 * labInvf((lstar + 16) / 116);
		}
		/**
		* Converts a Y value to an L* value.
		*
		* L* in L*a*b* and Y in XYZ measure the same quantity, luminance.
		*
		* L* measures perceptual luminance, a linear scale. Y in XYZ
		* measures relative luminance, a logarithmic scale.
		*
		* @param y Y in XYZ
		* @return L* in L*a*b*
		*/
		function lstarFromY(y) {
			return labF(y / 100) * 116 - 16;
		}
		/**
		* Linearizes an RGB component.
		*
		* @param rgbComponent 0 <= rgb_component <= 255, represents R/G/B
		* channel
		* @return 0.0 <= output <= 100.0, color channel converted to
		* linear RGB space
		*/
		function linearized(rgbComponent) {
			const normalized = rgbComponent / 255;
			if (normalized <= .040449936) return normalized / 12.92 * 100;
			else return Math.pow((normalized + .055) / 1.055, 2.4) * 100;
		}
		/**
		* Delinearizes an RGB component.
		*
		* @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
		* linear R/G/B channel
		* @return 0 <= output <= 255, color channel converted to regular
		* RGB space
		*/
		function delinearized(rgbComponent) {
			const normalized = rgbComponent / 100;
			let delinearized = 0;
			if (normalized <= .0031308) delinearized = normalized * 12.92;
			else delinearized = 1.055 * Math.pow(normalized, 1 / 2.4) - .055;
			return clampInt(0, 255, Math.round(delinearized * 255));
		}
		/**
		* Returns the standard white point; white on a sunny day.
		*
		* @return The white point
		*/
		function whitePointD65() {
			return WHITE_POINT_D65;
		}
		function labF(t) {
			const e = 216 / 24389;
			const kappa = 24389 / 27;
			if (t > e) return Math.pow(t, 1 / 3);
			else return (kappa * t + 16) / 116;
		}
		function labInvf(ft) {
			const e = 216 / 24389;
			const kappa = 24389 / 27;
			const ft3 = ft * ft * ft;
			if (ft3 > e) return ft3;
			else return (116 * ft - 16) / kappa;
		}
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/hct/viewing_conditions.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* In traditional color spaces, a color can be identified solely by the
		* observer's measurement of the color. Color appearance models such as CAM16
		* also use information about the environment where the color was
		* observed, known as the viewing conditions.
		*
		* For example, white under the traditional assumption of a midday sun white
		* point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
		* hue 203, chroma 3, lightness 100)
		*
		* This class caches intermediate values of the CAM16 conversion process that
		* depend only on viewing conditions, enabling speed ups.
		*/
		var ViewingConditions = class ViewingConditions {
			/**
			* Create ViewingConditions from a simple, physically relevant, set of
			* parameters.
			*
			* @param whitePoint White point, measured in the XYZ color space.
			*     default = D65, or sunny day afternoon
			* @param adaptingLuminance The luminance of the adapting field. Informally,
			*     how bright it is in the room where the color is viewed. Can be
			*     calculated from lux by multiplying lux by 0.0586. default = 11.72,
			*     or 200 lux.
			* @param backgroundLstar The lightness of the area surrounding the color.
			*     measured by L* in L*a*b*. default = 50.0
			* @param surround A general description of the lighting surrounding the
			*     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
			*     dimly light room, like watching TV at home at night. 2.0 means there
			*     is no difference between the lighting on the color and around it.
			*     default = 2.0
			* @param discountingIlluminant Whether the eye accounts for the tint of the
			*     ambient lighting, such as knowing an apple is still red in green light.
			*     default = false, the eye does not perform this process on
			*       self-luminous objects like displays.
			*/
			static make(whitePoint = whitePointD65(), adaptingLuminance = 200 / Math.PI * yFromLstar(50) / 100, backgroundLstar = 50, surround = 2, discountingIlluminant = false) {
				const xyz = whitePoint;
				const rW = xyz[0] * .401288 + xyz[1] * .650173 + xyz[2] * -.051461;
				const gW = xyz[0] * -.250268 + xyz[1] * 1.204414 + xyz[2] * .045854;
				const bW = xyz[0] * -.002079 + xyz[1] * .048952 + xyz[2] * .953127;
				const f = .8 + surround / 10;
				const c = f >= .9 ? lerp(.59, .69, (f - .9) * 10) : lerp(.525, .59, (f - .8) * 10);
				let d = discountingIlluminant ? 1 : f * (1 - 1 / 3.6 * Math.exp((-adaptingLuminance - 42) / 92));
				d = d > 1 ? 1 : d < 0 ? 0 : d;
				const nc = f;
				const rgbD = [
					d * (100 / rW) + 1 - d,
					d * (100 / gW) + 1 - d,
					d * (100 / bW) + 1 - d
				];
				const k = 1 / (5 * adaptingLuminance + 1);
				const k4 = k * k * k * k;
				const k4F = 1 - k4;
				const fl = k4 * adaptingLuminance + .1 * k4F * k4F * Math.cbrt(5 * adaptingLuminance);
				const n = yFromLstar(backgroundLstar) / whitePoint[1];
				const z = 1.48 + Math.sqrt(n);
				const nbb = .725 / Math.pow(n, .2);
				const ncb = nbb;
				const rgbAFactors = [
					Math.pow(fl * rgbD[0] * rW / 100, .42),
					Math.pow(fl * rgbD[1] * gW / 100, .42),
					Math.pow(fl * rgbD[2] * bW / 100, .42)
				];
				const rgbA = [
					400 * rgbAFactors[0] / (rgbAFactors[0] + 27.13),
					400 * rgbAFactors[1] / (rgbAFactors[1] + 27.13),
					400 * rgbAFactors[2] / (rgbAFactors[2] + 27.13)
				];
				const aw = (2 * rgbA[0] + rgbA[1] + .05 * rgbA[2]) * nbb;
				return new ViewingConditions(n, aw, nbb, ncb, c, nc, rgbD, fl, Math.pow(fl, .25), z);
			}
			/**
			* Parameters are intermediate values of the CAM16 conversion process. Their
			* names are shorthand for technical color science terminology, this class
			* would not benefit from documenting them individually. A brief overview
			* is available in the CAM16 specification, and a complete overview requires
			* a color science textbook, such as Fairchild's Color Appearance Models.
			*/
			constructor(n, aw, nbb, ncb, c, nc, rgbD, fl, fLRoot, z) {
				this.n = n;
				this.aw = aw;
				this.nbb = nbb;
				this.ncb = ncb;
				this.c = c;
				this.nc = nc;
				this.rgbD = rgbD;
				this.fl = fl;
				this.fLRoot = fLRoot;
				this.z = z;
			}
		};
		/** sRGB-like viewing conditions.  */
		ViewingConditions.DEFAULT = ViewingConditions.make();
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/hct/cam16.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* CAM16, a color appearance model. Colors are not just defined by their hex
		* code, but rather, a hex code and viewing conditions.
		*
		* CAM16 instances also have coordinates in the CAM16-UCS space, called J*, a*,
		* b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
		* specification, and should be used when measuring distances between colors.
		*
		* In traditional color spaces, a color can be identified solely by the
		* observer's measurement of the color. Color appearance models such as CAM16
		* also use information about the environment where the color was
		* observed, known as the viewing conditions.
		*
		* For example, white under the traditional assumption of a midday sun white
		* point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
		* hue 203, chroma 3, lightness 100)
		*/
		var Cam16 = class Cam16 {
			/**
			* All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
			* the following combinations:
			*      -  {j or q} and {c, m, or s} and hue
			*      - jstar, astar, bstar
			* Prefer using a static method that constructs from 3 of those dimensions.
			* This constructor is intended for those methods to use to return all
			* possible dimensions.
			*
			* @param hue
			* @param chroma informally, colorfulness / color intensity. like saturation
			*     in HSL, except perceptually accurate.
			* @param j lightness
			* @param q brightness; ratio of lightness to white point's lightness
			* @param m colorfulness
			* @param s saturation; ratio of chroma to white point's chroma
			* @param jstar CAM16-UCS J coordinate
			* @param astar CAM16-UCS a coordinate
			* @param bstar CAM16-UCS b coordinate
			*/
			constructor(hue, chroma, j, q, m, s, jstar, astar, bstar) {
				this.hue = hue;
				this.chroma = chroma;
				this.j = j;
				this.q = q;
				this.m = m;
				this.s = s;
				this.jstar = jstar;
				this.astar = astar;
				this.bstar = bstar;
			}
			/**
			* CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
			* a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
			* specification, and is used to measure distances between colors.
			*/
			distance(other) {
				const dJ = this.jstar - other.jstar;
				const dA = this.astar - other.astar;
				const dB = this.bstar - other.bstar;
				const dEPrime = Math.sqrt(dJ * dJ + dA * dA + dB * dB);
				return 1.41 * Math.pow(dEPrime, .63);
			}
			/**
			* @param argb ARGB representation of a color.
			* @return CAM16 color, assuming the color was viewed in default viewing
			*     conditions.
			*/
			static fromInt(argb) {
				return Cam16.fromIntInViewingConditions(argb, ViewingConditions.DEFAULT);
			}
			/**
			* @param argb ARGB representation of a color.
			* @param viewingConditions Information about the environment where the color
			*     was observed.
			* @return CAM16 color.
			*/
			static fromIntInViewingConditions(argb, viewingConditions) {
				const red = (argb & 16711680) >> 16;
				const green = (argb & 65280) >> 8;
				const blue = argb & 255;
				const redL = linearized(red);
				const greenL = linearized(green);
				const blueL = linearized(blue);
				const x = .41233895 * redL + .35762064 * greenL + .18051042 * blueL;
				const y = .2126 * redL + .7152 * greenL + .0722 * blueL;
				const z = .01932141 * redL + .11916382 * greenL + .95034478 * blueL;
				const rC = .401288 * x + .650173 * y - .051461 * z;
				const gC = -.250268 * x + 1.204414 * y + .045854 * z;
				const bC = -.002079 * x + .048952 * y + .953127 * z;
				const rD = viewingConditions.rgbD[0] * rC;
				const gD = viewingConditions.rgbD[1] * gC;
				const bD = viewingConditions.rgbD[2] * bC;
				const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, .42);
				const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, .42);
				const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, .42);
				const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
				const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
				const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
				const a = (11 * rA + -12 * gA + bA) / 11;
				const b = (rA + gA - 2 * bA) / 9;
				const u = (20 * rA + 20 * gA + 21 * bA) / 20;
				const p2 = (40 * rA + 20 * gA + bA) / 20;
				const atanDegrees = Math.atan2(b, a) * 180 / Math.PI;
				const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
				const hueRadians = hue * Math.PI / 180;
				const ac = p2 * viewingConditions.nbb;
				const j = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
				const q = 4 / viewingConditions.c * Math.sqrt(j / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
				const huePrime = hue < 20.14 ? hue + 360 : hue;
				const t = 5e4 / 13 * (.25 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8)) * viewingConditions.nc * viewingConditions.ncb * Math.sqrt(a * a + b * b) / (u + .305);
				const alpha = Math.pow(t, .9) * Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73);
				const c = alpha * Math.sqrt(j / 100);
				const m = c * viewingConditions.fLRoot;
				const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
				const jstar = (1 + 100 * .007) * j / (1 + .007 * j);
				const mstar = 1 / .0228 * Math.log(1 + .0228 * m);
				const astar = mstar * Math.cos(hueRadians);
				const bstar = mstar * Math.sin(hueRadians);
				return new Cam16(hue, c, j, q, m, s, jstar, astar, bstar);
			}
			/**
			* @param j CAM16 lightness
			* @param c CAM16 chroma
			* @param h CAM16 hue
			*/
			static fromJch(j, c, h) {
				return Cam16.fromJchInViewingConditions(j, c, h, ViewingConditions.DEFAULT);
			}
			/**
			* @param j CAM16 lightness
			* @param c CAM16 chroma
			* @param h CAM16 hue
			* @param viewingConditions Information about the environment where the color
			*     was observed.
			*/
			static fromJchInViewingConditions(j, c, h, viewingConditions) {
				const q = 4 / viewingConditions.c * Math.sqrt(j / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
				const m = c * viewingConditions.fLRoot;
				const alpha = c / Math.sqrt(j / 100);
				const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
				const hueRadians = h * Math.PI / 180;
				const jstar = (1 + 100 * .007) * j / (1 + .007 * j);
				const mstar = 1 / .0228 * Math.log(1 + .0228 * m);
				const astar = mstar * Math.cos(hueRadians);
				const bstar = mstar * Math.sin(hueRadians);
				return new Cam16(h, c, j, q, m, s, jstar, astar, bstar);
			}
			/**
			* @param jstar CAM16-UCS lightness.
			* @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
			*     coordinate on the Y axis.
			* @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
			*     coordinate on the X axis.
			*/
			static fromUcs(jstar, astar, bstar) {
				return Cam16.fromUcsInViewingConditions(jstar, astar, bstar, ViewingConditions.DEFAULT);
			}
			/**
			* @param jstar CAM16-UCS lightness.
			* @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
			*     coordinate on the Y axis.
			* @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
			*     coordinate on the X axis.
			* @param viewingConditions Information about the environment where the color
			*     was observed.
			*/
			static fromUcsInViewingConditions(jstar, astar, bstar, viewingConditions) {
				const a = astar;
				const b = bstar;
				const m = Math.sqrt(a * a + b * b);
				const c = (Math.exp(m * .0228) - 1) / .0228 / viewingConditions.fLRoot;
				let h = Math.atan2(b, a) * (180 / Math.PI);
				if (h < 0) h += 360;
				const j = jstar / (1 - (jstar - 100) * .007);
				return Cam16.fromJchInViewingConditions(j, c, h, viewingConditions);
			}
			/**
			*  @return ARGB representation of color, assuming the color was viewed in
			*     default viewing conditions, which are near-identical to the default
			*     viewing conditions for sRGB.
			*/
			toInt() {
				return this.viewed(ViewingConditions.DEFAULT);
			}
			/**
			* @param viewingConditions Information about the environment where the color
			*     will be viewed.
			* @return ARGB representation of color
			*/
			viewed(viewingConditions) {
				const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
				const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73), 1 / .9);
				const hRad = this.hue * Math.PI / 180;
				const eHue = .25 * (Math.cos(hRad + 2) + 3.8);
				const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
				const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
				const p2 = ac / viewingConditions.nbb;
				const hSin = Math.sin(hRad);
				const hCos = Math.cos(hRad);
				const gamma = 23 * (p2 + .305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
				const a = gamma * hCos;
				const b = gamma * hSin;
				const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
				const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
				const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
				const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
				const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / .42);
				const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
				const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / .42);
				const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
				const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / .42);
				const rF = rC / viewingConditions.rgbD[0];
				const gF = gC / viewingConditions.rgbD[1];
				const bF = bC / viewingConditions.rgbD[2];
				return argbFromXyz(1.86206786 * rF - 1.01125463 * gF + .14918677 * bF, .38752654 * rF + .62144744 * gF - .00897398 * bF, -.0158415 * rF - .03412294 * gF + 1.04996444 * bF);
			}
			static fromXyzInViewingConditions(x, y, z, viewingConditions) {
				const rC = .401288 * x + .650173 * y - .051461 * z;
				const gC = -.250268 * x + 1.204414 * y + .045854 * z;
				const bC = -.002079 * x + .048952 * y + .953127 * z;
				const rD = viewingConditions.rgbD[0] * rC;
				const gD = viewingConditions.rgbD[1] * gC;
				const bD = viewingConditions.rgbD[2] * bC;
				const rAF = Math.pow(viewingConditions.fl * Math.abs(rD) / 100, .42);
				const gAF = Math.pow(viewingConditions.fl * Math.abs(gD) / 100, .42);
				const bAF = Math.pow(viewingConditions.fl * Math.abs(bD) / 100, .42);
				const rA = signum(rD) * 400 * rAF / (rAF + 27.13);
				const gA = signum(gD) * 400 * gAF / (gAF + 27.13);
				const bA = signum(bD) * 400 * bAF / (bAF + 27.13);
				const a = (11 * rA + -12 * gA + bA) / 11;
				const b = (rA + gA - 2 * bA) / 9;
				const u = (20 * rA + 20 * gA + 21 * bA) / 20;
				const p2 = (40 * rA + 20 * gA + bA) / 20;
				const atanDegrees = Math.atan2(b, a) * 180 / Math.PI;
				const hue = atanDegrees < 0 ? atanDegrees + 360 : atanDegrees >= 360 ? atanDegrees - 360 : atanDegrees;
				const hueRadians = hue * Math.PI / 180;
				const ac = p2 * viewingConditions.nbb;
				const J = 100 * Math.pow(ac / viewingConditions.aw, viewingConditions.c * viewingConditions.z);
				const Q = 4 / viewingConditions.c * Math.sqrt(J / 100) * (viewingConditions.aw + 4) * viewingConditions.fLRoot;
				const huePrime = hue < 20.14 ? hue + 360 : hue;
				const t = 5e4 / 13 * (1 / 4 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8)) * viewingConditions.nc * viewingConditions.ncb * Math.sqrt(a * a + b * b) / (u + .305);
				const alpha = Math.pow(t, .9) * Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73);
				const C = alpha * Math.sqrt(J / 100);
				const M = C * viewingConditions.fLRoot;
				const s = 50 * Math.sqrt(alpha * viewingConditions.c / (viewingConditions.aw + 4));
				const jstar = (1 + 100 * .007) * J / (1 + .007 * J);
				const mstar = Math.log(1 + .0228 * M) / .0228;
				const astar = mstar * Math.cos(hueRadians);
				const bstar = mstar * Math.sin(hueRadians);
				return new Cam16(hue, C, J, Q, M, s, jstar, astar, bstar);
			}
			xyzInViewingConditions(viewingConditions) {
				const alpha = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100);
				const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73), 1 / .9);
				const hRad = this.hue * Math.PI / 180;
				const eHue = .25 * (Math.cos(hRad + 2) + 3.8);
				const ac = viewingConditions.aw * Math.pow(this.j / 100, 1 / viewingConditions.c / viewingConditions.z);
				const p1 = eHue * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
				const p2 = ac / viewingConditions.nbb;
				const hSin = Math.sin(hRad);
				const hCos = Math.cos(hRad);
				const gamma = 23 * (p2 + .305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
				const a = gamma * hCos;
				const b = gamma * hSin;
				const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
				const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
				const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
				const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
				const rC = signum(rA) * (100 / viewingConditions.fl) * Math.pow(rCBase, 1 / .42);
				const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
				const gC = signum(gA) * (100 / viewingConditions.fl) * Math.pow(gCBase, 1 / .42);
				const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
				const bC = signum(bA) * (100 / viewingConditions.fl) * Math.pow(bCBase, 1 / .42);
				const rF = rC / viewingConditions.rgbD[0];
				const gF = gC / viewingConditions.rgbD[1];
				const bF = bC / viewingConditions.rgbD[2];
				return [
					1.86206786 * rF - 1.01125463 * gF + .14918677 * bF,
					.38752654 * rF + .62144744 * gF - .00897398 * bF,
					-.0158415 * rF - .03412294 * gF + 1.04996444 * bF
				];
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/hct/hct_solver.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* A class that solves the HCT equation.
		*/
		var HctSolver = class HctSolver {
			/**
			* Sanitizes a small enough angle in radians.
			*
			* @param angle An angle in radians; must not deviate too much
			* from 0.
			* @return A coterminal angle between 0 and 2pi.
			*/
			static sanitizeRadians(angle) {
				return (angle + Math.PI * 8) % (Math.PI * 2);
			}
			/**
			* Delinearizes an RGB component, returning a floating-point
			* number.
			*
			* @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
			* linear R/G/B channel
			* @return 0.0 <= output <= 255.0, color channel converted to
			* regular RGB space
			*/
			static trueDelinearized(rgbComponent) {
				const normalized = rgbComponent / 100;
				let delinearized = 0;
				if (normalized <= .0031308) delinearized = normalized * 12.92;
				else delinearized = 1.055 * Math.pow(normalized, 1 / 2.4) - .055;
				return delinearized * 255;
			}
			static chromaticAdaptation(component) {
				const af = Math.pow(Math.abs(component), .42);
				return signum(component) * 400 * af / (af + 27.13);
			}
			/**
			* Returns the hue of a linear RGB color in CAM16.
			*
			* @param linrgb The linear RGB coordinates of a color.
			* @return The hue of the color in CAM16, in radians.
			*/
			static hueOf(linrgb) {
				const scaledDiscount = matrixMultiply(linrgb, HctSolver.SCALED_DISCOUNT_FROM_LINRGB);
				const rA = HctSolver.chromaticAdaptation(scaledDiscount[0]);
				const gA = HctSolver.chromaticAdaptation(scaledDiscount[1]);
				const bA = HctSolver.chromaticAdaptation(scaledDiscount[2]);
				const a = (11 * rA + -12 * gA + bA) / 11;
				const b = (rA + gA - 2 * bA) / 9;
				return Math.atan2(b, a);
			}
			static areInCyclicOrder(a, b, c) {
				return HctSolver.sanitizeRadians(b - a) < HctSolver.sanitizeRadians(c - a);
			}
			/**
			* Solves the lerp equation.
			*
			* @param source The starting number.
			* @param mid The number in the middle.
			* @param target The ending number.
			* @return A number t such that lerp(source, target, t) = mid.
			*/
			static intercept(source, mid, target) {
				return (mid - source) / (target - source);
			}
			static lerpPoint(source, t, target) {
				return [
					source[0] + (target[0] - source[0]) * t,
					source[1] + (target[1] - source[1]) * t,
					source[2] + (target[2] - source[2]) * t
				];
			}
			/**
			* Intersects a segment with a plane.
			*
			* @param source The coordinates of point A.
			* @param coordinate The R-, G-, or B-coordinate of the plane.
			* @param target The coordinates of point B.
			* @param axis The axis the plane is perpendicular with. (0: R, 1:
			* G, 2: B)
			* @return The intersection point of the segment AB with the plane
			* R=coordinate, G=coordinate, or B=coordinate
			*/
			static setCoordinate(source, coordinate, target, axis) {
				const t = HctSolver.intercept(source[axis], coordinate, target[axis]);
				return HctSolver.lerpPoint(source, t, target);
			}
			static isBounded(x) {
				return 0 <= x && x <= 100;
			}
			/**
			* Returns the nth possible vertex of the polygonal intersection.
			*
			* @param y The Y value of the plane.
			* @param n The zero-based index of the point. 0 <= n <= 11.
			* @return The nth possible vertex of the polygonal intersection
			* of the y plane and the RGB cube, in linear RGB coordinates, if
			* it exists. If this possible vertex lies outside of the cube,
			* [-1.0, -1.0, -1.0] is returned.
			*/
			static nthVertex(y, n) {
				const kR = HctSolver.Y_FROM_LINRGB[0];
				const kG = HctSolver.Y_FROM_LINRGB[1];
				const kB = HctSolver.Y_FROM_LINRGB[2];
				const coordA = n % 4 <= 1 ? 0 : 100;
				const coordB = n % 2 === 0 ? 0 : 100;
				if (n < 4) {
					const g = coordA;
					const b = coordB;
					const r = (y - g * kG - b * kB) / kR;
					if (HctSolver.isBounded(r)) return [
						r,
						g,
						b
					];
					else return [
						-1,
						-1,
						-1
					];
				} else if (n < 8) {
					const b = coordA;
					const r = coordB;
					const g = (y - r * kR - b * kB) / kG;
					if (HctSolver.isBounded(g)) return [
						r,
						g,
						b
					];
					else return [
						-1,
						-1,
						-1
					];
				} else {
					const r = coordA;
					const g = coordB;
					const b = (y - r * kR - g * kG) / kB;
					if (HctSolver.isBounded(b)) return [
						r,
						g,
						b
					];
					else return [
						-1,
						-1,
						-1
					];
				}
			}
			/**
			* Finds the segment containing the desired color.
			*
			* @param y The Y value of the color.
			* @param targetHue The hue of the color.
			* @return A list of two sets of linear RGB coordinates, each
			* corresponding to an endpoint of the segment containing the
			* desired color.
			*/
			static bisectToSegment(y, targetHue) {
				let left = [
					-1,
					-1,
					-1
				];
				let right = left;
				let leftHue = 0;
				let rightHue = 0;
				let initialized = false;
				let uncut = true;
				for (let n = 0; n < 12; n++) {
					const mid = HctSolver.nthVertex(y, n);
					if (mid[0] < 0) continue;
					const midHue = HctSolver.hueOf(mid);
					if (!initialized) {
						left = mid;
						right = mid;
						leftHue = midHue;
						rightHue = midHue;
						initialized = true;
						continue;
					}
					if (uncut || HctSolver.areInCyclicOrder(leftHue, midHue, rightHue)) {
						uncut = false;
						if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
							right = mid;
							rightHue = midHue;
						} else {
							left = mid;
							leftHue = midHue;
						}
					}
				}
				return [left, right];
			}
			static midpoint(a, b) {
				return [
					(a[0] + b[0]) / 2,
					(a[1] + b[1]) / 2,
					(a[2] + b[2]) / 2
				];
			}
			static criticalPlaneBelow(x) {
				return Math.floor(x - .5);
			}
			static criticalPlaneAbove(x) {
				return Math.ceil(x - .5);
			}
			/**
			* Finds a color with the given Y and hue on the boundary of the
			* cube.
			*
			* @param y The Y value of the color.
			* @param targetHue The hue of the color.
			* @return The desired color, in linear RGB coordinates.
			*/
			static bisectToLimit(y, targetHue) {
				const segment = HctSolver.bisectToSegment(y, targetHue);
				let left = segment[0];
				let leftHue = HctSolver.hueOf(left);
				let right = segment[1];
				for (let axis = 0; axis < 3; axis++) if (left[axis] !== right[axis]) {
					let lPlane = -1;
					let rPlane = 255;
					if (left[axis] < right[axis]) {
						lPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(left[axis]));
						rPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(right[axis]));
					} else {
						lPlane = HctSolver.criticalPlaneAbove(HctSolver.trueDelinearized(left[axis]));
						rPlane = HctSolver.criticalPlaneBelow(HctSolver.trueDelinearized(right[axis]));
					}
					for (let i = 0; i < 8; i++) if (Math.abs(rPlane - lPlane) <= 1) break;
					else {
						const mPlane = Math.floor((lPlane + rPlane) / 2);
						const midPlaneCoordinate = HctSolver.CRITICAL_PLANES[mPlane];
						const mid = HctSolver.setCoordinate(left, midPlaneCoordinate, right, axis);
						const midHue = HctSolver.hueOf(mid);
						if (HctSolver.areInCyclicOrder(leftHue, targetHue, midHue)) {
							right = mid;
							rPlane = mPlane;
						} else {
							left = mid;
							leftHue = midHue;
							lPlane = mPlane;
						}
					}
				}
				return HctSolver.midpoint(left, right);
			}
			static inverseChromaticAdaptation(adapted) {
				const adaptedAbs = Math.abs(adapted);
				const base = Math.max(0, 27.13 * adaptedAbs / (400 - adaptedAbs));
				return signum(adapted) * Math.pow(base, 1 / .42);
			}
			/**
			* Finds a color with the given hue, chroma, and Y.
			*
			* @param hueRadians The desired hue in radians.
			* @param chroma The desired chroma.
			* @param y The desired Y.
			* @return The desired color as a hexadecimal integer, if found; 0
			* otherwise.
			*/
			static findResultByJ(hueRadians, chroma, y) {
				let j = Math.sqrt(y) * 11;
				const viewingConditions = ViewingConditions.DEFAULT;
				const tInnerCoeff = 1 / Math.pow(1.64 - Math.pow(.29, viewingConditions.n), .73);
				const p1 = .25 * (Math.cos(hueRadians + 2) + 3.8) * (5e4 / 13) * viewingConditions.nc * viewingConditions.ncb;
				const hSin = Math.sin(hueRadians);
				const hCos = Math.cos(hueRadians);
				for (let iterationRound = 0; iterationRound < 5; iterationRound++) {
					const jNormalized = j / 100;
					const alpha = chroma === 0 || j === 0 ? 0 : chroma / Math.sqrt(jNormalized);
					const t = Math.pow(alpha * tInnerCoeff, 1 / .9);
					const p2 = viewingConditions.aw * Math.pow(jNormalized, 1 / viewingConditions.c / viewingConditions.z) / viewingConditions.nbb;
					const gamma = 23 * (p2 + .305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
					const a = gamma * hCos;
					const b = gamma * hSin;
					const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
					const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
					const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
					const linrgb = matrixMultiply([
						HctSolver.inverseChromaticAdaptation(rA),
						HctSolver.inverseChromaticAdaptation(gA),
						HctSolver.inverseChromaticAdaptation(bA)
					], HctSolver.LINRGB_FROM_SCALED_DISCOUNT);
					if (linrgb[0] < 0 || linrgb[1] < 0 || linrgb[2] < 0) return 0;
					const kR = HctSolver.Y_FROM_LINRGB[0];
					const kG = HctSolver.Y_FROM_LINRGB[1];
					const kB = HctSolver.Y_FROM_LINRGB[2];
					const fnj = kR * linrgb[0] + kG * linrgb[1] + kB * linrgb[2];
					if (fnj <= 0) return 0;
					if (iterationRound === 4 || Math.abs(fnj - y) < .002) {
						if (linrgb[0] > 100.01 || linrgb[1] > 100.01 || linrgb[2] > 100.01) return 0;
						return argbFromLinrgb(linrgb);
					}
					j = j - (fnj - y) * j / (2 * fnj);
				}
				return 0;
			}
			/**
			* Finds an sRGB color with the given hue, chroma, and L*, if
			* possible.
			*
			* @param hueDegrees The desired hue, in degrees.
			* @param chroma The desired chroma.
			* @param lstar The desired L*.
			* @return A hexadecimal representing the sRGB color. The color
			* has sufficiently close hue, chroma, and L* to the desired
			* values, if possible; otherwise, the hue and L* will be
			* sufficiently close, and chroma will be maximized.
			*/
			static solveToInt(hueDegrees, chroma, lstar) {
				if (chroma < 1e-4 || lstar < 1e-4 || lstar > 99.9999) return argbFromLstar(lstar);
				hueDegrees = sanitizeDegreesDouble(hueDegrees);
				const hueRadians = hueDegrees / 180 * Math.PI;
				const y = yFromLstar(lstar);
				const exactAnswer = HctSolver.findResultByJ(hueRadians, chroma, y);
				if (exactAnswer !== 0) return exactAnswer;
				return argbFromLinrgb(HctSolver.bisectToLimit(y, hueRadians));
			}
			/**
			* Finds an sRGB color with the given hue, chroma, and L*, if
			* possible.
			*
			* @param hueDegrees The desired hue, in degrees.
			* @param chroma The desired chroma.
			* @param lstar The desired L*.
			* @return An CAM16 object representing the sRGB color. The color
			* has sufficiently close hue, chroma, and L* to the desired
			* values, if possible; otherwise, the hue and L* will be
			* sufficiently close, and chroma will be maximized.
			*/
			static solveToCam(hueDegrees, chroma, lstar) {
				return Cam16.fromInt(HctSolver.solveToInt(hueDegrees, chroma, lstar));
			}
		};
		HctSolver.SCALED_DISCOUNT_FROM_LINRGB = [
			[
				.001200833568784504,
				.002389694492170889,
				.0002795742885861124
			],
			[
				.0005891086651375999,
				.0029785502573438758,
				.0003270666104008398
			],
			[
				.00010146692491640572,
				.0005364214359186694,
				.0032979401770712076
			]
		];
		HctSolver.LINRGB_FROM_SCALED_DISCOUNT = [
			[
				1373.2198709594231,
				-1100.4251190754821,
				-7.278681089101213
			],
			[
				-271.815969077903,
				559.6580465940733,
				-32.46047482791194
			],
			[
				1.9622899599665666,
				-57.173814538844006,
				308.7233197812385
			]
		];
		HctSolver.Y_FROM_LINRGB = [
			.2126,
			.7152,
			.0722
		];
		HctSolver.CRITICAL_PLANES = [
			.015176349177441876,
			.045529047532325624,
			.07588174588720938,
			.10623444424209313,
			.13658714259697685,
			.16693984095186062,
			.19729253930674434,
			.2276452376616281,
			.2579979360165119,
			.28835063437139563,
			.3188300904430532,
			.350925934958123,
			.3848314933096426,
			.42057480301049466,
			.458183274052838,
			.4976837250274023,
			.5391024159806381,
			.5824650784040898,
			.6277969426914107,
			.6751227633498623,
			.7244668422128921,
			.775853049866786,
			.829304845476233,
			.8848452951698498,
			.942497089126609,
			1.0022825574869039,
			1.0642236851973577,
			1.1283421258858297,
			1.1946592148522128,
			1.2631959812511864,
			1.3339731595349034,
			1.407011200216447,
			1.4823302800086415,
			1.5599503113873272,
			1.6398909516233677,
			1.7221716113234105,
			1.8068114625156377,
			1.8938294463134073,
			1.9832442801866852,
			2.075074464868551,
			2.1693382909216234,
			2.2660538449872063,
			2.36523901573795,
			2.4669114995532007,
			2.5710888059345764,
			2.6777882626779785,
			2.7870270208169257,
			2.898822059350997,
			3.0131901897720907,
			3.1301480604002863,
			3.2497121605402226,
			3.3718988244681087,
			3.4967242352587946,
			3.624204428461639,
			3.754355295633311,
			3.887192587735158,
			4.022731918402185,
			4.160988767090289,
			4.301978482107941,
			4.445716283538092,
			4.592217266055746,
			4.741496401646282,
			4.893568542229298,
			5.048448422192488,
			5.20615066083972,
			5.3666897647573375,
			5.5300801301023865,
			5.696336044816294,
			5.865471690767354,
			6.037501145825082,
			6.212438385869475,
			6.390297286737924,
			6.571091626112461,
			6.7548350853498045,
			6.941541251256611,
			7.131223617812143,
			7.323895587840543,
			7.5195704746346665,
			7.7182615035334345,
			7.919981813454504,
			8.124744458384042,
			8.332562408825165,
			8.543448553206703,
			8.757415699253682,
			8.974476575321063,
			9.194643831691977,
			9.417930041841839,
			9.644347703669503,
			9.873909240696694,
			10.106627003236781,
			10.342513269534024,
			10.58158024687427,
			10.8238400726681,
			11.069304815507364,
			11.317986476196008,
			11.569896988756009,
			11.825048221409341,
			12.083451977536606,
			12.345119996613247,
			12.610063955123938,
			12.878295467455942,
			13.149826086772048,
			13.42466730586372,
			13.702830557985108,
			13.984327217668513,
			14.269168601521828,
			14.55736596900856,
			14.848930523210871,
			15.143873411576273,
			15.44220572664832,
			15.743938506781891,
			16.04908273684337,
			16.35764934889634,
			16.66964922287304,
			16.985093187232053,
			17.30399201960269,
			17.62635644741625,
			17.95219714852476,
			18.281524751807332,
			18.614349837764564,
			18.95068293910138,
			19.290534541298456,
			19.633915083172692,
			19.98083495742689,
			20.331304511189067,
			20.685334046541502,
			21.042933821039977,
			21.404114048223256,
			21.76888489811322,
			22.137256497705877,
			22.50923893145328,
			22.884842241736916,
			23.264076429332462,
			23.6469514538663,
			24.033477234264016,
			24.42366364919083,
			24.817520537484558,
			25.21505769858089,
			25.61628489293138,
			26.021211842414342,
			26.429848230738664,
			26.842203703840827,
			27.258287870275353,
			27.678110301598522,
			28.10168053274597,
			28.529008062403893,
			28.96010235337422,
			29.39497283293396,
			29.83362889318845,
			30.276079891419332,
			30.722335150426627,
			31.172403958865512,
			31.62629557157785,
			32.08401920991837,
			32.54558406207592,
			33.010999283389665,
			33.4802739966603,
			33.953417292456834,
			34.430438229418264,
			34.911345834551085,
			35.39614910352207,
			35.88485700094671,
			36.37747846067349,
			36.87402238606382,
			37.37449765026789,
			37.87891309649659,
			38.38727753828926,
			38.89959975977785,
			39.41588851594697,
			39.93615253289054,
			40.460400508064545,
			40.98864111053629,
			41.520882981230194,
			42.05713473317016,
			42.597404951718396,
			43.141702194811224,
			43.6900349931913,
			44.24241185063697,
			44.798841244188324,
			45.35933162437017,
			45.92389141541209,
			46.49252901546552,
			47.065252796817916,
			47.64207110610409,
			48.22299226451468,
			48.808024568002054,
			49.3971762874833,
			49.9904556690408,
			50.587870934119984,
			51.189430279724725,
			51.79514187861014,
			52.40501387947288,
			53.0190544071392,
			53.637271562750364,
			54.259673423945976,
			54.88626804504493,
			55.517063457223934,
			56.15206766869424,
			56.79128866487574,
			57.43473440856916,
			58.08241284012621,
			58.734331877617365,
			59.39049941699807,
			60.05092333227251,
			60.715611475655585,
			61.38457167773311,
			62.057811747619894,
			62.7353394731159,
			63.417162620860914,
			64.10328893648692,
			64.79372614476921,
			65.48848194977529,
			66.18756403501224,
			66.89098006357258,
			67.59873767827808,
			68.31084450182222,
			69.02730813691093,
			69.74813616640164,
			70.47333615344107,
			71.20291564160104,
			71.93688215501312,
			72.67524319850172,
			73.41800625771542,
			74.16517879925733,
			74.9167682708136,
			75.67278210128072,
			76.43322770089146,
			77.1981124613393,
			77.96744375590167,
			78.74122893956174,
			79.51947534912904,
			80.30219030335869,
			81.08938110306934,
			81.88105503125999,
			82.67721935322541,
			83.4778813166706,
			84.28304815182372,
			85.09272707154808,
			85.90692527145302,
			86.72564993000343,
			87.54890820862819,
			88.3767072518277,
			89.2090541872801,
			90.04595612594655,
			90.88742016217518,
			91.73345337380438,
			92.58406282226491,
			93.43925555268066,
			94.29903859396902,
			95.16341895893969,
			96.03240364439274,
			96.9059996312159,
			97.78421388448044,
			98.6670533535366,
			99.55452497210776
		];
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/hct/hct.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* A color system built using CAM16 hue and chroma, and L* from
		* L*a*b*.
		*
		* Using L* creates a link between the color system, contrast, and thus
		* accessibility. Contrast ratio depends on relative luminance, or Y in the XYZ
		* color space. L*, or perceptual luminance can be calculated from Y.
		*
		* Unlike Y, L* is linear to human perception, allowing trivial creation of
		* accurate color tones.
		*
		* Unlike contrast ratio, measuring contrast in L* is linear, and simple to
		* calculate. A difference of 40 in HCT tone guarantees a contrast ratio >= 3.0,
		* and a difference of 50 guarantees a contrast ratio >= 4.5.
		*/
		/**
		* HCT, hue, chroma, and tone. A color system that provides a perceptually
		* accurate color measurement system that can also accurately render what colors
		* will appear as in different lighting environments.
		*/
		var Hct = class Hct {
			static from(hue, chroma, tone) {
				return new Hct(HctSolver.solveToInt(hue, chroma, tone));
			}
			/**
			* @param argb ARGB representation of a color.
			* @return HCT representation of a color in default viewing conditions
			*/
			static fromInt(argb) {
				return new Hct(argb);
			}
			toInt() {
				return this.argb;
			}
			/**
			* A number, in degrees, representing ex. red, orange, yellow, etc.
			* Ranges from 0 <= hue < 360.
			*/
			get hue() {
				return this.internalHue;
			}
			/**
			* @param newHue 0 <= newHue < 360; invalid values are corrected.
			* Chroma may decrease because chroma has a different maximum for any given
			* hue and tone.
			*/
			set hue(newHue) {
				this.setInternalState(HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone));
			}
			get chroma() {
				return this.internalChroma;
			}
			/**
			* @param newChroma 0 <= newChroma < ?
			* Chroma may decrease because chroma has a different maximum for any given
			* hue and tone.
			*/
			set chroma(newChroma) {
				this.setInternalState(HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone));
			}
			/** Lightness. Ranges from 0 to 100. */
			get tone() {
				return this.internalTone;
			}
			/**
			* @param newTone 0 <= newTone <= 100; invalid valids are corrected.
			* Chroma may decrease because chroma has a different maximum for any given
			* hue and tone.
			*/
			set tone(newTone) {
				this.setInternalState(HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone));
			}
			constructor(argb) {
				this.argb = argb;
				const cam = Cam16.fromInt(argb);
				this.internalHue = cam.hue;
				this.internalChroma = cam.chroma;
				this.internalTone = lstarFromArgb(argb);
				this.argb = argb;
			}
			setInternalState(argb) {
				const cam = Cam16.fromInt(argb);
				this.internalHue = cam.hue;
				this.internalChroma = cam.chroma;
				this.internalTone = lstarFromArgb(argb);
				this.argb = argb;
			}
			/**
			* Translates a color into different [ViewingConditions].
			*
			* Colors change appearance. They look different with lights on versus off,
			* the same color, as in hex code, on white looks different when on black.
			* This is called color relativity, most famously explicated by Josef Albers
			* in Interaction of Color.
			*
			* In color science, color appearance models can account for this and
			* calculate the appearance of a color in different settings. HCT is based on
			* CAM16, a color appearance model, and uses it to make these calculations.
			*
			* See [ViewingConditions.make] for parameters affecting color appearance.
			*/
			inViewingConditions(vc) {
				const viewedInVc = Cam16.fromInt(this.toInt()).xyzInViewingConditions(vc);
				const recastInVc = Cam16.fromXyzInViewingConditions(viewedInVc[0], viewedInVc[1], viewedInVc[2], ViewingConditions.make());
				return Hct.from(recastInVc.hue, recastInVc.chroma, lstarFromY(viewedInVc[1]));
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/blend/blend.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/contrast/contrast.js
		/**
		* @license
		* Copyright 2022 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* Utility methods for calculating contrast given two colors, or calculating a
		* color given one color and a contrast ratio.
		*
		* Contrast ratio is calculated using XYZ's Y. When linearized to match human
		* perception, Y becomes HCT's tone and L*a*b*'s' L*. Informally, this is the
		* lightness of a color.
		*
		* Methods refer to tone, T in the the HCT color space.
		* Tone is equivalent to L* in the L*a*b* color space, or L in the LCH color
		* space.
		*/
		var Contrast = class Contrast {
			/**
			* Returns a contrast ratio, which ranges from 1 to 21.
			*
			* @param toneA Tone between 0 and 100. Values outside will be clamped.
			* @param toneB Tone between 0 and 100. Values outside will be clamped.
			*/
			static ratioOfTones(toneA, toneB) {
				toneA = clampDouble(0, 100, toneA);
				toneB = clampDouble(0, 100, toneB);
				return Contrast.ratioOfYs(yFromLstar(toneA), yFromLstar(toneB));
			}
			static ratioOfYs(y1, y2) {
				const lighter = y1 > y2 ? y1 : y2;
				const darker = lighter === y2 ? y1 : y2;
				return (lighter + 5) / (darker + 5);
			}
			/**
			* Returns a tone >= tone parameter that ensures ratio parameter.
			* Return value is between 0 and 100.
			* Returns -1 if ratio cannot be achieved with tone parameter.
			*
			* @param tone Tone return value must contrast with.
			* Range is 0 to 100. Invalid values will result in -1 being returned.
			* @param ratio Contrast ratio of return value and tone.
			* Range is 1 to 21, invalid values have undefined behavior.
			*/
			static lighter(tone, ratio) {
				if (tone < 0 || tone > 100) return -1;
				const darkY = yFromLstar(tone);
				const lightY = ratio * (darkY + 5) - 5;
				const realContrast = Contrast.ratioOfYs(lightY, darkY);
				const delta = Math.abs(realContrast - ratio);
				if (realContrast < ratio && delta > .04) return -1;
				const returnValue = lstarFromY(lightY) + .4;
				if (returnValue < 0 || returnValue > 100) return -1;
				return returnValue;
			}
			/**
			* Returns a tone <= tone parameter that ensures ratio parameter.
			* Return value is between 0 and 100.
			* Returns -1 if ratio cannot be achieved with tone parameter.
			*
			* @param tone Tone return value must contrast with.
			* Range is 0 to 100. Invalid values will result in -1 being returned.
			* @param ratio Contrast ratio of return value and tone.
			* Range is 1 to 21, invalid values have undefined behavior.
			*/
			static darker(tone, ratio) {
				if (tone < 0 || tone > 100) return -1;
				const lightY = yFromLstar(tone);
				const darkY = (lightY + 5) / ratio - 5;
				const realContrast = Contrast.ratioOfYs(lightY, darkY);
				const delta = Math.abs(realContrast - ratio);
				if (realContrast < ratio && delta > .04) return -1;
				const returnValue = lstarFromY(darkY) - .4;
				if (returnValue < 0 || returnValue > 100) return -1;
				return returnValue;
			}
			/**
			* Returns a tone >= tone parameter that ensures ratio parameter.
			* Return value is between 0 and 100.
			* Returns 100 if ratio cannot be achieved with tone parameter.
			*
			* This method is unsafe because the returned value is guaranteed to be in
			* bounds for tone, i.e. between 0 and 100. However, that value may not reach
			* the ratio with tone. For example, there is no color lighter than T100.
			*
			* @param tone Tone return value must contrast with.
			* Range is 0 to 100. Invalid values will result in 100 being returned.
			* @param ratio Desired contrast ratio of return value and tone parameter.
			* Range is 1 to 21, invalid values have undefined behavior.
			*/
			static lighterUnsafe(tone, ratio) {
				const lighterSafe = Contrast.lighter(tone, ratio);
				return lighterSafe < 0 ? 100 : lighterSafe;
			}
			/**
			* Returns a tone >= tone parameter that ensures ratio parameter.
			* Return value is between 0 and 100.
			* Returns 100 if ratio cannot be achieved with tone parameter.
			*
			* This method is unsafe because the returned value is guaranteed to be in
			* bounds for tone, i.e. between 0 and 100. However, that value may not reach
			* the [ratio with [tone]. For example, there is no color darker than T0.
			*
			* @param tone Tone return value must contrast with.
			* Range is 0 to 100. Invalid values will result in 0 being returned.
			* @param ratio Desired contrast ratio of return value and tone parameter.
			* Range is 1 to 21, invalid values have undefined behavior.
			*/
			static darkerUnsafe(tone, ratio) {
				const darkerSafe = Contrast.darker(tone, ratio);
				return darkerSafe < 0 ? 0 : darkerSafe;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js
		/**
		* @license
		* Copyright 2023 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* Check and/or fix universally disliked colors.
		* Color science studies of color preference indicate universal distaste for
		* dark yellow-greens, and also show this is correlated to distate for
		* biological waste and rotting food.
		*
		* See Palmer and Schloss, 2010 or Schloss and Palmer's Chapter 21 in Handbook
		* of Color Psychology (2015).
		*/
		var DislikeAnalyzer = class DislikeAnalyzer {
			/**
			* Returns true if a color is disliked.
			*
			* @param hct A color to be judged.
			* @return Whether the color is disliked.
			*
			* Disliked is defined as a dark yellow-green that is not neutral.
			*/
			static isDisliked(hct) {
				const huePasses = Math.round(hct.hue) >= 90 && Math.round(hct.hue) <= 111;
				const chromaPasses = Math.round(hct.chroma) > 16;
				const tonePasses = Math.round(hct.tone) < 65;
				return huePasses && chromaPasses && tonePasses;
			}
			/**
			* If a color is disliked, lighten it to make it likable.
			*
			* @param hct A color to be judged.
			* @return A new color if the original color is disliked, or the original
			*   color if it is acceptable.
			*/
			static fixIfDisliked(hct) {
				if (DislikeAnalyzer.isDisliked(hct)) return Hct.from(hct.hue, hct.chroma, 70);
				return hct;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js
		/**
		* @license
		* Copyright 2022 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* A color that adjusts itself based on UI state provided by DynamicScheme.
		*
		* Colors without backgrounds do not change tone when contrast changes. Colors
		* with backgrounds become closer to their background as contrast lowers, and
		* further when contrast increases.
		*
		* Prefer static constructors. They require either a hexcode, a palette and
		* tone, or a hue and chroma. Optionally, they can provide a background
		* DynamicColor.
		*/
		var DynamicColor = class DynamicColor {
			/**
			* Create a DynamicColor defined by a TonalPalette and HCT tone.
			*
			* @param args Functions with DynamicScheme as input. Must provide a palette
			* and tone. May provide a background DynamicColor and ToneDeltaConstraint.
			*/
			static fromPalette(args) {
				return new DynamicColor(args.name ?? "", args.palette, args.tone, args.isBackground ?? false, args.background, args.secondBackground, args.contrastCurve, args.toneDeltaPair);
			}
			/**
			* The base constructor for DynamicColor.
			*
			* _Strongly_ prefer using one of the convenience constructors. This class is
			* arguably too flexible to ensure it can support any scenario. Functional
			* arguments allow  overriding without risks that come with subclasses.
			*
			* For example, the default behavior of adjust tone at max contrast
			* to be at a 7.0 ratio with its background is principled and
			* matches accessibility guidance. That does not mean it's the desired
			* approach for _every_ design system, and every color pairing,
			* always, in every case.
			*
			* @param name The name of the dynamic color. Defaults to empty.
			* @param palette Function that provides a TonalPalette given
			* DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
			* replaces the need to specify hue/chroma. By providing a tonal palette, when
			* contrast adjustments are made, intended chroma can be preserved.
			* @param tone Function that provides a tone, given a DynamicScheme.
			* @param isBackground Whether this dynamic color is a background, with
			* some other color as the foreground. Defaults to false.
			* @param background The background of the dynamic color (as a function of a
			*     `DynamicScheme`), if it exists.
			* @param secondBackground A second background of the dynamic color (as a
			*     function of a `DynamicScheme`), if it
			* exists.
			* @param contrastCurve A `ContrastCurve` object specifying how its contrast
			* against its background should behave in various contrast levels options.
			* @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
			* constraint between two colors. One of them must be the color being
			* constructed.
			*/
			constructor(name, palette, tone, isBackground, background, secondBackground, contrastCurve, toneDeltaPair) {
				this.name = name;
				this.palette = palette;
				this.tone = tone;
				this.isBackground = isBackground;
				this.background = background;
				this.secondBackground = secondBackground;
				this.contrastCurve = contrastCurve;
				this.toneDeltaPair = toneDeltaPair;
				this.hctCache = /* @__PURE__ */ new Map();
				if (!background && secondBackground) throw new Error(`Color ${name} has secondBackgrounddefined, but background is not defined.`);
				if (!background && contrastCurve) throw new Error(`Color ${name} has contrastCurvedefined, but background is not defined.`);
				if (background && !contrastCurve) throw new Error(`Color ${name} has backgrounddefined, but contrastCurve is not defined.`);
			}
			/**
			* Return a ARGB integer (i.e. a hex code).
			*
			* @param scheme Defines the conditions of the user interface, for example,
			* whether or not it is dark mode or light mode, and what the desired
			* contrast level is.
			*/
			getArgb(scheme) {
				return this.getHct(scheme).toInt();
			}
			/**
			* Return a color, expressed in the HCT color space, that this
			* DynamicColor is under the conditions in scheme.
			*
			* @param scheme Defines the conditions of the user interface, for example,
			* whether or not it is dark mode or light mode, and what the desired
			* contrast level is.
			*/
			getHct(scheme) {
				const cachedAnswer = this.hctCache.get(scheme);
				if (cachedAnswer != null) return cachedAnswer;
				const tone = this.getTone(scheme);
				const answer = this.palette(scheme).getHct(tone);
				if (this.hctCache.size > 4) this.hctCache.clear();
				this.hctCache.set(scheme, answer);
				return answer;
			}
			/**
			* Return a tone, T in the HCT color space, that this DynamicColor is under
			* the conditions in scheme.
			*
			* @param scheme Defines the conditions of the user interface, for example,
			* whether or not it is dark mode or light mode, and what the desired
			* contrast level is.
			*/
			getTone(scheme) {
				const decreasingContrast = scheme.contrastLevel < 0;
				if (this.toneDeltaPair) {
					const toneDeltaPair = this.toneDeltaPair(scheme);
					const roleA = toneDeltaPair.roleA;
					const roleB = toneDeltaPair.roleB;
					const delta = toneDeltaPair.delta;
					const polarity = toneDeltaPair.polarity;
					const stayTogether = toneDeltaPair.stayTogether;
					const bgTone = this.background(scheme).getTone(scheme);
					const aIsNearer = polarity === "nearer" || polarity === "lighter" && !scheme.isDark || polarity === "darker" && scheme.isDark;
					const nearer = aIsNearer ? roleA : roleB;
					const farther = aIsNearer ? roleB : roleA;
					const amNearer = this.name === nearer.name;
					const expansionDir = scheme.isDark ? 1 : -1;
					const nContrast = nearer.contrastCurve.get(scheme.contrastLevel);
					const fContrast = farther.contrastCurve.get(scheme.contrastLevel);
					const nInitialTone = nearer.tone(scheme);
					let nTone = Contrast.ratioOfTones(bgTone, nInitialTone) >= nContrast ? nInitialTone : DynamicColor.foregroundTone(bgTone, nContrast);
					const fInitialTone = farther.tone(scheme);
					let fTone = Contrast.ratioOfTones(bgTone, fInitialTone) >= fContrast ? fInitialTone : DynamicColor.foregroundTone(bgTone, fContrast);
					if (decreasingContrast) {
						nTone = DynamicColor.foregroundTone(bgTone, nContrast);
						fTone = DynamicColor.foregroundTone(bgTone, fContrast);
					}
					if ((fTone - nTone) * expansionDir >= delta) {} else {
						fTone = clampDouble(0, 100, nTone + delta * expansionDir);
						if ((fTone - nTone) * expansionDir >= delta) {} else nTone = clampDouble(0, 100, fTone - delta * expansionDir);
					}
					if (50 <= nTone && nTone < 60) {
						if (expansionDir > 0) {
							nTone = 60;
							fTone = Math.max(fTone, nTone + delta * expansionDir);
						} else {
							nTone = 49;
							fTone = Math.min(fTone, nTone + delta * expansionDir);
						}
					} else if (50 <= fTone && fTone < 60) {
						if (stayTogether) {
							if (expansionDir > 0) {
								nTone = 60;
								fTone = Math.max(fTone, nTone + delta * expansionDir);
							} else {
								nTone = 49;
								fTone = Math.min(fTone, nTone + delta * expansionDir);
							}
						} else if (expansionDir > 0) fTone = 60;
						else fTone = 49;
					}
					return amNearer ? nTone : fTone;
				} else {
					let answer = this.tone(scheme);
					if (this.background == null) return answer;
					const bgTone = this.background(scheme).getTone(scheme);
					const desiredRatio = this.contrastCurve.get(scheme.contrastLevel);
					if (Contrast.ratioOfTones(bgTone, answer) >= desiredRatio) {} else answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
					if (decreasingContrast) answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
					if (this.isBackground && 50 <= answer && answer < 60) {
						if (Contrast.ratioOfTones(49, bgTone) >= desiredRatio) answer = 49;
						else answer = 60;
					}
					if (this.secondBackground) {
						const [bg1, bg2] = [this.background, this.secondBackground];
						const [bgTone1, bgTone2] = [bg1(scheme).getTone(scheme), bg2(scheme).getTone(scheme)];
						const [upper, lower] = [Math.max(bgTone1, bgTone2), Math.min(bgTone1, bgTone2)];
						if (Contrast.ratioOfTones(upper, answer) >= desiredRatio && Contrast.ratioOfTones(lower, answer) >= desiredRatio) return answer;
						const lightOption = Contrast.lighter(upper, desiredRatio);
						const darkOption = Contrast.darker(lower, desiredRatio);
						const availables = [];
						if (lightOption !== -1) availables.push(lightOption);
						if (darkOption !== -1) availables.push(darkOption);
						if (DynamicColor.tonePrefersLightForeground(bgTone1) || DynamicColor.tonePrefersLightForeground(bgTone2)) return lightOption < 0 ? 100 : lightOption;
						if (availables.length === 1) return availables[0];
						return darkOption < 0 ? 0 : darkOption;
					}
					return answer;
				}
			}
			/**
			* Given a background tone, find a foreground tone, while ensuring they reach
			* a contrast ratio that is as close to [ratio] as possible.
			*
			* @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
			*     falls outside that range.
			* @param ratio The contrast ratio desired between bgTone and the return
			*     value.
			*/
			static foregroundTone(bgTone, ratio) {
				const lighterTone = Contrast.lighterUnsafe(bgTone, ratio);
				const darkerTone = Contrast.darkerUnsafe(bgTone, ratio);
				const lighterRatio = Contrast.ratioOfTones(lighterTone, bgTone);
				const darkerRatio = Contrast.ratioOfTones(darkerTone, bgTone);
				if (DynamicColor.tonePrefersLightForeground(bgTone)) {
					const negligibleDifference = Math.abs(lighterRatio - darkerRatio) < .1 && lighterRatio < ratio && darkerRatio < ratio;
					return lighterRatio >= ratio || lighterRatio >= darkerRatio || negligibleDifference ? lighterTone : darkerTone;
				} else return darkerRatio >= ratio || darkerRatio >= lighterRatio ? darkerTone : lighterTone;
			}
			/**
			* Returns whether [tone] prefers a light foreground.
			*
			* People prefer white foregrounds on ~T60-70. Observed over time, and also
			* by Andrew Somers during research for APCA.
			*
			* T60 used as to create the smallest discontinuity possible when skipping
			* down to T49 in order to ensure light foregrounds.
			* Since `tertiaryContainer` in dark monochrome scheme requires a tone of
			* 60, it should not be adjusted. Therefore, 60 is excluded here.
			*/
			static tonePrefersLightForeground(tone) {
				return Math.round(tone) < 60;
			}
			/**
			* Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
			* color.
			*/
			static toneAllowsLightForeground(tone) {
				return Math.round(tone) <= 49;
			}
			/**
			* Adjust a tone such that white has 4.5 contrast, if the tone is
			* reasonably close to supporting it.
			*/
			static enableLightForeground(tone) {
				if (DynamicColor.tonePrefersLightForeground(tone) && !DynamicColor.toneAllowsLightForeground(tone)) return 49;
				return tone;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/palettes/tonal_palette.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		*  A convenience class for retrieving colors that are constant in hue and
		*  chroma, but vary in tone.
		*/
		var TonalPalette = class TonalPalette {
			/**
			* @param argb ARGB representation of a color
			* @return Tones matching that color's hue and chroma.
			*/
			static fromInt(argb) {
				const hct = Hct.fromInt(argb);
				return TonalPalette.fromHct(hct);
			}
			/**
			* @param hct Hct
			* @return Tones matching that color's hue and chroma.
			*/
			static fromHct(hct) {
				return new TonalPalette(hct.hue, hct.chroma, hct);
			}
			/**
			* @param hue HCT hue
			* @param chroma HCT chroma
			* @return Tones matching hue and chroma.
			*/
			static fromHueAndChroma(hue, chroma) {
				const keyColor = new KeyColor(hue, chroma).create();
				return new TonalPalette(hue, chroma, keyColor);
			}
			constructor(hue, chroma, keyColor) {
				this.hue = hue;
				this.chroma = chroma;
				this.keyColor = keyColor;
				this.cache = /* @__PURE__ */ new Map();
			}
			/**
			* @param tone HCT tone, measured from 0 to 100.
			* @return ARGB representation of a color with that tone.
			*/
			tone(tone) {
				let argb = this.cache.get(tone);
				if (argb === void 0) {
					argb = Hct.from(this.hue, this.chroma, tone).toInt();
					this.cache.set(tone, argb);
				}
				return argb;
			}
			/**
			* @param tone HCT tone.
			* @return HCT representation of a color with that tone.
			*/
			getHct(tone) {
				return Hct.fromInt(this.tone(tone));
			}
		};
		/**
		* Key color is a color that represents the hue and chroma of a tonal palette
		*/
		var KeyColor = class {
			constructor(hue, requestedChroma) {
				this.hue = hue;
				this.requestedChroma = requestedChroma;
				this.chromaCache = /* @__PURE__ */ new Map();
				this.maxChromaValue = 200;
			}
			/**
			* Creates a key color from a [hue] and a [chroma].
			* The key color is the first tone, starting from T50, matching the given hue
			* and chroma.
			*
			* @return Key color [Hct]
			*/
			create() {
				const pivotTone = 50;
				const toneStepSize = 1;
				const epsilon = .01;
				let lowerTone = 0;
				let upperTone = 100;
				while (lowerTone < upperTone) {
					const midTone = Math.floor((lowerTone + upperTone) / 2);
					const isAscending = this.maxChroma(midTone) < this.maxChroma(midTone + toneStepSize);
					if (this.maxChroma(midTone) >= this.requestedChroma - epsilon) {
						if (Math.abs(lowerTone - pivotTone) < Math.abs(upperTone - pivotTone)) upperTone = midTone;
						else {
							if (lowerTone === midTone) return Hct.from(this.hue, this.requestedChroma, lowerTone);
							lowerTone = midTone;
						}
					} else if (isAscending) lowerTone = midTone + toneStepSize;
					else upperTone = midTone;
				}
				return Hct.from(this.hue, this.requestedChroma, lowerTone);
			}
			maxChroma(tone) {
				if (this.chromaCache.has(tone)) return this.chromaCache.get(tone);
				const chroma = Hct.from(this.hue, this.maxChromaValue, tone).chroma;
				this.chromaCache.set(tone, chroma);
				return chroma;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js
		/**
		* @license
		* Copyright 2023 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* A class containing a value that changes with the contrast level.
		*
		* Usually represents the contrast requirements for a dynamic color on its
		* background. The four values correspond to values for contrast levels -1.0,
		* 0.0, 0.5, and 1.0, respectively.
		*/
		var ContrastCurve = class {
			/**
			* Creates a `ContrastCurve` object.
			*
			* @param low Value for contrast level -1.0
			* @param normal Value for contrast level 0.0
			* @param medium Value for contrast level 0.5
			* @param high Value for contrast level 1.0
			*/
			constructor(low, normal, medium, high) {
				this.low = low;
				this.normal = normal;
				this.medium = medium;
				this.high = high;
			}
			/**
			* Returns the value at a given contrast level.
			*
			* @param contrastLevel The contrast level. 0.0 is the default (normal); -1.0
			*     is the lowest; 1.0 is the highest.
			* @return The value. For contrast ratios, a number between 1.0 and 21.0.
			*/
			get(contrastLevel) {
				if (contrastLevel <= -1) return this.low;
				else if (contrastLevel < 0) return lerp(this.low, this.normal, (contrastLevel - -1) / 1);
				else if (contrastLevel < .5) return lerp(this.normal, this.medium, (contrastLevel - 0) / .5);
				else if (contrastLevel < 1) return lerp(this.medium, this.high, (contrastLevel - .5) / .5);
				else return this.high;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js
		/**
		* @license
		* Copyright 2023 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* Documents a constraint between two DynamicColors, in which their tones must
		* have a certain distance from each other.
		*
		* Prefer a DynamicColor with a background, this is for special cases when
		* designers want tonal distance, literally contrast, between two colors that
		* don't have a background / foreground relationship or a contrast guarantee.
		*/
		var ToneDeltaPair = class {
			/**
			* Documents a constraint in tone distance between two DynamicColors.
			*
			* The polarity is an adjective that describes "A", compared to "B".
			*
			* For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
			* A's tone should be at least 15 darker than B's.
			*
			* 'nearer' and 'farther' describes closeness to the surface roles. For
			* instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
			* should be 10 lighter than B in light mode, and 10 darker than B in dark
			* mode.
			*
			* @param roleA The first role in a pair.
			* @param roleB The second role in a pair.
			* @param delta Required difference between tones. Absolute value, negative
			* values have undefined behavior.
			* @param polarity The relative relation between tones of roleA and roleB,
			* as described above.
			* @param stayTogether Whether these two roles should stay on the same side of
			* the "awkward zone" (T50-59). This is necessary for certain cases where
			* one role has two backgrounds.
			*/
			constructor(roleA, roleB, delta, polarity, stayTogether) {
				this.roleA = roleA;
				this.roleB = roleB;
				this.delta = delta;
				this.polarity = polarity;
				this.stayTogether = stayTogether;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/dynamiccolor/variant.js
		/**
		* @license
		* Copyright 2022 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* Set of themes supported by Dynamic Color.
		* Instantiate the corresponding subclass, ex. SchemeTonalSpot, to create
		* colors corresponding to the theme.
		*/
		var Variant;
		(function(Variant) {
			Variant[Variant["MONOCHROME"] = 0] = "MONOCHROME";
			Variant[Variant["NEUTRAL"] = 1] = "NEUTRAL";
			Variant[Variant["TONAL_SPOT"] = 2] = "TONAL_SPOT";
			Variant[Variant["VIBRANT"] = 3] = "VIBRANT";
			Variant[Variant["EXPRESSIVE"] = 4] = "EXPRESSIVE";
			Variant[Variant["FIDELITY"] = 5] = "FIDELITY";
			Variant[Variant["CONTENT"] = 6] = "CONTENT";
			Variant[Variant["RAINBOW"] = 7] = "RAINBOW";
			Variant[Variant["FRUIT_SALAD"] = 8] = "FRUIT_SALAD";
		})(Variant || (Variant = {}));
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js
		/**
		* @license
		* Copyright 2022 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		function isFidelity(scheme) {
			return scheme.variant === Variant.FIDELITY || scheme.variant === Variant.CONTENT;
		}
		function isMonochrome(scheme) {
			return scheme.variant === Variant.MONOCHROME;
		}
		function findDesiredChromaByTone(hue, chroma, tone, byDecreasingTone) {
			let answer = tone;
			let closestToChroma = Hct.from(hue, chroma, tone);
			if (closestToChroma.chroma < chroma) {
				let chromaPeak = closestToChroma.chroma;
				while (closestToChroma.chroma < chroma) {
					answer += byDecreasingTone ? -1 : 1;
					const potentialSolution = Hct.from(hue, chroma, answer);
					if (chromaPeak > potentialSolution.chroma) break;
					if (Math.abs(potentialSolution.chroma - chroma) < .4) break;
					if (Math.abs(potentialSolution.chroma - chroma) < Math.abs(closestToChroma.chroma - chroma)) closestToChroma = potentialSolution;
					chromaPeak = Math.max(chromaPeak, potentialSolution.chroma);
				}
			}
			return answer;
		}
		/**
		* DynamicColors for the colors in the Material Design system.
		*/
		var MaterialDynamicColors = class MaterialDynamicColors {
			static highestSurface(s) {
				return s.isDark ? MaterialDynamicColors.surfaceBright : MaterialDynamicColors.surfaceDim;
			}
		};
		MaterialDynamicColors.contentAccentToneDelta = 15;
		MaterialDynamicColors.primaryPaletteKeyColor = DynamicColor.fromPalette({
			name: "primary_palette_key_color",
			palette: (s) => s.primaryPalette,
			tone: (s) => s.primaryPalette.keyColor.tone
		});
		MaterialDynamicColors.secondaryPaletteKeyColor = DynamicColor.fromPalette({
			name: "secondary_palette_key_color",
			palette: (s) => s.secondaryPalette,
			tone: (s) => s.secondaryPalette.keyColor.tone
		});
		MaterialDynamicColors.tertiaryPaletteKeyColor = DynamicColor.fromPalette({
			name: "tertiary_palette_key_color",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => s.tertiaryPalette.keyColor.tone
		});
		MaterialDynamicColors.neutralPaletteKeyColor = DynamicColor.fromPalette({
			name: "neutral_palette_key_color",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.neutralPalette.keyColor.tone
		});
		MaterialDynamicColors.neutralVariantPaletteKeyColor = DynamicColor.fromPalette({
			name: "neutral_variant_palette_key_color",
			palette: (s) => s.neutralVariantPalette,
			tone: (s) => s.neutralVariantPalette.keyColor.tone
		});
		MaterialDynamicColors.background = DynamicColor.fromPalette({
			name: "background",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 6 : 98,
			isBackground: true
		});
		MaterialDynamicColors.onBackground = DynamicColor.fromPalette({
			name: "on_background",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 90 : 10,
			background: (s) => MaterialDynamicColors.background,
			contrastCurve: new ContrastCurve(3, 3, 4.5, 7)
		});
		MaterialDynamicColors.surface = DynamicColor.fromPalette({
			name: "surface",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 6 : 98,
			isBackground: true
		});
		MaterialDynamicColors.surfaceDim = DynamicColor.fromPalette({
			name: "surface_dim",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 6 : new ContrastCurve(87, 87, 80, 75).get(s.contrastLevel),
			isBackground: true
		});
		MaterialDynamicColors.surfaceBright = DynamicColor.fromPalette({
			name: "surface_bright",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? new ContrastCurve(24, 24, 29, 34).get(s.contrastLevel) : 98,
			isBackground: true
		});
		MaterialDynamicColors.surfaceContainerLowest = DynamicColor.fromPalette({
			name: "surface_container_lowest",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? new ContrastCurve(4, 4, 2, 0).get(s.contrastLevel) : 100,
			isBackground: true
		});
		MaterialDynamicColors.surfaceContainerLow = DynamicColor.fromPalette({
			name: "surface_container_low",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? new ContrastCurve(10, 10, 11, 12).get(s.contrastLevel) : new ContrastCurve(96, 96, 96, 95).get(s.contrastLevel),
			isBackground: true
		});
		MaterialDynamicColors.surfaceContainer = DynamicColor.fromPalette({
			name: "surface_container",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? new ContrastCurve(12, 12, 16, 20).get(s.contrastLevel) : new ContrastCurve(94, 94, 92, 90).get(s.contrastLevel),
			isBackground: true
		});
		MaterialDynamicColors.surfaceContainerHigh = DynamicColor.fromPalette({
			name: "surface_container_high",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? new ContrastCurve(17, 17, 21, 25).get(s.contrastLevel) : new ContrastCurve(92, 92, 88, 85).get(s.contrastLevel),
			isBackground: true
		});
		MaterialDynamicColors.surfaceContainerHighest = DynamicColor.fromPalette({
			name: "surface_container_highest",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? new ContrastCurve(22, 22, 26, 30).get(s.contrastLevel) : new ContrastCurve(90, 90, 84, 80).get(s.contrastLevel),
			isBackground: true
		});
		MaterialDynamicColors.onSurface = DynamicColor.fromPalette({
			name: "on_surface",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 90 : 10,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
		});
		MaterialDynamicColors.surfaceVariant = DynamicColor.fromPalette({
			name: "surface_variant",
			palette: (s) => s.neutralVariantPalette,
			tone: (s) => s.isDark ? 30 : 90,
			isBackground: true
		});
		MaterialDynamicColors.onSurfaceVariant = DynamicColor.fromPalette({
			name: "on_surface_variant",
			palette: (s) => s.neutralVariantPalette,
			tone: (s) => s.isDark ? 80 : 30,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
		});
		MaterialDynamicColors.inverseSurface = DynamicColor.fromPalette({
			name: "inverse_surface",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 90 : 20
		});
		MaterialDynamicColors.inverseOnSurface = DynamicColor.fromPalette({
			name: "inverse_on_surface",
			palette: (s) => s.neutralPalette,
			tone: (s) => s.isDark ? 20 : 95,
			background: (s) => MaterialDynamicColors.inverseSurface,
			contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
		});
		MaterialDynamicColors.outline = DynamicColor.fromPalette({
			name: "outline",
			palette: (s) => s.neutralVariantPalette,
			tone: (s) => s.isDark ? 60 : 50,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(1.5, 3, 4.5, 7)
		});
		MaterialDynamicColors.outlineVariant = DynamicColor.fromPalette({
			name: "outline_variant",
			palette: (s) => s.neutralVariantPalette,
			tone: (s) => s.isDark ? 30 : 80,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(1, 1, 3, 4.5)
		});
		MaterialDynamicColors.shadow = DynamicColor.fromPalette({
			name: "shadow",
			palette: (s) => s.neutralPalette,
			tone: (s) => 0
		});
		MaterialDynamicColors.scrim = DynamicColor.fromPalette({
			name: "scrim",
			palette: (s) => s.neutralPalette,
			tone: (s) => 0
		});
		MaterialDynamicColors.surfaceTint = DynamicColor.fromPalette({
			name: "surface_tint",
			palette: (s) => s.primaryPalette,
			tone: (s) => s.isDark ? 80 : 40,
			isBackground: true
		});
		MaterialDynamicColors.primary = DynamicColor.fromPalette({
			name: "primary",
			palette: (s) => s.primaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 100 : 0;
				return s.isDark ? 80 : 40;
			},
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 10, "nearer", false)
		});
		MaterialDynamicColors.onPrimary = DynamicColor.fromPalette({
			name: "on_primary",
			palette: (s) => s.primaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 10 : 90;
				return s.isDark ? 20 : 100;
			},
			background: (s) => MaterialDynamicColors.primary,
			contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
		});
		MaterialDynamicColors.primaryContainer = DynamicColor.fromPalette({
			name: "primary_container",
			palette: (s) => s.primaryPalette,
			tone: (s) => {
				if (isFidelity(s)) return s.sourceColorHct.tone;
				if (isMonochrome(s)) return s.isDark ? 85 : 25;
				return s.isDark ? 30 : 90;
			},
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryContainer, MaterialDynamicColors.primary, 10, "nearer", false)
		});
		MaterialDynamicColors.onPrimaryContainer = DynamicColor.fromPalette({
			name: "on_primary_container",
			palette: (s) => s.primaryPalette,
			tone: (s) => {
				if (isFidelity(s)) return DynamicColor.foregroundTone(MaterialDynamicColors.primaryContainer.tone(s), 4.5);
				if (isMonochrome(s)) return s.isDark ? 0 : 100;
				return s.isDark ? 90 : 30;
			},
			background: (s) => MaterialDynamicColors.primaryContainer,
			contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
		});
		MaterialDynamicColors.inversePrimary = DynamicColor.fromPalette({
			name: "inverse_primary",
			palette: (s) => s.primaryPalette,
			tone: (s) => s.isDark ? 40 : 80,
			background: (s) => MaterialDynamicColors.inverseSurface,
			contrastCurve: new ContrastCurve(3, 4.5, 7, 7)
		});
		MaterialDynamicColors.secondary = DynamicColor.fromPalette({
			name: "secondary",
			palette: (s) => s.secondaryPalette,
			tone: (s) => s.isDark ? 80 : 40,
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 10, "nearer", false)
		});
		MaterialDynamicColors.onSecondary = DynamicColor.fromPalette({
			name: "on_secondary",
			palette: (s) => s.secondaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 10 : 100;
				else return s.isDark ? 20 : 100;
			},
			background: (s) => MaterialDynamicColors.secondary,
			contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
		});
		MaterialDynamicColors.secondaryContainer = DynamicColor.fromPalette({
			name: "secondary_container",
			palette: (s) => s.secondaryPalette,
			tone: (s) => {
				const initialTone = s.isDark ? 30 : 90;
				if (isMonochrome(s)) return s.isDark ? 30 : 85;
				if (!isFidelity(s)) return initialTone;
				return findDesiredChromaByTone(s.secondaryPalette.hue, s.secondaryPalette.chroma, initialTone, s.isDark ? false : true);
			},
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryContainer, MaterialDynamicColors.secondary, 10, "nearer", false)
		});
		MaterialDynamicColors.onSecondaryContainer = DynamicColor.fromPalette({
			name: "on_secondary_container",
			palette: (s) => s.secondaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 90 : 10;
				if (!isFidelity(s)) return s.isDark ? 90 : 30;
				return DynamicColor.foregroundTone(MaterialDynamicColors.secondaryContainer.tone(s), 4.5);
			},
			background: (s) => MaterialDynamicColors.secondaryContainer,
			contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
		});
		MaterialDynamicColors.tertiary = DynamicColor.fromPalette({
			name: "tertiary",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 90 : 25;
				return s.isDark ? 80 : 40;
			},
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 10, "nearer", false)
		});
		MaterialDynamicColors.onTertiary = DynamicColor.fromPalette({
			name: "on_tertiary",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 10 : 90;
				return s.isDark ? 20 : 100;
			},
			background: (s) => MaterialDynamicColors.tertiary,
			contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
		});
		MaterialDynamicColors.tertiaryContainer = DynamicColor.fromPalette({
			name: "tertiary_container",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 60 : 49;
				if (!isFidelity(s)) return s.isDark ? 30 : 90;
				const proposedHct = s.tertiaryPalette.getHct(s.sourceColorHct.tone);
				return DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
			},
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryContainer, MaterialDynamicColors.tertiary, 10, "nearer", false)
		});
		MaterialDynamicColors.onTertiaryContainer = DynamicColor.fromPalette({
			name: "on_tertiary_container",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 0 : 100;
				if (!isFidelity(s)) return s.isDark ? 90 : 30;
				return DynamicColor.foregroundTone(MaterialDynamicColors.tertiaryContainer.tone(s), 4.5);
			},
			background: (s) => MaterialDynamicColors.tertiaryContainer,
			contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
		});
		MaterialDynamicColors.error = DynamicColor.fromPalette({
			name: "error",
			palette: (s) => s.errorPalette,
			tone: (s) => s.isDark ? 80 : 40,
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(3, 4.5, 7, 7),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 10, "nearer", false)
		});
		MaterialDynamicColors.onError = DynamicColor.fromPalette({
			name: "on_error",
			palette: (s) => s.errorPalette,
			tone: (s) => s.isDark ? 20 : 100,
			background: (s) => MaterialDynamicColors.error,
			contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
		});
		MaterialDynamicColors.errorContainer = DynamicColor.fromPalette({
			name: "error_container",
			palette: (s) => s.errorPalette,
			tone: (s) => s.isDark ? 30 : 90,
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.errorContainer, MaterialDynamicColors.error, 10, "nearer", false)
		});
		MaterialDynamicColors.onErrorContainer = DynamicColor.fromPalette({
			name: "on_error_container",
			palette: (s) => s.errorPalette,
			tone: (s) => {
				if (isMonochrome(s)) return s.isDark ? 90 : 10;
				return s.isDark ? 90 : 30;
			},
			background: (s) => MaterialDynamicColors.errorContainer,
			contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
		});
		MaterialDynamicColors.primaryFixed = DynamicColor.fromPalette({
			name: "primary_fixed",
			palette: (s) => s.primaryPalette,
			tone: (s) => isMonochrome(s) ? 40 : 90,
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
		});
		MaterialDynamicColors.primaryFixedDim = DynamicColor.fromPalette({
			name: "primary_fixed_dim",
			palette: (s) => s.primaryPalette,
			tone: (s) => isMonochrome(s) ? 30 : 80,
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.primaryFixed, MaterialDynamicColors.primaryFixedDim, 10, "lighter", true)
		});
		MaterialDynamicColors.onPrimaryFixed = DynamicColor.fromPalette({
			name: "on_primary_fixed",
			palette: (s) => s.primaryPalette,
			tone: (s) => isMonochrome(s) ? 100 : 10,
			background: (s) => MaterialDynamicColors.primaryFixedDim,
			secondBackground: (s) => MaterialDynamicColors.primaryFixed,
			contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
		});
		MaterialDynamicColors.onPrimaryFixedVariant = DynamicColor.fromPalette({
			name: "on_primary_fixed_variant",
			palette: (s) => s.primaryPalette,
			tone: (s) => isMonochrome(s) ? 90 : 30,
			background: (s) => MaterialDynamicColors.primaryFixedDim,
			secondBackground: (s) => MaterialDynamicColors.primaryFixed,
			contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
		});
		MaterialDynamicColors.secondaryFixed = DynamicColor.fromPalette({
			name: "secondary_fixed",
			palette: (s) => s.secondaryPalette,
			tone: (s) => isMonochrome(s) ? 80 : 90,
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
		});
		MaterialDynamicColors.secondaryFixedDim = DynamicColor.fromPalette({
			name: "secondary_fixed_dim",
			palette: (s) => s.secondaryPalette,
			tone: (s) => isMonochrome(s) ? 70 : 80,
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.secondaryFixed, MaterialDynamicColors.secondaryFixedDim, 10, "lighter", true)
		});
		MaterialDynamicColors.onSecondaryFixed = DynamicColor.fromPalette({
			name: "on_secondary_fixed",
			palette: (s) => s.secondaryPalette,
			tone: (s) => 10,
			background: (s) => MaterialDynamicColors.secondaryFixedDim,
			secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
			contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
		});
		MaterialDynamicColors.onSecondaryFixedVariant = DynamicColor.fromPalette({
			name: "on_secondary_fixed_variant",
			palette: (s) => s.secondaryPalette,
			tone: (s) => isMonochrome(s) ? 25 : 30,
			background: (s) => MaterialDynamicColors.secondaryFixedDim,
			secondBackground: (s) => MaterialDynamicColors.secondaryFixed,
			contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
		});
		MaterialDynamicColors.tertiaryFixed = DynamicColor.fromPalette({
			name: "tertiary_fixed",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => isMonochrome(s) ? 40 : 90,
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
		});
		MaterialDynamicColors.tertiaryFixedDim = DynamicColor.fromPalette({
			name: "tertiary_fixed_dim",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => isMonochrome(s) ? 30 : 80,
			isBackground: true,
			background: (s) => MaterialDynamicColors.highestSurface(s),
			contrastCurve: new ContrastCurve(1, 1, 3, 4.5),
			toneDeltaPair: (s) => new ToneDeltaPair(MaterialDynamicColors.tertiaryFixed, MaterialDynamicColors.tertiaryFixedDim, 10, "lighter", true)
		});
		MaterialDynamicColors.onTertiaryFixed = DynamicColor.fromPalette({
			name: "on_tertiary_fixed",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => isMonochrome(s) ? 100 : 10,
			background: (s) => MaterialDynamicColors.tertiaryFixedDim,
			secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
			contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
		});
		MaterialDynamicColors.onTertiaryFixedVariant = DynamicColor.fromPalette({
			name: "on_tertiary_fixed_variant",
			palette: (s) => s.tertiaryPalette,
			tone: (s) => isMonochrome(s) ? 90 : 30,
			background: (s) => MaterialDynamicColors.tertiaryFixedDim,
			secondBackground: (s) => MaterialDynamicColors.tertiaryFixed,
			contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
		});
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/dynamiccolor/dynamic_scheme.js
		/**
		* @license
		* Copyright 2022 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* Constructed by a set of values representing the current UI state (such as
		* whether or not its dark theme, what the theme style is, etc.), and
		* provides a set of TonalPalettes that can create colors that fit in
		* with the theme style. Used by DynamicColor to resolve into a color.
		*/
		var DynamicScheme = class {
			constructor(args) {
				this.sourceColorArgb = args.sourceColorArgb;
				this.variant = args.variant;
				this.contrastLevel = args.contrastLevel;
				this.isDark = args.isDark;
				this.sourceColorHct = Hct.fromInt(args.sourceColorArgb);
				this.primaryPalette = args.primaryPalette;
				this.secondaryPalette = args.secondaryPalette;
				this.tertiaryPalette = args.tertiaryPalette;
				this.neutralPalette = args.neutralPalette;
				this.neutralVariantPalette = args.neutralVariantPalette;
				this.errorPalette = TonalPalette.fromHueAndChroma(25, 84);
			}
			/**
			* Support design spec'ing Dynamic Color by schemes that specify hue
			* rotations that should be applied at certain breakpoints.
			* @param sourceColor the source color of the theme, in HCT.
			* @param hues The "breakpoints", i.e. the hues at which a rotation should
			* be apply.
			* @param rotations The rotation that should be applied when source color's
			* hue is >= the same index in hues array, and <= the hue at the next index
			* in hues array.
			*/
			static getRotatedHue(sourceColor, hues, rotations) {
				const sourceHue = sourceColor.hue;
				if (hues.length !== rotations.length) throw new Error(`mismatch between hue length ${hues.length} & rotations ${rotations.length}`);
				if (rotations.length === 1) return sanitizeDegreesDouble(sourceColor.hue + rotations[0]);
				const size = hues.length;
				for (let i = 0; i <= size - 2; i++) {
					const thisHue = hues[i];
					const nextHue = hues[i + 1];
					if (thisHue < sourceHue && sourceHue < nextHue) return sanitizeDegreesDouble(sourceHue + rotations[i]);
				}
				return sourceHue;
			}
			getArgb(dynamicColor) {
				return dynamicColor.getArgb(this);
			}
			getHct(dynamicColor) {
				return dynamicColor.getHct(this);
			}
			get primaryPaletteKeyColor() {
				return this.getArgb(MaterialDynamicColors.primaryPaletteKeyColor);
			}
			get secondaryPaletteKeyColor() {
				return this.getArgb(MaterialDynamicColors.secondaryPaletteKeyColor);
			}
			get tertiaryPaletteKeyColor() {
				return this.getArgb(MaterialDynamicColors.tertiaryPaletteKeyColor);
			}
			get neutralPaletteKeyColor() {
				return this.getArgb(MaterialDynamicColors.neutralPaletteKeyColor);
			}
			get neutralVariantPaletteKeyColor() {
				return this.getArgb(MaterialDynamicColors.neutralVariantPaletteKeyColor);
			}
			get background() {
				return this.getArgb(MaterialDynamicColors.background);
			}
			get onBackground() {
				return this.getArgb(MaterialDynamicColors.onBackground);
			}
			get surface() {
				return this.getArgb(MaterialDynamicColors.surface);
			}
			get surfaceDim() {
				return this.getArgb(MaterialDynamicColors.surfaceDim);
			}
			get surfaceBright() {
				return this.getArgb(MaterialDynamicColors.surfaceBright);
			}
			get surfaceContainerLowest() {
				return this.getArgb(MaterialDynamicColors.surfaceContainerLowest);
			}
			get surfaceContainerLow() {
				return this.getArgb(MaterialDynamicColors.surfaceContainerLow);
			}
			get surfaceContainer() {
				return this.getArgb(MaterialDynamicColors.surfaceContainer);
			}
			get surfaceContainerHigh() {
				return this.getArgb(MaterialDynamicColors.surfaceContainerHigh);
			}
			get surfaceContainerHighest() {
				return this.getArgb(MaterialDynamicColors.surfaceContainerHighest);
			}
			get onSurface() {
				return this.getArgb(MaterialDynamicColors.onSurface);
			}
			get surfaceVariant() {
				return this.getArgb(MaterialDynamicColors.surfaceVariant);
			}
			get onSurfaceVariant() {
				return this.getArgb(MaterialDynamicColors.onSurfaceVariant);
			}
			get inverseSurface() {
				return this.getArgb(MaterialDynamicColors.inverseSurface);
			}
			get inverseOnSurface() {
				return this.getArgb(MaterialDynamicColors.inverseOnSurface);
			}
			get outline() {
				return this.getArgb(MaterialDynamicColors.outline);
			}
			get outlineVariant() {
				return this.getArgb(MaterialDynamicColors.outlineVariant);
			}
			get shadow() {
				return this.getArgb(MaterialDynamicColors.shadow);
			}
			get scrim() {
				return this.getArgb(MaterialDynamicColors.scrim);
			}
			get surfaceTint() {
				return this.getArgb(MaterialDynamicColors.surfaceTint);
			}
			get primary() {
				return this.getArgb(MaterialDynamicColors.primary);
			}
			get onPrimary() {
				return this.getArgb(MaterialDynamicColors.onPrimary);
			}
			get primaryContainer() {
				return this.getArgb(MaterialDynamicColors.primaryContainer);
			}
			get onPrimaryContainer() {
				return this.getArgb(MaterialDynamicColors.onPrimaryContainer);
			}
			get inversePrimary() {
				return this.getArgb(MaterialDynamicColors.inversePrimary);
			}
			get secondary() {
				return this.getArgb(MaterialDynamicColors.secondary);
			}
			get onSecondary() {
				return this.getArgb(MaterialDynamicColors.onSecondary);
			}
			get secondaryContainer() {
				return this.getArgb(MaterialDynamicColors.secondaryContainer);
			}
			get onSecondaryContainer() {
				return this.getArgb(MaterialDynamicColors.onSecondaryContainer);
			}
			get tertiary() {
				return this.getArgb(MaterialDynamicColors.tertiary);
			}
			get onTertiary() {
				return this.getArgb(MaterialDynamicColors.onTertiary);
			}
			get tertiaryContainer() {
				return this.getArgb(MaterialDynamicColors.tertiaryContainer);
			}
			get onTertiaryContainer() {
				return this.getArgb(MaterialDynamicColors.onTertiaryContainer);
			}
			get error() {
				return this.getArgb(MaterialDynamicColors.error);
			}
			get onError() {
				return this.getArgb(MaterialDynamicColors.onError);
			}
			get errorContainer() {
				return this.getArgb(MaterialDynamicColors.errorContainer);
			}
			get onErrorContainer() {
				return this.getArgb(MaterialDynamicColors.onErrorContainer);
			}
			get primaryFixed() {
				return this.getArgb(MaterialDynamicColors.primaryFixed);
			}
			get primaryFixedDim() {
				return this.getArgb(MaterialDynamicColors.primaryFixedDim);
			}
			get onPrimaryFixed() {
				return this.getArgb(MaterialDynamicColors.onPrimaryFixed);
			}
			get onPrimaryFixedVariant() {
				return this.getArgb(MaterialDynamicColors.onPrimaryFixedVariant);
			}
			get secondaryFixed() {
				return this.getArgb(MaterialDynamicColors.secondaryFixed);
			}
			get secondaryFixedDim() {
				return this.getArgb(MaterialDynamicColors.secondaryFixedDim);
			}
			get onSecondaryFixed() {
				return this.getArgb(MaterialDynamicColors.onSecondaryFixed);
			}
			get onSecondaryFixedVariant() {
				return this.getArgb(MaterialDynamicColors.onSecondaryFixedVariant);
			}
			get tertiaryFixed() {
				return this.getArgb(MaterialDynamicColors.tertiaryFixed);
			}
			get tertiaryFixedDim() {
				return this.getArgb(MaterialDynamicColors.tertiaryFixedDim);
			}
			get onTertiaryFixed() {
				return this.getArgb(MaterialDynamicColors.onTertiaryFixed);
			}
			get onTertiaryFixedVariant() {
				return this.getArgb(MaterialDynamicColors.onTertiaryFixedVariant);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/palettes/core_palette.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* An intermediate concept between the key color for a UI theme, and a full
		* color scheme. 5 sets of tones are generated, all except one use the same hue
		* as the key color, and all vary in chroma.
		*/
		var CorePalette = class CorePalette {
			/**
			* @param argb ARGB representation of a color
			*/
			static of(argb) {
				return new CorePalette(argb, false);
			}
			/**
			* @param argb ARGB representation of a color
			*/
			static contentOf(argb) {
				return new CorePalette(argb, true);
			}
			/**
			* Create a [CorePalette] from a set of colors
			*/
			static fromColors(colors) {
				return CorePalette.createPaletteFromColors(false, colors);
			}
			/**
			* Create a content [CorePalette] from a set of colors
			*/
			static contentFromColors(colors) {
				return CorePalette.createPaletteFromColors(true, colors);
			}
			static createPaletteFromColors(content, colors) {
				const palette = new CorePalette(colors.primary, content);
				if (colors.secondary) palette.a2 = new CorePalette(colors.secondary, content).a1;
				if (colors.tertiary) palette.a3 = new CorePalette(colors.tertiary, content).a1;
				if (colors.error) palette.error = new CorePalette(colors.error, content).a1;
				if (colors.neutral) palette.n1 = new CorePalette(colors.neutral, content).n1;
				if (colors.neutralVariant) palette.n2 = new CorePalette(colors.neutralVariant, content).n2;
				return palette;
			}
			constructor(argb, isContent) {
				const hct = Hct.fromInt(argb);
				const hue = hct.hue;
				const chroma = hct.chroma;
				if (isContent) {
					this.a1 = TonalPalette.fromHueAndChroma(hue, chroma);
					this.a2 = TonalPalette.fromHueAndChroma(hue, chroma / 3);
					this.a3 = TonalPalette.fromHueAndChroma(hue + 60, chroma / 2);
					this.n1 = TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 12, 4));
					this.n2 = TonalPalette.fromHueAndChroma(hue, Math.min(chroma / 6, 8));
				} else {
					this.a1 = TonalPalette.fromHueAndChroma(hue, Math.max(48, chroma));
					this.a2 = TonalPalette.fromHueAndChroma(hue, 16);
					this.a3 = TonalPalette.fromHueAndChroma(hue + 60, 24);
					this.n1 = TonalPalette.fromHueAndChroma(hue, 4);
					this.n2 = TonalPalette.fromHueAndChroma(hue, 8);
				}
				this.error = TonalPalette.fromHueAndChroma(25, 84);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/quantize/lab_point_provider.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* Provides conversions needed for K-Means quantization. Converting input to
		* points, and converting the final state of the K-Means algorithm to colors.
		*/
		var LabPointProvider = class {
			/**
			* Convert a color represented in ARGB to a 3-element array of L*a*b*
			* coordinates of the color.
			*/
			fromInt(argb) {
				return labFromArgb(argb);
			}
			/**
			* Convert a 3-element array to a color represented in ARGB.
			*/
			toInt(point) {
				return argbFromLab(point[0], point[1], point[2]);
			}
			/**
			* Standard CIE 1976 delta E formula also takes the square root, unneeded
			* here. This method is used by quantization algorithms to compare distance,
			* and the relative ordering is the same, with or without a square root.
			*
			* This relatively minor optimization is helpful because this method is
			* called at least once for each pixel in an image.
			*/
			distance(from, to) {
				const dL = from[0] - to[0];
				const dA = from[1] - to[1];
				const dB = from[2] - to[2];
				return dL * dL + dA * dA + dB * dB;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		const MAX_ITERATIONS = 10;
		const MIN_MOVEMENT_DISTANCE = 3;
		/**
		* An image quantizer that improves on the speed of a standard K-Means algorithm
		* by implementing several optimizations, including deduping identical pixels
		* and a triangle inequality rule that reduces the number of comparisons needed
		* to identify which cluster a point should be moved to.
		*
		* Wsmeans stands for Weighted Square Means.
		*
		* This algorithm was designed by M. Emre Celebi, and was found in their 2011
		* paper, Improving the Performance of K-Means for Color Quantization.
		* https://arxiv.org/abs/1101.0395
		*/
		var QuantizerWsmeans = class {
			/**
			* @param inputPixels Colors in ARGB format.
			* @param startingClusters Defines the initial state of the quantizer. Passing
			*     an empty array is fine, the implementation will create its own initial
			*     state that leads to reproducible results for the same inputs.
			*     Passing an array that is the result of Wu quantization leads to higher
			*     quality results.
			* @param maxColors The number of colors to divide the image into. A lower
			*     number of colors may be returned.
			* @return Colors in ARGB format.
			*/
			static quantize(inputPixels, startingClusters, maxColors) {
				const pixelToCount = /* @__PURE__ */ new Map();
				const points = new Array();
				const pixels = new Array();
				const pointProvider = new LabPointProvider();
				let pointCount = 0;
				for (let i = 0; i < inputPixels.length; i++) {
					const inputPixel = inputPixels[i];
					const pixelCount = pixelToCount.get(inputPixel);
					if (pixelCount === void 0) {
						pointCount++;
						points.push(pointProvider.fromInt(inputPixel));
						pixels.push(inputPixel);
						pixelToCount.set(inputPixel, 1);
					} else pixelToCount.set(inputPixel, pixelCount + 1);
				}
				const counts = new Array();
				for (let i = 0; i < pointCount; i++) {
					const pixel = pixels[i];
					const count = pixelToCount.get(pixel);
					if (count !== void 0) counts[i] = count;
				}
				let clusterCount = Math.min(maxColors, pointCount);
				if (startingClusters.length > 0) clusterCount = Math.min(clusterCount, startingClusters.length);
				const clusters = new Array();
				for (let i = 0; i < startingClusters.length; i++) clusters.push(pointProvider.fromInt(startingClusters[i]));
				const additionalClustersNeeded = clusterCount - clusters.length;
				if (startingClusters.length === 0 && additionalClustersNeeded > 0) for (let i = 0; i < additionalClustersNeeded; i++) {
					const l = Math.random() * 100;
					const a = Math.random() * 201 + -100;
					const b = Math.random() * 201 + -100;
					clusters.push(new Array(l, a, b));
				}
				const clusterIndices = new Array();
				for (let i = 0; i < pointCount; i++) clusterIndices.push(Math.floor(Math.random() * clusterCount));
				const indexMatrix = new Array();
				for (let i = 0; i < clusterCount; i++) {
					indexMatrix.push(new Array());
					for (let j = 0; j < clusterCount; j++) indexMatrix[i].push(0);
				}
				const distanceToIndexMatrix = new Array();
				for (let i = 0; i < clusterCount; i++) {
					distanceToIndexMatrix.push(new Array());
					for (let j = 0; j < clusterCount; j++) distanceToIndexMatrix[i].push(new DistanceAndIndex());
				}
				const pixelCountSums = new Array();
				for (let i = 0; i < clusterCount; i++) pixelCountSums.push(0);
				for (let iteration = 0; iteration < MAX_ITERATIONS; iteration++) {
					for (let i = 0; i < clusterCount; i++) {
						for (let j = i + 1; j < clusterCount; j++) {
							const distance = pointProvider.distance(clusters[i], clusters[j]);
							distanceToIndexMatrix[j][i].distance = distance;
							distanceToIndexMatrix[j][i].index = i;
							distanceToIndexMatrix[i][j].distance = distance;
							distanceToIndexMatrix[i][j].index = j;
						}
						distanceToIndexMatrix[i].sort();
						for (let j = 0; j < clusterCount; j++) indexMatrix[i][j] = distanceToIndexMatrix[i][j].index;
					}
					let pointsMoved = 0;
					for (let i = 0; i < pointCount; i++) {
						const point = points[i];
						const previousClusterIndex = clusterIndices[i];
						const previousCluster = clusters[previousClusterIndex];
						const previousDistance = pointProvider.distance(point, previousCluster);
						let minimumDistance = previousDistance;
						let newClusterIndex = -1;
						for (let j = 0; j < clusterCount; j++) {
							if (distanceToIndexMatrix[previousClusterIndex][j].distance >= 4 * previousDistance) continue;
							const distance = pointProvider.distance(point, clusters[j]);
							if (distance < minimumDistance) {
								minimumDistance = distance;
								newClusterIndex = j;
							}
						}
						if (newClusterIndex !== -1) {
							if (Math.abs(Math.sqrt(minimumDistance) - Math.sqrt(previousDistance)) > MIN_MOVEMENT_DISTANCE) {
								pointsMoved++;
								clusterIndices[i] = newClusterIndex;
							}
						}
					}
					if (pointsMoved === 0 && iteration !== 0) break;
					const componentASums = new Array(clusterCount).fill(0);
					const componentBSums = new Array(clusterCount).fill(0);
					const componentCSums = new Array(clusterCount).fill(0);
					for (let i = 0; i < clusterCount; i++) pixelCountSums[i] = 0;
					for (let i = 0; i < pointCount; i++) {
						const clusterIndex = clusterIndices[i];
						const point = points[i];
						const count = counts[i];
						pixelCountSums[clusterIndex] += count;
						componentASums[clusterIndex] += point[0] * count;
						componentBSums[clusterIndex] += point[1] * count;
						componentCSums[clusterIndex] += point[2] * count;
					}
					for (let i = 0; i < clusterCount; i++) {
						const count = pixelCountSums[i];
						if (count === 0) {
							clusters[i] = [
								0,
								0,
								0
							];
							continue;
						}
						const a = componentASums[i] / count;
						const b = componentBSums[i] / count;
						const c = componentCSums[i] / count;
						clusters[i] = [
							a,
							b,
							c
						];
					}
				}
				const argbToPopulation = /* @__PURE__ */ new Map();
				for (let i = 0; i < clusterCount; i++) {
					const count = pixelCountSums[i];
					if (count === 0) continue;
					const possibleNewCluster = pointProvider.toInt(clusters[i]);
					if (argbToPopulation.has(possibleNewCluster)) continue;
					argbToPopulation.set(possibleNewCluster, count);
				}
				return argbToPopulation;
			}
		};
		/**
		*  A wrapper for maintaining a table of distances between K-Means clusters.
		*/
		var DistanceAndIndex = class {
			constructor() {
				this.distance = -1;
				this.index = -1;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/quantize/quantizer_map.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* Quantizes an image into a map, with keys of ARGB colors, and values of the
		* number of times that color appears in the image.
		*/
		var QuantizerMap = class {
			/**
			* @param pixels Colors in ARGB format.
			* @return A Map with keys of ARGB colors, and values of the number of times
			*     the color appears in the image.
			*/
			static quantize(pixels) {
				const countByColor = /* @__PURE__ */ new Map();
				for (let i = 0; i < pixels.length; i++) {
					const pixel = pixels[i];
					if (alphaFromArgb(pixel) < 255) continue;
					countByColor.set(pixel, (countByColor.get(pixel) ?? 0) + 1);
				}
				return countByColor;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/quantize/quantizer_wu.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		const INDEX_BITS = 5;
		const SIDE_LENGTH = 33;
		const TOTAL_SIZE = 35937;
		const directions = {
			RED: "red",
			GREEN: "green",
			BLUE: "blue"
		};
		/**
		* An image quantizer that divides the image's pixels into clusters by
		* recursively cutting an RGB cube, based on the weight of pixels in each area
		* of the cube.
		*
		* The algorithm was described by Xiaolin Wu in Graphic Gems II, published in
		* 1991.
		*/
		var QuantizerWu = class {
			constructor(weights = [], momentsR = [], momentsG = [], momentsB = [], moments = [], cubes = []) {
				this.weights = weights;
				this.momentsR = momentsR;
				this.momentsG = momentsG;
				this.momentsB = momentsB;
				this.moments = moments;
				this.cubes = cubes;
			}
			/**
			* @param pixels Colors in ARGB format.
			* @param maxColors The number of colors to divide the image into. A lower
			*     number of colors may be returned.
			* @return Colors in ARGB format.
			*/
			quantize(pixels, maxColors) {
				this.constructHistogram(pixels);
				this.computeMoments();
				const createBoxesResult = this.createBoxes(maxColors);
				return this.createResult(createBoxesResult.resultCount);
			}
			constructHistogram(pixels) {
				this.weights = Array.from({ length: TOTAL_SIZE }).fill(0);
				this.momentsR = Array.from({ length: TOTAL_SIZE }).fill(0);
				this.momentsG = Array.from({ length: TOTAL_SIZE }).fill(0);
				this.momentsB = Array.from({ length: TOTAL_SIZE }).fill(0);
				this.moments = Array.from({ length: TOTAL_SIZE }).fill(0);
				const countByColor = QuantizerMap.quantize(pixels);
				for (const [pixel, count] of countByColor.entries()) {
					const red = redFromArgb(pixel);
					const green = greenFromArgb(pixel);
					const blue = blueFromArgb(pixel);
					const bitsToRemove = 3;
					const iR = (red >> bitsToRemove) + 1;
					const iG = (green >> bitsToRemove) + 1;
					const iB = (blue >> bitsToRemove) + 1;
					const index = this.getIndex(iR, iG, iB);
					this.weights[index] = (this.weights[index] ?? 0) + count;
					this.momentsR[index] += count * red;
					this.momentsG[index] += count * green;
					this.momentsB[index] += count * blue;
					this.moments[index] += count * (red * red + green * green + blue * blue);
				}
			}
			computeMoments() {
				for (let r = 1; r < SIDE_LENGTH; r++) {
					const area = Array.from({ length: SIDE_LENGTH }).fill(0);
					const areaR = Array.from({ length: SIDE_LENGTH }).fill(0);
					const areaG = Array.from({ length: SIDE_LENGTH }).fill(0);
					const areaB = Array.from({ length: SIDE_LENGTH }).fill(0);
					const area2 = Array.from({ length: SIDE_LENGTH }).fill(0);
					for (let g = 1; g < SIDE_LENGTH; g++) {
						let line = 0;
						let lineR = 0;
						let lineG = 0;
						let lineB = 0;
						let line2 = 0;
						for (let b = 1; b < SIDE_LENGTH; b++) {
							const index = this.getIndex(r, g, b);
							line += this.weights[index];
							lineR += this.momentsR[index];
							lineG += this.momentsG[index];
							lineB += this.momentsB[index];
							line2 += this.moments[index];
							area[b] += line;
							areaR[b] += lineR;
							areaG[b] += lineG;
							areaB[b] += lineB;
							area2[b] += line2;
							const previousIndex = this.getIndex(r - 1, g, b);
							this.weights[index] = this.weights[previousIndex] + area[b];
							this.momentsR[index] = this.momentsR[previousIndex] + areaR[b];
							this.momentsG[index] = this.momentsG[previousIndex] + areaG[b];
							this.momentsB[index] = this.momentsB[previousIndex] + areaB[b];
							this.moments[index] = this.moments[previousIndex] + area2[b];
						}
					}
				}
			}
			createBoxes(maxColors) {
				this.cubes = Array.from({ length: maxColors }).fill(0).map(() => new Box());
				const volumeVariance = Array.from({ length: maxColors }).fill(0);
				this.cubes[0].r0 = 0;
				this.cubes[0].g0 = 0;
				this.cubes[0].b0 = 0;
				this.cubes[0].r1 = 32;
				this.cubes[0].g1 = 32;
				this.cubes[0].b1 = 32;
				let generatedColorCount = maxColors;
				let next = 0;
				for (let i = 1; i < maxColors; i++) {
					if (this.cut(this.cubes[next], this.cubes[i])) {
						volumeVariance[next] = this.cubes[next].vol > 1 ? this.variance(this.cubes[next]) : 0;
						volumeVariance[i] = this.cubes[i].vol > 1 ? this.variance(this.cubes[i]) : 0;
					} else {
						volumeVariance[next] = 0;
						i--;
					}
					next = 0;
					let temp = volumeVariance[0];
					for (let j = 1; j <= i; j++) if (volumeVariance[j] > temp) {
						temp = volumeVariance[j];
						next = j;
					}
					if (temp <= 0) {
						generatedColorCount = i + 1;
						break;
					}
				}
				return new CreateBoxesResult(maxColors, generatedColorCount);
			}
			createResult(colorCount) {
				const colors = [];
				for (let i = 0; i < colorCount; ++i) {
					const cube = this.cubes[i];
					const weight = this.volume(cube, this.weights);
					if (weight > 0) {
						const r = Math.round(this.volume(cube, this.momentsR) / weight);
						const g = Math.round(this.volume(cube, this.momentsG) / weight);
						const b = Math.round(this.volume(cube, this.momentsB) / weight);
						const color = 255 << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255;
						colors.push(color);
					}
				}
				return colors;
			}
			variance(cube) {
				const dr = this.volume(cube, this.momentsR);
				const dg = this.volume(cube, this.momentsG);
				const db = this.volume(cube, this.momentsB);
				return this.moments[this.getIndex(cube.r1, cube.g1, cube.b1)] - this.moments[this.getIndex(cube.r1, cube.g1, cube.b0)] - this.moments[this.getIndex(cube.r1, cube.g0, cube.b1)] + this.moments[this.getIndex(cube.r1, cube.g0, cube.b0)] - this.moments[this.getIndex(cube.r0, cube.g1, cube.b1)] + this.moments[this.getIndex(cube.r0, cube.g1, cube.b0)] + this.moments[this.getIndex(cube.r0, cube.g0, cube.b1)] - this.moments[this.getIndex(cube.r0, cube.g0, cube.b0)] - (dr * dr + dg * dg + db * db) / this.volume(cube, this.weights);
			}
			cut(one, two) {
				const wholeR = this.volume(one, this.momentsR);
				const wholeG = this.volume(one, this.momentsG);
				const wholeB = this.volume(one, this.momentsB);
				const wholeW = this.volume(one, this.weights);
				const maxRResult = this.maximize(one, directions.RED, one.r0 + 1, one.r1, wholeR, wholeG, wholeB, wholeW);
				const maxGResult = this.maximize(one, directions.GREEN, one.g0 + 1, one.g1, wholeR, wholeG, wholeB, wholeW);
				const maxBResult = this.maximize(one, directions.BLUE, one.b0 + 1, one.b1, wholeR, wholeG, wholeB, wholeW);
				let direction;
				const maxR = maxRResult.maximum;
				const maxG = maxGResult.maximum;
				const maxB = maxBResult.maximum;
				if (maxR >= maxG && maxR >= maxB) {
					if (maxRResult.cutLocation < 0) return false;
					direction = directions.RED;
				} else if (maxG >= maxR && maxG >= maxB) direction = directions.GREEN;
				else direction = directions.BLUE;
				two.r1 = one.r1;
				two.g1 = one.g1;
				two.b1 = one.b1;
				switch (direction) {
					case directions.RED:
						one.r1 = maxRResult.cutLocation;
						two.r0 = one.r1;
						two.g0 = one.g0;
						two.b0 = one.b0;
						break;
					case directions.GREEN:
						one.g1 = maxGResult.cutLocation;
						two.r0 = one.r0;
						two.g0 = one.g1;
						two.b0 = one.b0;
						break;
					case directions.BLUE:
						one.b1 = maxBResult.cutLocation;
						two.r0 = one.r0;
						two.g0 = one.g0;
						two.b0 = one.b1;
						break;
					default: throw new Error("unexpected direction " + direction);
				}
				one.vol = (one.r1 - one.r0) * (one.g1 - one.g0) * (one.b1 - one.b0);
				two.vol = (two.r1 - two.r0) * (two.g1 - two.g0) * (two.b1 - two.b0);
				return true;
			}
			maximize(cube, direction, first, last, wholeR, wholeG, wholeB, wholeW) {
				const bottomR = this.bottom(cube, direction, this.momentsR);
				const bottomG = this.bottom(cube, direction, this.momentsG);
				const bottomB = this.bottom(cube, direction, this.momentsB);
				const bottomW = this.bottom(cube, direction, this.weights);
				let max = 0;
				let cut = -1;
				let halfR = 0;
				let halfG = 0;
				let halfB = 0;
				let halfW = 0;
				for (let i = first; i < last; i++) {
					halfR = bottomR + this.top(cube, direction, i, this.momentsR);
					halfG = bottomG + this.top(cube, direction, i, this.momentsG);
					halfB = bottomB + this.top(cube, direction, i, this.momentsB);
					halfW = bottomW + this.top(cube, direction, i, this.weights);
					if (halfW === 0) continue;
					let tempNumerator = (halfR * halfR + halfG * halfG + halfB * halfB) * 1;
					let tempDenominator = halfW * 1;
					let temp = tempNumerator / tempDenominator;
					halfR = wholeR - halfR;
					halfG = wholeG - halfG;
					halfB = wholeB - halfB;
					halfW = wholeW - halfW;
					if (halfW === 0) continue;
					tempNumerator = (halfR * halfR + halfG * halfG + halfB * halfB) * 1;
					tempDenominator = halfW * 1;
					temp += tempNumerator / tempDenominator;
					if (temp > max) {
						max = temp;
						cut = i;
					}
				}
				return new MaximizeResult(cut, max);
			}
			volume(cube, moment) {
				return moment[this.getIndex(cube.r1, cube.g1, cube.b1)] - moment[this.getIndex(cube.r1, cube.g1, cube.b0)] - moment[this.getIndex(cube.r1, cube.g0, cube.b1)] + moment[this.getIndex(cube.r1, cube.g0, cube.b0)] - moment[this.getIndex(cube.r0, cube.g1, cube.b1)] + moment[this.getIndex(cube.r0, cube.g1, cube.b0)] + moment[this.getIndex(cube.r0, cube.g0, cube.b1)] - moment[this.getIndex(cube.r0, cube.g0, cube.b0)];
			}
			bottom(cube, direction, moment) {
				switch (direction) {
					case directions.RED: return -moment[this.getIndex(cube.r0, cube.g1, cube.b1)] + moment[this.getIndex(cube.r0, cube.g1, cube.b0)] + moment[this.getIndex(cube.r0, cube.g0, cube.b1)] - moment[this.getIndex(cube.r0, cube.g0, cube.b0)];
					case directions.GREEN: return -moment[this.getIndex(cube.r1, cube.g0, cube.b1)] + moment[this.getIndex(cube.r1, cube.g0, cube.b0)] + moment[this.getIndex(cube.r0, cube.g0, cube.b1)] - moment[this.getIndex(cube.r0, cube.g0, cube.b0)];
					case directions.BLUE: return -moment[this.getIndex(cube.r1, cube.g1, cube.b0)] + moment[this.getIndex(cube.r1, cube.g0, cube.b0)] + moment[this.getIndex(cube.r0, cube.g1, cube.b0)] - moment[this.getIndex(cube.r0, cube.g0, cube.b0)];
					default: throw new Error("unexpected direction $direction");
				}
			}
			top(cube, direction, position, moment) {
				switch (direction) {
					case directions.RED: return moment[this.getIndex(position, cube.g1, cube.b1)] - moment[this.getIndex(position, cube.g1, cube.b0)] - moment[this.getIndex(position, cube.g0, cube.b1)] + moment[this.getIndex(position, cube.g0, cube.b0)];
					case directions.GREEN: return moment[this.getIndex(cube.r1, position, cube.b1)] - moment[this.getIndex(cube.r1, position, cube.b0)] - moment[this.getIndex(cube.r0, position, cube.b1)] + moment[this.getIndex(cube.r0, position, cube.b0)];
					case directions.BLUE: return moment[this.getIndex(cube.r1, cube.g1, position)] - moment[this.getIndex(cube.r1, cube.g0, position)] - moment[this.getIndex(cube.r0, cube.g1, position)] + moment[this.getIndex(cube.r0, cube.g0, position)];
					default: throw new Error("unexpected direction $direction");
				}
			}
			getIndex(r, g, b) {
				return (r << 10) + (r << 6) + r + (g << INDEX_BITS) + g + b;
			}
		};
		/**
		* Keeps track of the state of each box created as the Wu  quantization
		* algorithm progresses through dividing the image's pixels as plotted in RGB.
		*/
		var Box = class {
			constructor(r0 = 0, r1 = 0, g0 = 0, g1 = 0, b0 = 0, b1 = 0, vol = 0) {
				this.r0 = r0;
				this.r1 = r1;
				this.g0 = g0;
				this.g1 = g1;
				this.b0 = b0;
				this.b1 = b1;
				this.vol = vol;
			}
		};
		/**
		* Represents final result of Wu algorithm.
		*/
		var CreateBoxesResult = class {
			/**
			* @param requestedCount how many colors the caller asked to be returned from
			*     quantization.
			* @param resultCount the actual number of colors achieved from quantization.
			*     May be lower than the requested count.
			*/
			constructor(requestedCount, resultCount) {
				this.requestedCount = requestedCount;
				this.resultCount = resultCount;
			}
		};
		/**
		* Represents the result of calculating where to cut an existing box in such
		* a way to maximize variance between the two new boxes created by a cut.
		*/
		var MaximizeResult = class {
			constructor(cutLocation, maximum) {
				this.cutLocation = cutLocation;
				this.maximum = maximum;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* An image quantizer that improves on the quality of a standard K-Means
		* algorithm by setting the K-Means initial state to the output of a Wu
		* quantizer, instead of random centroids. Improves on speed by several
		* optimizations, as implemented in Wsmeans, or Weighted Square Means, K-Means
		* with those optimizations.
		*
		* This algorithm was designed by M. Emre Celebi, and was found in their 2011
		* paper, Improving the Performance of K-Means for Color Quantization.
		* https://arxiv.org/abs/1101.0395
		*/
		var QuantizerCelebi = class {
			/**
			* @param pixels Colors in ARGB format.
			* @param maxColors The number of colors to divide the image into. A lower
			*     number of colors may be returned.
			* @return Map with keys of colors in ARGB format, and values of number of
			*     pixels in the original image that correspond to the color in the
			*     quantized image.
			*/
			static quantize(pixels, maxColors) {
				const wuResult = new QuantizerWu().quantize(pixels, maxColors);
				return QuantizerWsmeans.quantize(pixels, wuResult, maxColors);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/scheme/scheme.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* DEPRECATED. The `Scheme` class is deprecated in favor of `DynamicScheme`.
		* Please see
		* https://github.com/material-foundation/material-color-utilities/blob/main/make_schemes.md
		* for migration guidance.
		*
		* Represents a Material color scheme, a mapping of color roles to colors.
		*/
		var Scheme = class Scheme {
			get primary() {
				return this.props.primary;
			}
			get onPrimary() {
				return this.props.onPrimary;
			}
			get primaryContainer() {
				return this.props.primaryContainer;
			}
			get onPrimaryContainer() {
				return this.props.onPrimaryContainer;
			}
			get secondary() {
				return this.props.secondary;
			}
			get onSecondary() {
				return this.props.onSecondary;
			}
			get secondaryContainer() {
				return this.props.secondaryContainer;
			}
			get onSecondaryContainer() {
				return this.props.onSecondaryContainer;
			}
			get tertiary() {
				return this.props.tertiary;
			}
			get onTertiary() {
				return this.props.onTertiary;
			}
			get tertiaryContainer() {
				return this.props.tertiaryContainer;
			}
			get onTertiaryContainer() {
				return this.props.onTertiaryContainer;
			}
			get error() {
				return this.props.error;
			}
			get onError() {
				return this.props.onError;
			}
			get errorContainer() {
				return this.props.errorContainer;
			}
			get onErrorContainer() {
				return this.props.onErrorContainer;
			}
			get background() {
				return this.props.background;
			}
			get onBackground() {
				return this.props.onBackground;
			}
			get surface() {
				return this.props.surface;
			}
			get onSurface() {
				return this.props.onSurface;
			}
			get surfaceVariant() {
				return this.props.surfaceVariant;
			}
			get onSurfaceVariant() {
				return this.props.onSurfaceVariant;
			}
			get outline() {
				return this.props.outline;
			}
			get outlineVariant() {
				return this.props.outlineVariant;
			}
			get shadow() {
				return this.props.shadow;
			}
			get scrim() {
				return this.props.scrim;
			}
			get inverseSurface() {
				return this.props.inverseSurface;
			}
			get inverseOnSurface() {
				return this.props.inverseOnSurface;
			}
			get inversePrimary() {
				return this.props.inversePrimary;
			}
			/**
			* @param argb ARGB representation of a color.
			* @return Light Material color scheme, based on the color's hue.
			*/
			static light(argb) {
				return Scheme.lightFromCorePalette(CorePalette.of(argb));
			}
			/**
			* @param argb ARGB representation of a color.
			* @return Dark Material color scheme, based on the color's hue.
			*/
			static dark(argb) {
				return Scheme.darkFromCorePalette(CorePalette.of(argb));
			}
			/**
			* @param argb ARGB representation of a color.
			* @return Light Material content color scheme, based on the color's hue.
			*/
			static lightContent(argb) {
				return Scheme.lightFromCorePalette(CorePalette.contentOf(argb));
			}
			/**
			* @param argb ARGB representation of a color.
			* @return Dark Material content color scheme, based on the color's hue.
			*/
			static darkContent(argb) {
				return Scheme.darkFromCorePalette(CorePalette.contentOf(argb));
			}
			/**
			* Light scheme from core palette
			*/
			static lightFromCorePalette(core) {
				return new Scheme({
					primary: core.a1.tone(40),
					onPrimary: core.a1.tone(100),
					primaryContainer: core.a1.tone(90),
					onPrimaryContainer: core.a1.tone(10),
					secondary: core.a2.tone(40),
					onSecondary: core.a2.tone(100),
					secondaryContainer: core.a2.tone(90),
					onSecondaryContainer: core.a2.tone(10),
					tertiary: core.a3.tone(40),
					onTertiary: core.a3.tone(100),
					tertiaryContainer: core.a3.tone(90),
					onTertiaryContainer: core.a3.tone(10),
					error: core.error.tone(40),
					onError: core.error.tone(100),
					errorContainer: core.error.tone(90),
					onErrorContainer: core.error.tone(10),
					background: core.n1.tone(99),
					onBackground: core.n1.tone(10),
					surface: core.n1.tone(99),
					onSurface: core.n1.tone(10),
					surfaceVariant: core.n2.tone(90),
					onSurfaceVariant: core.n2.tone(30),
					outline: core.n2.tone(50),
					outlineVariant: core.n2.tone(80),
					shadow: core.n1.tone(0),
					scrim: core.n1.tone(0),
					inverseSurface: core.n1.tone(20),
					inverseOnSurface: core.n1.tone(95),
					inversePrimary: core.a1.tone(80)
				});
			}
			/**
			* Dark scheme from core palette
			*/
			static darkFromCorePalette(core) {
				return new Scheme({
					primary: core.a1.tone(80),
					onPrimary: core.a1.tone(20),
					primaryContainer: core.a1.tone(30),
					onPrimaryContainer: core.a1.tone(90),
					secondary: core.a2.tone(80),
					onSecondary: core.a2.tone(20),
					secondaryContainer: core.a2.tone(30),
					onSecondaryContainer: core.a2.tone(90),
					tertiary: core.a3.tone(80),
					onTertiary: core.a3.tone(20),
					tertiaryContainer: core.a3.tone(30),
					onTertiaryContainer: core.a3.tone(90),
					error: core.error.tone(80),
					onError: core.error.tone(20),
					errorContainer: core.error.tone(30),
					onErrorContainer: core.error.tone(80),
					background: core.n1.tone(10),
					onBackground: core.n1.tone(90),
					surface: core.n1.tone(10),
					onSurface: core.n1.tone(90),
					surfaceVariant: core.n2.tone(30),
					onSurfaceVariant: core.n2.tone(80),
					outline: core.n2.tone(60),
					outlineVariant: core.n2.tone(30),
					shadow: core.n1.tone(0),
					scrim: core.n1.tone(0),
					inverseSurface: core.n1.tone(90),
					inverseOnSurface: core.n1.tone(20),
					inversePrimary: core.a1.tone(40)
				});
			}
			constructor(props) {
				this.props = props;
			}
			toJSON() {
				return { ...this.props };
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/scheme/scheme_android.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/temperature/temperature_cache.js
		/**
		* @license
		* Copyright 2023 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/scheme/scheme_content.js
		/**
		* @license
		* Copyright 2023 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/scheme/scheme_expressive.js
		/**
		* @license
		* Copyright 2022 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* A Dynamic Color theme that is intentionally detached from the source color.
		*/
		var SchemeExpressive = class SchemeExpressive extends DynamicScheme {
			constructor(sourceColorHct, isDark, contrastLevel) {
				super({
					sourceColorArgb: sourceColorHct.toInt(),
					variant: Variant.EXPRESSIVE,
					contrastLevel,
					isDark,
					primaryPalette: TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 240), 40),
					secondaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, SchemeExpressive.hues, SchemeExpressive.secondaryRotations), 24),
					tertiaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, SchemeExpressive.hues, SchemeExpressive.tertiaryRotations), 32),
					neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 8),
					neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue + 15, 12)
				});
			}
		};
		/**
		* Hues (in degrees) used at breakpoints such that designers can specify a
		* hue rotation that occurs at a given break point.
		*/
		SchemeExpressive.hues = [
			0,
			21,
			51,
			121,
			151,
			191,
			271,
			321,
			360
		];
		/**
		* Hue rotations (in degrees) of the Secondary [TonalPalette],
		* corresponding to the breakpoints in [hues].
		*/
		SchemeExpressive.secondaryRotations = [
			45,
			95,
			45,
			20,
			45,
			90,
			45,
			45,
			45
		];
		/**
		* Hue rotations (in degrees) of the Tertiary [TonalPalette],
		* corresponding to the breakpoints in [hues].
		*/
		SchemeExpressive.tertiaryRotations = [
			120,
			120,
			20,
			45,
			20,
			15,
			20,
			120,
			120
		];
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/scheme/scheme_fidelity.js
		/**
		* @license
		* Copyright 2023 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/scheme/scheme_fruit_salad.js
		/**
		* @license
		* Copyright 2022 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/scheme/scheme_monochrome.js
		/**
		* @license
		* Copyright 2022 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/scheme/scheme_neutral.js
		/**
		* @license
		* Copyright 2022 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/scheme/scheme_rainbow.js
		/**
		* @license
		* Copyright 2022 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/scheme/scheme_tonal_spot.js
		/**
		* @license
		* Copyright 2022 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js
		/**
		* @license
		* Copyright 2022 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* A Dynamic Color theme that maxes out colorfulness at each position in the
		* Primary Tonal Palette.
		*/
		var SchemeVibrant = class SchemeVibrant extends DynamicScheme {
			constructor(sourceColorHct, isDark, contrastLevel) {
				super({
					sourceColorArgb: sourceColorHct.toInt(),
					variant: Variant.VIBRANT,
					contrastLevel,
					isDark,
					primaryPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 200),
					secondaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, SchemeVibrant.hues, SchemeVibrant.secondaryRotations), 24),
					tertiaryPalette: TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, SchemeVibrant.hues, SchemeVibrant.tertiaryRotations), 32),
					neutralPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 10),
					neutralVariantPalette: TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12)
				});
			}
		};
		/**
		* Hues (in degrees) used at breakpoints such that designers can specify a
		* hue rotation that occurs at a given break point.
		*/
		SchemeVibrant.hues = [
			0,
			41,
			61,
			101,
			131,
			181,
			251,
			301,
			360
		];
		/**
		* Hue rotations (in degrees) of the Secondary [TonalPalette],
		* corresponding to the breakpoints in [hues].
		*/
		SchemeVibrant.secondaryRotations = [
			18,
			15,
			10,
			12,
			15,
			18,
			15,
			12,
			12
		];
		/**
		* Hue rotations (in degrees) of the Tertiary [TonalPalette],
		* corresponding to the breakpoints in [hues].
		*/
		SchemeVibrant.tertiaryRotations = [
			35,
			30,
			20,
			25,
			30,
			35,
			30,
			25,
			25
		];
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/score/score.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		const SCORE_OPTION_DEFAULTS = {
			desired: 4,
			fallbackColorARGB: 4282549748,
			filter: true
		};
		function compare(a, b) {
			if (a.score > b.score) return -1;
			else if (a.score < b.score) return 1;
			return 0;
		}
		/**
		*  Given a large set of colors, remove colors that are unsuitable for a UI
		*  theme, and rank the rest based on suitability.
		*
		*  Enables use of a high cluster count for image quantization, thus ensuring
		*  colors aren't muddied, while curating the high cluster count to a much
		*  smaller number of appropriate choices.
		*/
		var Score = class Score {
			constructor() {}
			/**
			* Given a map with keys of colors and values of how often the color appears,
			* rank the colors based on suitability for being used for a UI theme.
			*
			* @param colorsToPopulation map with keys of colors and values of how often
			*     the color appears, usually from a source image.
			* @param {ScoreOptions} options optional parameters.
			* @return Colors sorted by suitability for a UI theme. The most suitable
			*     color is the first item, the least suitable is the last. There will
			*     always be at least one color returned. If all the input colors
			*     were not suitable for a theme, a default fallback color will be
			*     provided, Google Blue.
			*/
			static score(colorsToPopulation, options) {
				const { desired, fallbackColorARGB, filter } = {
					...SCORE_OPTION_DEFAULTS,
					...options
				};
				const colorsHct = [];
				const huePopulation = new Array(360).fill(0);
				let populationSum = 0;
				for (const [argb, population] of colorsToPopulation.entries()) {
					const hct = Hct.fromInt(argb);
					colorsHct.push(hct);
					const hue = Math.floor(hct.hue);
					huePopulation[hue] += population;
					populationSum += population;
				}
				const hueExcitedProportions = new Array(360).fill(0);
				for (let hue = 0; hue < 360; hue++) {
					const proportion = huePopulation[hue] / populationSum;
					for (let i = hue - 14; i < hue + 16; i++) {
						const neighborHue = sanitizeDegreesInt(i);
						hueExcitedProportions[neighborHue] += proportion;
					}
				}
				const scoredHct = new Array();
				for (const hct of colorsHct) {
					const proportion = hueExcitedProportions[sanitizeDegreesInt(Math.round(hct.hue))];
					if (filter && (hct.chroma < Score.CUTOFF_CHROMA || proportion <= Score.CUTOFF_EXCITED_PROPORTION)) continue;
					const proportionScore = proportion * 100 * Score.WEIGHT_PROPORTION;
					const chromaWeight = hct.chroma < Score.TARGET_CHROMA ? Score.WEIGHT_CHROMA_BELOW : Score.WEIGHT_CHROMA_ABOVE;
					const score = proportionScore + (hct.chroma - Score.TARGET_CHROMA) * chromaWeight;
					scoredHct.push({
						hct,
						score
					});
				}
				scoredHct.sort(compare);
				const chosenColors = [];
				for (let differenceDegrees$1 = 90; differenceDegrees$1 >= 15; differenceDegrees$1--) {
					chosenColors.length = 0;
					for (const { hct } of scoredHct) {
						if (!chosenColors.find((chosenHct) => {
							return differenceDegrees(hct.hue, chosenHct.hue) < differenceDegrees$1;
						})) chosenColors.push(hct);
						if (chosenColors.length >= desired) break;
					}
					if (chosenColors.length >= desired) break;
				}
				const colors = [];
				if (chosenColors.length === 0) colors.push(fallbackColorARGB);
				for (const chosenHct of chosenColors) colors.push(chosenHct.toInt());
				return colors;
			}
		};
		Score.TARGET_CHROMA = 48;
		Score.WEIGHT_PROPORTION = .7;
		Score.WEIGHT_CHROMA_ABOVE = .3;
		Score.WEIGHT_CHROMA_BELOW = .1;
		Score.CUTOFF_CHROMA = 5;
		Score.CUTOFF_EXCITED_PROPORTION = .01;
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/utils/string_utils.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		/**
		* Utility methods for hexadecimal representations of colors.
		*/
		/**
		* @param argb ARGB representation of a color.
		* @return Hex string representing color, ex. #ff0000 for red.
		*/
		function hexFromArgb(argb) {
			const r = redFromArgb(argb);
			const g = greenFromArgb(argb);
			const b = blueFromArgb(argb);
			const outParts = [
				r.toString(16),
				g.toString(16),
				b.toString(16)
			];
			for (const [i, part] of outParts.entries()) if (part.length === 1) outParts[i] = "0" + part;
			return "#" + outParts.join("");
		}
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/utils/image_utils.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/utils/theme_utils.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.3.0/node_modules/@material/material-color-utilities/index.js
		/**
		* @license
		* Copyright 2021 Google LLC
		*
		* Licensed under the Apache License, Version 2.0 (the "License");
		* you may not use this file except in compliance with the License.
		* You may obtain a copy of the License at
		*
		*      http://www.apache.org/licenses/LICENSE-2.0
		*
		* Unless required by applicable law or agreed to in writing, software
		* distributed under the License is distributed on an "AS IS" BASIS,
		* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		* See the License for the specific language governing permissions and
		* limitations under the License.
		*/
		//#endregion
		//#region src/client/palette.ts
		/**
		* MD3 dynamic-color palette engine for the md3-wallpaper skin.
		*
		* Pure, DOM-free and fully testable: `extractSourceFromImage` runs Monet's
		* source-color extraction on a wallpaper's pixels (Celebi quantization +
		* score ranking — the same pipeline as the upstream `sourceColorFromImage`,
		* which only accepts HTMLImageElement and builds its own DOM canvas), and
		* `buildThemeTokens` maps the five MD3 tonal palettes (CorePalette: a1/a2/a3/
		* n1/n2/error) onto the dsh web shell's ENTIRE static token surface (all 73
		* `--dsw-static-*` tokens, both themes) plus the few interaction/scrollbar
		* aliases the shell hard-codes as rgba values — so no UI surface is left
		* behind ("one token, none omitted"). `buildMdSysTheme` additionally emits
		* the standard M3 role tokens (`--md-sys-color-*`) the skin's chrome uses,
		* completing the missing M3 surface-container roles from the neutral palette
		* per the M3 spec tonal tables.
		*
		* Role mapping (MD3 has exactly five tonal palettes; the shell has nine
		* families):
		*   deepseek -> primary (a1)      blue -> secondary (a2)
		*   green    -> tertiary (a3)     amber -> primary (warn rides the brand hue,
		*   offset tonals)                red -> error
		*   neutral  -> neutral (n1)      neutral-bluish -> neutralVariant (n2)
		*
		* Tonal mapping: the shell's numeric suffixes are lightness steps, not M3
		* tones, so each suffix maps to an explicit (light, dark) M3 tonal pair —
		* dark inverts the lightness (deep backgrounds, bright text), exactly like
		* the shell's own dark theme.
		* @module @AnNingUI/dsh-client-ui-skin-md3-wallpaper/palette
		*/
		/** The default M3 baseline seed (Material 3's canonical purple) used when no
		*  wallpaper has been uploaded yet. */
		const DEFAULT_SOURCE_TOKEN = 4284960932;
		/** Family -> tonal table, suffix -> (light, dark) M3 tonal. */
		const FAMILY_TONALS = {
			blue: {
				"50": [95, 18],
				"50p": [93, 20],
				"75": [92, 22],
				"100": [90, 26],
				"300": [75, 40],
				"400": [65, 50],
				"450": [58, 56],
				"500": [50, 62],
				"600": [40, 72],
				"800": [26, 88],
				"900": [20, 93],
				"950": [12, 96]
			},
			deepseek: {
				"50": [95, 18],
				"100": [90, 26],
				"200": [85, 33],
				"300": [75, 40],
				"400": [65, 48],
				"450": [58, 55],
				"500": [50, 62],
				"600": [40, 72],
				"700-delete": [33, 80],
				"800": [26, 88],
				"900": [20, 93]
			},
			green: {
				"100": [90, 26],
				"400": [65, 50],
				"500": [50, 62],
				"900": [20, 93]
			},
			amber: {
				"100": [84, 34],
				"400": [58, 56],
				"500": [42, 68],
				"600": [32, 78],
				"900": [14, 97]
			},
			red: {
				"50": [95, 18],
				"100": [90, 26],
				"400": [65, 55],
				"500": [50, 65],
				"600": [40, 74],
				"900": [20, 94]
			},
			neutral: {
				"00": [99, 6],
				"50": [98, 10],
				"100": [94, 18],
				"150": [92, 22],
				"200": [90, 26],
				"250": [88, 30],
				"300": [86, 36],
				"400": [74, 42],
				"500": [62, 50],
				"550": [56, 55],
				"600": [50, 60],
				"700": [40, 70],
				"800": [30, 80],
				"850": [26, 85],
				"900": [18, 92],
				"1000": [6, 99]
			},
			"neutral-bluish": {
				"00": [99, 6],
				"50": [98, 10],
				"60": [97, 12],
				"75": [96, 14],
				"100": [94, 18],
				"150": [92, 22],
				"200": [90, 26],
				"300": [86, 36],
				"400": [74, 42],
				"500": [62, 50],
				"600": [50, 60],
				"700": [40, 70],
				"750": [34, 76],
				"800": [30, 80],
				"850": [26, 85],
				"875": [22, 89],
				"900": [18, 92],
				"950": [12, 96],
				"1000": [6, 99]
			}
		};
		/** Family -> MD3 tonal palette from the core palette (theme-neutral). */
		function palettesOf(core) {
			return {
				blue: core.a2,
				deepseek: core.a1,
				green: core.a3,
				amber: core.a1,
				red: core.error,
				neutral: core.n1,
				"neutral-bluish": core.n2
			};
		}
		/** rgba() string from an argb integer and an alpha (0..1). */
		function rgbaFromArgb(argb, alpha) {
			return `rgba(${argb >> 16 & 255}, ${argb >> 8 & 255}, ${argb & 255}, ${alpha})`;
		}
		/** One scheme's full dsw token map: 73 static tokens + interaction/scrollbar aliases. */
		function tokensForScheme(palettes, isDark) {
			const tokens = {};
			for (const [family, tonals] of Object.entries(FAMILY_TONALS)) {
				const palette = palettes[family];
				for (const [suffix, pair] of Object.entries(tonals)) tokens[`--dsw-static-${family}-${suffix}`] = hexFromArgb(palette.tone(pair[isDark ? 1 : 0]));
			}
			const onSurface = isDark ? 90 : 10;
			tokens["--dsw-alias-interactive-bg-hover"] = rgbaFromArgb(palettes.neutral.tone(onSurface), .06);
			tokens["--dsw-alias-interactive-bg-active"] = rgbaFromArgb(palettes.neutral.tone(onSurface), .1);
			tokens["--dsw-alias-interactive-bg-hover-accent"] = rgbaFromArgb(palettes.deepseek.tone(isDark ? 80 : 40), .14);
			tokens["--dsw-alias-scrollbar-bg-l1"] = hexFromArgb(palettes.neutral.tone(isDark ? 26 : 90));
			tokens["--dsw-alias-scrollbar-bg-l2"] = hexFromArgb(palettes.neutral.tone(isDark ? 32 : 84));
			tokens["--dsw-alias-scrollbar-hover-l1"] = hexFromArgb(palettes.neutral.tone(isDark ? 40 : 74));
			tokens["--dsw-alias-scrollbar-hover-l2"] = hexFromArgb(palettes.neutral.tone(isDark ? 45 : 68));
			tokens["--dsw-alias-label-primary-inverted"] = hexFromArgb(palettes.neutral.tone(isDark ? 100 : 0));
			return tokens;
		}
		/** The standard M3 role tokens (`--md-sys-color-*`) for the skin's own chrome. */
		function buildMdSysTokens(scheme, neutral, isDark) {
			const roles = [
				"primary",
				"onPrimary",
				"primaryContainer",
				"onPrimaryContainer",
				"secondary",
				"onSecondary",
				"secondaryContainer",
				"onSecondaryContainer",
				"tertiary",
				"onTertiary",
				"tertiaryContainer",
				"onTertiaryContainer",
				"error",
				"onError",
				"errorContainer",
				"onErrorContainer",
				"background",
				"onBackground",
				"surface",
				"onSurface",
				"surfaceVariant",
				"onSurfaceVariant",
				"outline",
				"outlineVariant",
				"inverseSurface",
				"inverseOnSurface",
				"inversePrimary",
				"scrim",
				"shadow"
			];
			const tokens = {};
			for (const role of roles) {
				const kebab = role.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
				tokens[`--md-sys-color-${kebab}`] = hexFromArgb(scheme[role]);
			}
			tokens["--md-sys-color-surface-container-lowest"] = hexFromArgb(neutral.tone(isDark ? 4 : 100));
			tokens["--md-sys-color-surface-container-low"] = hexFromArgb(neutral.tone(isDark ? 10 : 96));
			tokens["--md-sys-color-surface-container"] = hexFromArgb(neutral.tone(isDark ? 12 : 94));
			tokens["--md-sys-color-surface-container-high"] = hexFromArgb(neutral.tone(isDark ? 17 : 92));
			tokens["--md-sys-color-surface-container-highest"] = hexFromArgb(neutral.tone(isDark ? 22 : 90));
			return tokens;
		}
		/** Monet source color from a wallpaper's pixel buffer. */
		function extractSourceFromImage(imageData) {
			const { data, width, height } = imageData;
			const pixels = [];
			for (let i = 0; i < width * height; i++) {
				const offset = i * 4;
				if (data[offset + 3] < 255) continue;
				pixels.push(argbFromRgb(data[offset], data[offset + 1], data[offset + 2]));
			}
			const quantized = QuantizerCelebi.quantize(pixels, 128);
			return Score.score(quantized)[0];
		}
		/** The M3 light/dark schemes + shared core palette from a source argb color. */
		function buildTheme(sourceArgb) {
			const core = CorePalette.of(sourceArgb);
			return {
				light: Scheme.lightFromCorePalette(core),
				dark: Scheme.darkFromCorePalette(core),
				core
			};
		}
		/** Full dsw token set for both themes (light values + dark values). */
		function buildThemeTokens(sourceArgb) {
			const { light, dark, core } = buildTheme(sourceArgb);
			const palettes = palettesOf(core);
			return {
				light: tokensForScheme(palettes, false),
				dark: tokensForScheme(palettes, true)
			};
		}
		/** M3 role tokens for both themes (the skin chrome's own palette). */
		function buildMdSysTheme(sourceArgb) {
			const { light, dark, core } = buildTheme(sourceArgb);
			return {
				light: buildMdSysTokens(light, core.n1, false),
				dark: buildMdSysTokens(dark, core.n1, true)
			};
		}
		/** The source-color hex used as the skin's accent + favicon hue. */
		function hexFromSource(argb) {
			return hexFromArgb(argb);
		}
		//#endregion
		//#region src/client/wallpaper.ts
		/**
		* Wallpaper pipeline for the md3-wallpaper skin: pick a file, downscale it on
		* a canvas, hand the pixels to the Monet engine, and persist the compact
		* result (a JPEG data URL + the derived token sets) in localStorage so a
		* refresh re-applies the theme without re-decoding the image. Besides an
		* uploaded wallpaper the surface also supports selectable PRESET backdrops
		* (M3 gradients generated from the live md-sys roles, like the Hatsune Miku
		* skin's selectable art) — the preset id is persisted the same way.
		*
		* The stored wallpaper is deliberately small (<= 512px, JPEG ~0.82): it is
		* enough for both Monet's source-color extraction and a cover background, and
		* keeps the localStorage footprint far below the 5MB quota. The skin's apply()
		* owns writing the CSS variables onto document.body; this module only produces
		* and persists the state.
		* @module @AnNingUI/dsh-client-ui-skin-md3-wallpaper/wallpaper
		*/
		/** localStorage key for the persisted wallpaper state (versioned). */
		const STORAGE_KEY = "dsh.md3Wallpaper.v1";
		/** The built-in selectable preset backdrops. */
		const WALLPAPER_PRESETS = [
			{ id: "monet-mesh" },
			{ id: "monet-sunset" },
			{ id: "monet-ocean" },
			{ id: "monet-mono" }
		];
		/** The default backdrop when nothing is chosen (a preset, like miku's art). */
		const DEFAULT_PRESET = "monet-mesh";
		/** Max dimension (px) of the persisted wallpaper. */
		const MAX_DIM = 512;
		/** JPEG quality for the persisted wallpaper. */
		const JPEG_QUALITY = .82;
		/** Read the persisted state; null when absent or structurally invalid. */
		function loadState() {
			try {
				const raw = localStorage.getItem(STORAGE_KEY);
				if (raw === null) return null;
				const parsed = JSON.parse(raw);
				if (typeof parsed !== "object" || parsed === null) return null;
				const state = parsed;
				if (typeof state.source !== "number" || !Number.isFinite(state.source)) return null;
				if (typeof state.tokens !== "object" || state.tokens === null || typeof state.mdSys !== "object" || state.mdSys === null) return null;
				if (state.wallpaper !== null && typeof state.wallpaper !== "string") return null;
				if (typeof state.preset !== "string" && state.wallpaper === null) state.preset = DEFAULT_PRESET;
				if (typeof state.preset !== "string") state.preset = null;
				return state;
			} catch {
				return null;
			}
		}
		/** Persist the state (best-effort; quota failures are swallowed). */
		function saveState(state) {
			try {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
			} catch {}
		}
		/** Drop the persisted state (restore the default preset look). */
		function clearState() {
			try {
				localStorage.removeItem(STORAGE_KEY);
			} catch {}
		}
		/** Default state: default preset backdrop, baseline M3 purple seed. */
		function defaultState() {
			const tokens = buildThemeTokens(DEFAULT_SOURCE_TOKEN);
			const mdSys = buildMdSysTheme(DEFAULT_SOURCE_TOKEN);
			return {
				wallpaper: null,
				preset: DEFAULT_PRESET,
				source: DEFAULT_SOURCE_TOKEN,
				tokens,
				mdSys
			};
		}
		/**
		* Process an uploaded image file into a persisted wallpaper state: decode,
		* downscale on a canvas, run Monet's source-color extraction, derive both
		* token sets, and store the result. An upload clears the preset selection.
		* @param file - the image file picked by the user.
		* @returns the new wallpaper state (already persisted).
		*/
		async function processWallpaper(file) {
			const bitmap = await createImageBitmap(file);
			try {
				const scale = Math.min(1, MAX_DIM / Math.max(bitmap.width, bitmap.height));
				const width = Math.max(1, Math.round(bitmap.width * scale));
				const height = Math.max(1, Math.round(bitmap.height * scale));
				const canvas = document.createElement("canvas");
				canvas.width = width;
				canvas.height = height;
				const context = canvas.getContext("2d");
				if (context === null) throw new Error("md3-wallpaper: canvas 2d context unavailable");
				context.drawImage(bitmap, 0, 0, width, height);
				const source = extractSourceFromImage(context.getImageData(0, 0, width, height));
				const state = {
					wallpaper: canvas.toDataURL("image/jpeg", JPEG_QUALITY),
					preset: null,
					source,
					tokens: buildThemeTokens(source),
					mdSys: buildMdSysTheme(source)
				};
				saveState(state);
				return state;
			} finally {
				bitmap.close();
			}
		}
		/** The source color as a hex string (favicon/accent hue). */
		function sourceHex(state) {
			return hexFromSource(state.source);
		}
		//#endregion
		//#region src/client/index.ts
		/** The product title the skin pins (captured by the shell's DocumentTitle). */
		const SKIN_TITLE = "Material You · DeepSeek";
		/** Shape preference key (M3 shape system on/off). */
		const SHAPE_KEY = "dsh.md3Wallpaper.shape";
		/** Locale-aware chrome copy (the skin registers no locale namespace; the
		*  chrome follows the html lang attribute like the sibling skins' chrome). */
		function copy() {
			return document.documentElement.lang?.toLowerCase().startsWith("zh") ?? false ? {
				upload: "上传壁纸",
				reset: "恢复默认",
				shape: "M3 圆角形状",
				shapeHint: "Material 3 形状系统：按钮胶囊圆角、输入框小圆角、对话框大圆角",
				title: "壁纸取色",
				presets: "预设背景",
				presetNames: {
					"monet-mesh": "莫奈网格",
					"monet-sunset": "落日余晖",
					"monet-ocean": "深海",
					"monet-mono": "素色"
				}
			} : {
				upload: "Upload wallpaper",
				reset: "Restore default",
				shape: "M3 shape system",
				shapeHint: "Material 3 corners: pill buttons, small inputs, large dialogs",
				title: "Wallpaper theme",
				presets: "Preset backdrops",
				presetNames: {
					"monet-mesh": "Monet mesh",
					"monet-sunset": "Sunset",
					"monet-ocean": "Deep ocean",
					"monet-mono": "Monochrome"
				}
			};
		}
		/** Resolve one module class name (fallback satisfies noUncheckedIndexedAccess). */
		const cls = (name) => md3_wallpaper_module_css_default[name] ?? "";
		/** Current shape preference. */
		function shapePref() {
			try {
				return localStorage.getItem(SHAPE_KEY) === "off" ? "off" : "on";
			} catch {
				return "on";
			}
		}
		/** Persist the shape preference. */
		function setShapePref(value) {
			try {
				localStorage.setItem(SHAPE_KEY, value);
			} catch {}
		}
		/** localStorage key controlling the dev auto-reload watcher: absent or '1' =
		*  on (the default), '0' = off. */
		const DEV_RELOAD_KEY = "dsh.md3Wallpaper.devReload";
		/** Poll interval (ms) for the dev bundle watcher. */
		const DEV_RELOAD_INTERVAL_MS = 2e3;
		/** The skin's own bundle path (same origin; the live URL adds its rev). */
		const BUNDLE_PATH = "/plugins/@AnNingUI/dsh-client-ui-skin-md3-wallpaper/client.js";
		/** The URL this very script was loaded from, captured while it executes
		*  (document.currentScript is only valid during script evaluation). */
		const SELF_SRC = typeof document !== "undefined" ? document.currentScript?.src ?? "" : "";
		/** FNV-1a fingerprint of a bundle text (stable across reloads of the same
		*  content; a rebuild changes it). Pure and testable. */
		function fingerprint(text) {
			let hash = 2166136261;
			for (let i = 0; i < text.length; i++) {
				hash ^= text.charCodeAt(i);
				hash = Math.imul(hash, 16777619);
			}
			return hash >>> 0;
		}
		/** The exact URL the shell loaded this bundle from (includes its rev query),
		*  discovered from the captured self src or the page's script tags; falls
		*  back to the plain path. */
		function bundleSrc() {
			if (SELF_SRC.includes(BUNDLE_PATH)) return SELF_SRC;
			for (const script of Array.from(document.scripts)) {
				const src = script.src ?? "";
				if (src.includes(BUNDLE_PATH)) return src;
			}
			return BUNDLE_PATH;
		}
		/** Cache-bust a served URL by appending a unique query parameter. */
		function busted(src) {
			return src.includes("?") ? `${src}&v=${Date.now()}` : `${src}?v=${Date.now()}`;
		}
		/** Reload the page (a seam so the watcher stays testable). */
		function reloadPage() {
			location.reload();
		}
		/** Start the dev watcher unless explicitly disabled; returns a disposer. */
		function startDevReload() {
			let enabled = true;
			try {
				enabled = localStorage.getItem(DEV_RELOAD_KEY) !== "0";
			} catch {
				enabled = true;
			}
			if (!enabled) return void 0;
			const doFetch = typeof fetch === "function" ? fetch : void 0;
			if (doFetch === void 0) return void 0;
			let baseline = null;
			const timer = setInterval(() => {
				if (document.visibilityState === "hidden") return;
				doFetch(busted(bundleSrc())).then((res) => {
					if (!res.ok) throw new Error(String(res.status));
					return res.text();
				}).then((text) => {
					const current = fingerprint(text);
					if (baseline === null) {
						baseline = current;
						return;
					}
					if (current !== baseline) reloadPage();
				}).catch(() => {});
			}, DEV_RELOAD_INTERVAL_MS);
			return () => clearInterval(timer);
		}
		/**
		* Apply the md3-wallpaper skin: body attribute, Monet tokens, backdrop,
		* scroll lock, organic chrome, favicon, title. All writes are retracted by
		* the effect disposer on dispose.
		* @param ctx - owning context (the effect lifecycle owns retraction).
		*/
		function apply(ctx) {
			const body = document.body;
			const originalTitle = document.title;
			const text = copy();
			body.dataset.dshMd3Wallpaper = "";
			body.setAttribute("data-md3-shape", shapePref());
			const stopDevReload = startDevReload();
			let state = loadState() ?? defaultState();
			/** Keys this skin has written onto body style (retracted on dispose). */
			const writtenKeys = /* @__PURE__ */ new Set();
			const setVar = (key, value) => {
				body.style.setProperty(key, value);
				writtenKeys.add(key);
			};
			/** One preset's backdrop gradient, generated from the live md-sys roles. */
			const presetBackdrop = (id, sys, dark) => {
				const primary = sys["--md-sys-color-primary"] ?? "#6750a4";
				const secondary = sys["--md-sys-color-secondary"] ?? "#625b71";
				const tertiary = sys["--md-sys-color-tertiary"] ?? "#7d5260";
				const surface = sys["--md-sys-color-surface-container-lowest"] ?? (dark ? "#141218" : "#f7f2fa");
				const container = sys["--md-sys-color-surface-container"] ?? surface;
				const veil = dark ? "rgba(0, 0, 0, 0.38)" : "rgba(0, 0, 0, 0.16)";
				switch (id) {
					case "monet-sunset": return `linear-gradient(160deg, ${primary} 0%, ${tertiary} 70%, ${surface} 140%), ${veil}`;
					case "monet-ocean": return `radial-gradient(120% 90% at 20% 10%, ${secondary} 0%, transparent 60%), radial-gradient(120% 90% at 85% 90%, ${primary} 0%, transparent 65%), ${surface}`;
					case "monet-mono": return `linear-gradient(180deg, ${surface} 0%, ${container} 100%), ${veil}`;
					default: return `radial-gradient(110% 90% at 12% 8%, ${primary} 0%, transparent 58%), radial-gradient(110% 90% at 88% 16%, ${secondary} 0%, transparent 56%), radial-gradient(120% 100% at 55% 105%, ${tertiary} 0%, transparent 62%), ${surface}`;
				}
			};
			const backdropFor = (dark) => {
				const sys = dark ? state.mdSys.dark : state.mdSys.light;
				if (state.wallpaper !== null) {
					const veil = dark ? .5 : .3;
					return `linear-gradient(rgba(0, 0, 0, ${veil}), rgba(0, 0, 0, ${veil + .08})), url(${state.wallpaper})`;
				}
				if (state.preset !== null && WALLPAPER_PRESETS.some((p) => p.id === state.preset)) return presetBackdrop(state.preset, sys, dark);
				const from = sys["--md-sys-color-surface-container-lowest"] ?? "#ffffff";
				return `linear-gradient(160deg, ${from} 0%, ${sys["--md-sys-color-surface-container"] ?? from} 55%, ${sys["--md-sys-color-primary-container"] ?? "#6750a4"} 130%)`;
			};
			/** (Re)apply the current theme's token set + backdrop onto body. */
			const applyTheme = () => {
				const dark = body.dataset.dsDarkTheme !== void 0;
				const tokens = dark ? state.tokens.dark : state.tokens.light;
				const sys = dark ? state.mdSys.dark : state.mdSys.light;
				for (const [key, value] of Object.entries(tokens)) setVar(key, value);
				for (const [key, value] of Object.entries(sys)) setVar(key, value);
				setVar("--md3-backdrop", backdropFor(dark));
				setVar("background-image", "var(--md3-backdrop)");
				setVar("background-size", "cover");
				setVar("background-position", "center");
				setVar("background-attachment", "fixed");
				setVar("background-repeat", "no-repeat");
			};
			const themeObserver = new MutationObserver(applyTheme);
			themeObserver.observe(body, {
				attributes: true,
				attributeFilter: ["data-ds-dark-theme"]
			});
			const html = document.documentElement;
			const prevHtmlOverflow = html.style.overflow;
			const prevBodyOverflow = body.style.overflow;
			html.style.overflow = "hidden";
			body.style.overflow = "hidden";
			const favicon = document.createElement("link");
			favicon.rel = "icon";
			const setFavicon = () => {
				favicon.href = `data:image/svg+xml;utf8,${encodeURIComponent(faviconSvg(sourceHex(state)))}`;
			};
			document.head.append(favicon);
			setFavicon();
			const fab = document.createElement("button");
			fab.type = "button";
			fab.className = cls("md3Fab");
			fab.dataset.skinChrome = "fab";
			fab.setAttribute("aria-label", text.title);
			fab.innerHTML = fabMarkup();
			const menu = document.createElement("div");
			menu.className = cls("md3Menu");
			menu.dataset.skinChrome = "menu";
			const preview = document.createElement("div");
			preview.className = cls("md3MenuPreview");
			preview.setAttribute("role", "img");
			preview.setAttribute("aria-label", text.title);
			const refreshPreview = () => {
				preview.style.backgroundImage = "var(--md3-backdrop)";
				preview.style.backgroundSize = "cover";
				preview.style.backgroundPosition = "center";
			};
			const fileInput = document.createElement("input");
			fileInput.type = "file";
			fileInput.accept = "image/*";
			fileInput.className = cls("md3FileInput");
			fileInput.tabIndex = -1;
			fileInput.setAttribute("aria-hidden", "true");
			const uploadRow = document.createElement("button");
			uploadRow.type = "button";
			uploadRow.className = cls("md3MenuRow");
			uploadRow.innerHTML = `${menuIcon(ICON_UPLOAD)}<span>${text.upload}</span>`;
			uploadRow.addEventListener("click", () => fileInput.click());
			const presetLabel = document.createElement("div");
			presetLabel.className = cls("md3MenuLabel");
			presetLabel.innerHTML = `${menuIcon(ICON_PALETTE)}<span>${text.presets}</span>`;
			const presetRow = document.createElement("div");
			presetRow.className = cls("md3MenuPresets");
			for (const preset of WALLPAPER_PRESETS) {
				const swatch = document.createElement("button");
				swatch.type = "button";
				swatch.className = cls("md3PresetSwatch");
				swatch.title = text.presetNames[preset.id] ?? preset.id;
				swatch.setAttribute("aria-label", text.presetNames[preset.id] ?? preset.id);
				swatch.dataset.preset = preset.id;
				swatch.addEventListener("click", () => {
					state = {
						...state,
						wallpaper: null,
						preset: preset.id
					};
					saveState(state);
					applyTheme();
					refreshPreview();
					setFavicon();
				});
				presetRow.append(swatch);
			}
			const resetRow = document.createElement("button");
			resetRow.type = "button";
			resetRow.className = cls("md3MenuRow");
			resetRow.innerHTML = `${menuIcon(ICON_RESET)}<span>${text.reset}</span>`;
			resetRow.addEventListener("click", () => {
				clearState();
				state = defaultState();
				applyTheme();
				refreshPreview();
				setFavicon();
			});
			const shapeRow = document.createElement("label");
			shapeRow.className = cls("md3MenuRow");
			shapeRow.title = text.shapeHint;
			const shapeSwitch = document.createElement("input");
			shapeSwitch.type = "checkbox";
			shapeSwitch.checked = body.getAttribute("data-md3-shape") === "on";
			const shapeIcon = document.createElement("span");
			shapeIcon.className = cls("md3MenuRowIcon");
			shapeIcon.innerHTML = menuIcon(ICON_SHAPE);
			const shapeText = document.createElement("span");
			shapeText.className = cls("md3MenuRowText");
			shapeText.textContent = text.shape;
			shapeRow.append(shapeIcon, shapeText, shapeSwitch);
			shapeSwitch.addEventListener("change", () => {
				const next = shapeSwitch.checked ? "on" : "off";
				body.setAttribute("data-md3-shape", next);
				setShapePref(next);
			});
			menu.append(preview, presetLabel, presetRow, uploadRow, resetRow, shapeRow, fileInput);
			function toggleMenu() {
				const open = menu.classList.toggle(cls("md3MenuOpen"));
				fab.classList.toggle(cls("md3FabOpen"), open);
			}
			function closeMenu() {
				menu.classList.remove(cls("md3MenuOpen"));
				fab.classList.remove(cls("md3FabOpen"));
			}
			function onDocClick(event) {
				const target = event.target;
				if (target === null) return;
				if (menu.contains(target) || fab.contains(target)) return;
				closeMenu();
			}
			function onDocKeydown(event) {
				if (event.key === "Escape") closeMenu();
			}
			fab.addEventListener("click", toggleMenu);
			document.addEventListener("click", onDocClick);
			document.addEventListener("keydown", onDocKeydown);
			fileInput.addEventListener("change", () => {
				const file = fileInput.files?.[0];
				fileInput.value = "";
				if (file === void 0) return;
				console.log("md3-wallpaper: user uploaded", file.name, file.type, file.size);
				processWallpaper(file).then((next) => {
					state = next;
					applyTheme();
					refreshPreview();
					setFavicon();
				}).catch(() => {});
			});
			body.append(fab, menu);
			document.title = SKIN_TITLE;
			applyTheme();
			refreshPreview();
			ctx.effect(() => () => {
				delete body.dataset.dshMd3Wallpaper;
				body.removeAttribute("data-md3-shape");
				themeObserver.disconnect();
				html.style.overflow = prevHtmlOverflow;
				body.style.overflow = prevBodyOverflow;
				document.removeEventListener("click", onDocClick);
				document.removeEventListener("keydown", onDocKeydown);
				fab.remove();
				menu.remove();
				favicon.remove();
				stopDevReload?.();
				for (const key of writtenKeys) body.style.removeProperty(key);
				if (document.title === SKIN_TITLE) document.title = originalTitle;
			}, "ui-skin-md3-wallpaper: dynamic color surface");
		}
		//#endregion
		exports.DEV_RELOAD_INTERVAL_MS = DEV_RELOAD_INTERVAL_MS;
		exports.DEV_RELOAD_KEY = DEV_RELOAD_KEY;
		exports.apply = apply;
		exports.bundleSrc = bundleSrc;
		exports.busted = busted;
		exports.fingerprint = fingerprint;
		exports.reloadPage = reloadPage;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map