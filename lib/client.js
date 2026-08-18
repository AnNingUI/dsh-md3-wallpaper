window.__ModuleLoader__.load({
	id: "@anningui/dsh-client-ui-skin-md3-wallpaper",
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
		* @module @anningui/dsh-client-ui-skin-md3-wallpaper/art
		*/
		/**
		* Equal-topology morph shapes for the FAB diamond↔ornament transition. Both
		* are the same absolute closed cubic sequence — `M + 96×C + Z` — regenerated
		* offline by scripts/normalize-morph.ts from FAB_U_PATH (capsule) and
		* FAB_K_PATH (ornament), each preserving its own true size/proportion and
		* centered on (230.5). Same command count/order and the SAME equal-polar point
		* grid, so interpolating `d` (see shape-morph.ts morphPath) inflates each
		* azimuth in place. Start at the +X axis, winding identically.
		*/
		const FAB_MORPH_CAPSULE = "M62.5498 230.5 C63.1663 226.8471 64.2783 223.2327 65.1517 219.6625 C66.0251 216.0923 66.6524 212.5279 67.7902 209.0789 C68.928 205.6298 70.6002 202.295 71.9783 198.9681 C73.3563 195.6412 74.4619 192.2887 76.0585 189.1175 C77.6551 185.9463 79.7343 182.9505 81.5579 179.941 C83.3815 176.9314 85.0174 173.8978 87 171.0603 C88.9825 168.2229 91.2775 165.5615 93.4532 162.916 C95.629 160.2705 97.8231 157.6943 100.0543 155.1872 C102.2856 152.6801 104.5533 150.2486 106.8406 147.8734 C109.1279 145.4982 111.4853 143.2287 113.778 140.936 C116.0706 138.6434 118.3335 136.3805 120.5967 134.1173 C122.8598 131.8542 125.1036 129.6104 127.357 127.357 C129.6104 125.1036 131.8542 122.8598 134.1173 120.5967 C136.3805 118.3335 138.6434 116.0706 140.936 113.778 C143.2287 111.4853 145.4982 109.1279 147.8734 106.8406 C150.2486 104.5533 152.6801 102.2856 155.1872 100.0543 C157.6943 97.8231 160.2705 95.629 162.916 93.4532 C165.5615 91.2775 168.2229 88.9825 171.0603 87 C173.8978 85.0174 176.9314 83.3815 179.941 81.5579 C182.9505 79.7343 185.9463 77.6551 189.1175 76.0585 C192.2887 74.4619 195.6412 73.3563 198.9681 71.9783 C202.295 70.6002 205.6298 68.928 209.0789 67.7902 C212.5279 66.6524 216.0923 66.0251 219.6625 65.1517 C223.2327 64.2783 226.8471 63.1663 230.5 62.5498 C234.1529 61.9333 237.8512 61.7835 241.58 61.4525 C245.3087 61.1215 249.1054 60.6118 252.8725 60.5637 C256.6397 60.5156 260.3898 60.9137 264.183 61.164 C267.9763 61.4142 271.8517 61.5165 275.632 62.065 C279.4123 62.6135 283.1108 63.6049 286.8647 64.455 C290.6186 65.3051 294.4699 66.0142 298.1553 67.1656 C301.8407 68.3171 305.3713 69.9175 308.9773 71.3637 C312.5833 72.81 316.3099 74.1054 319.7912 75.843 C323.2726 77.5806 326.5149 79.7739 329.8654 81.7892 C333.2159 83.8044 336.7218 85.6511 339.8941 87.9348 C343.0665 90.2185 345.9055 92.9568 348.8994 95.4914 C351.8933 98.026 355.0893 100.3743 357.8575 103.1425 C360.6257 105.9107 362.974 109.1067 365.5086 112.1006 C368.0432 115.0945 370.7815 117.9335 373.0652 121.1059 C375.3489 124.2782 377.1956 127.7841 379.2108 131.1346 C381.2261 134.4851 383.4194 137.7274 385.157 141.2088 C386.8946 144.6901 388.19 148.4167 389.6363 152.0227 C391.0825 155.6287 392.6829 159.1593 393.8344 162.8447 C394.9858 166.5301 395.6949 170.3814 396.545 174.1353 C397.3951 177.8892 398.3865 181.5877 398.935 185.368 C399.4835 189.1483 399.5858 193.0237 399.836 196.817 C400.0863 200.6102 400.4844 204.3603 400.4363 208.1275 C400.3882 211.8946 399.8785 215.6913 399.5475 219.42 C399.2165 223.1488 399.0667 226.8471 398.4502 230.5 C397.8337 234.1529 396.7217 237.7673 395.8483 241.3375 C394.9749 244.9077 394.3476 248.4721 393.2098 251.9211 C392.072 255.3702 390.3998 258.705 389.0217 262.0319 C387.6437 265.3588 386.5381 268.7113 384.9415 271.8825 C383.3449 275.0537 381.2657 278.0495 379.4421 281.059 C377.6185 284.0686 375.9826 287.1022 374 289.9397 C372.0175 292.7771 369.7225 295.4385 367.5468 298.084 C365.371 300.7295 363.1769 303.3057 360.9457 305.8128 C358.7144 308.3199 356.4467 310.7514 354.1594 313.1266 C351.8721 315.5018 349.5147 317.7713 347.222 320.064 C344.9294 322.3566 342.6665 324.6195 340.4033 326.8827 C338.1402 329.1458 335.8964 331.3896 333.643 333.643 C331.3896 335.8964 329.1458 338.1402 326.8827 340.4033 C324.6195 342.6665 322.3566 344.9294 320.064 347.222 C317.7713 349.5147 315.5018 351.8721 313.1266 354.1594 C310.7514 356.4467 308.3199 358.7144 305.8128 360.9457 C303.3057 363.1769 300.7295 365.371 298.084 367.5468 C295.4385 369.7225 292.7771 372.0175 289.9397 374 C287.1022 375.9826 284.0686 377.6185 281.059 379.4421 C278.0495 381.2657 275.0537 383.3449 271.8825 384.9415 C268.7113 386.5381 265.3588 387.6437 262.0319 389.0217 C258.705 390.3998 255.3702 392.072 251.9211 393.2098 C248.4721 394.3476 244.9077 394.9749 241.3375 395.8483 C237.7673 396.7217 234.1529 397.8337 230.5 398.4502 C226.8471 399.0667 223.1488 399.2165 219.42 399.5475 C215.6913 399.8785 211.8946 400.3882 208.1275 400.4363 C204.3603 400.4844 200.6102 400.0863 196.817 399.836 C193.0237 399.5858 189.1483 399.4835 185.368 398.935 C181.5877 398.3865 177.8892 397.3951 174.1353 396.545 C170.3814 395.6949 166.5301 394.9858 162.8447 393.8344 C159.1593 392.6829 155.6287 391.0825 152.0227 389.6363 C148.4167 388.19 144.6901 386.8946 141.2088 385.157 C137.7274 383.4194 134.4851 381.2261 131.1346 379.2108 C127.7841 377.1956 124.2782 375.3489 121.1059 373.0652 C117.9335 370.7815 115.0945 368.0432 112.1006 365.5086 C109.1067 362.974 105.9107 360.6257 103.1425 357.8575 C100.3743 355.0893 98.026 351.8933 95.4914 348.8994 C92.9568 345.9055 90.2185 343.0665 87.9348 339.8941 C85.6511 336.7218 83.8044 333.2159 81.7892 329.8654 C79.7739 326.5149 77.5806 323.2726 75.843 319.7912 C74.1054 316.3099 72.81 312.5833 71.3637 308.9773 C69.9175 305.3713 68.3171 301.8407 67.1656 298.1553 C66.0142 294.4699 65.3051 290.6186 64.455 286.8647 C63.6049 283.1108 62.6135 279.4123 62.065 275.632 C61.5165 271.8517 61.4142 267.9763 61.164 264.183 C60.9137 260.3898 60.5156 256.6397 60.5637 252.8725 C60.6118 249.1054 61.1215 245.3087 61.4525 241.58 C61.7835 237.8512 61.9333 234.1529 62.5498 230.5 Z";
		const FAB_MORPH_FLOWER = "M60.5179 230.5 C60.4845 226.8505 61.7149 223.0585 63.3569 219.5449 C64.9988 216.0313 67.8209 212.6268 70.3696 209.4184 C72.9183 206.2101 76.4518 203.3438 78.649 200.295 C80.8463 197.2462 82.6712 194.3833 83.5529 191.1256 C84.4345 187.868 84.2995 184.4808 83.9389 180.7492 C83.5782 177.0176 81.9472 172.7657 81.3887 168.7361 C80.8303 164.7065 80.2458 160.4283 80.5879 156.5715 C80.9301 152.7148 81.6412 148.7661 83.4418 145.5959 C85.2423 142.4257 88.2116 139.767 91.3911 137.5504 C94.5706 135.3338 98.7135 133.8003 102.5187 132.2965 C106.3239 130.7926 110.8054 130.0733 114.2224 128.5272 C117.6393 126.9812 120.6383 125.4069 123.0202 123.0202 C125.402 120.6334 126.9686 117.625 128.5137 114.2069 C130.0588 110.7888 130.7668 106.2872 132.2909 102.5114 C133.815 98.7357 135.4405 94.7303 137.6582 91.5524 C139.8759 88.3745 142.4605 85.3029 145.5972 83.444 C148.7338 81.585 152.6211 80.7398 156.4782 80.3986 C160.3352 80.0574 164.6933 80.8039 168.7395 81.3969 C172.7857 81.99 177.0242 83.5971 180.7554 83.9571 C184.4866 84.317 187.8707 84.4447 191.1267 83.5567 C194.3826 82.6687 197.2426 80.8284 200.291 78.6291 C203.3394 76.4298 206.2061 72.8729 209.4173 70.3609 C212.6285 67.8489 216.0442 65.1975 219.558 63.557 C223.0718 61.9165 226.8505 60.5512 230.5 60.5179 C234.1495 60.4846 237.9415 61.7151 241.4551 63.3571 C244.9687 64.9991 248.3737 67.819 251.5815 70.3699 C254.7894 72.9208 257.6552 76.4593 260.7024 78.6624 C263.7496 80.8655 266.6103 82.6988 269.8648 83.5886 C273.1193 84.4784 276.4997 84.3599 280.2296 84.0012 C283.9595 83.6426 288.2086 82.0102 292.2441 81.4366 C296.2796 80.8629 300.5725 80.2425 304.4426 80.5593 C308.3126 80.8761 312.2731 81.5672 315.4644 83.3373 C318.6557 85.1075 321.3554 88.0206 323.5906 91.1801 C325.8258 94.3395 327.367 98.4862 328.8757 102.2943 C330.3844 106.1024 331.1034 110.5962 332.6427 114.0286 C334.182 117.4609 335.7387 120.4869 338.1117 122.8883 C340.4846 125.2898 343.4702 126.8809 346.8803 128.4372 C350.2904 129.9936 354.7886 130.7049 358.5725 132.2266 C362.3563 133.7482 366.3881 135.3571 369.5834 137.5674 C372.7788 139.7777 375.8652 142.3577 377.7447 145.4882 C379.6242 148.6187 380.5048 152.4942 380.8604 156.3505 C381.2159 160.2067 380.4759 164.5711 379.8781 168.6256 C379.2802 172.68 377.6552 176.9334 377.2733 180.6772 C376.8915 184.4209 376.7293 187.8208 377.5871 191.0881 C378.4449 194.3555 380.2446 197.2264 382.4199 200.2812 C384.5953 203.3361 388.1352 206.2045 390.6391 209.4173 C393.1429 212.6301 395.8025 216.0442 397.443 219.558 C399.0835 223.0718 400.4488 226.8505 400.4821 230.5 C400.5154 234.1495 399.2849 237.9415 397.6429 241.4551 C396.0009 244.9687 393.1727 248.372 390.6301 251.5815 C388.0875 254.7911 384.5683 257.6591 382.3873 260.7123 C380.2064 263.7654 378.4038 266.6344 377.5444 269.9004 C376.685 273.1665 376.8481 276.5653 377.2308 280.3084 C377.6135 284.0515 379.2651 288.3166 379.8406 292.3589 C380.4161 296.4012 381.0139 300.6926 380.6838 304.5624 C380.3536 308.4323 379.651 312.3939 377.8597 315.5782 C376.0685 318.7625 373.1146 321.4413 369.9364 323.6684 C366.7582 325.8955 362.6037 327.4325 358.7907 328.9409 C354.9778 330.4494 350.4844 331.17 347.0588 332.7193 C343.6332 334.2687 340.6247 335.8446 338.237 338.237 C335.8492 340.6293 334.2808 343.6469 332.7323 347.0736 C331.1839 350.5004 330.4761 355.0159 328.9463 358.7977 C327.4164 362.5794 325.7811 366.5867 323.5532 369.764 C321.3254 372.9413 318.7304 376.0133 315.5793 377.8617 C312.4282 379.71 308.5171 380.5256 304.6464 380.8541 C300.7758 381.1825 296.413 380.4397 292.3555 379.8325 C288.2981 379.2252 284.0439 377.5915 280.3016 377.2107 C276.5592 376.8299 273.1656 376.682 269.9014 377.5479 C266.6371 378.4139 263.7692 380.2246 260.7161 382.4064 C257.663 384.5883 254.795 388.1327 251.5827 390.6388 C248.3703 393.1449 244.9558 395.8023 241.442 397.4428 C237.9282 399.0834 234.1495 400.4487 230.5 400.4821 C226.8505 400.5155 223.0585 399.2851 219.5449 397.6431 C216.0313 396.0012 212.6284 393.1708 209.4184 390.6304 C206.2085 388.0899 203.3398 384.5756 200.2851 382.4006 C197.2304 380.2255 194.3591 378.4313 191.09 377.5801 C187.8209 376.7288 184.4152 376.9085 180.6704 377.2931 C176.9257 377.6778 172.6579 379.3277 168.6215 379.888 C164.585 380.4484 160.3082 381.0107 156.4517 380.6552 C152.5951 380.2997 148.6454 379.5767 145.4822 377.7551 C142.3191 375.9334 139.6813 372.9232 137.4727 369.7251 C135.2642 366.5271 133.7346 362.3768 132.2309 358.5668 C130.7273 354.7567 130.0067 350.2752 128.4507 346.8649 C126.8947 343.4546 125.3012 340.4732 122.895 338.105 C120.4888 335.7369 117.4483 334.1931 114.0135 332.6559 C110.5787 331.1188 106.0598 330.4142 102.2862 328.8819 C98.5126 327.3497 94.5317 325.6977 91.3718 323.4625 C88.2119 321.2272 85.1548 318.6277 83.327 315.4704 C81.4991 312.3131 80.7189 308.3902 80.4048 304.5187 C80.0907 300.6473 80.8399 296.2909 81.4424 292.2417 C82.0448 288.1925 83.6605 283.9533 84.0193 280.2235 C84.3782 276.4937 84.4916 273.1158 83.5954 269.863 C82.6992 266.6101 80.8479 263.7531 78.6422 260.7064 C76.4365 257.6597 72.8754 254.7934 70.3612 251.5827 C67.847 248.3719 65.1977 244.9558 63.5572 241.442 C61.9166 237.9282 60.5513 234.1495 60.5179 230.5 Z";
		const FAB_ICON_WALLPAPER_PATH = "M 5.2 5.2 H 11.15 V 3.5 H 5.2 A 1.7 1.7 0 0 0 3.5 5.2 V 11.15 H 5.2 V 5.2 M 10.3 12.85 L 6.9 17.1 H 17.1 L 14.55 13.7 L 12.825 16.004 L 10.3 12.85 M 16.25 9.025 A 1.275 1.275 0 0 0 14.975 7.75 A 1.275 1.275 0 0 0 13.7 9.025 A 1.275 1.275 0 0 0 14.975 10.3 A 1.275 1.275 0 0 0 16.25 9.025 M 18.8 3.5 H 12.85 V 5.2 H 18.8 V 11.15 H 20.5 V 5.2 A 1.7 1.7 0 0 0 18.8 3.5 M 18.8 18.8 H 12.85 V 20.5 H 18.8 A 1.7 1.7 0 0 0 20.5 18.8 V 12.85 H 18.8 V 18.8 M 5.2 12.85 H 3.5 V 18.8 A 1.7 1.7 0 0 0 5.2 20.5 H 11.15 V 18.8 H 5.2 V 12.85 Z";
		const FAB_ICON_CLOSE_M_PATH = "M 18.8 3.5 H 8.6 C 7.665 3.5 6.9 4.265 6.9 5.2 V 15.4 C 6.9 16.343 7.665 17.1 8.6 17.1 H 18.8 C 19.743 17.1 20.5 16.343 20.5 15.4 V 5.2 C 20.5 4.265 19.743 3.5 18.8 3.5 M 18.8 15.4 H 8.6 V 5.2 H 18.8 V 15.4 M 5.2 6.9 V 18.8 H 17.1 V 20.5 H 5.2 C 4.265 20.5 3.5 19.743 3.5 18.8 V 6.9 H 5.2 M 10.105 12.714 L 12.51 10.3 L 10.105 7.878 L 11.295 6.688 L 13.7 9.11 L 16.114 6.704 L 17.304 7.895 L 14.89 10.3 L 17.296 12.714 L 16.106 13.904 L 13.7 11.49 L 11.295 13.904 L 10.105 12.714 Z";
		/**
		* Full FAB markup: a single petal <path> whose `d` is morphed (in place, via
		* the equal-angular sampled FAB_MORPH_*) + two stacked glyphs (temperature
		* idle, clock open). The glyph switch rides M3 motion: the CSS toggles the
		* `md3-fab-open` class on the FAB element; both glyphs are absolutely stacked
		* and cross-fade/rotate.
		*/
		function fabMarkup() {
			return [
				`<svg class="md3-fab-petal" fill="none" height="100%" viewBox="0 0 461 461" width="100%" xmlns="http://www.w3.org/2000/svg">`,
				`<path class="bgLightTint" fill="var(--md-sys-color-primary-container)" d="${FAB_MORPH_CAPSULE}"></path>`,
				`</svg>`,
				`<svg class="md3-fab-glyph md3-fab-icon-wallpaper" viewBox="0 0 24 24" aria-hidden="true">`,
				`<path d="${FAB_ICON_WALLPAPER_PATH}" fill="var(--md-sys-color-on-primary-container)"/>`,
				`</svg>`,
				`<svg class="md3-fab-glyph md3-fab-icon-close-m" viewBox="0 0 24 24" aria-hidden="true">`,
				`<path d="${FAB_ICON_CLOSE_M_PATH}" fill="var(--md-sys-color-on-primary-container)"/>`,
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
		//#region src/client/gpu.ts
		/** Whether the recolor stage may run its GPU path at all. */
		function hasGpu(kind) {
			return kind === "webgpu" || kind === "webgl2";
		}
		/** Whether we may show a wallpaper in this environment (spec: no GPU -> hide). */
		function canRecolor(kind) {
			return hasGpu(kind);
		}
		/**
		* Detect which GPU compute backend exists. WebGPU wins; otherwise we test for
		* a WebGL2 context. jsdom's canvas answers null getContext, so it returns
		* 'none' there.
		* @param win - window; default globalThis.
		*/
		function detectGpu(win = globalThis) {
			const gpu = win.navigator.gpu;
			if (typeof gpu === "object" && gpu !== null && typeof gpu.requestAdapter === "function") return "webgpu";
			try {
				const ctx = (win.document?.createElement("canvas"))?.getContext("webgl2");
				return ctx !== null && ctx !== void 0 ? "webgl2" : "none";
			} catch {
				return "none";
			}
		}
		/**
		* Resolve which image format the current browser can actually encode. WebP is
		* preferred (better quality-to-size for a wallpaper). We probe synchronously
		* with `toDataURL('image/webp')` on a 1x1 canvas: jsdom reports a PNG data URL
		* for the webp type, which fails the prefix check and forces jpeg.
		* @param win - window; default globalThis.
		*/
		function canEncode(win = globalThis) {
			try {
				const canvas = win.document?.createElement("canvas");
				if (!canvas || typeof canvas.toDataURL !== "function") return "jpeg";
				return canvas.toDataURL("image/webp").startsWith("data:image/webp") ? "webp" : "jpeg";
			} catch {
				return "jpeg";
			}
		}
		/** The mime type + container mapping for a resolved format. */
		function mimeFor(format) {
			return format === "webp" ? "image/webp" : "image/jpeg";
		}
		//#endregion
		//#region src/client/indexeddb.ts
		/**
		* IndexedDB persistence for the md3-wallpaper skin.
		*
		* localStorage stores only the compact Monaco state (512px JPEG for source
		* extraction + token sets). The full-resolution wallpaper (raw upload and the
		* recolored result) are blobs that must live in IndexedDB — localStorage
		* cannot hold multi-MB base64 within its ~5MB quota. This module provides
		* promise-based put/get/delete over a single object store, versioned so a
		* schema bump does not collide with older data.
		*
		* Everything degrades gracefully: if IndexedDB is unavailable (private mode,
		* sandboxed iframe, jsdom), operations resolve to a safe no-op / null instead
		* of throwing.
		*/
		/** Database + object-store names (single store for both flavours). */
		const DB_NAME = "dsh.md3Wallpaper.store";
		const STORE_NAME = "blobs";
		/** Key for the recolored (Monet-unified) blob. */
		const KEY_RECOLORED = "recolored";
		/** A small promise wrapper over the IndexedDB request/transaction events. */
		function openDb() {
			if (typeof indexedDB === "undefined") return Promise.resolve(null);
			return new Promise((resolve) => {
				let req;
				try {
					req = indexedDB.open(DB_NAME, 1);
				} catch {
					resolve(null);
					return;
				}
				req.onupgradeneeded = (event) => {
					const db = req.result;
					if (!db.objectStoreNames.contains("blobs")) db.createObjectStore(STORE_NAME);
				};
				req.onsuccess = () => resolve(req.result);
				req.onerror = () => resolve(null);
			});
		}
		/** Put a blob under a key. Resolves true on success. */
		async function putBlob(key, blob) {
			const db = await openDb();
			if (!db) return false;
			try {
				await new Promise((resolve, reject) => {
					const tx = db.transaction(STORE_NAME, "readwrite");
					tx.objectStore(STORE_NAME).put(blob, key);
					tx.oncomplete = () => resolve();
					tx.onerror = () => reject(tx.error);
					tx.onabort = () => reject(tx.error);
				});
				return true;
			} catch {
				return false;
			} finally {
				db.close();
			}
		}
		/** Get a blob under a key. Returns null when missing or unavailable. */
		async function getBlob(key) {
			const db = await openDb();
			if (!db) return null;
			try {
				return await new Promise((resolve, reject) => {
					const tx = db.transaction(STORE_NAME, "readonly");
					const req = tx.objectStore(STORE_NAME).get(key);
					req.onsuccess = () => resolve(req.result ?? null);
					req.onerror = () => reject(req.error);
					tx.oncomplete = () => resolve(null);
				});
			} catch {
				return null;
			} finally {
				db.close();
			}
		}
		/** Delete a blob under a key. Resolves true when no longer present. */
		async function deleteBlob(key) {
			const db = await openDb();
			if (!db) return false;
			try {
				await new Promise((resolve, reject) => {
					const tx = db.transaction(STORE_NAME, "readwrite");
					tx.objectStore(STORE_NAME).delete(key);
					tx.oncomplete = () => resolve();
					tx.onerror = () => reject(tx.error);
					tx.onabort = () => reject(tx.error);
				});
				return true;
			} catch {
				return false;
			} finally {
				db.close();
			}
		}
		/** Create a local object URL for a blob (revoked by the caller on dispose). */
		function objectUrlFor(blob) {
			if (typeof URL === "undefined" || typeof URL.createObjectURL !== "function") return "";
			return URL.createObjectURL(blob);
		}
		//#endregion
		//#region \0dsh-css:src/client/md3-wallpaper.module.css.mjs
		const css = "body[data-dsh-md3-wallpaper] g[clip-path=\"url(#dsh-wordmark-badge-clip)\"]:has(path[fill=\"var(--dsw-alias-label-primary-inverted)\"]){color:var(--md-sys-color-on-surface)}body[data-dsh-md3-wallpaper][data-ds-dark-theme]{background-color:var(--md-sys-color-surface-container-lowest,#141218)}html:has(body[data-dsh-md3-wallpaper]),body[data-dsh-md3-wallpaper]{overflow:hidden}body[data-dsh-md3-wallpaper]{--aion-bg-base:var(--md-sys-color-surface-container-lowest);--aion-bg-1:var(--md-sys-color-surface-container-low);--aion-bg-2:var(--md-sys-color-surface-container);--aion-bg-3:var(--md-sys-color-surface-container-high);--aion-bg-hover:var(--md-sys-color-surface-container-high);--aion-bg-active:var(--md-sys-color-surface-container-highest);--aion-bg-4:var(--md-sys-color-surface-container-highest);--aion-text-primary:var(--md-sys-color-on-surface);--aion-text-secondary:var(--md-sys-color-on-surface-variant);--aion-text-tertiary:var(--md-sys-color-outline);--aion-text-disabled:var(--md-sys-color-outline);--aion-primary:var(--md-sys-color-primary);--aion-success:var(--md-sys-color-tertiary);--aion-warning:var(--md-sys-color-secondary);--aion-danger:var(--md-sys-color-error);--aion-brand:var(--md-sys-color-primary);--aion-aou-1:var(--md-sys-color-surface-container);--aion-aou-2:var(--md-sys-color-surface-container-high);--aion-aou-3:var(--md-sys-color-surface-container-highest);--aion-aou-4:var(--md-sys-color-outline-variant);--aion-aou-5:var(--md-sys-color-outline);--aion-aou-6:var(--md-sys-color-primary);--aion-fill-2:var(--md-sys-color-surface-container-high);--aion-fill-3:var(--md-sys-color-surface-container-highest);--aion-border-base:var(--md-sys-color-outline-variant);--aion-overlay-shadow:0 8px 24px #00000029;--aion-font-sans:var(--dsw-font-family);--aion-font-mono:var(--ds-font-family-code);--dsw-alias-label-primary:var(--md-sys-color-on-surface);--dsw-alias-label-secondary:var(--md-sys-color-on-surface-variant);--dsw-alias-label-tertiary:var(--md-sys-color-on-surface-variant);--dsw-alias-label-primary-dimmed:var(--md-sys-color-on-surface-variant);--dsw-alias-markdown-code-block-banner:color-mix(in srgb, var(--md-sys-color-surface-container-high) 88%, var(--md-sys-color-primary) 12%);--dsw-alias-markdown-code-block:color-mix(in srgb, var(--md-sys-color-surface-container) 92%, var(--md-sys-color-primary) 8%);--dsw-alias-markdown-inline-code:color-mix(in srgb, var(--md-sys-color-surface-container) 84%, var(--md-sys-color-primary) 16%);--dsw-alias-markdown-citation:var(--md-sys-color-surface-container-high);--dsw-alias-markdown-tag:var(--md-sys-color-surface-container);--dsw-alias-markdown-placeholder:var(--md-sys-color-surface-container);--dsw-alias-markdown-code-segment-selected:var(--md-sys-color-primary-container);--dsw-alias-markdown-code-segment-unselected:var(--md-sys-color-surface-container-low)}body[data-dsh-md3-wallpaper][data-ds-dark-theme]{--dsw-alias-label-primary:var(--md-sys-color-on-surface);--dsw-alias-label-secondary:var(--md-sys-color-on-surface-variant);--dsw-alias-label-tertiary:var(--md-sys-color-on-surface-variant);--dsw-alias-label-primary-dimmed:var(--md-sys-color-on-surface-variant);--dsw-alias-markdown-code-block-banner:var(--md-sys-color-surface-container-high);--dsw-alias-markdown-code-block:var(--md-sys-color-surface-container);--dsw-alias-markdown-inline-code:var(--md-sys-color-surface-container-high);--dsw-alias-markdown-citation:var(--md-sys-color-surface-container-high);--dsw-alias-markdown-tag:var(--md-sys-color-surface-container);--dsw-alias-markdown-placeholder:var(--md-sys-color-surface-container);--dsw-alias-markdown-code-segment-selected:var(--md-sys-color-primary-container);--dsw-alias-markdown-code-segment-unselected:var(--md-sys-color-surface-container-low)}.JgxNmG_md3Fab{z-index:2147482000;cursor:pointer;width:56px;height:56px;transition:transform .18s var(--md-sys-motion-ease);background:0 0;border:none;padding:0;display:block;position:fixed;bottom:24px;right:24px}.JgxNmG_md3Fab:hover{transform:scale(1.06)rotate(8deg)}.JgxNmG_md3Fab:active{transform:scale(.94)}.JgxNmG_md3Fab:focus-visible{outline:2px solid var(--md-sys-color-primary,#6750a4);outline-offset:3px;border-radius:28px}body[data-dsh-md3-wallpaper] .md3-fab-petal{filter:drop-shadow(0 3px 8px #0000003d);display:block}body[data-dsh-md3-wallpaper] .md3-fab-glyph{pointer-events:none;width:26px;height:26px;transition:opacity .24s var(--md-sys-motion-emphasized), transform .24s var(--md-sys-motion-emphasized);margin:auto;position:absolute;inset:0}body[data-dsh-md3-wallpaper] .md3-fab-icon-wallpaper{opacity:1;transform:rotate(0)scale(1)}body[data-dsh-md3-wallpaper] .md3-fab-icon-close-m{opacity:0;transform:rotate(-90deg)scale(.4)}body[data-dsh-md3-wallpaper] .md3FabOpen .md3-fab-icon-wallpaper{opacity:0;transform:rotate(90deg)scale(.4)}body[data-dsh-md3-wallpaper] .md3FabOpen .md3-fab-icon-close-m{opacity:1;transform:rotate(0)scale(1)}.JgxNmG_md3Menu{z-index:2147482001;border:1px solid var(--md-sys-color-outline-variant,#cac4d0);background:var(--md-sys-color-surface-container-high,#ece6f0);width:284px;color:var(--md-sys-color-on-surface,#1d1b20);font-family:var(--dsw-font-family);border-radius:28px;flex-direction:column;gap:4px;padding:10px;font-size:13px;line-height:1.5;display:none;position:fixed;bottom:96px;right:24px;box-shadow:0 12px 32px #0000004d}.JgxNmG_md3Menu,.JgxNmG_md3Menu *{box-sizing:border-box}.JgxNmG_md3MenuOpen{animation:.16s cubic-bezier(.2,0,0,1) JgxNmG_md3-menu-in;display:flex}@keyframes JgxNmG_md3-menu-in{0%{opacity:0;transform:translateY(8px)scale(.98)}to{opacity:1;transform:translateY(0)scale(1)}}.JgxNmG_md3MenuPreview{background-color:var(--md-sys-color-surface-variant,#e7e0ec);border:1px solid var(--md-sys-color-outline-variant,#cac4d0);background-position:50%;background-size:cover;border-radius:18px;flex:none;height:120px;margin-bottom:6px}.JgxNmG_md3MenuLabel{color:var(--md-sys-color-on-surface-variant,#49454f);align-items:center;gap:10px;padding:6px 12px 2px;font-size:12px;display:flex}.JgxNmG_md3MenuLabel svg{flex:none}.JgxNmG_md3MenuPresets{gap:8px;padding:4px 12px 8px;display:flex}.JgxNmG_md3PresetSwatch{border:1px solid var(--md-sys-color-outline-variant,#cac4d0);cursor:pointer;border-radius:999px;flex:1;height:34px;padding:0;transition:transform .12s,box-shadow .12s}.JgxNmG_md3PresetSwatch:hover{transform:translateY(-2px);box-shadow:0 3px 8px #0003}.JgxNmG_md3PresetSwatch:active{transform:scale(.94)}.JgxNmG_md3PresetSwatch:focus-visible{outline:2px solid var(--md-sys-color-primary,#6750a4);outline-offset:2px}.JgxNmG_md3MenuRow{width:100%;color:var(--md-sys-color-on-surface,#1d1b20);font:inherit;text-align:left;cursor:pointer;background:0 0;border:none;border-radius:12px;align-items:center;gap:10px;padding:9px 12px;transition:background-color .12s;display:flex}.JgxNmG_md3MenuRow:hover{background:color-mix(in srgb, var(--md-sys-color-on-surface,#1d1b20) 8%, transparent)}.JgxNmG_md3MenuRow:active{background:color-mix(in srgb, var(--md-sys-color-on-surface,#1d1b20) 14%, transparent)}.JgxNmG_md3MenuRow:focus-visible{outline:2px solid var(--md-sys-color-primary,#6750a4);outline-offset:-2px}.JgxNmG_md3MenuRow svg{vertical-align:middle;color:var(--md-sys-color-on-surface-variant,#49454f);flex:none;align-self:center}.JgxNmG_md3MenuRowText{flex:1;min-width:0}.JgxNmG_md3MenuRow input[type=checkbox]{width:20px;height:20px;accent-color:var(--md-sys-color-primary,#6750a4);cursor:pointer;flex:none}.JgxNmG_md3FileInput{display:none}.JgxNmG_md3Split{background:color-mix(in srgb, var(--md-sys-color-secondary-container,#e8def8) 70%, transparent);border:1px solid color-mix(in srgb, var(--md-sys-color-outline-variant,#cac4d0) 55%, transparent);border-radius:12px;align-items:stretch;width:100%;display:flex;overflow:hidden}.JgxNmG_md3SplitMain{min-width:0;color:var(--md-sys-color-on-secondary-container,#1d192b);font:inherit;text-align:left;cursor:pointer;background:0 0;border:none;flex:1;align-items:center;gap:10px;padding:9px 8px 9px 12px;transition:background-color .12s;display:flex}.JgxNmG_md3SplitMain:hover{background:color-mix(in srgb, var(--md-sys-color-on-secondary-container,#1d192b) 8%, transparent)}.JgxNmG_md3SplitMain:active{background:color-mix(in srgb, var(--md-sys-color-on-secondary-container,#1d192b) 14%, transparent)}.JgxNmG_md3SplitMain:focus-visible{outline:2px solid var(--md-sys-color-primary,#6750a4);outline-offset:-2px}.JgxNmG_md3SplitMain svg{color:var(--md-sys-color-on-secondary-container,#1d192b);flex:none}.JgxNmG_md3SplitDivider{background:color-mix(in srgb, var(--md-sys-color-outline,#79747e) 55%, transparent);flex:none;align-self:stretch;width:1px}.JgxNmG_md3SplitTrail{width:36px;color:var(--md-sys-color-on-secondary-container,#1d192b);cursor:pointer;background:0 0;border:none;flex:none;justify-content:center;align-items:center;transition:background-color .12s,transform .16s;display:flex}.JgxNmG_md3SplitTrail:hover{background:color-mix(in srgb, var(--md-sys-color-on-secondary-container,#1d192b) 8%, transparent)}.JgxNmG_md3SplitTrail:active{background:color-mix(in srgb, var(--md-sys-color-on-secondary-container,#1d192b) 14%, transparent)}.JgxNmG_md3SplitTrail:focus-visible{outline:2px solid var(--md-sys-color-primary,#6750a4);outline-offset:-2px}.JgxNmG_md3SplitTrail[aria-expanded=true]{transform:rotate(180deg)}.JgxNmG_md3SplitMenu{border:1px solid var(--md-sys-color-outline-variant,#cac4d0);background:var(--md-sys-color-surface-container-high,#ece6f0);border-radius:12px;flex-direction:column;gap:2px;margin-top:4px;padding:4px;display:none;box-shadow:0 8px 24px #0003}.JgxNmG_md3SplitMenuOpen{display:flex}.JgxNmG_md3SplitOption{width:100%;color:var(--md-sys-color-on-surface,#1d1b20);font:inherit;text-align:left;cursor:pointer;background:0 0;border:none;border-radius:8px;align-items:center;gap:8px;padding:8px 10px;transition:background-color .12s;display:flex}.JgxNmG_md3SplitOption:hover{background:color-mix(in srgb, var(--md-sys-color-on-surface,#1d1b20) 8%, transparent)}.JgxNmG_md3SplitOption:focus-visible{outline:2px solid var(--md-sys-color-primary,#6750a4);outline-offset:-2px}.JgxNmG_md3SplitOptionCheck{text-align:center;width:16px;color:var(--md-sys-color-primary,#6750a4);visibility:hidden;flex:none}.JgxNmG_md3SplitOption[aria-checked=true] .JgxNmG_md3SplitOptionCheck{visibility:visible}.JgxNmG_md3SplitOptionText{flex:1;min-width:0}.JgxNmG_md3SplitOption[aria-checked=true] .JgxNmG_md3SplitOptionText{color:var(--md-sys-color-primary,#6750a4);font-weight:600}body[data-dsh-md3-wallpaper] [class*=logoRow]{color:var(--md-sys-color-primary,#6750a4)}body[data-dsh-md3-wallpaper] [class*=logoRow] svg [fill]:not([fill=none]):not([fill=currentColor]){fill:currentColor}body[data-dsh-md3-wallpaper] [class*=logoRow] svg [stroke]:not([stroke=none]){stroke:currentColor}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) button{border-radius:999px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) input:not([type=checkbox]):not([type=radio]):not([type=range]),body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) textarea,body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) select{border-radius:4px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [role=dialog]{border-radius:28px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [role=tooltip],body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [role=menu],body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [role=listbox]{border-radius:4px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [class*=sessionRow],body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [class*=logoRow],body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) [class*=searchResult]{border-radius:8px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) ::-webkit-scrollbar-thumb{border-radius:999px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) .JgxNmG_aionui-root button{border-radius:999px}body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) .JgxNmG_aionui-root [class*=treeRow],body[data-dsh-md3-wallpaper]:not([data-md3-shape=off]) .JgxNmG_aionui-root [class*=fileRow]{border-radius:8px}body[data-dsh-md3-wallpaper]{--dsw-alias-bg-base:var(--md-sys-color-surface-container-lowest);--dsw-alias-bg-layer-1:var(--md-sys-color-surface-container-low);--dsw-alias-bg-layer-2:var(--md-sys-color-surface-container);--dsw-alias-bg-layer-3:var(--md-sys-color-surface-container-high);--dsw-alias-bg-overlay:var(--md-sys-color-surface-container-high);--dsw-specific-input-major:var(--md-sys-color-surface-container-high);--dsw-specific-login-input:var(--md-sys-color-surface-container-high);--dsw-specific-sidebar-fill:var(--md-sys-color-surface-container-low);--dsw-specific-sidebar-nav-item-active:var(--md-sys-color-surface-container-high);--dsw-specific-sidebar-nav-item-hover:var(--md-sys-color-surface-container);--dsw-specific-sidebar-nav-item-active-accent:var(--md-sys-color-primary-container);--dsw-specific-bubble:var(--md-sys-color-primary-container);--dsw-specific-menu:var(--md-sys-color-surface-container-high);--dsw-specific-tip:var(--md-sys-color-surface-container)}body[data-dsh-md3-wallpaper] [data-pane=sidebar]>div{background:var(--md-sys-color-surface-container-low)}body[data-dsh-md3-wallpaper] [data-pane=conversation]{background:var(--md-sys-color-surface-container)}body[data-dsh-md3-wallpaper] [data-pane=details]{background:var(--md-sys-color-surface-container-high)}body[data-dsh-md3-wallpaper][data-md3-show-bg=on] [data-pane=sidebar]>div{background:color-mix(in srgb, var(--md-sys-color-surface-container-low) 55%, transparent)!important;-webkit-backdrop-filter:blur(12px)!important}body[data-dsh-md3-wallpaper][data-md3-show-bg=on] [data-pane=conversation]{background:color-mix(in srgb, var(--md-sys-color-surface-container) 58%, transparent)!important;-webkit-backdrop-filter:blur(10px)!important}body[data-dsh-md3-wallpaper][data-md3-show-bg=on] [data-pane=details]{background:color-mix(in srgb, var(--md-sys-color-surface-container-high) 60%, transparent)!important;-webkit-backdrop-filter:blur(12px)!important}body[data-dsh-md3-wallpaper][data-md3-show-bg=on] [class*=frame],body[data-dsh-md3-wallpaper][data-md3-show-bg=on] [class*=frame]>div{background:0 0!important}body[data-dsh-md3-wallpaper][data-ds-dark-theme]{--dsw-alias-bg-base:var(--md-sys-color-surface-container-lowest);--dsw-alias-bg-layer-1:var(--md-sys-color-surface-container-low);--dsw-alias-bg-layer-2:var(--md-sys-color-surface-container);--dsw-alias-bg-layer-3:var(--md-sys-color-surface-container-high);--dsw-alias-bg-overlay:var(--md-sys-color-surface-container-high);--dsw-specific-input-major:var(--md-sys-color-surface-container-high);--dsw-specific-login-input:var(--md-sys-color-surface-container-high);--dsw-specific-sidebar-fill:var(--md-sys-color-surface-container-low);--dsw-specific-sidebar-nav-item-active:var(--md-sys-color-surface-container-high);--dsw-specific-sidebar-nav-item-hover:var(--md-sys-color-surface-container);--dsw-specific-sidebar-nav-item-active-accent:var(--md-sys-color-primary-container);--dsw-specific-bubble:var(--md-sys-color-primary-container);--dsw-specific-menu:var(--md-sys-color-surface-container-high);--dsw-specific-tip:var(--md-sys-color-surface-container)}body[data-dsh-md3-wallpaper][data-ds-dark-theme] [data-pane=sidebar]>div{background:var(--md-sys-color-surface-container-low)}body[data-dsh-md3-wallpaper][data-ds-dark-theme] [data-pane=conversation]{background:var(--md-sys-color-surface-container)}body[data-dsh-md3-wallpaper][data-ds-dark-theme] [data-pane=details]{background:var(--md-sys-color-surface-container-high)}body[data-dsh-md3-wallpaper][data-md3-show-bg=on][data-ds-dark-theme] [data-pane=sidebar]>div{background:color-mix(in srgb, var(--md-sys-color-surface-container-low) 68%, transparent)!important;-webkit-backdrop-filter:blur(12px)!important}body[data-dsh-md3-wallpaper][data-md3-show-bg=on][data-ds-dark-theme] [data-pane=conversation]{background:color-mix(in srgb, var(--md-sys-color-surface-container) 72%, transparent)!important;-webkit-backdrop-filter:blur(10px)!important}body[data-dsh-md3-wallpaper][data-md3-show-bg=on][data-ds-dark-theme] [data-pane=details]{background:color-mix(in srgb, var(--md-sys-color-surface-container-high) 74%, transparent)!important;-webkit-backdrop-filter:blur(12px)!important}body[data-dsh-md3-wallpaper][data-md3-show-bg=on][data-ds-dark-theme] [class*=frame],body[data-dsh-md3-wallpaper][data-md3-show-bg=on][data-ds-dark-theme] [class*=frame]>div{background:0 0!important}body[data-dsh-md3-wallpaper]{--dsw-alias-interactive-bg-hover:color-mix(in srgb, var(--md-sys-color-primary) 12%, transparent);--dsw-alias-interactive-bg-active:color-mix(in srgb, var(--md-sys-color-primary-container) 90%, var(--md-sys-color-on-primary-container) 10%);--dsw-alias-interactive-bg-hover-accent:color-mix(in srgb, var(--md-sys-color-primary) 16%, transparent);--dsw-alias-interactive-bg-hover-solid:var(--md-sys-color-surface-container-high);--dsw-alias-interactive-bg-hover-danger:color-mix(in srgb, var(--md-sys-color-error) 10%, transparent);--dsw-alias-button-primary-fill:var(--md-sys-color-on-surface);--dsw-alias-button-primary-hover:color-mix(in srgb, var(--md-sys-color-on-surface) 80%, var(--md-sys-color-surface-container) 20%);--dsw-alias-button-primary-dimmed:var(--md-sys-color-surface-container-high);--dsw-alias-button-contrast-fill:var(--md-sys-color-inverse-surface);--dsw-alias-button-info-fill:var(--md-sys-color-primary);--dsw-alias-button-info-hover:color-mix(in srgb, var(--md-sys-color-primary) 86%, var(--md-sys-color-on-primary) 14%);--dsw-alias-button-ghost-active-fill:var(--md-sys-color-primary-container);--dsw-alias-button-ghost-active-hover:color-mix(in srgb, var(--md-sys-color-primary-container) 82%, var(--md-sys-color-primary) 18%);--dsw-alias-button-ghost-active-border:var(--md-sys-color-primary);--dsw-alias-button-tool-bar-fill:color-mix(in srgb, var(--md-sys-color-primary) 46%, transparent);--dsw-alias-button-tool-bar-fill-invisible:color-mix(in srgb, var(--md-sys-color-primary) 34%, transparent);--dsw-alias-button-tool-bar-hover:color-mix(in srgb, var(--md-sys-color-primary) 58%, transparent);--dsw-alias-button-elevated-fill:var(--md-sys-color-surface-container-high);--dsw-alias-button-floating-fill:var(--md-sys-color-surface-container)}body[data-dsh-md3-wallpaper][data-ds-dark-theme]{--dsw-alias-interactive-bg-hover:color-mix(in srgb, var(--md-sys-color-primary) 16%, transparent);--dsw-alias-interactive-bg-active:color-mix(in srgb, var(--md-sys-color-primary-container) 92%, var(--md-sys-color-on-primary-container) 8%);--dsw-alias-interactive-bg-hover-accent:color-mix(in srgb, var(--md-sys-color-primary) 22%, transparent);--dsw-alias-interactive-bg-hover-solid:var(--md-sys-color-surface-container-high);--dsw-alias-interactive-bg-hover-danger:color-mix(in srgb, var(--md-sys-color-error) 14%, transparent);--dsw-alias-button-primary-fill:var(--md-sys-color-on-surface);--dsw-alias-button-primary-hover:color-mix(in srgb, var(--md-sys-color-on-surface) 82%, var(--md-sys-color-surface-container) 18%);--dsw-alias-button-primary-dimmed:var(--md-sys-color-surface-container-high);--dsw-alias-button-contrast-fill:var(--md-sys-color-inverse-surface);--dsw-alias-button-info-fill:var(--md-sys-color-primary);--dsw-alias-button-info-hover:color-mix(in srgb, var(--md-sys-color-primary) 82%, var(--md-sys-color-on-primary) 18%);--dsw-alias-button-ghost-active-fill:var(--md-sys-color-primary-container);--dsw-alias-button-ghost-active-hover:color-mix(in srgb, var(--md-sys-color-primary-container) 80%, var(--md-sys-color-primary) 20%);--dsw-alias-button-ghost-active-border:var(--md-sys-color-primary);--dsw-alias-button-tool-bar-fill:color-mix(in srgb, var(--md-sys-color-primary) 50%, transparent);--dsw-alias-button-tool-bar-fill-invisible:color-mix(in srgb, var(--md-sys-color-primary) 38%, transparent);--dsw-alias-button-tool-bar-hover:color-mix(in srgb, var(--md-sys-color-primary) 62%, transparent);--dsw-alias-button-elevated-fill:var(--md-sys-color-surface-container-high);--dsw-alias-button-floating-fill:var(--md-sys-color-surface-container)}body[data-dsh-md3-wallpaper]{--dsw-alias-label-caption:var(--md-sys-color-on-surface-variant);--dsw-alias-label-dimmed:var(--md-sys-color-outline);--dsw-alias-label-primary-bluish:var(--md-sys-color-secondary);--dsw-alias-label-primary-foreground:var(--md-sys-color-surface);--dsw-alias-border-l1:color-mix(in srgb, var(--md-sys-color-outline) 15%, transparent);--dsw-alias-border-l2:color-mix(in srgb, var(--md-sys-color-outline) 32%, transparent);--dsw-alias-border-l2-darkmode-thin:color-mix(in srgb, var(--md-sys-color-outline) 22%, transparent);--dsw-alias-border-l3:color-mix(in srgb, var(--md-sys-color-outline) 38%, transparent);--dsw-alias-border-l4:color-mix(in srgb, var(--md-sys-color-outline) 48%, transparent);--dsw-alias-border-inverted:color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent);--dsw-alias-border-inverted2:color-mix(in srgb, var(--md-sys-color-on-surface) 18%, transparent);--dsw-alias-bg-mask-1:color-mix(in srgb, var(--md-sys-color-scrim) 28%, transparent);--dsw-alias-bg-mask-2:color-mix(in srgb, var(--md-sys-color-scrim) 14%, transparent);--dsw-alias-bg-mask-3:color-mix(in srgb, var(--md-sys-color-scrim) 50%, transparent);--dsw-alias-bg-mask-photo:color-mix(in srgb, var(--md-sys-color-scrim) 88%, transparent);--dsw-alias-bg-mask-drop:color-mix(in srgb, var(--md-sys-color-surface-container) 72%, transparent);--dsw-alias-bg-module-platform:var(--md-sys-color-surface-variant);--dsw-alias-bg-multi-select:var(--md-sys-color-surface-variant);--dsw-alias-bg-skeleton:color-mix(in srgb, var(--md-sys-color-on-surface) 7%, transparent);--dsw-alias-brand-primary:var(--md-sys-color-primary);--dsw-alias-brand-primary-invert:var(--md-sys-color-on-surface);--dsw-alias-brand-text:var(--md-sys-color-on-primary);--dsw-alias-brand-primary-new-colorprimary-new-color:var(--md-sys-color-primary);--dsw-alias-state-business-primary:var(--md-sys-color-primary);--dsw-alias-state-business-tertiary:var(--md-sys-color-primary-container);--dsw-alias-state-error-primary:var(--md-sys-color-error);--dsw-alias-state-error-secondary:var(--md-sys-color-error-container);--dsw-alias-state-success-primary:var(--md-sys-color-tertiary);--dsw-alias-state-success-secondary:var(--md-sys-color-tertiary-container);--dsw-alias-state-success-tertiary:var(--md-sys-color-tertiary-container);--dsw-alias-state-warn-primary:var(--md-sys-color-secondary);--dsw-alias-state-warn-secondary:var(--md-sys-color-secondary-container);--dsw-alias-state-warn-label:var(--md-sys-color-on-secondary-container);--dsw-alias-state-warn-tertiary:var(--md-sys-color-secondary-container);--dsw-alias-toast-bg:var(--md-sys-color-inverse-surface);--dsw-alias-tooltip-bg:var(--md-sys-color-inverse-surface);--dsw-alias-button-floating-hover:var(--md-sys-color-surface-container-high);--dsw-specific-selector:var(--md-sys-color-surface-variant);--dsw-specific-bubble-highlight:color-mix(in srgb, var(--md-sys-color-primary-container) 78%, var(--md-sys-color-primary) 22%)}body[data-dsh-md3-wallpaper][data-ds-dark-theme]{--dsw-alias-label-caption:var(--md-sys-color-on-surface-variant);--dsw-alias-label-dimmed:var(--md-sys-color-outline);--dsw-alias-label-primary-bluish:var(--md-sys-color-secondary);--dsw-alias-label-primary-foreground:var(--md-sys-color-surface);--dsw-alias-border-l1:color-mix(in srgb, var(--md-sys-color-outline) 22%, transparent);--dsw-alias-border-l2:color-mix(in srgb, var(--md-sys-color-outline) 40%, transparent);--dsw-alias-border-l2-darkmode-thin:color-mix(in srgb, var(--md-sys-color-outline) 28%, transparent);--dsw-alias-border-l3:color-mix(in srgb, var(--md-sys-color-outline) 48%, transparent);--dsw-alias-border-l4:color-mix(in srgb, var(--md-sys-color-outline) 58%, transparent);--dsw-alias-border-inverted:color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent);--dsw-alias-border-inverted2:color-mix(in srgb, var(--md-sys-color-on-surface) 18%, transparent);--dsw-alias-bg-mask-1:color-mix(in srgb, var(--md-sys-color-scrim) 50%, transparent);--dsw-alias-bg-mask-2:color-mix(in srgb, var(--md-sys-color-scrim) 24%, transparent);--dsw-alias-bg-mask-3:color-mix(in srgb, var(--md-sys-color-scrim) 56%, transparent);--dsw-alias-bg-mask-photo:color-mix(in srgb, var(--md-sys-color-scrim) 88%, transparent);--dsw-alias-bg-mask-drop:color-mix(in srgb, var(--md-sys-color-surface-container) 76%, transparent);--dsw-alias-bg-module-platform:var(--md-sys-color-surface-variant);--dsw-alias-bg-multi-select:var(--md-sys-color-surface-variant);--dsw-alias-bg-skeleton:color-mix(in srgb, var(--md-sys-color-on-surface) 9%, transparent);--dsw-alias-brand-primary:var(--md-sys-color-primary);--dsw-alias-brand-primary-invert:var(--md-sys-color-on-surface);--dsw-alias-brand-text:var(--md-sys-color-on-primary);--dsw-alias-brand-primary-new-colorprimary-new-color:var(--md-sys-color-primary);--dsw-alias-state-business-primary:var(--md-sys-color-primary);--dsw-alias-state-business-tertiary:var(--md-sys-color-primary-container);--dsw-alias-state-error-primary:var(--md-sys-color-error);--dsw-alias-state-error-secondary:var(--md-sys-color-error-container);--dsw-alias-state-success-primary:var(--md-sys-color-tertiary);--dsw-alias-state-success-secondary:var(--md-sys-color-tertiary-container);--dsw-alias-state-success-tertiary:var(--md-sys-color-tertiary-container);--dsw-alias-state-warn-primary:var(--md-sys-color-secondary);--dsw-alias-state-warn-secondary:var(--md-sys-color-secondary-container);--dsw-alias-state-warn-label:var(--md-sys-color-on-secondary-container);--dsw-alias-state-warn-tertiary:var(--md-sys-color-secondary-container);--dsw-alias-toast-bg:var(--md-sys-color-inverse-surface);--dsw-alias-tooltip-bg:var(--md-sys-color-inverse-surface);--dsw-alias-button-floating-hover:var(--md-sys-color-surface-container-high);--dsw-specific-selector:var(--md-sys-color-surface-variant);--dsw-specific-bubble-highlight:color-mix(in srgb, var(--md-sys-color-primary-container) 78%, var(--md-sys-color-primary) 22%)}body[data-dsh-md3-wallpaper]{--shiki-foreground:var(--md-sys-color-on-surface);--shiki-background:var(--md-sys-color-surface-container);--shiki-token-constant:var(--md-sys-color-primary);--shiki-token-string:var(--md-sys-color-tertiary);--shiki-token-comment:var(--md-sys-color-outline);--shiki-token-keyword:var(--md-sys-color-secondary);--shiki-token-parameter:var(--md-sys-color-secondary);--shiki-token-function:var(--md-sys-color-primary);--shiki-token-string-expression:var(--md-sys-color-tertiary);--shiki-token-punctuation:var(--md-sys-color-outline);--shiki-token-link:var(--md-sys-color-primary);--json-tree-property:var(--md-sys-color-primary);--json-tree-string:var(--md-sys-color-tertiary);--json-tree-number:var(--md-sys-color-secondary);--json-tree-keyword:var(--md-sys-color-secondary);--json-tree-punctuation:var(--md-sys-color-outline);--json-tree-icon:var(--md-sys-color-outline);--json-tree-hover:color-mix(in srgb, var(--md-sys-color-on-surface) 6%, transparent)}body[data-dsh-md3-wallpaper][data-ds-dark-theme]{--shiki-foreground:var(--md-sys-color-on-surface);--shiki-background:var(--md-sys-color-surface-container);--shiki-token-constant:var(--md-sys-color-primary);--shiki-token-string:var(--md-sys-color-tertiary);--shiki-token-comment:var(--md-sys-color-outline);--shiki-token-keyword:var(--md-sys-color-secondary);--shiki-token-parameter:var(--md-sys-color-secondary);--shiki-token-function:var(--md-sys-color-primary);--shiki-token-string-expression:var(--md-sys-color-tertiary);--shiki-token-punctuation:var(--md-sys-color-outline);--shiki-token-link:var(--md-sys-color-primary);--json-tree-property:var(--md-sys-color-primary);--json-tree-string:var(--md-sys-color-tertiary);--json-tree-number:var(--md-sys-color-secondary);--json-tree-keyword:var(--md-sys-color-secondary);--json-tree-punctuation:var(--md-sys-color-outline);--json-tree-icon:var(--md-sys-color-outline);--json-tree-hover:color-mix(in srgb, var(--md-sys-color-on-surface) 8%, transparent)}body[data-dsh-md3-wallpaper]{--meter-tint:var(--md-sys-color-secondary);--dsw-hovercard-bg:var(--md-sys-color-inverse-surface);--dsh-state-ongoing:var(--md-sys-color-primary);--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l1);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l1)}body[data-dsh-md3-wallpaper] [data-timeline-span],body[data-dsh-md3-wallpaper] [data-trajectory-scroll] table{--trajectory-assistant-decoding-color:color-mix(in srgb, var(--md-sys-color-primary) 60%, var(--md-sys-color-error));--trajectory-assistant-ttft-color:color-mix(in srgb, var(--trajectory-assistant-decoding-color) 54%, var(--md-sys-color-surface-container));--trajectory-turn-accent:color-mix(in srgb, var(--md-sys-color-secondary) 40%, var(--md-sys-color-surface-container-low))}body[data-dsh-md3-wallpaper]{--dsw-shadow-lv1:0 2px 4px 0 color-mix(in srgb, var(--md-sys-color-shadow) 26%, transparent);--dsw-shadow-lv1-blur:0 4px 12px 0 color-mix(in srgb, var(--md-sys-color-shadow) 14%, transparent);--dsw-shadow-lv2:0 2px 8px 0 color-mix(in srgb, var(--md-sys-color-shadow) 22%, transparent);--dsw-shadow-lv3:0 0 1px 0 color-mix(in srgb, var(--md-sys-color-shadow) 40%, transparent), 0 12px 32px 0 color-mix(in srgb, var(--md-sys-color-shadow) 30%, transparent);--dsw-mask-blur:blur(2px);--dsw-linear-gradient-think:linear-gradient(180deg, var(--md-sys-color-surface-container) 20.19%, transparent 100%);--dsw-linear-think-select:linear-gradient(180deg, var(--md-sys-color-surface-container-high) 20.19%, transparent 100%)}body[data-dsh-md3-wallpaper][data-ds-dark-theme]{--dsw-shadow-lv1:0 2px 4px 0 color-mix(in srgb, var(--md-sys-color-shadow) 36%, transparent);--dsw-shadow-lv1-blur:0 4px 12px 0 color-mix(in srgb, var(--md-sys-color-shadow) 20%, transparent);--dsw-shadow-lv2:0 2px 8px 0 color-mix(in srgb, var(--md-sys-color-shadow) 30%, transparent);--dsw-shadow-lv3:0 0 1px 0 color-mix(in srgb, var(--md-sys-color-shadow) 48%, transparent), 0 12px 32px 0 color-mix(in srgb, var(--md-sys-color-shadow) 40%, transparent);--dsw-mask-blur:blur(2px);--dsw-linear-gradient-think:linear-gradient(180deg, var(--md-sys-color-surface-container) 20.19%, transparent 100%);--dsw-linear-think-select:linear-gradient(180deg, var(--md-sys-color-surface-container-high) 20.19%, transparent 100%)}body[data-dsh-md3-wallpaper]{--md-sys-motion-ease:cubic-bezier(.2, 0, 0, 1);--md-sys-motion-emphasized:cubic-bezier(.2, 0, 0, 1);--md-sys-motion-standard:cubic-bezier(.2, 0, 0, 1);--md-sys-motion-emphasized-accelerate:cubic-bezier(.3, 0, 1, 1);--md-sys-motion-emphasized-decelerate:cubic-bezier(0, 0, 0, 1);--md-sys-duration-short-1:50ms;--md-sys-duration-short-2:.1s;--md-sys-duration-short-3:.15s;--md-sys-duration-short-4:.2s;--md-sys-duration-medium-1:.25s;--md-sys-duration-medium-2:.3s;--md-sys-duration-medium-3:.35s;--md-sys-duration-medium-4:.4s;--md-sys-elevation-level-0:0 0 0 0 transparent;--md-sys-elevation-level-1:0 1px 2px 0 color-mix(in srgb, var(--md-sys-color-shadow) 20%, transparent);--md-sys-elevation-level-2:0 2px 6px 0 color-mix(in srgb, var(--md-sys-color-shadow) 24%, transparent);--md-sys-elevation-level-3:0 4px 16px 0 color-mix(in srgb, var(--md-sys-color-shadow) 28%, transparent);--md-sys-elevation-level-4:0 8px 24px 0 color-mix(in srgb, var(--md-sys-color-shadow) 32%, transparent);--md-sys-elevation-level-5:0 12px 36px 0 color-mix(in srgb, var(--md-sys-color-shadow) 36%, transparent)}div[class$=_root][data-phase=active]{background:0 0!important}";
		const tagId = "@anningui/dsh-client-ui-skin-md3-wallpaper/md3-wallpaper.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@anningui/dsh-client-ui-skin-md3-wallpaper";
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
			"md3PresetSwatch": "JgxNmG_md3PresetSwatch",
			"md3Split": "JgxNmG_md3Split",
			"md3SplitDivider": "JgxNmG_md3SplitDivider",
			"md3SplitMain": "JgxNmG_md3SplitMain",
			"md3SplitMenu": "JgxNmG_md3SplitMenu",
			"md3SplitMenuOpen": "JgxNmG_md3SplitMenuOpen",
			"md3SplitOption": "JgxNmG_md3SplitOption",
			"md3SplitOptionCheck": "JgxNmG_md3SplitOptionCheck",
			"md3SplitOptionText": "JgxNmG_md3SplitOptionText",
			"md3SplitTrail": "JgxNmG_md3SplitTrail"
		};
		//#endregion
		//#region src/client/cam16-gpu.ts
		/**
		* Self-consistent CAM16 (HCT) color math for the md3-wallpaper recolor.
		*
		* This module ports the authoritative @material/material-color-utilities CAM16
		* forward + inverse transforms (and the D65 sRGB gamma) into plain JS. It is
		* the SINGLE source of truth for the numbers that the WebGPU (WGSL) and
		* WebGL2 (GLSL) shaders embed, so the CPU reference and both GPU paths map a
		* pixel identically:
		*
		*   sRGB -> linear -> XYZ -> CAT02 cone -> CAM16 (hue, chroma, J)
		*   remap (pull hue toward target, clamp chroma, keep J)
		*   CAM16 -> XYZ -> sRGB
		*
		* `remapPixel` is the Monet-unified tone operator used by the CPU fallback.
		* Tests exercise it; the shaders mirror the same equations.
		*/
		/** sRGB linearization (RGB component 0..255 -> linear 0..100), matches material. */
		function srgbComponentToLinear(rgb) {
			const normalized = rgb / 255;
			if (normalized <= .040449936) return normalized / 12.92 * 100;
			return Math.pow((normalized + .055) / 1.055, 2.4) * 100;
		}
		/** sRGB delinearization (linear 0..100 -> RGB component 0..255), matches material. */
		function linearToSrgbComponent(rgb) {
			const normalized = rgb / 100;
			let value = 0;
			if (normalized <= .0031308) value = normalized * 12.92;
			else value = 1.055 * Math.pow(normalized, 1 / 2.4) - .055;
			return Math.max(0, Math.min(255, Math.round(value * 255)));
		}
		/** Normalize a hue into [0, 360). */
		function normalizeHue(h) {
			h = h % 360;
			if (h < 0) h += 360;
			return h;
		}
		/** The shortest signed angle between two hues (degrees). */
		function shortestAngle(from, to) {
			let d = (to - from) % 360;
			if (d > 180) d -= 360;
			if (d < -180) d += 360;
			return d;
		}
		/** ARGB integer from R/G/B 0..255 (alpha forced opaque). */
		function argbFromRgb$1(r, g, b) {
			return (255 << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255) >>> 0;
		}
		/**
		* Default CAM16 viewing conditions (ViewingConditions.DEFAULT), precomputed
		* as literals so the shader strings can interpolate the exact same numbers.
		*/
		const CAM16_VC = {
			n: .0018418651851244416,
			aw: 38.79918481018423,
			nbb: 2.5543854913038375,
			ncb: 2.5543854913038375,
			c: .69,
			nc: 1,
			rgbD: [
				1.02065563,
				.98664527,
				.93558851
			],
			fl: .0778653,
			fLRoot: .52824572,
			z: 1.52291696
		};
		const XYZ_TO_SRGB$1 = [
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
		function signum$1(v) {
			return v < 0 ? -1 : v > 0 ? 1 : 0;
		}
		/** CAM16 forward: ARGB integer -> {hue, chroma, j}. */
		function cam16FromArgb(argb) {
			const red = argb >> 16 & 255;
			const green = argb >> 8 & 255;
			const blue = argb & 255;
			const redL = srgbComponentToLinear(red);
			const greenL = srgbComponentToLinear(green);
			const blueL = srgbComponentToLinear(blue);
			const x = .41233895 * redL + .35762064 * greenL + .18051042 * blueL;
			const y = .2126 * redL + .7152 * greenL + .0722 * blueL;
			const z = .01932141 * redL + .11916382 * greenL + .95034478 * blueL;
			const rC = .401288 * x + .650173 * y - .051461 * z;
			const gC = -.250268 * x + 1.204414 * y + .045854 * z;
			const bC = -.002079 * x + .048952 * y + .953127 * z;
			const rgbD = CAM16_VC.rgbD;
			const rD = rgbD[0] * rC;
			const gD = rgbD[1] * gC;
			const bD = rgbD[2] * bC;
			const rAF = Math.pow(CAM16_VC.fl * Math.abs(rD) / 100, .42);
			const gAF = Math.pow(CAM16_VC.fl * Math.abs(gD) / 100, .42);
			const bAF = Math.pow(CAM16_VC.fl * Math.abs(bD) / 100, .42);
			const rA = signum$1(rD) * 400 * rAF / (rAF + 27.13);
			const gA = signum$1(gD) * 400 * gAF / (gAF + 27.13);
			const bA = signum$1(bD) * 400 * bAF / (bAF + 27.13);
			const a = (11 * rA + -12 * gA + bA) / 11;
			const b = (rA + gA - 2 * bA) / 9;
			const u = (20 * rA + 20 * gA + 21 * bA) / 20;
			const p2 = (40 * rA + 20 * gA + bA) / 20;
			let hue = Math.atan2(b, a) * 180 / Math.PI;
			hue = normalizeHue(hue);
			const ac = p2 * CAM16_VC.nbb;
			const j = 100 * Math.pow(ac / CAM16_VC.aw, CAM16_VC.c * CAM16_VC.z);
			hue * Math.PI / 180;
			const huePrime = hue < 20.14 ? hue + 360 : hue;
			const t = 5e4 / 13 * (.25 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8)) * CAM16_VC.nc * CAM16_VC.ncb * Math.sqrt(a * a + b * b) / (u + .305);
			const chroma = Math.pow(t, .9) * Math.pow(1.64 - Math.pow(.29, CAM16_VC.n), .73) * Math.sqrt(j / 100);
			return {
				hue,
				chroma,
				j
			};
		}
		/** CAM16 inverse: {hue, chroma, j} -> ARGB integer. */
		function cam16ViewedToArgb(hue, chroma, j) {
			const alpha = chroma === 0 || j === 0 ? 0 : chroma / Math.sqrt(j / 100);
			const t = Math.pow(alpha / Math.pow(1.64 - Math.pow(.29, CAM16_VC.n), .73), 1 / .9);
			const hRad = hue * Math.PI / 180;
			const eHue = .25 * (Math.cos(hRad + 2) + 3.8);
			const ac = CAM16_VC.aw * Math.pow(j / 100, 1 / CAM16_VC.c / CAM16_VC.z);
			const p1 = eHue * (5e4 / 13) * CAM16_VC.nc * CAM16_VC.ncb;
			const p2 = ac / CAM16_VC.nbb;
			const hSin = Math.sin(hRad);
			const hCos = Math.cos(hRad);
			const gamma = 23 * (p2 + .305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
			const a = gamma * hCos;
			const b = gamma * hSin;
			const rA = (460 * p2 + 451 * a + 288 * b) / 1403;
			const gA = (460 * p2 - 891 * a - 261 * b) / 1403;
			const bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
			const rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
			const rC = signum$1(rA) * (100 / CAM16_VC.fl) * Math.pow(rCBase, 1 / .42);
			const gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
			const gC = signum$1(gA) * (100 / CAM16_VC.fl) * Math.pow(gCBase, 1 / .42);
			const bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
			const bC = signum$1(bA) * (100 / CAM16_VC.fl) * Math.pow(bCBase, 1 / .42);
			const rF = rC / CAM16_VC.rgbD[0];
			const gF = gC / CAM16_VC.rgbD[1];
			const bF = bC / CAM16_VC.rgbD[2];
			const x = 1.86206786 * rF - 1.01125463 * gF + .14918677 * bF;
			const y = .38752654 * rF + .62144744 * gF - .00897398 * bF;
			const z = -.0158415 * rF - .03412294 * gF + 1.04996444 * bF;
			const linearR = XYZ_TO_SRGB$1[0][0] * x + XYZ_TO_SRGB$1[0][1] * y + XYZ_TO_SRGB$1[0][2] * z;
			const linearG = XYZ_TO_SRGB$1[1][0] * x + XYZ_TO_SRGB$1[1][1] * y + XYZ_TO_SRGB$1[1][2] * z;
			const linearB = XYZ_TO_SRGB$1[2][0] * x + XYZ_TO_SRGB$1[2][1] * y + XYZ_TO_SRGB$1[2][2] * z;
			return argbFromRgb$1(linearToSrgbComponent(linearR), linearToSrgbComponent(linearG), linearToSrgbComponent(linearB));
		}
		/**
		* Monet-unified tone remap. Convert to CAM16, clamp chroma toward `targetC`,
		* pull the hue toward `targetH` weighted by the pixel's own chroma (grays stay
		* gray below `neutralThreshold`), preserve tone J, and convert back.
		*/
		function remapPixel(r, g, b, targetH, targetC, neutralThreshold) {
			const { hue, chroma, j } = cam16FromArgb(argbFromRgb$1(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)));
			const newC = Math.min(chroma, targetC);
			const t = chroma >= neutralThreshold ? 1 : chroma / Math.max(neutralThreshold, 1e-5);
			const out = cam16ViewedToArgb(normalizeHue(hue + shortestAngle(hue, targetH) * t), newC, j);
			return {
				r: (out >> 16 & 255) / 255,
				g: (out >> 8 & 255) / 255,
				b: (out & 255) / 255
			};
		}
		//#endregion
		//#region src/client/cam16.ts
		/**
		* HCT color math facade for the md3-wallpaper recolor pipeline.
		*
		* Re-exports the self-consistent CAM16 model from `cam16-gpu.ts` under the
		* names the skin and tests consume, plus a `rgbToJch` convenience and the
		* conventional 0..1 sRGB gamma helpers. Keeping this as a thin facade means
		* `cam16-gpu.ts` stays the single source of truth that the WGSL/GLSL shaders
		* also embed.
		*/
		/** sRGB (0..1) -> CAM16/HCT J, C, h. */
		function rgbToJch(r, g, b) {
			const { hue, chroma, j } = cam16FromArgb((255 << 24 | (Math.round(r * 255) & 255) << 16 | (Math.round(g * 255) & 255) << 8 | Math.round(b * 255) & 255) >>> 0);
			return {
				j,
				c: chroma,
				h: hue
			};
		}
		//#endregion
		//#region src/client/shader.wgsl.ts
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
		const VC$1 = CAM16_VC;
		/**
		* The full WGSL source. Dispatched by `recolor.ts`'s WebGPU path.
		* @internal
		*/
		const SHIFT_WGSL = `
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

const SRGB_TO_XYZ = mat3x3f(0.41233895, 0.35762064, 0.18051042, 0.2126, 0.7152, 0.0722, 0.01932141, 0.11916382, 0.95034478);
const XYZ_TO_SRGB = mat3x3f(3.2413774792388685, -1.5376652402851851, -0.49885366846268053, -0.9691452513005321, 1.8758853451067872, 0.04156585616912061, 0.05562093689691305, -0.20395524564742123, 1.0571799111220335);
const RGBD0 : f32 = ${VC$1.rgbD[0]};
const RGBD1 : f32 = ${VC$1.rgbD[1]};
const RGBD2 : f32 = ${VC$1.rgbD[2]};
const FL : f32 = ${VC$1.fl};
const N : f32 = ${VC$1.n};
const AW : f32 = ${VC$1.aw};
const NBB : f32 = ${VC$1.nbb};
const NCB : f32 = ${VC$1.ncb};
const CC : f32 = ${VC$1.c};
const NC : f32 = ${VC$1.nc};
const Z : f32 = ${VC$1.z};

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
		//#endregion
		//#region src/client/shader.frag.ts
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
		const VC = CAM16_VC;
		/**
		* The GLSL ES 300 source.
		* @internal
		*/
		const SHIFT_GLSL = `#version 300 es
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
		//#endregion
		//#region src/client/worker.ts
		/** The inlined worker source (set by the post-build inline step). */
		const INLINE_SRC = typeof globalThis !== "undefined" ? globalThis.__MD3_RECOLOR_WORKER_SRC__ : void 0;
		/** Build a blob URL for the worker source; empty string when unavailable. */
		function workerBlobUrl() {
			if (!INLINE_SRC) return "";
			try {
				const blob = new Blob([INLINE_SRC], { type: "application/javascript" });
				return URL.createObjectURL(blob);
			} catch {
				return "";
			}
		}
		let worker;
		let blobUrl = null;
		let seq = 0;
		const pending = /* @__PURE__ */ new Map();
		function ensureWorker() {
			if (worker !== void 0) return worker;
			if (typeof Worker === "undefined") {
				worker = null;
				return null;
			}
			blobUrl = workerBlobUrl();
			if (!blobUrl) {
				worker = null;
				return null;
			}
			try {
				const w = new Worker(blobUrl);
				w.onmessage = (event) => {
					const { token, blob, error } = event.data;
					const p = pending.get(token);
					if (!p) return;
					pending.delete(token);
					if (error !== void 0 || blob === void 0) p.reject(new Error(error ?? "recolor worker produced no blob"));
					else p.resolve(blob);
				};
				w.onerror = (event) => {
					for (const p of pending.values()) p.reject(new Error(event.message || "worker error"));
					pending.clear();
					worker = null;
				};
				worker = w;
			} catch {
				worker = null;
			}
			return worker;
		}
		/**
		* Run the recolor pipeline in the worker. Returns null when workers are not
		* available (caller must degrade gracefully — never fall back to an 8K
		* main-thread pass).
		* @param blob - the original image file/blob.
		* @param target - the Monet target (hue/chroma/neutral).
		*/
		function recolorInWorker(blob, target) {
			const w = ensureWorker();
			if (!w) return Promise.resolve(null);
			const token = ++seq;
			return new Promise((resolve, reject) => {
				pending.set(token, {
					resolve: (b) => resolve(b),
					reject
				});
				try {
					w.postMessage({
						token,
						blob,
						target
					});
				} catch (err) {
					pending.delete(token);
					reject(err instanceof Error ? err : new Error(String(err)));
				}
			});
		}
		/** Terminate the worker and release the blob URL (dispose). */
		function terminateWorker() {
			if (typeof Worker !== "undefined" && worker instanceof Worker) worker.terminate();
			worker = null;
			if (blobUrl) {
				try {
					URL.revokeObjectURL(blobUrl);
				} catch { }
				blobUrl = null;
			}
			pending.clear();
		}
		//#endregion
		//#region src/client/recolor.ts
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
		/**
		* Resolve a Monet target from a source hue/chroma. A typical MD3 primary sits
		* around chroma ~50-70 in HCT; the neutral threshold stays well below so
		* grays remain gray.
		*/
		function targetFromArgs(sourceH, sourceC, neutral = 24) {
			return {
				targetH: sourceH,
				targetC: Math.min(sourceC, 52),
				neutral,
				filterLow: [
					.5,
					.5,
					.5
				],
				filterMid: [
					.5,
					.5,
					.5
				],
				filterHigh: [
					.5,
					.5,
					.5
				],
				blend: 0,
				mode: 0
			};
		}
		/** Parse a `#rrggbb` (or `#rgb`) hex into normalized 0..1 RGB. */
		function hexToRgb01(hex) {
			const clean = hex.replace(/^#/, "");
			if (clean.length === 3) return [
				parseInt(clean[0] + clean[0], 16) / 255,
				parseInt(clean[1] + clean[1], 16) / 255,
				parseInt(clean[2] + clean[2], 16) / 255
			];
			if (clean.length === 6) return [
				parseInt(clean.slice(0, 2), 16) / 255,
				parseInt(clean.slice(2, 4), 16) / 255,
				parseInt(clean.slice(4, 6), 16) / 255
			];
			return [
				.5,
				.5,
				.5
			];
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
		async function recolorBitmap(source, target, win = globalThis) {
			const kind = detectGpu(win);
			if (!canRecolor(kind)) return null;
			if (source instanceof Blob) {
				try {
					const workerBlob = await recolorInWorker(source, target);
					if (workerBlob !== null) return {
						blob: workerBlob,
						kind,
						format: canEncode(win),
						...await probeBlobSize(workerBlob, win)
					};
				} catch {
					return null;
				}
				return null;
			}
			let drawable;
			if (source instanceof Blob) {
				if (typeof createImageBitmap !== "function") return null;
				drawable = await createImageBitmap(source);
			} else drawable = source;
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
				let succeeded = false;
				if (kind === "webgpu") succeeded = await runWebGPU(imageData.data, width, height, target);
				else if (kind === "webgl2") succeeded = runWebGL2(imageData, target, canvas, win);
				if (!succeeded) remapInPlace(imageData.data, target);
				ctxDraw.putImageData(imageData, 0, 0);
				if (typeof canvas.convertToBlob === "function") return {
					blob: await canvas.convertToBlob({
						type: mime,
						quality: .85
					}),
					kind,
					format,
					width,
					height
				};
				const blob = await new Promise((resolve) => {
					canvas.toBlob((b) => resolve(b), mime, .85);
				});
				if (!blob) return null;
				return {
					blob,
					kind,
					format,
					width,
					height
				};
			} finally {
				if (source instanceof Blob && typeof drawable.close === "function") try {
					drawable.close();
				} catch { }
			}
		}
		const GPU_FLAGS = {
			STORAGE: 128,
			UNIFORM: 64,
			COPY_DST: 8,
			COPY_SRC: 4,
			MAP_READ: 1
		};
		/** Actual WebGPU compute dispatch. @internal */
		async function runWebGPU(data, width, height, target) {
			if (typeof navigator === "undefined") return false;
			const nav = navigator;
			if (typeof nav.gpu?.requestAdapter !== "function") return false;
			let adapter = null;
			try {
				adapter = await nav.gpu.requestAdapter();
			} catch {
				return false;
			}
			if (!adapter) return false;
			const device = await adapter.requestDevice();
			try {
				const pixelCount = width * height;
				const packed = new Uint32Array(pixelCount);
				for (let i = 0; i < pixelCount; i++) {
					const o = i * 4;
					packed[i] = data[o] | data[o + 1] << 8 | data[o + 2] << 16 | data[o + 3] << 24;
				}
				const module = device.createShaderModule({ code: SHIFT_WGSL });
				const storage = device.createBuffer({
					size: packed.byteLength,
					usage: GPU_FLAGS.STORAGE | GPU_FLAGS.COPY_DST | GPU_FLAGS.MAP_READ
				});
				storage.writeBuffer(packed);
				const params = new Float32Array([
					target.targetH,
					target.targetC,
					target.neutral,
					target.mode
				]);
				const paramsBuf = device.createBuffer({
					size: params.byteLength,
					usage: GPU_FLAGS.UNIFORM | GPU_FLAGS.COPY_DST
				});
				paramsBuf.writeBuffer(params);
				const dims = new Uint32Array([
					width,
					height,
					0,
					0
				]);
				const dimsBuf = device.createBuffer({
					size: dims.byteLength,
					usage: GPU_FLAGS.UNIFORM | GPU_FLAGS.COPY_DST
				});
				dimsBuf.writeBuffer(dims);
				const filterArr = /* @__PURE__ */ new Float32Array(16);
				filterArr[0] = target.filterLow[0];
				filterArr[1] = target.filterLow[1];
				filterArr[2] = target.filterLow[2];
				filterArr[4] = target.filterMid[0];
				filterArr[5] = target.filterMid[1];
				filterArr[6] = target.filterMid[2];
				filterArr[8] = target.filterHigh[0];
				filterArr[9] = target.filterHigh[1];
				filterArr[10] = target.filterHigh[2];
				filterArr[12] = target.blend;
				const filterBuf = device.createBuffer({
					size: filterArr.byteLength,
					usage: GPU_FLAGS.UNIFORM | GPU_FLAGS.COPY_DST
				});
				filterBuf.writeBuffer(filterArr);
				const pipeline = device.createComputePipeline({
					layout: "auto",
					compute: {
						module,
						entryPoint: "cs_main"
					}
				});
				const group = device.createBindGroup(pipeline.getBindGroupLayout(0), {
					entries: [
						{
							binding: 0,
							resource: { buffer: storage }
						},
						{
							binding: 1,
							resource: { buffer: paramsBuf }
						},
						{
							binding: 2,
							resource: { buffer: dimsBuf }
						},
						{
							binding: 3,
							resource: { buffer: filterBuf }
						}
					]
				});
				const encoder = device.createCommandEncoder();
				const pass = encoder.beginComputePass();
				pass.setPipeline(pipeline);
				pass.setBindGroup(0, group);
				pass.dispatchWorkgroups(Math.ceil(width / 16), Math.ceil(height / 16));
				pass.end();
				device.queue.submit([encoder.finish()]);
				await storage.mapAsync(GPU_FLAGS.MAP_READ);
				const mapped = new Uint32Array(storage.getMappedRange());
				for (let i = 0; i < pixelCount; i++) {
					const v = mapped[i];
					const o = i * 4;
					data[o] = v & 255;
					data[o + 1] = v >> 8 & 255;
					data[o + 2] = v >> 16 & 255;
					data[o + 3] = v >> 24 & 255;
				}
				storage.unmap();
				return true;
			} catch {
				return false;
			}
		}
		/** Actual WebGL2 dispatch. @internal */
		function runWebGL2(imageData, target, canvas, win) {
			let gl = null;
			let tex = 0;
			let fbo = 0;
			let depthRb = 0;
			let prog = null;
			try {
				gl = canvas.getContext("webgl2");
				if (!gl) return false;
				const width = imageData.width;
				const height = imageData.height;
				const vs = `#version 300 es
precision highp float;
out vec2 v_uv;
const vec2 pos[3] = vec2[3](vec2(-1.0,-1.0), vec2(3.0,-1.0), vec2(-1.0, 3.0));
void main(){ v_uv = 0.5 * (pos[gl_VertexID] + 1.0); gl_Position = vec4(pos[gl_VertexID], 0.0, 1.0); }`;
				const fs = SHIFT_GLSL;
				prog = gl.createProgram();
				const compile = (type, src) => {
					const sh = gl.createShader(type);
					gl.shaderSource(sh, src);
					gl.compileShader(sh);
					return sh;
				};
				const vsh = compile(gl.VERTEX_SHADER, vs);
				const fsh = compile(gl.FRAGMENT_SHADER, fs);
				gl.attachShader(prog, vsh);
				gl.attachShader(prog, fsh);
				gl.linkProgram(prog);
				if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return false;
				tex = gl.createTexture();
				gl.bindTexture(gl.TEXTURE_2D, tex);
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(imageData.data));
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
				fbo = gl.createFramebuffer();
				gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
				depthRb = gl.createRenderbuffer();
				gl.bindRenderbuffer(gl.RENDERBUFFER, depthRb);
				gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA8, width, height);
				gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, depthRb);
				gl.useProgram(prog);
				gl.activeTexture(gl.TEXTURE0);
				gl.bindTexture(gl.TEXTURE_2D, tex);
				gl.uniform1i(gl.getUniformLocation(prog, "u_tex"), 0);
				gl.uniform3f(gl.getUniformLocation(prog, "u_target"), target.targetH, target.targetC, target.neutral);
				gl.uniform3f(gl.getUniformLocation(prog, "u_filterLow"), target.filterLow[0], target.filterLow[1], target.filterLow[2]);
				gl.uniform3f(gl.getUniformLocation(prog, "u_filterMid"), target.filterMid[0], target.filterMid[1], target.filterMid[2]);
				gl.uniform3f(gl.getUniformLocation(prog, "u_filterHigh"), target.filterHigh[0], target.filterHigh[1], target.filterHigh[2]);
				gl.uniform1f(gl.getUniformLocation(prog, "u_blend"), target.blend);
				gl.uniform1f(gl.getUniformLocation(prog, "u_mode"), target.mode);
				gl.viewport(0, 0, width, height);
				gl.drawArrays(gl.TRIANGLES, 0, 3);
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
				} catch { }
			}
		}
		/**
		* Re-map a Uint8ClampedArray RGBA8 buffer in place. Mode 0 = MD3 light
		* palette blend (tone interpolates across filterLow/Mid/High, mixed with the
		* original at `blend`); mode 1 = Monet hue-pull remap (legacy). Pure and
		* deterministic — the CPU reference mirrors the WGSL/GLSL shaders.
		*/
		function remapInPlace(data, target) {
			const n = data.length / 4;
			if (target.mode === 1) {
				const { targetH, targetC, neutral } = target;
				for (let i = 0; i < n; i++) {
					const o = i * 4;
					const { r: nr, g: ng, b: nb } = remapPixel(data[o] / 255, data[o + 1] / 255, data[o + 2] / 255, targetH, targetC, neutral);
					data[o] = Math.round(clamp01(nr) * 255);
					data[o + 1] = Math.round(clamp01(ng) * 255);
					data[o + 2] = Math.round(clamp01(nb) * 255);
				}
				return;
			}
			const blend = clamp01(target.blend);
			if (blend <= 0) return;
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
				let tR, tG, tB;
				if (t < .5) {
					const k = t * 2;
					tR = loR + (miR - loR) * k;
					tG = loG + (miG - loG) * k;
					tB = loB + (miB - loB) * k;
				} else {
					const k = (t - .5) * 2;
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
		async function probeBlobSize(blob, win) {
			try {
				if (typeof createImageBitmap !== "function") return {
					width: 0,
					height: 0
				};
				const bmp = await createImageBitmap(blob);
				const size = {
					width: bmp.width,
					height: bmp.height
				};
				bmp.close();
				return size;
			} catch {
				return {
					width: 0,
					height: 0
				};
			}
		}
		function clamp01(v) {
			return v < 0 ? 0 : v > 1 ? 1 : v;
		}
		//#endregion
		//#region src/client/shape-morph.ts
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
		* @module @anningui/dsh-client-ui-skin-md3-wallpaper/shape-morph
		*/
		/** Number of numeric arguments each SVG path command expects (lowercase keys). */
		const ARG_COUNT = {
			a: 7,
			c: 6,
			h: 1,
			l: 2,
			m: 2,
			q: 4,
			s: 4,
			t: 2,
			v: 1,
			z: 0
		};
		/** Split a path-data string into [opLetter, ...numbers] command tuples. */
		function parsePath(path) {
			const out = [];
			const segment = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
			const number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
			path.replace(segment, (_, cmd, args) => {
				let type = cmd.toLowerCase();
				let command = cmd;
				let values = (args.match(number) ?? []).map(Number);
				if (type === "m" && values.length > 2) {
					out.push([command, ...values.splice(0, 2)]);
					type = "l";
					command = command === "m" ? "l" : "L";
				}
				while (true) {
					const len = ARG_COUNT[type] ?? 0;
					if (values.length === len) {
						out.push([command, ...values]);
						return "";
					}
					if (values.length < len) throw new Error("malformed path data");
					out.push([command, ...values.splice(0, len)]);
				}
			});
			return out;
		}
		/**
		* Return the `d` string at morph weight `w` between two IDENTICAL-structure
		* paths: `w=0` → `a`, `w=1` → `b`. Assumes both paths share the same command
		* type and count per command (a prerequisite the offline normalizer enforces).
		*/
		function morphPath(a, b, w) {
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
		/** Solve the parameter `t` (in [0,1]) for a cubic-bezier x-progress value. */
		function solveT(p0x, p1x, p2x, p3x, x) {
			if (x <= 0) return 0;
			if (x >= 1) return 1;
			let t = x;
			for (let i = 0; i < 8; i++) {
				const mt = 1 - t;
				const dx = mt * mt * mt * p0x + 3 * mt * mt * t * p1x + 3 * mt * t * t * p2x + t * t * t * p3x - x;
				if (Math.abs(dx) < 1e-6) break;
				const dTdt = 3 * mt * mt * (p1x - p0x) + 6 * mt * t * (p2x - p1x) + 3 * t * t * (p3x - p2x);
				if (Math.abs(dTdt) < 1e-8) break;
				t -= dx / dTdt;
				t = Math.min(1, Math.max(0, t));
			}
			return t;
		}
		/** Evaluate cubic-bezier(x1,y1,x2,y2) at normalized progress [0,1]. */
		function cubicBezier(x1, y1, x2, y2, u) {
			const t = solveT(0, x1, x2, 1, u);
			const mt = 1 - t;
			return mt * mt * mt * 0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * 1;
		}
		/** M3 emphasized: cubic-bezier(0.2, 0, 0, 1) — fast in, very slow settle. */
		function easeEmphasized(u) {
			return cubicBezier(.2, 0, 0, 1, u);
		}
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/utils/math_utils.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/utils/color_utils.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/hct/viewing_conditions.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/hct/cam16.js
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
				const hue = sanitizeDegreesDouble(Math.atan2(b, a) * 180 / Math.PI);
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/hct/hct_solver.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/hct/hct.js
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
			/** Sets a property of the Hct object. */
			setValue(propertyName, value) {
				this[propertyName] = value;
			}
			toString() {
				return `HCT(${this.hue.toFixed(0)}, ${this.chroma.toFixed(0)}, ${this.tone.toFixed(0)})`;
			}
			static isBlue(hue) {
				return hue >= 250 && hue < 270;
			}
			static isYellow(hue) {
				return hue >= 105 && hue < 125;
			}
			static isCyan(hue) {
				return hue >= 170 && hue < 207;
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/blend/blend.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/contrast/contrast.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/dislike/dislike_analyzer.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/dynamiccolor/dynamic_color.js
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
		function validateExtendedColor(originalColor, specVersion, extendedColor) {
			if (originalColor.name !== extendedColor.name) throw new Error(`Attempting to extend color ${originalColor.name} with color ${extendedColor.name} of different name for spec version ${specVersion}.`);
			if (originalColor.isBackground !== extendedColor.isBackground) throw new Error(`Attempting to extend color ${originalColor.name} as a ${originalColor.isBackground ? "background" : "foreground"} with color ${extendedColor.name} as a ${extendedColor.isBackground ? "background" : "foreground"} for spec version ${specVersion}.`);
		}
		/**
		* Returns a new DynamicColor that is the same as the original color, but with
		* the extended dynamic color's constraints for the given spec version.
		*
		* @param originlColor The original color.
		* @param specVersion The spec version to extend.
		* @param extendedColor The color with the values to extend.
		*/
		function extendSpecVersion(originlColor, specVersion, extendedColor) {
			validateExtendedColor(originlColor, specVersion, extendedColor);
			return DynamicColor.fromPalette({
				name: originlColor.name,
				palette: (s) => s.specVersion === specVersion ? extendedColor.palette(s) : originlColor.palette(s),
				tone: (s) => s.specVersion === specVersion ? extendedColor.tone(s) : originlColor.tone(s),
				isBackground: originlColor.isBackground,
				chromaMultiplier: (s) => {
					const chromaMultiplier = s.specVersion === specVersion ? extendedColor.chromaMultiplier : originlColor.chromaMultiplier;
					return chromaMultiplier !== void 0 ? chromaMultiplier(s) : 1;
				},
				background: (s) => {
					const background = s.specVersion === specVersion ? extendedColor.background : originlColor.background;
					return background !== void 0 ? background(s) : void 0;
				},
				secondBackground: (s) => {
					const secondBackground = s.specVersion === specVersion ? extendedColor.secondBackground : originlColor.secondBackground;
					return secondBackground !== void 0 ? secondBackground(s) : void 0;
				},
				contrastCurve: (s) => {
					const contrastCurve = s.specVersion === specVersion ? extendedColor.contrastCurve : originlColor.contrastCurve;
					return contrastCurve !== void 0 ? contrastCurve(s) : void 0;
				},
				toneDeltaPair: (s) => {
					const toneDeltaPair = s.specVersion === specVersion ? extendedColor.toneDeltaPair : originlColor.toneDeltaPair;
					return toneDeltaPair !== void 0 ? toneDeltaPair(s) : void 0;
				}
			});
		}
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
			*     and tone. May provide a background DynamicColor and ToneDeltaPair.
			*/
			static fromPalette(args) {
				return new DynamicColor(args.name ?? "", args.palette, args.tone ?? DynamicColor.getInitialToneFromBackground(args.background), args.isBackground ?? false, args.chromaMultiplier, args.background, args.secondBackground, args.contrastCurve, args.toneDeltaPair);
			}
			static getInitialToneFromBackground(background) {
				if (background === void 0) return (s) => 50;
				return (s) => background(s) ? background(s).getTone(s) : 50;
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
			* @param palette Function that provides a TonalPalette given DynamicScheme. A
			*     TonalPalette is defined by a hue and chroma, so this replaces the need
			*     to specify hue/chroma. By providing a tonal palette, when contrast
			*     adjustments are made, intended chroma can be preserved.
			* @param tone Function that provides a tone, given a DynamicScheme.
			* @param isBackground Whether this dynamic color is a background, with some
			*     other color as the foreground. Defaults to false.
			* @param chromaMultiplier A factor that multiplies the chroma for this color.
			* @param background The background of the dynamic color (as a function of a
			*     `DynamicScheme`), if it exists.
			* @param secondBackground A second background of the dynamic color (as a
			*     function of a `DynamicScheme`), if it exists.
			* @param contrastCurve A `ContrastCurve` object specifying how its contrast
			*     against its background should behave in various contrast levels
			*     options.
			* @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
			*     constraint between two colors. One of them must be the color being
			*     constructed.
			*/
			constructor(name, palette, tone, isBackground, chromaMultiplier, background, secondBackground, contrastCurve, toneDeltaPair) {
				this.name = name;
				this.palette = palette;
				this.tone = tone;
				this.isBackground = isBackground;
				this.chromaMultiplier = chromaMultiplier;
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
			* Returns a deep copy of this DynamicColor.
			*/
			clone() {
				return DynamicColor.fromPalette({
					name: this.name,
					palette: this.palette,
					tone: this.tone,
					isBackground: this.isBackground,
					chromaMultiplier: this.chromaMultiplier,
					background: this.background,
					secondBackground: this.secondBackground,
					contrastCurve: this.contrastCurve,
					toneDeltaPair: this.toneDeltaPair
				});
			}
			/**
			* Clears the cache of HCT values for this color. For testing or debugging
			* purposes.
			*/
			clearCache() {
				this.hctCache.clear();
			}
			/**
			* Returns a ARGB integer (i.e. a hex code).
			*
			* @param scheme Defines the conditions of the user interface, for example,
			*     whether or not it is dark mode or light mode, and what the desired
			*     contrast level is.
			*/
			getArgb(scheme) {
				return this.getHct(scheme).toInt();
			}
			/**
			* Returns a color, expressed in the HCT color space, that this
			* DynamicColor is under the conditions in scheme.
			*
			* @param scheme Defines the conditions of the user interface, for example,
			*     whether or not it is dark mode or light mode, and what the desired
			*     contrast level is.
			*/
			getHct(scheme) {
				const cachedAnswer = this.hctCache.get(scheme);
				if (cachedAnswer != null) return cachedAnswer;
				const answer = getSpec$1(scheme.specVersion).getHct(scheme, this);
				if (this.hctCache.size > 4) this.hctCache.clear();
				this.hctCache.set(scheme, answer);
				return answer;
			}
			/**
			* Returns a tone, T in the HCT color space, that this DynamicColor is under
			* the conditions in scheme.
			*
			* @param scheme Defines the conditions of the user interface, for example,
			*     whether or not it is dark mode or light mode, and what the desired
			*     contrast level is.
			*/
			getTone(scheme) {
				return getSpec$1(scheme.specVersion).getTone(scheme, this);
			}
			/**
			* Given a background tone, finds a foreground tone, while ensuring they reach
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
			* Adjusts a tone such that white has 4.5 contrast, if the tone is
			* reasonably close to supporting it.
			*/
			static enableLightForeground(tone) {
				if (DynamicColor.tonePrefersLightForeground(tone) && !DynamicColor.toneAllowsLightForeground(tone)) return 49;
				return tone;
			}
		};
		/**
		* A delegate for the color calculation of a DynamicScheme in the 2021 spec.
		*/
		var ColorCalculationDelegateImpl2021 = class {
			getHct(scheme, color) {
				const tone = color.getTone(scheme);
				return color.palette(scheme).getHct(tone);
			}
			getTone(scheme, color) {
				const decreasingContrast = scheme.contrastLevel < 0;
				const toneDeltaPair = color.toneDeltaPair ? color.toneDeltaPair(scheme) : void 0;
				if (toneDeltaPair) {
					const roleA = toneDeltaPair.roleA;
					const roleB = toneDeltaPair.roleB;
					const delta = toneDeltaPair.delta;
					const polarity = toneDeltaPair.polarity;
					const stayTogether = toneDeltaPair.stayTogether;
					const aIsNearer = polarity === "nearer" || polarity === "lighter" && !scheme.isDark || polarity === "darker" && scheme.isDark;
					const nearer = aIsNearer ? roleA : roleB;
					const farther = aIsNearer ? roleB : roleA;
					const amNearer = color.name === nearer.name;
					const expansionDir = scheme.isDark ? 1 : -1;
					let nTone = nearer.tone(scheme);
					let fTone = farther.tone(scheme);
					if (color.background && nearer.contrastCurve && farther.contrastCurve) {
						const bg = color.background(scheme);
						const nContrastCurve = nearer.contrastCurve(scheme);
						const fContrastCurve = farther.contrastCurve(scheme);
						if (bg && nContrastCurve && fContrastCurve) {
							const bgTone = bg.getTone(scheme);
							const nContrast = nContrastCurve.get(scheme.contrastLevel);
							const fContrast = fContrastCurve.get(scheme.contrastLevel);
							if (Contrast.ratioOfTones(bgTone, nTone) < nContrast) nTone = DynamicColor.foregroundTone(bgTone, nContrast);
							if (Contrast.ratioOfTones(bgTone, fTone) < fContrast) fTone = DynamicColor.foregroundTone(bgTone, fContrast);
							if (decreasingContrast) {
								nTone = DynamicColor.foregroundTone(bgTone, nContrast);
								fTone = DynamicColor.foregroundTone(bgTone, fContrast);
							}
						}
					}
					if ((fTone - nTone) * expansionDir < delta) {
						fTone = clampDouble(0, 100, nTone + delta * expansionDir);
						if ((fTone - nTone) * expansionDir >= delta) { } else nTone = clampDouble(0, 100, fTone - delta * expansionDir);
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
					let answer = color.tone(scheme);
					if (color.background == void 0 || color.background(scheme) === void 0 || color.contrastCurve == void 0 || color.contrastCurve(scheme) === void 0) return answer;
					const bgTone = color.background(scheme).getTone(scheme);
					const desiredRatio = color.contrastCurve(scheme).get(scheme.contrastLevel);
					if (Contrast.ratioOfTones(bgTone, answer) >= desiredRatio) { } else answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
					if (decreasingContrast) answer = DynamicColor.foregroundTone(bgTone, desiredRatio);
					if (color.isBackground && 50 <= answer && answer < 60) {
						if (Contrast.ratioOfTones(49, bgTone) >= desiredRatio) answer = 49;
						else answer = 60;
					}
					if (color.secondBackground == void 0 || color.secondBackground(scheme) === void 0) return answer;
					const [bg1, bg2] = [color.background, color.secondBackground];
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
			}
		};
		/**
		* A delegate for the color calculation of a DynamicScheme in the 2025 spec.
		*/
		var ColorCalculationDelegateImpl2025 = class {
			getHct(scheme, color) {
				const palette = color.palette(scheme);
				const tone = color.getTone(scheme);
				const hue = palette.hue;
				const chroma = palette.chroma * (color.chromaMultiplier ? color.chromaMultiplier(scheme) : 1);
				return Hct.from(hue, chroma, tone);
			}
			getTone(scheme, color) {
				const toneDeltaPair = color.toneDeltaPair ? color.toneDeltaPair(scheme) : void 0;
				if (toneDeltaPair) {
					const roleA = toneDeltaPair.roleA;
					const roleB = toneDeltaPair.roleB;
					const polarity = toneDeltaPair.polarity;
					const constraint = toneDeltaPair.constraint;
					const absoluteDelta = polarity === "darker" || polarity === "relative_lighter" && scheme.isDark || polarity === "relative_darker" && !scheme.isDark ? -toneDeltaPair.delta : toneDeltaPair.delta;
					const amRoleA = color.name === roleA.name;
					const selfRole = amRoleA ? roleA : roleB;
					const refRole = amRoleA ? roleB : roleA;
					let selfTone = selfRole.tone(scheme);
					let refTone = refRole.getTone(scheme);
					const relativeDelta = absoluteDelta * (amRoleA ? 1 : -1);
					if (constraint === "exact") selfTone = clampDouble(0, 100, refTone + relativeDelta);
					else if (constraint === "nearer") {
						if (relativeDelta > 0) selfTone = clampDouble(0, 100, clampDouble(refTone, refTone + relativeDelta, selfTone));
						else selfTone = clampDouble(0, 100, clampDouble(refTone + relativeDelta, refTone, selfTone));
					} else if (constraint === "farther") {
						if (relativeDelta > 0) selfTone = clampDouble(refTone + relativeDelta, 100, selfTone);
						else selfTone = clampDouble(0, refTone + relativeDelta, selfTone);
					}
					if (color.background && color.contrastCurve) {
						const background = color.background(scheme);
						const contrastCurve = color.contrastCurve(scheme);
						if (background && contrastCurve) {
							const bgTone = background.getTone(scheme);
							const selfContrast = contrastCurve.get(scheme.contrastLevel);
							selfTone = Contrast.ratioOfTones(bgTone, selfTone) >= selfContrast && scheme.contrastLevel >= 0 ? selfTone : DynamicColor.foregroundTone(bgTone, selfContrast);
						}
					}
					if (color.isBackground && !color.name.endsWith("_fixed_dim")) {
						if (selfTone >= 57) selfTone = clampDouble(65, 100, selfTone);
						else selfTone = clampDouble(0, 49, selfTone);
					}
					return selfTone;
				} else {
					let answer = color.tone(scheme);
					if (color.background == void 0 || color.background(scheme) === void 0 || color.contrastCurve == void 0 || color.contrastCurve(scheme) === void 0) return answer;
					const bgTone = color.background(scheme).getTone(scheme);
					const desiredRatio = color.contrastCurve(scheme).get(scheme.contrastLevel);
					answer = Contrast.ratioOfTones(bgTone, answer) >= desiredRatio && scheme.contrastLevel >= 0 ? answer : DynamicColor.foregroundTone(bgTone, desiredRatio);
					if (color.isBackground && !color.name.endsWith("_fixed_dim")) {
						if (answer >= 57) answer = clampDouble(65, 100, answer);
						else answer = clampDouble(0, 49, answer);
					}
					if (color.secondBackground == void 0 || color.secondBackground(scheme) === void 0) return answer;
					const [bg1, bg2] = [color.background, color.secondBackground];
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
			}
		};
		const spec2021$1 = new ColorCalculationDelegateImpl2021();
		const spec2025$1 = new ColorCalculationDelegateImpl2025();
		/**
		* Returns the ColorCalculationDelegate for the given spec version.
		*/
		function getSpec$1(specVersion) {
			return specVersion === "2025" ? spec2025$1 : spec2021$1;
		}
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/palettes/tonal_palette.js
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
					if (tone == 99 && Hct.isYellow(this.hue)) argb = this.averageArgb(this.tone(98), this.tone(100));
					else argb = Hct.from(this.hue, this.chroma, tone).toInt();
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
			averageArgb(argb1, argb2) {
				const red1 = argb1 >>> 16 & 255;
				const green1 = argb1 >>> 8 & 255;
				const blue1 = argb1 & 255;
				const red2 = argb2 >>> 16 & 255;
				const green2 = argb2 >>> 8 & 255;
				const blue2 = argb2 & 255;
				const red = Math.round((red1 + red2) / 2);
				const green = Math.round((green1 + green2) / 2);
				const blue = Math.round((blue1 + blue2) / 2);
				return (255 << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255) >>> 0;
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/temperature/temperature_cache.js
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
		* Design utilities using color temperature theory.
		*
		* Analogous colors, complementary color, and cache to efficiently, lazily,
		* generate data for calculations when needed.
		*/
		var TemperatureCache = class TemperatureCache {
			constructor(input) {
				this.input = input;
				this.hctsByTempCache = [];
				this.hctsByHueCache = [];
				this.tempsByHctCache = /* @__PURE__ */ new Map();
				this.inputRelativeTemperatureCache = -1;
				this.complementCache = null;
			}
			get hctsByTemp() {
				if (this.hctsByTempCache.length > 0) return this.hctsByTempCache;
				const hcts = this.hctsByHue.concat([this.input]);
				const temperaturesByHct = this.tempsByHct;
				hcts.sort((a, b) => temperaturesByHct.get(a) - temperaturesByHct.get(b));
				this.hctsByTempCache = hcts;
				return hcts;
			}
			get warmest() {
				return this.hctsByTemp[this.hctsByTemp.length - 1];
			}
			get coldest() {
				return this.hctsByTemp[0];
			}
			/**
			* A set of colors with differing hues, equidistant in temperature.
			*
			* In art, this is usually described as a set of 5 colors on a color wheel
			* divided into 12 sections. This method allows provision of either of those
			* values.
			*
			* Behavior is undefined when [count] or [divisions] is 0.
			* When divisions < count, colors repeat.
			*
			* [count] The number of colors to return, includes the input color.
			* [divisions] The number of divisions on the color wheel.
			*/
			analogous(count = 5, divisions = 12) {
				const startHue = Math.round(this.input.hue);
				const startHct = this.hctsByHue[startHue];
				let lastTemp = this.relativeTemperature(startHct);
				const allColors = [startHct];
				let absoluteTotalTempDelta = 0;
				for (let i = 0; i < 360; i++) {
					const hue = sanitizeDegreesInt(startHue + i);
					const hct = this.hctsByHue[hue];
					const temp = this.relativeTemperature(hct);
					const tempDelta = Math.abs(temp - lastTemp);
					lastTemp = temp;
					absoluteTotalTempDelta += tempDelta;
				}
				let hueAddend = 1;
				const tempStep = absoluteTotalTempDelta / divisions;
				let totalTempDelta = 0;
				lastTemp = this.relativeTemperature(startHct);
				while (allColors.length < divisions) {
					const hue = sanitizeDegreesInt(startHue + hueAddend);
					const hct = this.hctsByHue[hue];
					const temp = this.relativeTemperature(hct);
					const tempDelta = Math.abs(temp - lastTemp);
					totalTempDelta += tempDelta;
					const desiredTotalTempDeltaForIndex = allColors.length * tempStep;
					let indexSatisfied = totalTempDelta >= desiredTotalTempDeltaForIndex;
					let indexAddend = 1;
					while (indexSatisfied && allColors.length < divisions) {
						allColors.push(hct);
						const desiredTotalTempDeltaForIndex = (allColors.length + indexAddend) * tempStep;
						indexSatisfied = totalTempDelta >= desiredTotalTempDeltaForIndex;
						indexAddend++;
					}
					lastTemp = temp;
					hueAddend++;
					if (hueAddend > 360) {
						while (allColors.length < divisions) allColors.push(hct);
						break;
					}
				}
				const answers = [this.input];
				const increaseHueCount = Math.floor((count - 1) / 2);
				for (let i = 1; i < increaseHueCount + 1; i++) {
					let index = 0 - i;
					while (index < 0) index = allColors.length + index;
					if (index >= allColors.length) index = index % allColors.length;
					answers.splice(0, 0, allColors[index]);
				}
				const decreaseHueCount = count - increaseHueCount - 1;
				for (let i = 1; i < decreaseHueCount + 1; i++) {
					let index = i;
					while (index < 0) index = allColors.length + index;
					if (index >= allColors.length) index = index % allColors.length;
					answers.push(allColors[index]);
				}
				return answers;
			}
			/**
			* A color that complements the input color aesthetically.
			*
			* In art, this is usually described as being across the color wheel.
			* History of this shows intent as a color that is just as cool-warm as the
			* input color is warm-cool.
			*/
			get complement() {
				if (this.complementCache != null) return this.complementCache;
				const coldestHue = this.coldest.hue;
				const coldestTemp = this.tempsByHct.get(this.coldest);
				const warmestHue = this.warmest.hue;
				const range = this.tempsByHct.get(this.warmest) - coldestTemp;
				const startHueIsColdestToWarmest = TemperatureCache.isBetween(this.input.hue, coldestHue, warmestHue);
				const startHue = startHueIsColdestToWarmest ? warmestHue : coldestHue;
				const endHue = startHueIsColdestToWarmest ? coldestHue : warmestHue;
				const directionOfRotation = 1;
				let smallestError = 1e3;
				let answer = this.hctsByHue[Math.round(this.input.hue)];
				const complementRelativeTemp = 1 - this.inputRelativeTemperature;
				for (let hueAddend = 0; hueAddend <= 360; hueAddend += 1) {
					const hue = sanitizeDegreesDouble(startHue + directionOfRotation * hueAddend);
					if (!TemperatureCache.isBetween(hue, startHue, endHue)) continue;
					const possibleAnswer = this.hctsByHue[Math.round(hue)];
					const relativeTemp = (this.tempsByHct.get(possibleAnswer) - coldestTemp) / range;
					const error = Math.abs(complementRelativeTemp - relativeTemp);
					if (error < smallestError) {
						smallestError = error;
						answer = possibleAnswer;
					}
				}
				this.complementCache = answer;
				return this.complementCache;
			}
			/**
			* Temperature relative to all colors with the same chroma and tone.
			* Value on a scale from 0 to 1.
			*/
			relativeTemperature(hct) {
				const range = this.tempsByHct.get(this.warmest) - this.tempsByHct.get(this.coldest);
				const differenceFromColdest = this.tempsByHct.get(hct) - this.tempsByHct.get(this.coldest);
				if (range === 0) return .5;
				return differenceFromColdest / range;
			}
			/** Relative temperature of the input color. See [relativeTemperature]. */
			get inputRelativeTemperature() {
				if (this.inputRelativeTemperatureCache >= 0) return this.inputRelativeTemperatureCache;
				this.inputRelativeTemperatureCache = this.relativeTemperature(this.input);
				return this.inputRelativeTemperatureCache;
			}
			/** A Map with keys of HCTs in [hctsByTemp], values of raw temperature. */
			get tempsByHct() {
				if (this.tempsByHctCache.size > 0) return this.tempsByHctCache;
				const allHcts = this.hctsByHue.concat([this.input]);
				const temperaturesByHct = /* @__PURE__ */ new Map();
				for (const e of allHcts) temperaturesByHct.set(e, TemperatureCache.rawTemperature(e));
				this.tempsByHctCache = temperaturesByHct;
				return temperaturesByHct;
			}
			/**
			* HCTs for all hues, with the same chroma/tone as the input.
			* Sorted ascending, hue 0 to 360.
			*/
			get hctsByHue() {
				if (this.hctsByHueCache.length > 0) return this.hctsByHueCache;
				const hcts = [];
				for (let hue = 0; hue <= 360; hue += 1) {
					const colorAtHue = Hct.from(hue, this.input.chroma, this.input.tone);
					hcts.push(colorAtHue);
				}
				this.hctsByHueCache = hcts;
				return this.hctsByHueCache;
			}
			/** Determines if an angle is between two other angles, rotating clockwise. */
			static isBetween(angle, a, b) {
				if (a < b) return a <= angle && angle <= b;
				return a <= angle || angle <= b;
			}
			/**
			* Value representing cool-warm factor of a color.
			* Values below 0 are considered cool, above, warm.
			*
			* Color science has researched emotion and harmony, which art uses to select
			* colors. Warm-cool is the foundation of analogous and complementary colors.
			* See:
			* - Li-Chen Ou's Chapter 19 in Handbook of Color Psychology (2015).
			* - Josef Albers' Interaction of Color chapters 19 and 21.
			*
			* Implementation of Ou, Woodcock and Wright's algorithm, which uses
			* L*a*b* / LCH color space.
			* Return value has these properties:
			* - Values below 0 are cool, above 0 are warm.
			* - Lower bound: -0.52 - (chroma ^ 1.07 / 20). L*a*b* chroma is infinite.
			*   Assuming max of 130 chroma, -9.66.
			* - Upper bound: -0.52 + (chroma ^ 1.07 / 20). L*a*b* chroma is infinite.
			*   Assuming max of 130 chroma, 8.61.
			*/
			static rawTemperature(color) {
				const lab = labFromArgb(color.toInt());
				const hue = sanitizeDegreesDouble(Math.atan2(lab[2], lab[1]) * 180 / Math.PI);
				const chroma = Math.sqrt(lab[1] * lab[1] + lab[2] * lab[2]);
				return -.5 + .02 * Math.pow(chroma, 1.07) * Math.cos(sanitizeDegreesDouble(hue - 50) * Math.PI / 180);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/dynamiccolor/contrast_curve.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/dynamiccolor/tone_delta_pair.js
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
			* For instance, ToneDeltaPair(A, B, 15, 'darker', 'exact') states that
			* A's tone should be exactly 15 darker than B's.
			*
			* 'relative_darker' and 'relative_lighter' describes the tone adjustment
			* relative to the surface color trend (white in light mode; black in dark
			* mode). For instance, ToneDeltaPair(A, B, 10, 'relative_lighter',
			* 'farther') states that A should be at least 10 lighter than B in light
			* mode, and at least 10 darker than B in dark mode.
			*
			* @param roleA The first role in a pair.
			* @param roleB The second role in a pair.
			* @param delta Required difference between tones. Absolute value, negative
			* values have undefined behavior.
			* @param polarity The relative relation between tones of roleA and roleB,
			* as described above.
			* @param constraint How to fulfill the tone delta pair constraint.
			* @param stayTogether Whether these two roles should stay on the same side
			* of the "awkward zone" (T50-59). This is necessary for certain cases where
			* one role has two backgrounds.
			*/
			constructor(roleA, roleB, delta, polarity, stayTogether, constraint) {
				this.roleA = roleA;
				this.roleB = roleB;
				this.delta = delta;
				this.polarity = polarity;
				this.stayTogether = stayTogether;
				this.constraint = constraint;
				this.constraint = constraint ?? "exact";
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/dynamiccolor/variant.js
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
		(function (Variant) {
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/dynamiccolor/color_spec_2021.js
		/**
		* @license
		* Copyright 2025 Google LLC
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
		* Returns true if the scheme is Fidelity or Content.
		*/
		function isFidelity(scheme) {
			return scheme.variant === Variant.FIDELITY || scheme.variant === Variant.CONTENT;
		}
		/**
		* Returns true if the scheme is Monochrome.
		*/
		function isMonochrome(scheme) {
			return scheme.variant === Variant.MONOCHROME;
		}
		/**
		* Returns the desired chroma for a given tone at a specific hue.
		*
		* @param hue The given hue.
		* @param chroma The target chroma.
		* @param tone The tone to start with.
		* @param byDecreasingTone Whether to search for lower tones.
		*/
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
		* A delegate for the dynamic color spec of a DynamicScheme in the 2021 spec.
		*/
		var ColorSpecDelegateImpl2021 = class {
			primaryPaletteKeyColor() {
				return DynamicColor.fromPalette({
					name: "primary_palette_key_color",
					palette: (s) => s.primaryPalette,
					tone: (s) => s.primaryPalette.keyColor.tone
				});
			}
			secondaryPaletteKeyColor() {
				return DynamicColor.fromPalette({
					name: "secondary_palette_key_color",
					palette: (s) => s.secondaryPalette,
					tone: (s) => s.secondaryPalette.keyColor.tone
				});
			}
			tertiaryPaletteKeyColor() {
				return DynamicColor.fromPalette({
					name: "tertiary_palette_key_color",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => s.tertiaryPalette.keyColor.tone
				});
			}
			neutralPaletteKeyColor() {
				return DynamicColor.fromPalette({
					name: "neutral_palette_key_color",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.neutralPalette.keyColor.tone
				});
			}
			neutralVariantPaletteKeyColor() {
				return DynamicColor.fromPalette({
					name: "neutral_variant_palette_key_color",
					palette: (s) => s.neutralVariantPalette,
					tone: (s) => s.neutralVariantPalette.keyColor.tone
				});
			}
			errorPaletteKeyColor() {
				return DynamicColor.fromPalette({
					name: "error_palette_key_color",
					palette: (s) => s.errorPalette,
					tone: (s) => s.errorPalette.keyColor.tone
				});
			}
			background() {
				return DynamicColor.fromPalette({
					name: "background",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? 6 : 98,
					isBackground: true
				});
			}
			onBackground() {
				return DynamicColor.fromPalette({
					name: "on_background",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? 90 : 10,
					background: (s) => this.background(),
					contrastCurve: (s) => new ContrastCurve(3, 3, 4.5, 7)
				});
			}
			surface() {
				return DynamicColor.fromPalette({
					name: "surface",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? 6 : 98,
					isBackground: true
				});
			}
			surfaceDim() {
				return DynamicColor.fromPalette({
					name: "surface_dim",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? 6 : new ContrastCurve(87, 87, 80, 75).get(s.contrastLevel),
					isBackground: true
				});
			}
			surfaceBright() {
				return DynamicColor.fromPalette({
					name: "surface_bright",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? new ContrastCurve(24, 24, 29, 34).get(s.contrastLevel) : 98,
					isBackground: true
				});
			}
			surfaceContainerLowest() {
				return DynamicColor.fromPalette({
					name: "surface_container_lowest",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? new ContrastCurve(4, 4, 2, 0).get(s.contrastLevel) : 100,
					isBackground: true
				});
			}
			surfaceContainerLow() {
				return DynamicColor.fromPalette({
					name: "surface_container_low",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? new ContrastCurve(10, 10, 11, 12).get(s.contrastLevel) : new ContrastCurve(96, 96, 96, 95).get(s.contrastLevel),
					isBackground: true
				});
			}
			surfaceContainer() {
				return DynamicColor.fromPalette({
					name: "surface_container",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? new ContrastCurve(12, 12, 16, 20).get(s.contrastLevel) : new ContrastCurve(94, 94, 92, 90).get(s.contrastLevel),
					isBackground: true
				});
			}
			surfaceContainerHigh() {
				return DynamicColor.fromPalette({
					name: "surface_container_high",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? new ContrastCurve(17, 17, 21, 25).get(s.contrastLevel) : new ContrastCurve(92, 92, 88, 85).get(s.contrastLevel),
					isBackground: true
				});
			}
			surfaceContainerHighest() {
				return DynamicColor.fromPalette({
					name: "surface_container_highest",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? new ContrastCurve(22, 22, 26, 30).get(s.contrastLevel) : new ContrastCurve(90, 90, 84, 80).get(s.contrastLevel),
					isBackground: true
				});
			}
			onSurface() {
				return DynamicColor.fromPalette({
					name: "on_surface",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? 90 : 10,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
				});
			}
			surfaceVariant() {
				return DynamicColor.fromPalette({
					name: "surface_variant",
					palette: (s) => s.neutralVariantPalette,
					tone: (s) => s.isDark ? 30 : 90,
					isBackground: true
				});
			}
			onSurfaceVariant() {
				return DynamicColor.fromPalette({
					name: "on_surface_variant",
					palette: (s) => s.neutralVariantPalette,
					tone: (s) => s.isDark ? 80 : 30,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
				});
			}
			inverseSurface() {
				return DynamicColor.fromPalette({
					name: "inverse_surface",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? 90 : 20,
					isBackground: true
				});
			}
			inverseOnSurface() {
				return DynamicColor.fromPalette({
					name: "inverse_on_surface",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? 20 : 95,
					background: (s) => this.inverseSurface(),
					contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
				});
			}
			outline() {
				return DynamicColor.fromPalette({
					name: "outline",
					palette: (s) => s.neutralVariantPalette,
					tone: (s) => s.isDark ? 60 : 50,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(1.5, 3, 4.5, 7)
				});
			}
			outlineVariant() {
				return DynamicColor.fromPalette({
					name: "outline_variant",
					palette: (s) => s.neutralVariantPalette,
					tone: (s) => s.isDark ? 30 : 80,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5)
				});
			}
			shadow() {
				return DynamicColor.fromPalette({
					name: "shadow",
					palette: (s) => s.neutralPalette,
					tone: (s) => 0
				});
			}
			scrim() {
				return DynamicColor.fromPalette({
					name: "scrim",
					palette: (s) => s.neutralPalette,
					tone: (s) => 0
				});
			}
			surfaceTint() {
				return DynamicColor.fromPalette({
					name: "surface_tint",
					palette: (s) => s.primaryPalette,
					tone: (s) => s.isDark ? 80 : 40,
					isBackground: true
				});
			}
			primary() {
				return DynamicColor.fromPalette({
					name: "primary",
					palette: (s) => s.primaryPalette,
					tone: (s) => {
						if (isMonochrome(s)) return s.isDark ? 100 : 0;
						return s.isDark ? 80 : 40;
					},
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 7),
					toneDeltaPair: (s) => new ToneDeltaPair(this.primaryContainer(), this.primary(), 10, "nearer", false)
				});
			}
			primaryDim() { }
			onPrimary() {
				return DynamicColor.fromPalette({
					name: "on_primary",
					palette: (s) => s.primaryPalette,
					tone: (s) => {
						if (isMonochrome(s)) return s.isDark ? 10 : 90;
						return s.isDark ? 20 : 100;
					},
					background: (s) => this.primary(),
					contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
				});
			}
			primaryContainer() {
				return DynamicColor.fromPalette({
					name: "primary_container",
					palette: (s) => s.primaryPalette,
					tone: (s) => {
						if (isFidelity(s)) return s.sourceColorHct.tone;
						if (isMonochrome(s)) return s.isDark ? 85 : 25;
						return s.isDark ? 30 : 90;
					},
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.primaryContainer(), this.primary(), 10, "nearer", false)
				});
			}
			onPrimaryContainer() {
				return DynamicColor.fromPalette({
					name: "on_primary_container",
					palette: (s) => s.primaryPalette,
					tone: (s) => {
						if (isFidelity(s)) return DynamicColor.foregroundTone(this.primaryContainer().tone(s), 4.5);
						if (isMonochrome(s)) return s.isDark ? 0 : 100;
						return s.isDark ? 90 : 30;
					},
					background: (s) => this.primaryContainer(),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
				});
			}
			inversePrimary() {
				return DynamicColor.fromPalette({
					name: "inverse_primary",
					palette: (s) => s.primaryPalette,
					tone: (s) => s.isDark ? 40 : 80,
					background: (s) => this.inverseSurface(),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 7)
				});
			}
			secondary() {
				return DynamicColor.fromPalette({
					name: "secondary",
					palette: (s) => s.secondaryPalette,
					tone: (s) => s.isDark ? 80 : 40,
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 7),
					toneDeltaPair: (s) => new ToneDeltaPair(this.secondaryContainer(), this.secondary(), 10, "nearer", false)
				});
			}
			secondaryDim() { }
			onSecondary() {
				return DynamicColor.fromPalette({
					name: "on_secondary",
					palette: (s) => s.secondaryPalette,
					tone: (s) => {
						if (isMonochrome(s)) return s.isDark ? 10 : 100;
						else return s.isDark ? 20 : 100;
					},
					background: (s) => this.secondary(),
					contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
				});
			}
			secondaryContainer() {
				return DynamicColor.fromPalette({
					name: "secondary_container",
					palette: (s) => s.secondaryPalette,
					tone: (s) => {
						const initialTone = s.isDark ? 30 : 90;
						if (isMonochrome(s)) return s.isDark ? 30 : 85;
						if (!isFidelity(s)) return initialTone;
						return findDesiredChromaByTone(s.secondaryPalette.hue, s.secondaryPalette.chroma, initialTone, s.isDark ? false : true);
					},
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.secondaryContainer(), this.secondary(), 10, "nearer", false)
				});
			}
			onSecondaryContainer() {
				return DynamicColor.fromPalette({
					name: "on_secondary_container",
					palette: (s) => s.secondaryPalette,
					tone: (s) => {
						if (isMonochrome(s)) return s.isDark ? 90 : 10;
						if (!isFidelity(s)) return s.isDark ? 90 : 30;
						return DynamicColor.foregroundTone(this.secondaryContainer().tone(s), 4.5);
					},
					background: (s) => this.secondaryContainer(),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
				});
			}
			tertiary() {
				return DynamicColor.fromPalette({
					name: "tertiary",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => {
						if (isMonochrome(s)) return s.isDark ? 90 : 25;
						return s.isDark ? 80 : 40;
					},
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 7),
					toneDeltaPair: (s) => new ToneDeltaPair(this.tertiaryContainer(), this.tertiary(), 10, "nearer", false)
				});
			}
			tertiaryDim() { }
			onTertiary() {
				return DynamicColor.fromPalette({
					name: "on_tertiary",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => {
						if (isMonochrome(s)) return s.isDark ? 10 : 90;
						return s.isDark ? 20 : 100;
					},
					background: (s) => this.tertiary(),
					contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
				});
			}
			tertiaryContainer() {
				return DynamicColor.fromPalette({
					name: "tertiary_container",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => {
						if (isMonochrome(s)) return s.isDark ? 60 : 49;
						if (!isFidelity(s)) return s.isDark ? 30 : 90;
						const proposedHct = s.tertiaryPalette.getHct(s.sourceColorHct.tone);
						return DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
					},
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.tertiaryContainer(), this.tertiary(), 10, "nearer", false)
				});
			}
			onTertiaryContainer() {
				return DynamicColor.fromPalette({
					name: "on_tertiary_container",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => {
						if (isMonochrome(s)) return s.isDark ? 0 : 100;
						if (!isFidelity(s)) return s.isDark ? 90 : 30;
						return DynamicColor.foregroundTone(this.tertiaryContainer().tone(s), 4.5);
					},
					background: (s) => this.tertiaryContainer(),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
				});
			}
			error() {
				return DynamicColor.fromPalette({
					name: "error",
					palette: (s) => s.errorPalette,
					tone: (s) => s.isDark ? 80 : 40,
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 7),
					toneDeltaPair: (s) => new ToneDeltaPair(this.errorContainer(), this.error(), 10, "nearer", false)
				});
			}
			errorDim() { }
			onError() {
				return DynamicColor.fromPalette({
					name: "on_error",
					palette: (s) => s.errorPalette,
					tone: (s) => s.isDark ? 20 : 100,
					background: (s) => this.error(),
					contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
				});
			}
			errorContainer() {
				return DynamicColor.fromPalette({
					name: "error_container",
					palette: (s) => s.errorPalette,
					tone: (s) => s.isDark ? 30 : 90,
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.errorContainer(), this.error(), 10, "nearer", false)
				});
			}
			onErrorContainer() {
				return DynamicColor.fromPalette({
					name: "on_error_container",
					palette: (s) => s.errorPalette,
					tone: (s) => {
						if (isMonochrome(s)) return s.isDark ? 90 : 10;
						return s.isDark ? 90 : 30;
					},
					background: (s) => this.errorContainer(),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
				});
			}
			primaryFixed() {
				return DynamicColor.fromPalette({
					name: "primary_fixed",
					palette: (s) => s.primaryPalette,
					tone: (s) => isMonochrome(s) ? 40 : 90,
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.primaryFixed(), this.primaryFixedDim(), 10, "lighter", true)
				});
			}
			primaryFixedDim() {
				return DynamicColor.fromPalette({
					name: "primary_fixed_dim",
					palette: (s) => s.primaryPalette,
					tone: (s) => isMonochrome(s) ? 30 : 80,
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.primaryFixed(), this.primaryFixedDim(), 10, "lighter", true)
				});
			}
			onPrimaryFixed() {
				return DynamicColor.fromPalette({
					name: "on_primary_fixed",
					palette: (s) => s.primaryPalette,
					tone: (s) => isMonochrome(s) ? 100 : 10,
					background: (s) => this.primaryFixedDim(),
					secondBackground: (s) => this.primaryFixed(),
					contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
				});
			}
			onPrimaryFixedVariant() {
				return DynamicColor.fromPalette({
					name: "on_primary_fixed_variant",
					palette: (s) => s.primaryPalette,
					tone: (s) => isMonochrome(s) ? 90 : 30,
					background: (s) => this.primaryFixedDim(),
					secondBackground: (s) => this.primaryFixed(),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
				});
			}
			secondaryFixed() {
				return DynamicColor.fromPalette({
					name: "secondary_fixed",
					palette: (s) => s.secondaryPalette,
					tone: (s) => isMonochrome(s) ? 80 : 90,
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.secondaryFixed(), this.secondaryFixedDim(), 10, "lighter", true)
				});
			}
			secondaryFixedDim() {
				return DynamicColor.fromPalette({
					name: "secondary_fixed_dim",
					palette: (s) => s.secondaryPalette,
					tone: (s) => isMonochrome(s) ? 70 : 80,
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.secondaryFixed(), this.secondaryFixedDim(), 10, "lighter", true)
				});
			}
			onSecondaryFixed() {
				return DynamicColor.fromPalette({
					name: "on_secondary_fixed",
					palette: (s) => s.secondaryPalette,
					tone: (s) => 10,
					background: (s) => this.secondaryFixedDim(),
					secondBackground: (s) => this.secondaryFixed(),
					contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
				});
			}
			onSecondaryFixedVariant() {
				return DynamicColor.fromPalette({
					name: "on_secondary_fixed_variant",
					palette: (s) => s.secondaryPalette,
					tone: (s) => isMonochrome(s) ? 25 : 30,
					background: (s) => this.secondaryFixedDim(),
					secondBackground: (s) => this.secondaryFixed(),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
				});
			}
			tertiaryFixed() {
				return DynamicColor.fromPalette({
					name: "tertiary_fixed",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => isMonochrome(s) ? 40 : 90,
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.tertiaryFixed(), this.tertiaryFixedDim(), 10, "lighter", true)
				});
			}
			tertiaryFixedDim() {
				return DynamicColor.fromPalette({
					name: "tertiary_fixed_dim",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => isMonochrome(s) ? 30 : 80,
					isBackground: true,
					background: (s) => this.highestSurface(s),
					contrastCurve: (s) => new ContrastCurve(1, 1, 3, 4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.tertiaryFixed(), this.tertiaryFixedDim(), 10, "lighter", true)
				});
			}
			onTertiaryFixed() {
				return DynamicColor.fromPalette({
					name: "on_tertiary_fixed",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => isMonochrome(s) ? 100 : 10,
					background: (s) => this.tertiaryFixedDim(),
					secondBackground: (s) => this.tertiaryFixed(),
					contrastCurve: (s) => new ContrastCurve(4.5, 7, 11, 21)
				});
			}
			onTertiaryFixedVariant() {
				return DynamicColor.fromPalette({
					name: "on_tertiary_fixed_variant",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => isMonochrome(s) ? 90 : 30,
					background: (s) => this.tertiaryFixedDim(),
					secondBackground: (s) => this.tertiaryFixed(),
					contrastCurve: (s) => new ContrastCurve(3, 4.5, 7, 11)
				});
			}
			highestSurface(s) {
				return s.isDark ? this.surfaceBright() : this.surfaceDim();
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/dynamiccolor/color_spec_2025.js
		/**
		* @license
		* Copyright 2025 Google LLC
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
		* Returns the maximum tone for a given chroma in the palette.
		*
		* @param palette The tonal palette to use.
		* @param lowerBound The lower bound of the tone.
		* @param upperBound The upper bound of the tone.
		*/
		function tMaxC(palette, lowerBound = 0, upperBound = 100, chromaMultiplier = 1) {
			return clampDouble(lowerBound, upperBound, findBestToneForChroma(palette.hue, palette.chroma * chromaMultiplier, 100, true));
		}
		/**
		* Returns the minimum tone for a given chroma in the palette.
		*
		* @param palette The tonal palette to use.
		* @param lowerBound The lower bound of the tone.
		* @param upperBound The upper bound of the tone.
		*/
		function tMinC(palette, lowerBound = 0, upperBound = 100) {
			return clampDouble(lowerBound, upperBound, findBestToneForChroma(palette.hue, palette.chroma, 0, false));
		}
		/**
		* Searches for the best tone with a given chroma from a given tone at a
		* specific hue.
		*
		* @param hue The given hue.
		* @param chroma The target chroma.
		* @param tone The tone to start with.
		* @param byDecreasingTone Whether to search for lower tones.
		*/
		function findBestToneForChroma(hue, chroma, tone, byDecreasingTone) {
			let answer = tone;
			let bestCandidate = Hct.from(hue, chroma, answer);
			while (bestCandidate.chroma < chroma) {
				if (tone < 0 || tone > 100) break;
				tone += byDecreasingTone ? -1 : 1;
				const newCandidate = Hct.from(hue, chroma, tone);
				if (bestCandidate.chroma < newCandidate.chroma) {
					bestCandidate = newCandidate;
					answer = tone;
				}
			}
			return answer;
		}
		/**
		* Returns the contrast curve for a given default contrast.
		*
		* @param defaultContrast The default contrast to use.
		*/
		function getCurve(defaultContrast) {
			if (defaultContrast === 1.5) return new ContrastCurve(1.5, 1.5, 3, 5.5);
			else if (defaultContrast === 3) return new ContrastCurve(3, 3, 4.5, 7);
			else if (defaultContrast === 4.5) return new ContrastCurve(4.5, 4.5, 7, 11);
			else if (defaultContrast === 6) return new ContrastCurve(6, 6, 7, 11);
			else if (defaultContrast === 7) return new ContrastCurve(7, 7, 11, 21);
			else if (defaultContrast === 9) return new ContrastCurve(9, 9, 11, 21);
			else if (defaultContrast === 11) return new ContrastCurve(11, 11, 21, 21);
			else if (defaultContrast === 21) return new ContrastCurve(21, 21, 21, 21);
			else return new ContrastCurve(defaultContrast, defaultContrast, 7, 21);
		}
		/**
		* A delegate for the dynamic color spec of a DynamicScheme in the 2025 spec.
		*/
		var ColorSpecDelegateImpl2025 = class extends ColorSpecDelegateImpl2021 {
			surface() {
				const color2025 = DynamicColor.fromPalette({
					name: "surface",
					palette: (s) => s.neutralPalette,
					tone: (s) => {
						super.surface().tone(s);
						if (s.platform === "phone") {
							if (s.isDark) return 4;
							else if (Hct.isYellow(s.neutralPalette.hue)) return 99;
							else if (s.variant === Variant.VIBRANT) return 97;
							else return 98;
						} else return 0;
					},
					isBackground: true
				});
				return extendSpecVersion(super.surface(), "2025", color2025);
			}
			surfaceDim() {
				const color2025 = DynamicColor.fromPalette({
					name: "surface_dim",
					palette: (s) => s.neutralPalette,
					tone: (s) => {
						if (s.isDark) return 4;
						else if (Hct.isYellow(s.neutralPalette.hue)) return 90;
						else if (s.variant === Variant.VIBRANT) return 85;
						else return 87;
					},
					isBackground: true,
					chromaMultiplier: (s) => {
						if (!s.isDark) {
							if (s.variant === Variant.NEUTRAL) return 2.5;
							else if (s.variant === Variant.TONAL_SPOT) return 1.7;
							else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? 2.7 : 1.75;
							else if (s.variant === Variant.VIBRANT) return 1.36;
						}
						return 1;
					}
				});
				return extendSpecVersion(super.surfaceDim(), "2025", color2025);
			}
			surfaceBright() {
				const color2025 = DynamicColor.fromPalette({
					name: "surface_bright",
					palette: (s) => s.neutralPalette,
					tone: (s) => {
						if (s.isDark) return 18;
						else if (Hct.isYellow(s.neutralPalette.hue)) return 99;
						else if (s.variant === Variant.VIBRANT) return 97;
						else return 98;
					},
					isBackground: true,
					chromaMultiplier: (s) => {
						if (s.isDark) {
							if (s.variant === Variant.NEUTRAL) return 2.5;
							else if (s.variant === Variant.TONAL_SPOT) return 1.7;
							else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? 2.7 : 1.75;
							else if (s.variant === Variant.VIBRANT) return 1.36;
						}
						return 1;
					}
				});
				return extendSpecVersion(super.surfaceBright(), "2025", color2025);
			}
			surfaceContainerLowest() {
				const color2025 = DynamicColor.fromPalette({
					name: "surface_container_lowest",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? 0 : 100,
					isBackground: true
				});
				return extendSpecVersion(super.surfaceContainerLowest(), "2025", color2025);
			}
			surfaceContainerLow() {
				const color2025 = DynamicColor.fromPalette({
					name: "surface_container_low",
					palette: (s) => s.neutralPalette,
					tone: (s) => {
						if (s.platform === "phone") {
							if (s.isDark) return 6;
							else if (Hct.isYellow(s.neutralPalette.hue)) return 98;
							else if (s.variant === Variant.VIBRANT) return 95;
							else return 96;
						} else return 15;
					},
					isBackground: true,
					chromaMultiplier: (s) => {
						if (s.platform === "phone") {
							if (s.variant === Variant.NEUTRAL) return 1.3;
							else if (s.variant === Variant.TONAL_SPOT) return 1.25;
							else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? 1.3 : 1.15;
							else if (s.variant === Variant.VIBRANT) return 1.08;
						}
						return 1;
					}
				});
				return extendSpecVersion(super.surfaceContainerLow(), "2025", color2025);
			}
			surfaceContainer() {
				const color2025 = DynamicColor.fromPalette({
					name: "surface_container",
					palette: (s) => s.neutralPalette,
					tone: (s) => {
						if (s.platform === "phone") {
							if (s.isDark) return 9;
							else if (Hct.isYellow(s.neutralPalette.hue)) return 96;
							else if (s.variant === Variant.VIBRANT) return 92;
							else return 94;
						} else return 20;
					},
					isBackground: true,
					chromaMultiplier: (s) => {
						if (s.platform === "phone") {
							if (s.variant === Variant.NEUTRAL) return 1.6;
							else if (s.variant === Variant.TONAL_SPOT) return 1.4;
							else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? 1.6 : 1.3;
							else if (s.variant === Variant.VIBRANT) return 1.15;
						}
						return 1;
					}
				});
				return extendSpecVersion(super.surfaceContainer(), "2025", color2025);
			}
			surfaceContainerHigh() {
				const color2025 = DynamicColor.fromPalette({
					name: "surface_container_high",
					palette: (s) => s.neutralPalette,
					tone: (s) => {
						if (s.platform === "phone") {
							if (s.isDark) return 12;
							else if (Hct.isYellow(s.neutralPalette.hue)) return 94;
							else if (s.variant === Variant.VIBRANT) return 90;
							else return 92;
						} else return 25;
					},
					isBackground: true,
					chromaMultiplier: (s) => {
						if (s.platform === "phone") {
							if (s.variant === Variant.NEUTRAL) return 1.9;
							else if (s.variant === Variant.TONAL_SPOT) return 1.5;
							else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? 1.95 : 1.45;
							else if (s.variant === Variant.VIBRANT) return 1.22;
						}
						return 1;
					}
				});
				return extendSpecVersion(super.surfaceContainerHigh(), "2025", color2025);
			}
			surfaceContainerHighest() {
				const color2025 = DynamicColor.fromPalette({
					name: "surface_container_highest",
					palette: (s) => s.neutralPalette,
					tone: (s) => {
						if (s.isDark) return 15;
						else if (Hct.isYellow(s.neutralPalette.hue)) return 92;
						else if (s.variant === Variant.VIBRANT) return 88;
						else return 90;
					},
					isBackground: true,
					chromaMultiplier: (s) => {
						if (s.variant === Variant.NEUTRAL) return 2.2;
						else if (s.variant === Variant.TONAL_SPOT) return 1.7;
						else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? 2.3 : 1.6;
						else if (s.variant === Variant.VIBRANT) return 1.29;
						else return 1;
					}
				});
				return extendSpecVersion(super.surfaceContainerHighest(), "2025", color2025);
			}
			onSurface() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_surface",
					palette: (s) => s.neutralPalette,
					tone: (s) => {
						if (s.variant === Variant.VIBRANT) return tMaxC(s.neutralPalette, 0, 100, 1.1);
						else return DynamicColor.getInitialToneFromBackground((s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh())(s);
					},
					chromaMultiplier: (s) => {
						if (s.platform === "phone") {
							if (s.variant === Variant.NEUTRAL) return 2.2;
							else if (s.variant === Variant.TONAL_SPOT) return 1.7;
							else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? s.isDark ? 3 : 2.3 : 1.6;
						}
						return 1;
					},
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
					contrastCurve: (s) => s.isDark && s.platform === "phone" ? getCurve(11) : getCurve(9)
				});
				return extendSpecVersion(super.onSurface(), "2025", color2025);
			}
			onSurfaceVariant() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_surface_variant",
					palette: (s) => s.neutralPalette,
					chromaMultiplier: (s) => {
						if (s.platform === "phone") {
							if (s.variant === Variant.NEUTRAL) return 2.2;
							else if (s.variant === Variant.TONAL_SPOT) return 1.7;
							else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? s.isDark ? 3 : 2.3 : 1.6;
						}
						return 1;
					},
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
					contrastCurve: (s) => s.platform === "phone" ? s.isDark ? getCurve(6) : getCurve(4.5) : getCurve(7)
				});
				return extendSpecVersion(super.onSurfaceVariant(), "2025", color2025);
			}
			outline() {
				const color2025 = DynamicColor.fromPalette({
					name: "outline",
					palette: (s) => s.neutralPalette,
					chromaMultiplier: (s) => {
						if (s.platform === "phone") {
							if (s.variant === Variant.NEUTRAL) return 2.2;
							else if (s.variant === Variant.TONAL_SPOT) return 1.7;
							else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? s.isDark ? 3 : 2.3 : 1.6;
						}
						return 1;
					},
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(3) : getCurve(4.5)
				});
				return extendSpecVersion(super.outline(), "2025", color2025);
			}
			outlineVariant() {
				const color2025 = DynamicColor.fromPalette({
					name: "outline_variant",
					palette: (s) => s.neutralPalette,
					chromaMultiplier: (s) => {
						if (s.platform === "phone") {
							if (s.variant === Variant.NEUTRAL) return 2.2;
							else if (s.variant === Variant.TONAL_SPOT) return 1.7;
							else if (s.variant === Variant.EXPRESSIVE) return Hct.isYellow(s.neutralPalette.hue) ? s.isDark ? 3 : 2.3 : 1.6;
						}
						return 1;
					},
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(1.5) : getCurve(3)
				});
				return extendSpecVersion(super.outlineVariant(), "2025", color2025);
			}
			inverseSurface() {
				const color2025 = DynamicColor.fromPalette({
					name: "inverse_surface",
					palette: (s) => s.neutralPalette,
					tone: (s) => s.isDark ? 98 : 4,
					isBackground: true
				});
				return extendSpecVersion(super.inverseSurface(), "2025", color2025);
			}
			inverseOnSurface() {
				const color2025 = DynamicColor.fromPalette({
					name: "inverse_on_surface",
					palette: (s) => s.neutralPalette,
					background: (s) => this.inverseSurface(),
					contrastCurve: (s) => getCurve(7)
				});
				return extendSpecVersion(super.inverseOnSurface(), "2025", color2025);
			}
			primary() {
				const color2025 = DynamicColor.fromPalette({
					name: "primary",
					palette: (s) => s.primaryPalette,
					tone: (s) => {
						if (s.variant === Variant.NEUTRAL) {
							if (s.platform === "phone") return s.isDark ? 80 : 40;
							else return 90;
						} else if (s.variant === Variant.TONAL_SPOT) {
							if (s.platform === "phone") {
								if (s.isDark) return 80;
								else return tMaxC(s.primaryPalette);
							} else return tMaxC(s.primaryPalette, 0, 90);
						} else if (s.variant === Variant.EXPRESSIVE) {
							if (s.platform === "phone") return tMaxC(s.primaryPalette, 0, Hct.isYellow(s.primaryPalette.hue) ? 25 : Hct.isCyan(s.primaryPalette.hue) ? 88 : 98);
							else return tMaxC(s.primaryPalette);
						} else if (s.platform === "phone") return tMaxC(s.primaryPalette, 0, Hct.isCyan(s.primaryPalette.hue) ? 88 : 98);
						else return tMaxC(s.primaryPalette);
					},
					isBackground: true,
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(4.5) : getCurve(7),
					toneDeltaPair: (s) => s.platform === "phone" ? new ToneDeltaPair(this.primaryContainer(), this.primary(), 5, "relative_lighter", true, "farther") : void 0
				});
				return extendSpecVersion(super.primary(), "2025", color2025);
			}
			primaryDim() {
				return DynamicColor.fromPalette({
					name: "primary_dim",
					palette: (s) => s.primaryPalette,
					tone: (s) => {
						if (s.variant === Variant.NEUTRAL) return 85;
						else if (s.variant === Variant.TONAL_SPOT) return tMaxC(s.primaryPalette, 0, 90);
						else return tMaxC(s.primaryPalette);
					},
					isBackground: true,
					background: (s) => this.surfaceContainerHigh(),
					contrastCurve: (s) => getCurve(4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.primaryDim(), this.primary(), 5, "darker", true, "farther")
				});
			}
			onPrimary() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_primary",
					palette: (s) => s.primaryPalette,
					background: (s) => s.platform === "phone" ? this.primary() : this.primaryDim(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
				});
				return extendSpecVersion(super.onPrimary(), "2025", color2025);
			}
			primaryContainer() {
				const color2025 = DynamicColor.fromPalette({
					name: "primary_container",
					palette: (s) => s.primaryPalette,
					tone: (s) => {
						if (s.platform === "watch") return 30;
						else if (s.variant === Variant.NEUTRAL) return s.isDark ? 30 : 90;
						else if (s.variant === Variant.TONAL_SPOT) return s.isDark ? tMinC(s.primaryPalette, 35, 93) : tMaxC(s.primaryPalette, 0, 90);
						else if (s.variant === Variant.EXPRESSIVE) return s.isDark ? tMaxC(s.primaryPalette, 30, 93) : tMaxC(s.primaryPalette, 78, Hct.isCyan(s.primaryPalette.hue) ? 88 : 90);
						else return s.isDark ? tMinC(s.primaryPalette, 66, 93) : tMaxC(s.primaryPalette, 66, Hct.isCyan(s.primaryPalette.hue) ? 88 : 93);
					},
					isBackground: true,
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
					toneDeltaPair: (s) => s.platform === "phone" ? void 0 : new ToneDeltaPair(this.primaryContainer(), this.primaryDim(), 10, "darker", true, "farther"),
					contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
				});
				return extendSpecVersion(super.primaryContainer(), "2025", color2025);
			}
			onPrimaryContainer() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_primary_container",
					palette: (s) => s.primaryPalette,
					background: (s) => this.primaryContainer(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
				});
				return extendSpecVersion(super.onPrimaryContainer(), "2025", color2025);
			}
			primaryFixed() {
				const color2025 = DynamicColor.fromPalette({
					name: "primary_fixed",
					palette: (s) => s.primaryPalette,
					tone: (s) => {
						let tempS = Object.assign({}, s, {
							isDark: false,
							contrastLevel: 0
						});
						return this.primaryContainer().getTone(tempS);
					},
					isBackground: true,
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
					contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
				});
				return extendSpecVersion(super.primaryFixed(), "2025", color2025);
			}
			primaryFixedDim() {
				const color2025 = DynamicColor.fromPalette({
					name: "primary_fixed_dim",
					palette: (s) => s.primaryPalette,
					tone: (s) => this.primaryFixed().getTone(s),
					isBackground: true,
					toneDeltaPair: (s) => new ToneDeltaPair(this.primaryFixedDim(), this.primaryFixed(), 5, "darker", true, "exact")
				});
				return extendSpecVersion(super.primaryFixedDim(), "2025", color2025);
			}
			onPrimaryFixed() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_primary_fixed",
					palette: (s) => s.primaryPalette,
					background: (s) => this.primaryFixedDim(),
					contrastCurve: (s) => getCurve(7)
				});
				return extendSpecVersion(super.onPrimaryFixed(), "2025", color2025);
			}
			onPrimaryFixedVariant() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_primary_fixed_variant",
					palette: (s) => s.primaryPalette,
					background: (s) => this.primaryFixedDim(),
					contrastCurve: (s) => getCurve(4.5)
				});
				return extendSpecVersion(super.onPrimaryFixedVariant(), "2025", color2025);
			}
			inversePrimary() {
				const color2025 = DynamicColor.fromPalette({
					name: "inverse_primary",
					palette: (s) => s.primaryPalette,
					tone: (s) => tMaxC(s.primaryPalette),
					background: (s) => this.inverseSurface(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
				});
				return extendSpecVersion(super.inversePrimary(), "2025", color2025);
			}
			secondary() {
				const color2025 = DynamicColor.fromPalette({
					name: "secondary",
					palette: (s) => s.secondaryPalette,
					tone: (s) => {
						if (s.platform === "watch") return s.variant === Variant.NEUTRAL ? 90 : tMaxC(s.secondaryPalette, 0, 90);
						else if (s.variant === Variant.NEUTRAL) return s.isDark ? tMinC(s.secondaryPalette, 0, 98) : tMaxC(s.secondaryPalette);
						else if (s.variant === Variant.VIBRANT) return tMaxC(s.secondaryPalette, 0, s.isDark ? 90 : 98);
						else return s.isDark ? 80 : tMaxC(s.secondaryPalette);
					},
					isBackground: true,
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(4.5) : getCurve(7),
					toneDeltaPair: (s) => s.platform === "phone" ? new ToneDeltaPair(this.secondaryContainer(), this.secondary(), 5, "relative_lighter", true, "farther") : void 0
				});
				return extendSpecVersion(super.secondary(), "2025", color2025);
			}
			secondaryDim() {
				return DynamicColor.fromPalette({
					name: "secondary_dim",
					palette: (s) => s.secondaryPalette,
					tone: (s) => {
						if (s.variant === Variant.NEUTRAL) return 85;
						else return tMaxC(s.secondaryPalette, 0, 90);
					},
					isBackground: true,
					background: (s) => this.surfaceContainerHigh(),
					contrastCurve: (s) => getCurve(4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.secondaryDim(), this.secondary(), 5, "darker", true, "farther")
				});
			}
			onSecondary() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_secondary",
					palette: (s) => s.secondaryPalette,
					background: (s) => s.platform === "phone" ? this.secondary() : this.secondaryDim(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
				});
				return extendSpecVersion(super.onSecondary(), "2025", color2025);
			}
			secondaryContainer() {
				const color2025 = DynamicColor.fromPalette({
					name: "secondary_container",
					palette: (s) => s.secondaryPalette,
					tone: (s) => {
						if (s.platform === "watch") return 30;
						else if (s.variant === Variant.VIBRANT) return s.isDark ? tMinC(s.secondaryPalette, 30, 40) : tMaxC(s.secondaryPalette, 84, 90);
						else if (s.variant === Variant.EXPRESSIVE) return s.isDark ? 15 : tMaxC(s.secondaryPalette, 90, 95);
						else return s.isDark ? 25 : 90;
					},
					isBackground: true,
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
					toneDeltaPair: (s) => s.platform === "watch" ? new ToneDeltaPair(this.secondaryContainer(), this.secondaryDim(), 10, "darker", true, "farther") : void 0,
					contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
				});
				return extendSpecVersion(super.secondaryContainer(), "2025", color2025);
			}
			onSecondaryContainer() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_secondary_container",
					palette: (s) => s.secondaryPalette,
					background: (s) => this.secondaryContainer(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
				});
				return extendSpecVersion(super.onSecondaryContainer(), "2025", color2025);
			}
			secondaryFixed() {
				const color2025 = DynamicColor.fromPalette({
					name: "secondary_fixed",
					palette: (s) => s.secondaryPalette,
					tone: (s) => {
						let tempS = Object.assign({}, s, {
							isDark: false,
							contrastLevel: 0
						});
						return this.secondaryContainer().getTone(tempS);
					},
					isBackground: true,
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
					contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
				});
				return extendSpecVersion(super.secondaryFixed(), "2025", color2025);
			}
			secondaryFixedDim() {
				const color2025 = DynamicColor.fromPalette({
					name: "secondary_fixed_dim",
					palette: (s) => s.secondaryPalette,
					tone: (s) => this.secondaryFixed().getTone(s),
					isBackground: true,
					toneDeltaPair: (s) => new ToneDeltaPair(this.secondaryFixedDim(), this.secondaryFixed(), 5, "darker", true, "exact")
				});
				return extendSpecVersion(super.secondaryFixedDim(), "2025", color2025);
			}
			onSecondaryFixed() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_secondary_fixed",
					palette: (s) => s.secondaryPalette,
					background: (s) => this.secondaryFixedDim(),
					contrastCurve: (s) => getCurve(7)
				});
				return extendSpecVersion(super.onSecondaryFixed(), "2025", color2025);
			}
			onSecondaryFixedVariant() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_secondary_fixed_variant",
					palette: (s) => s.secondaryPalette,
					background: (s) => this.secondaryFixedDim(),
					contrastCurve: (s) => getCurve(4.5)
				});
				return extendSpecVersion(super.onSecondaryFixedVariant(), "2025", color2025);
			}
			tertiary() {
				const color2025 = DynamicColor.fromPalette({
					name: "tertiary",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => {
						if (s.platform === "watch") return s.variant === Variant.TONAL_SPOT ? tMaxC(s.tertiaryPalette, 0, 90) : tMaxC(s.tertiaryPalette);
						else if (s.variant === Variant.EXPRESSIVE || s.variant === Variant.VIBRANT) return tMaxC(s.tertiaryPalette, 0, Hct.isCyan(s.tertiaryPalette.hue) ? 88 : s.isDark ? 98 : 100);
						else return s.isDark ? tMaxC(s.tertiaryPalette, 0, 98) : tMaxC(s.tertiaryPalette);
					},
					isBackground: true,
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(4.5) : getCurve(7),
					toneDeltaPair: (s) => s.platform === "phone" ? new ToneDeltaPair(this.tertiaryContainer(), this.tertiary(), 5, "relative_lighter", true, "farther") : void 0
				});
				return extendSpecVersion(super.tertiary(), "2025", color2025);
			}
			tertiaryDim() {
				return DynamicColor.fromPalette({
					name: "tertiary_dim",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => {
						if (s.variant === Variant.TONAL_SPOT) return tMaxC(s.tertiaryPalette, 0, 90);
						else return tMaxC(s.tertiaryPalette);
					},
					isBackground: true,
					background: (s) => this.surfaceContainerHigh(),
					contrastCurve: (s) => getCurve(4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.tertiaryDim(), this.tertiary(), 5, "darker", true, "farther")
				});
			}
			onTertiary() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_tertiary",
					palette: (s) => s.tertiaryPalette,
					background: (s) => s.platform === "phone" ? this.tertiary() : this.tertiaryDim(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
				});
				return extendSpecVersion(super.onTertiary(), "2025", color2025);
			}
			tertiaryContainer() {
				const color2025 = DynamicColor.fromPalette({
					name: "tertiary_container",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => {
						if (s.platform === "watch") return s.variant === Variant.TONAL_SPOT ? tMaxC(s.tertiaryPalette, 0, 90) : tMaxC(s.tertiaryPalette);
						else if (s.variant === Variant.NEUTRAL) return s.isDark ? tMaxC(s.tertiaryPalette, 0, 93) : tMaxC(s.tertiaryPalette, 0, 96);
						else if (s.variant === Variant.TONAL_SPOT) return tMaxC(s.tertiaryPalette, 0, s.isDark ? 93 : 100);
						else if (s.variant === Variant.EXPRESSIVE) return tMaxC(s.tertiaryPalette, 75, Hct.isCyan(s.tertiaryPalette.hue) ? 88 : s.isDark ? 93 : 100);
						else return s.isDark ? tMaxC(s.tertiaryPalette, 0, 93) : tMaxC(s.tertiaryPalette, 72, 100);
					},
					isBackground: true,
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
					toneDeltaPair: (s) => s.platform === "watch" ? new ToneDeltaPair(this.tertiaryContainer(), this.tertiaryDim(), 10, "darker", true, "farther") : void 0,
					contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
				});
				return extendSpecVersion(super.tertiaryContainer(), "2025", color2025);
			}
			onTertiaryContainer() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_tertiary_container",
					palette: (s) => s.tertiaryPalette,
					background: (s) => this.tertiaryContainer(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
				});
				return extendSpecVersion(super.onTertiaryContainer(), "2025", color2025);
			}
			tertiaryFixed() {
				const color2025 = DynamicColor.fromPalette({
					name: "tertiary_fixed",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => {
						let tempS = Object.assign({}, s, {
							isDark: false,
							contrastLevel: 0
						});
						return this.tertiaryContainer().getTone(tempS);
					},
					isBackground: true,
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
					contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
				});
				return extendSpecVersion(super.tertiaryFixed(), "2025", color2025);
			}
			tertiaryFixedDim() {
				const color2025 = DynamicColor.fromPalette({
					name: "tertiary_fixed_dim",
					palette: (s) => s.tertiaryPalette,
					tone: (s) => this.tertiaryFixed().getTone(s),
					isBackground: true,
					toneDeltaPair: (s) => new ToneDeltaPair(this.tertiaryFixedDim(), this.tertiaryFixed(), 5, "darker", true, "exact")
				});
				return extendSpecVersion(super.tertiaryFixedDim(), "2025", color2025);
			}
			onTertiaryFixed() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_tertiary_fixed",
					palette: (s) => s.tertiaryPalette,
					background: (s) => this.tertiaryFixedDim(),
					contrastCurve: (s) => getCurve(7)
				});
				return extendSpecVersion(super.onTertiaryFixed(), "2025", color2025);
			}
			onTertiaryFixedVariant() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_tertiary_fixed_variant",
					palette: (s) => s.tertiaryPalette,
					background: (s) => this.tertiaryFixedDim(),
					contrastCurve: (s) => getCurve(4.5)
				});
				return extendSpecVersion(super.onTertiaryFixedVariant(), "2025", color2025);
			}
			error() {
				const color2025 = DynamicColor.fromPalette({
					name: "error",
					palette: (s) => s.errorPalette,
					tone: (s) => {
						if (s.platform === "phone") return s.isDark ? tMinC(s.errorPalette, 0, 98) : tMaxC(s.errorPalette);
						else return tMinC(s.errorPalette);
					},
					isBackground: true,
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : this.surfaceContainerHigh(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(4.5) : getCurve(7),
					toneDeltaPair: (s) => s.platform === "phone" ? new ToneDeltaPair(this.errorContainer(), this.error(), 5, "relative_lighter", true, "farther") : void 0
				});
				return extendSpecVersion(super.error(), "2025", color2025);
			}
			errorDim() {
				return DynamicColor.fromPalette({
					name: "error_dim",
					palette: (s) => s.errorPalette,
					tone: (s) => tMinC(s.errorPalette),
					isBackground: true,
					background: (s) => this.surfaceContainerHigh(),
					contrastCurve: (s) => getCurve(4.5),
					toneDeltaPair: (s) => new ToneDeltaPair(this.errorDim(), this.error(), 5, "darker", true, "farther")
				});
			}
			onError() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_error",
					palette: (s) => s.errorPalette,
					background: (s) => s.platform === "phone" ? this.error() : this.errorDim(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(6) : getCurve(7)
				});
				return extendSpecVersion(super.onError(), "2025", color2025);
			}
			errorContainer() {
				const color2025 = DynamicColor.fromPalette({
					name: "error_container",
					palette: (s) => s.errorPalette,
					tone: (s) => {
						if (s.platform === "watch") return 30;
						else return s.isDark ? tMinC(s.errorPalette, 30, 93) : tMaxC(s.errorPalette, 0, 90);
					},
					isBackground: true,
					background: (s) => s.platform === "phone" ? this.highestSurface(s) : void 0,
					toneDeltaPair: (s) => s.platform === "watch" ? new ToneDeltaPair(this.errorContainer(), this.errorDim(), 10, "darker", true, "farther") : void 0,
					contrastCurve: (s) => s.platform === "phone" && s.contrastLevel > 0 ? getCurve(1.5) : void 0
				});
				return extendSpecVersion(super.errorContainer(), "2025", color2025);
			}
			onErrorContainer() {
				const color2025 = DynamicColor.fromPalette({
					name: "on_error_container",
					palette: (s) => s.errorPalette,
					background: (s) => this.errorContainer(),
					contrastCurve: (s) => s.platform === "phone" ? getCurve(4.5) : getCurve(7)
				});
				return extendSpecVersion(super.onErrorContainer(), "2025", color2025);
			}
			surfaceVariant() {
				const color2025 = Object.assign(this.surfaceContainerHighest().clone(), { name: "surface_variant" });
				return extendSpecVersion(super.surfaceVariant(), "2025", color2025);
			}
			surfaceTint() {
				const color2025 = Object.assign(this.primary().clone(), { name: "surface_tint" });
				return extendSpecVersion(super.surfaceTint(), "2025", color2025);
			}
			background() {
				const color2025 = Object.assign(this.surface().clone(), { name: "background" });
				return extendSpecVersion(super.background(), "2025", color2025);
			}
			onBackground() {
				const color2025 = Object.assign(this.onSurface().clone(), {
					name: "on_background",
					tone: (s) => {
						return s.platform === "watch" ? 100 : this.onSurface().getTone(s);
					}
				});
				return extendSpecVersion(super.onBackground(), "2025", color2025);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js
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
		* DynamicColors for the colors in the Material Design system.
		*/
		var MaterialDynamicColors = class MaterialDynamicColors {
			constructor() {
				this.allColors = [
					this.background(),
					this.onBackground(),
					this.surface(),
					this.surfaceDim(),
					this.surfaceBright(),
					this.surfaceContainerLowest(),
					this.surfaceContainerLow(),
					this.surfaceContainer(),
					this.surfaceContainerHigh(),
					this.surfaceContainerHighest(),
					this.onSurface(),
					this.onSurfaceVariant(),
					this.outline(),
					this.outlineVariant(),
					this.inverseSurface(),
					this.inverseOnSurface(),
					this.primary(),
					this.primaryDim(),
					this.onPrimary(),
					this.primaryContainer(),
					this.onPrimaryContainer(),
					this.primaryFixed(),
					this.primaryFixedDim(),
					this.onPrimaryFixed(),
					this.onPrimaryFixedVariant(),
					this.inversePrimary(),
					this.secondary(),
					this.secondaryDim(),
					this.onSecondary(),
					this.secondaryContainer(),
					this.onSecondaryContainer(),
					this.secondaryFixed(),
					this.secondaryFixedDim(),
					this.onSecondaryFixed(),
					this.onSecondaryFixedVariant(),
					this.tertiary(),
					this.tertiaryDim(),
					this.onTertiary(),
					this.tertiaryContainer(),
					this.onTertiaryContainer(),
					this.tertiaryFixed(),
					this.tertiaryFixedDim(),
					this.onTertiaryFixed(),
					this.onTertiaryFixedVariant(),
					this.error(),
					this.errorDim(),
					this.onError(),
					this.errorContainer(),
					this.onErrorContainer()
				].filter((c) => c !== void 0);
			}
			highestSurface(s) {
				return MaterialDynamicColors.colorSpec.highestSurface(s);
			}
			primaryPaletteKeyColor() {
				return MaterialDynamicColors.colorSpec.primaryPaletteKeyColor();
			}
			secondaryPaletteKeyColor() {
				return MaterialDynamicColors.colorSpec.secondaryPaletteKeyColor();
			}
			tertiaryPaletteKeyColor() {
				return MaterialDynamicColors.colorSpec.tertiaryPaletteKeyColor();
			}
			neutralPaletteKeyColor() {
				return MaterialDynamicColors.colorSpec.neutralPaletteKeyColor();
			}
			neutralVariantPaletteKeyColor() {
				return MaterialDynamicColors.colorSpec.neutralVariantPaletteKeyColor();
			}
			errorPaletteKeyColor() {
				return MaterialDynamicColors.colorSpec.errorPaletteKeyColor();
			}
			background() {
				return MaterialDynamicColors.colorSpec.background();
			}
			onBackground() {
				return MaterialDynamicColors.colorSpec.onBackground();
			}
			surface() {
				return MaterialDynamicColors.colorSpec.surface();
			}
			surfaceDim() {
				return MaterialDynamicColors.colorSpec.surfaceDim();
			}
			surfaceBright() {
				return MaterialDynamicColors.colorSpec.surfaceBright();
			}
			surfaceContainerLowest() {
				return MaterialDynamicColors.colorSpec.surfaceContainerLowest();
			}
			surfaceContainerLow() {
				return MaterialDynamicColors.colorSpec.surfaceContainerLow();
			}
			surfaceContainer() {
				return MaterialDynamicColors.colorSpec.surfaceContainer();
			}
			surfaceContainerHigh() {
				return MaterialDynamicColors.colorSpec.surfaceContainerHigh();
			}
			surfaceContainerHighest() {
				return MaterialDynamicColors.colorSpec.surfaceContainerHighest();
			}
			onSurface() {
				return MaterialDynamicColors.colorSpec.onSurface();
			}
			surfaceVariant() {
				return MaterialDynamicColors.colorSpec.surfaceVariant();
			}
			onSurfaceVariant() {
				return MaterialDynamicColors.colorSpec.onSurfaceVariant();
			}
			outline() {
				return MaterialDynamicColors.colorSpec.outline();
			}
			outlineVariant() {
				return MaterialDynamicColors.colorSpec.outlineVariant();
			}
			inverseSurface() {
				return MaterialDynamicColors.colorSpec.inverseSurface();
			}
			inverseOnSurface() {
				return MaterialDynamicColors.colorSpec.inverseOnSurface();
			}
			shadow() {
				return MaterialDynamicColors.colorSpec.shadow();
			}
			scrim() {
				return MaterialDynamicColors.colorSpec.scrim();
			}
			surfaceTint() {
				return MaterialDynamicColors.colorSpec.surfaceTint();
			}
			primary() {
				return MaterialDynamicColors.colorSpec.primary();
			}
			primaryDim() {
				return MaterialDynamicColors.colorSpec.primaryDim();
			}
			onPrimary() {
				return MaterialDynamicColors.colorSpec.onPrimary();
			}
			primaryContainer() {
				return MaterialDynamicColors.colorSpec.primaryContainer();
			}
			onPrimaryContainer() {
				return MaterialDynamicColors.colorSpec.onPrimaryContainer();
			}
			inversePrimary() {
				return MaterialDynamicColors.colorSpec.inversePrimary();
			}
			primaryFixed() {
				return MaterialDynamicColors.colorSpec.primaryFixed();
			}
			primaryFixedDim() {
				return MaterialDynamicColors.colorSpec.primaryFixedDim();
			}
			onPrimaryFixed() {
				return MaterialDynamicColors.colorSpec.onPrimaryFixed();
			}
			onPrimaryFixedVariant() {
				return MaterialDynamicColors.colorSpec.onPrimaryFixedVariant();
			}
			secondary() {
				return MaterialDynamicColors.colorSpec.secondary();
			}
			secondaryDim() {
				return MaterialDynamicColors.colorSpec.secondaryDim();
			}
			onSecondary() {
				return MaterialDynamicColors.colorSpec.onSecondary();
			}
			secondaryContainer() {
				return MaterialDynamicColors.colorSpec.secondaryContainer();
			}
			onSecondaryContainer() {
				return MaterialDynamicColors.colorSpec.onSecondaryContainer();
			}
			secondaryFixed() {
				return MaterialDynamicColors.colorSpec.secondaryFixed();
			}
			secondaryFixedDim() {
				return MaterialDynamicColors.colorSpec.secondaryFixedDim();
			}
			onSecondaryFixed() {
				return MaterialDynamicColors.colorSpec.onSecondaryFixed();
			}
			onSecondaryFixedVariant() {
				return MaterialDynamicColors.colorSpec.onSecondaryFixedVariant();
			}
			tertiary() {
				return MaterialDynamicColors.colorSpec.tertiary();
			}
			tertiaryDim() {
				return MaterialDynamicColors.colorSpec.tertiaryDim();
			}
			onTertiary() {
				return MaterialDynamicColors.colorSpec.onTertiary();
			}
			tertiaryContainer() {
				return MaterialDynamicColors.colorSpec.tertiaryContainer();
			}
			onTertiaryContainer() {
				return MaterialDynamicColors.colorSpec.onTertiaryContainer();
			}
			tertiaryFixed() {
				return MaterialDynamicColors.colorSpec.tertiaryFixed();
			}
			tertiaryFixedDim() {
				return MaterialDynamicColors.colorSpec.tertiaryFixedDim();
			}
			onTertiaryFixed() {
				return MaterialDynamicColors.colorSpec.onTertiaryFixed();
			}
			onTertiaryFixedVariant() {
				return MaterialDynamicColors.colorSpec.onTertiaryFixedVariant();
			}
			error() {
				return MaterialDynamicColors.colorSpec.error();
			}
			errorDim() {
				return MaterialDynamicColors.colorSpec.errorDim();
			}
			onError() {
				return MaterialDynamicColors.colorSpec.onError();
			}
			errorContainer() {
				return MaterialDynamicColors.colorSpec.errorContainer();
			}
			onErrorContainer() {
				return MaterialDynamicColors.colorSpec.onErrorContainer();
			}
			/** @deprecated Use highestSurface() instead. */
			static highestSurface(s) {
				return MaterialDynamicColors.colorSpec.highestSurface(s);
			}
		};
		MaterialDynamicColors.contentAccentToneDelta = 15;
		MaterialDynamicColors.colorSpec = new ColorSpecDelegateImpl2025();
		/** @deprecated Use primaryPaletteKeyColor() instead. */
		MaterialDynamicColors.primaryPaletteKeyColor = MaterialDynamicColors.colorSpec.primaryPaletteKeyColor();
		/** @deprecated Use secondaryPaletteKeyColor() instead. */
		MaterialDynamicColors.secondaryPaletteKeyColor = MaterialDynamicColors.colorSpec.secondaryPaletteKeyColor();
		/** @deprecated Use tertiaryPaletteKeyColor() instead. */
		MaterialDynamicColors.tertiaryPaletteKeyColor = MaterialDynamicColors.colorSpec.tertiaryPaletteKeyColor();
		/** @deprecated Use neutralPaletteKeyColor() instead. */
		MaterialDynamicColors.neutralPaletteKeyColor = MaterialDynamicColors.colorSpec.neutralPaletteKeyColor();
		/** @deprecated Use neutralVariantPaletteKeyColor() instead. */
		MaterialDynamicColors.neutralVariantPaletteKeyColor = MaterialDynamicColors.colorSpec.neutralVariantPaletteKeyColor();
		/** @deprecated Use background() instead. */
		MaterialDynamicColors.background = MaterialDynamicColors.colorSpec.background();
		/** @deprecated Use background() instead. */
		MaterialDynamicColors.onBackground = MaterialDynamicColors.colorSpec.onBackground();
		/** @deprecated Use surface() instead. */
		MaterialDynamicColors.surface = MaterialDynamicColors.colorSpec.surface();
		/** @deprecated Use surfaceDim() instead. */
		MaterialDynamicColors.surfaceDim = MaterialDynamicColors.colorSpec.surfaceDim();
		/** @deprecated Use surfaceBright() instead. */
		MaterialDynamicColors.surfaceBright = MaterialDynamicColors.colorSpec.surfaceBright();
		/** @deprecated Use surfaceContainerLowest() instead. */
		MaterialDynamicColors.surfaceContainerLowest = MaterialDynamicColors.colorSpec.surfaceContainerLowest();
		/** @deprecated Use surfaceContainerLow() instead. */
		MaterialDynamicColors.surfaceContainerLow = MaterialDynamicColors.colorSpec.surfaceContainerLow();
		/** @deprecated Use surfaceContainer() instead. */
		MaterialDynamicColors.surfaceContainer = MaterialDynamicColors.colorSpec.surfaceContainer();
		/** @deprecated Use surfaceContainerHigh() instead. */
		MaterialDynamicColors.surfaceContainerHigh = MaterialDynamicColors.colorSpec.surfaceContainerHigh();
		/** @deprecated Use surfaceContainerHighest() instead. */
		MaterialDynamicColors.surfaceContainerHighest = MaterialDynamicColors.colorSpec.surfaceContainerHighest();
		/** @deprecated Use onSurface() instead. */
		MaterialDynamicColors.onSurface = MaterialDynamicColors.colorSpec.onSurface();
		/** @deprecated Use surfaceVariant() instead. */
		MaterialDynamicColors.surfaceVariant = MaterialDynamicColors.colorSpec.surfaceVariant();
		/** @deprecated Use onSurfaceVariant() instead. */
		MaterialDynamicColors.onSurfaceVariant = MaterialDynamicColors.colorSpec.onSurfaceVariant();
		/** @deprecated Use inverseSurface() instead. */
		MaterialDynamicColors.inverseSurface = MaterialDynamicColors.colorSpec.inverseSurface();
		/** @deprecated Use inverseOnSurface() instead. */
		MaterialDynamicColors.inverseOnSurface = MaterialDynamicColors.colorSpec.inverseOnSurface();
		/** @deprecated Use outline() instead. */
		MaterialDynamicColors.outline = MaterialDynamicColors.colorSpec.outline();
		/** @deprecated Use outlineVariant() instead. */
		MaterialDynamicColors.outlineVariant = MaterialDynamicColors.colorSpec.outlineVariant();
		/** @deprecated Use shadow() instead. */
		MaterialDynamicColors.shadow = MaterialDynamicColors.colorSpec.shadow();
		/** @deprecated Use scrim() instead. */
		MaterialDynamicColors.scrim = MaterialDynamicColors.colorSpec.scrim();
		/** @deprecated Use surfaceTint() instead. */
		MaterialDynamicColors.surfaceTint = MaterialDynamicColors.colorSpec.surfaceTint();
		/** @deprecated Use primary() instead. */
		MaterialDynamicColors.primary = MaterialDynamicColors.colorSpec.primary();
		/** @deprecated Use onPrimary() instead. */
		MaterialDynamicColors.onPrimary = MaterialDynamicColors.colorSpec.onPrimary();
		/** @deprecated Use primaryContainer() instead. */
		MaterialDynamicColors.primaryContainer = MaterialDynamicColors.colorSpec.primaryContainer();
		/** @deprecated Use onPrimaryContainer() instead. */
		MaterialDynamicColors.onPrimaryContainer = MaterialDynamicColors.colorSpec.onPrimaryContainer();
		/** @deprecated Use inversePrimary() instead. */
		MaterialDynamicColors.inversePrimary = MaterialDynamicColors.colorSpec.inversePrimary();
		/** @deprecated Use secondary() instead. */
		MaterialDynamicColors.secondary = MaterialDynamicColors.colorSpec.secondary();
		/** @deprecated Use onSecondary() instead. */
		MaterialDynamicColors.onSecondary = MaterialDynamicColors.colorSpec.onSecondary();
		/** @deprecated Use secondaryContainer() instead. */
		MaterialDynamicColors.secondaryContainer = MaterialDynamicColors.colorSpec.secondaryContainer();
		/** @deprecated Use onSecondaryContainer() instead. */
		MaterialDynamicColors.onSecondaryContainer = MaterialDynamicColors.colorSpec.onSecondaryContainer();
		/** @deprecated Use tertiary() instead. */
		MaterialDynamicColors.tertiary = MaterialDynamicColors.colorSpec.tertiary();
		/** @deprecated Use onTertiary() instead. */
		MaterialDynamicColors.onTertiary = MaterialDynamicColors.colorSpec.onTertiary();
		/** @deprecated Use tertiaryContainer() instead. */
		MaterialDynamicColors.tertiaryContainer = MaterialDynamicColors.colorSpec.tertiaryContainer();
		/** @deprecated Use onTertiaryContainer() instead. */
		MaterialDynamicColors.onTertiaryContainer = MaterialDynamicColors.colorSpec.onTertiaryContainer();
		/** @deprecated Use error() instead. */
		MaterialDynamicColors.error = MaterialDynamicColors.colorSpec.error();
		/** @deprecated Use onError() instead. */
		MaterialDynamicColors.onError = MaterialDynamicColors.colorSpec.onError();
		/** @deprecated Use errorContainer() instead. */
		MaterialDynamicColors.errorContainer = MaterialDynamicColors.colorSpec.errorContainer();
		/** @deprecated Use onErrorContainer() instead. */
		MaterialDynamicColors.onErrorContainer = MaterialDynamicColors.colorSpec.onErrorContainer();
		/** @deprecated Use primaryFixed() instead. */
		MaterialDynamicColors.primaryFixed = MaterialDynamicColors.colorSpec.primaryFixed();
		/** @deprecated Use primaryFixedDim() instead. */
		MaterialDynamicColors.primaryFixedDim = MaterialDynamicColors.colorSpec.primaryFixedDim();
		/** @deprecated Use onPrimaryFixed() instead. */
		MaterialDynamicColors.onPrimaryFixed = MaterialDynamicColors.colorSpec.onPrimaryFixed();
		/** @deprecated Use onPrimaryFixedVariant() instead. */
		MaterialDynamicColors.onPrimaryFixedVariant = MaterialDynamicColors.colorSpec.onPrimaryFixedVariant();
		/** @deprecated Use secondaryFixed() instead. */
		MaterialDynamicColors.secondaryFixed = MaterialDynamicColors.colorSpec.secondaryFixed();
		/** @deprecated Use secondaryFixedDim() instead. */
		MaterialDynamicColors.secondaryFixedDim = MaterialDynamicColors.colorSpec.secondaryFixedDim();
		/** @deprecated Use onSecondaryFixed() instead. */
		MaterialDynamicColors.onSecondaryFixed = MaterialDynamicColors.colorSpec.onSecondaryFixed();
		/** @deprecated Use onSecondaryFixedVariant() instead. */
		MaterialDynamicColors.onSecondaryFixedVariant = MaterialDynamicColors.colorSpec.onSecondaryFixedVariant();
		/** @deprecated Use tertiaryFixed() instead. */
		MaterialDynamicColors.tertiaryFixed = MaterialDynamicColors.colorSpec.tertiaryFixed();
		/** @deprecated Use tertiaryFixedDim() instead. */
		MaterialDynamicColors.tertiaryFixedDim = MaterialDynamicColors.colorSpec.tertiaryFixedDim();
		/** @deprecated Use onTertiaryFixed() instead. */
		MaterialDynamicColors.onTertiaryFixed = MaterialDynamicColors.colorSpec.onTertiaryFixed();
		/** @deprecated Use onTertiaryFixedVariant() instead. */
		MaterialDynamicColors.onTertiaryFixedVariant = MaterialDynamicColors.colorSpec.onTertiaryFixedVariant();
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/dynamiccolor/dynamic_scheme.js
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
		var DynamicScheme = class DynamicScheme {
			static maybeFallbackSpecVersion(specVersion, variant) {
				switch (variant) {
					case Variant.EXPRESSIVE:
					case Variant.VIBRANT:
					case Variant.TONAL_SPOT:
					case Variant.NEUTRAL: return specVersion;
					default: return "2021";
				}
			}
			constructor(args) {
				this.sourceColorArgb = args.sourceColorHct.toInt();
				this.variant = args.variant;
				this.contrastLevel = args.contrastLevel;
				this.isDark = args.isDark;
				this.platform = args.platform ?? "phone";
				this.specVersion = DynamicScheme.maybeFallbackSpecVersion(args.specVersion ?? "2021", this.variant);
				this.sourceColorHct = args.sourceColorHct;
				this.primaryPalette = args.primaryPalette ?? getSpec(this.specVersion).getPrimaryPalette(this.variant, args.sourceColorHct, this.isDark, this.platform, this.contrastLevel);
				this.secondaryPalette = args.secondaryPalette ?? getSpec(this.specVersion).getSecondaryPalette(this.variant, args.sourceColorHct, this.isDark, this.platform, this.contrastLevel);
				this.tertiaryPalette = args.tertiaryPalette ?? getSpec(this.specVersion).getTertiaryPalette(this.variant, args.sourceColorHct, this.isDark, this.platform, this.contrastLevel);
				this.neutralPalette = args.neutralPalette ?? getSpec(this.specVersion).getNeutralPalette(this.variant, args.sourceColorHct, this.isDark, this.platform, this.contrastLevel);
				this.neutralVariantPalette = args.neutralVariantPalette ?? getSpec(this.specVersion).getNeutralVariantPalette(this.variant, args.sourceColorHct, this.isDark, this.platform, this.contrastLevel);
				this.errorPalette = args.errorPalette ?? getSpec(this.specVersion).getErrorPalette(this.variant, args.sourceColorHct, this.isDark, this.platform, this.contrastLevel) ?? TonalPalette.fromHueAndChroma(25, 84);
				this.colors = new MaterialDynamicColors();
			}
			toString() {
				return `Scheme: variant=${Variant[this.variant]}, mode=${this.isDark ? "dark" : "light"}, platform=${this.platform}, contrastLevel=${this.contrastLevel.toFixed(1)}, seed=${this.sourceColorHct.toString()}, specVersion=${this.specVersion}`;
			}
			/**
			* Returns a new hue based on a piecewise function and input color hue.
			*
			* For example, for the following function:
			* result = 26 if 0 <= hue < 101
			* result = 39 if 101 <= hue < 210
			* result = 28 if 210 <= hue < 360
			*
			* call the function as:
			*
			* const hueBreakpoints = [0, 101, 210, 360];
			* const hues = [26, 39, 28];
			* const result = scheme.piecewise(hue, hueBreakpoints, hues);
			*
			* @param sourceColorHct The input value.
			* @param hueBreakpoints The breakpoints, in sorted order. No default lower or
			*     upper bounds are assumed.
			* @param hues The hues that should be applied when source color's hue is >=
			*     the same index in hueBrakpoints array, and < the hue at the next index
			*     in hueBrakpoints array. Otherwise, the source color's hue is returned.
			*/
			static getPiecewiseHue(sourceColorHct, hueBreakpoints, hues) {
				const size = Math.min(hueBreakpoints.length - 1, hues.length);
				const sourceHue = sourceColorHct.hue;
				for (let i = 0; i < size; i++) if (sourceHue >= hueBreakpoints[i] && sourceHue < hueBreakpoints[i + 1]) return sanitizeDegreesDouble(hues[i]);
				return sourceHue;
			}
			/**
			* Returns a shifted hue based on a piecewise function and input color hue.
			*
			* For example, for the following function:
			* result = hue + 26 if 0 <= hue < 101
			* result = hue - 39 if 101 <= hue < 210
			* result = hue + 28 if 210 <= hue < 360
			*
			* call the function as:
			*
			* const hueBreakpoints = [0, 101, 210, 360];
			* const hues = [26, -39, 28];
			* const result = scheme.getRotatedHue(hue, hueBreakpoints, hues);
			*
			* @param sourceColorHct the source color of the theme, in HCT.
			* @param hueBreakpoints The "breakpoints", i.e. the hues at which a rotation
			*     should be apply. No default lower or upper bounds are assumed.
			* @param rotations The rotation that should be applied when source color's
			*     hue is >= the same index in hues array, and < the hue at the next
			*     index in hues array. Otherwise, the source color's hue is returned.
			*/
			static getRotatedHue(sourceColorHct, hueBreakpoints, rotations) {
				let rotation = DynamicScheme.getPiecewiseHue(sourceColorHct, hueBreakpoints, rotations);
				if (Math.min(hueBreakpoints.length - 1, rotations.length) <= 0) rotation = 0;
				return sanitizeDegreesDouble(sourceColorHct.hue + rotation);
			}
			getArgb(dynamicColor) {
				return dynamicColor.getArgb(this);
			}
			getHct(dynamicColor) {
				return dynamicColor.getHct(this);
			}
			get primaryPaletteKeyColor() {
				return this.getArgb(this.colors.primaryPaletteKeyColor());
			}
			get secondaryPaletteKeyColor() {
				return this.getArgb(this.colors.secondaryPaletteKeyColor());
			}
			get tertiaryPaletteKeyColor() {
				return this.getArgb(this.colors.tertiaryPaletteKeyColor());
			}
			get neutralPaletteKeyColor() {
				return this.getArgb(this.colors.neutralPaletteKeyColor());
			}
			get neutralVariantPaletteKeyColor() {
				return this.getArgb(this.colors.neutralVariantPaletteKeyColor());
			}
			get errorPaletteKeyColor() {
				return this.getArgb(this.colors.errorPaletteKeyColor());
			}
			get background() {
				return this.getArgb(this.colors.background());
			}
			get onBackground() {
				return this.getArgb(this.colors.onBackground());
			}
			get surface() {
				return this.getArgb(this.colors.surface());
			}
			get surfaceDim() {
				return this.getArgb(this.colors.surfaceDim());
			}
			get surfaceBright() {
				return this.getArgb(this.colors.surfaceBright());
			}
			get surfaceContainerLowest() {
				return this.getArgb(this.colors.surfaceContainerLowest());
			}
			get surfaceContainerLow() {
				return this.getArgb(this.colors.surfaceContainerLow());
			}
			get surfaceContainer() {
				return this.getArgb(this.colors.surfaceContainer());
			}
			get surfaceContainerHigh() {
				return this.getArgb(this.colors.surfaceContainerHigh());
			}
			get surfaceContainerHighest() {
				return this.getArgb(this.colors.surfaceContainerHighest());
			}
			get onSurface() {
				return this.getArgb(this.colors.onSurface());
			}
			get surfaceVariant() {
				return this.getArgb(this.colors.surfaceVariant());
			}
			get onSurfaceVariant() {
				return this.getArgb(this.colors.onSurfaceVariant());
			}
			get inverseSurface() {
				return this.getArgb(this.colors.inverseSurface());
			}
			get inverseOnSurface() {
				return this.getArgb(this.colors.inverseOnSurface());
			}
			get outline() {
				return this.getArgb(this.colors.outline());
			}
			get outlineVariant() {
				return this.getArgb(this.colors.outlineVariant());
			}
			get shadow() {
				return this.getArgb(this.colors.shadow());
			}
			get scrim() {
				return this.getArgb(this.colors.scrim());
			}
			get surfaceTint() {
				return this.getArgb(this.colors.surfaceTint());
			}
			get primary() {
				return this.getArgb(this.colors.primary());
			}
			get primaryDim() {
				const primaryDim = this.colors.primaryDim();
				if (primaryDim === void 0) throw new Error("`primaryDim` color is undefined prior to 2025 spec.");
				return this.getArgb(primaryDim);
			}
			get onPrimary() {
				return this.getArgb(this.colors.onPrimary());
			}
			get primaryContainer() {
				return this.getArgb(this.colors.primaryContainer());
			}
			get onPrimaryContainer() {
				return this.getArgb(this.colors.onPrimaryContainer());
			}
			get primaryFixed() {
				return this.getArgb(this.colors.primaryFixed());
			}
			get primaryFixedDim() {
				return this.getArgb(this.colors.primaryFixedDim());
			}
			get onPrimaryFixed() {
				return this.getArgb(this.colors.onPrimaryFixed());
			}
			get onPrimaryFixedVariant() {
				return this.getArgb(this.colors.onPrimaryFixedVariant());
			}
			get inversePrimary() {
				return this.getArgb(this.colors.inversePrimary());
			}
			get secondary() {
				return this.getArgb(this.colors.secondary());
			}
			get secondaryDim() {
				const secondaryDim = this.colors.secondaryDim();
				if (secondaryDim === void 0) throw new Error("`secondaryDim` color is undefined prior to 2025 spec.");
				return this.getArgb(secondaryDim);
			}
			get onSecondary() {
				return this.getArgb(this.colors.onSecondary());
			}
			get secondaryContainer() {
				return this.getArgb(this.colors.secondaryContainer());
			}
			get onSecondaryContainer() {
				return this.getArgb(this.colors.onSecondaryContainer());
			}
			get secondaryFixed() {
				return this.getArgb(this.colors.secondaryFixed());
			}
			get secondaryFixedDim() {
				return this.getArgb(this.colors.secondaryFixedDim());
			}
			get onSecondaryFixed() {
				return this.getArgb(this.colors.onSecondaryFixed());
			}
			get onSecondaryFixedVariant() {
				return this.getArgb(this.colors.onSecondaryFixedVariant());
			}
			get tertiary() {
				return this.getArgb(this.colors.tertiary());
			}
			get tertiaryDim() {
				const tertiaryDim = this.colors.tertiaryDim();
				if (tertiaryDim === void 0) throw new Error("`tertiaryDim` color is undefined prior to 2025 spec.");
				return this.getArgb(tertiaryDim);
			}
			get onTertiary() {
				return this.getArgb(this.colors.onTertiary());
			}
			get tertiaryContainer() {
				return this.getArgb(this.colors.tertiaryContainer());
			}
			get onTertiaryContainer() {
				return this.getArgb(this.colors.onTertiaryContainer());
			}
			get tertiaryFixed() {
				return this.getArgb(this.colors.tertiaryFixed());
			}
			get tertiaryFixedDim() {
				return this.getArgb(this.colors.tertiaryFixedDim());
			}
			get onTertiaryFixed() {
				return this.getArgb(this.colors.onTertiaryFixed());
			}
			get onTertiaryFixedVariant() {
				return this.getArgb(this.colors.onTertiaryFixedVariant());
			}
			get error() {
				return this.getArgb(this.colors.error());
			}
			get errorDim() {
				const errorDim = this.colors.errorDim();
				if (errorDim === void 0) throw new Error("`errorDim` color is undefined prior to 2025 spec.");
				return this.getArgb(errorDim);
			}
			get onError() {
				return this.getArgb(this.colors.onError());
			}
			get errorContainer() {
				return this.getArgb(this.colors.errorContainer());
			}
			get onErrorContainer() {
				return this.getArgb(this.colors.onErrorContainer());
			}
		};
		DynamicScheme.DEFAULT_SPEC_VERSION = "2021";
		DynamicScheme.DEFAULT_PLATFORM = "phone";
		/**
		* A delegate for the palettes of a DynamicScheme in the 2021 spec.
		*/
		var DynamicSchemePalettesDelegateImpl2021 = class {
			getPrimaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
				switch (variant) {
					case Variant.CONTENT:
					case Variant.FIDELITY: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma);
					case Variant.FRUIT_SALAD: return TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue - 50), 48);
					case Variant.MONOCHROME: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
					case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12);
					case Variant.RAINBOW: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 48);
					case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 36);
					case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 240), 40);
					case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 200);
					default: throw new Error(`Unsupported variant: ${variant}`);
				}
			}
			getSecondaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
				switch (variant) {
					case Variant.CONTENT:
					case Variant.FIDELITY: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, Math.max(sourceColorHct.chroma - 32, sourceColorHct.chroma * .5));
					case Variant.FRUIT_SALAD: return TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue - 50), 36);
					case Variant.MONOCHROME: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
					case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 8);
					case Variant.RAINBOW: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16);
					case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16);
					case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
						0,
						21,
						51,
						121,
						151,
						191,
						271,
						321,
						360
					], [
						45,
						95,
						45,
						20,
						45,
						90,
						45,
						45,
						45
					]), 24);
					case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
						0,
						41,
						61,
						101,
						131,
						181,
						251,
						301,
						360
					], [
						18,
						15,
						10,
						12,
						15,
						18,
						15,
						12,
						12
					]), 24);
					default: throw new Error(`Unsupported variant: ${variant}`);
				}
			}
			getTertiaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
				switch (variant) {
					case Variant.CONTENT: return TonalPalette.fromHct(DislikeAnalyzer.fixIfDisliked(new TemperatureCache(sourceColorHct).analogous(3, 6)[2]));
					case Variant.FIDELITY: return TonalPalette.fromHct(DislikeAnalyzer.fixIfDisliked(new TemperatureCache(sourceColorHct).complement));
					case Variant.FRUIT_SALAD: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 36);
					case Variant.MONOCHROME: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
					case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16);
					case Variant.RAINBOW:
					case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 60), 24);
					case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
						0,
						21,
						51,
						121,
						151,
						191,
						271,
						321,
						360
					], [
						120,
						120,
						20,
						45,
						20,
						15,
						20,
						120,
						120
					]), 32);
					case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
						0,
						41,
						61,
						101,
						131,
						181,
						251,
						301,
						360
					], [
						35,
						30,
						20,
						25,
						30,
						35,
						30,
						25,
						25
					]), 32);
					default: throw new Error(`Unsupported variant: ${variant}`);
				}
			}
			getNeutralPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
				switch (variant) {
					case Variant.CONTENT:
					case Variant.FIDELITY: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8);
					case Variant.FRUIT_SALAD: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 10);
					case Variant.MONOCHROME: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
					case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 2);
					case Variant.RAINBOW: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
					case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 6);
					case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 15), 8);
					case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 10);
					default: throw new Error(`Unsupported variant: ${variant}`);
				}
			}
			getNeutralVariantPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
				switch (variant) {
					case Variant.CONTENT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8 + 4);
					case Variant.FIDELITY: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, sourceColorHct.chroma / 8 + 4);
					case Variant.FRUIT_SALAD: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16);
					case Variant.MONOCHROME: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
					case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 2);
					case Variant.RAINBOW: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 0);
					case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 8);
					case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(sanitizeDegreesDouble(sourceColorHct.hue + 15), 12);
					case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 12);
					default: throw new Error(`Unsupported variant: ${variant}`);
				}
			}
			getErrorPalette(variant, sourceColorHct, isDark, platform, contrastLevel) { }
		};
		/**
		* A delegate for the palettes of a DynamicScheme in the 2025 spec.
		*/
		var DynamicSchemePalettesDelegateImpl2025 = class DynamicSchemePalettesDelegateImpl2025 extends DynamicSchemePalettesDelegateImpl2021 {
			getPrimaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
				switch (variant) {
					case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" ? Hct.isBlue(sourceColorHct.hue) ? 12 : 8 : Hct.isBlue(sourceColorHct.hue) ? 16 : 12);
					case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" && isDark ? 26 : 32);
					case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" ? isDark ? 36 : 48 : 40);
					case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" ? 74 : 56);
					default: return super.getPrimaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel);
				}
			}
			getSecondaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
				switch (variant) {
					case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" ? Hct.isBlue(sourceColorHct.hue) ? 6 : 4 : Hct.isBlue(sourceColorHct.hue) ? 10 : 6);
					case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, 16);
					case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
						0,
						105,
						140,
						204,
						253,
						278,
						300,
						333,
						360
					], [
						-160,
						155,
						-100,
						96,
						-96,
						-156,
						-165,
						-160
					]), platform === "phone" ? isDark ? 16 : 24 : 24);
					case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
						0,
						38,
						105,
						140,
						333,
						360
					], [
						-14,
						10,
						-14,
						10,
						-14
					]), platform === "phone" ? 56 : 36);
					default: return super.getSecondaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel);
				}
			}
			getTertiaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
				switch (variant) {
					case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
						0,
						38,
						105,
						161,
						204,
						278,
						333,
						360
					], [
						-32,
						26,
						10,
						-39,
						24,
						-15,
						-32
					]), platform === "phone" ? 20 : 36);
					case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
						0,
						20,
						71,
						161,
						333,
						360
					], [
						-40,
						48,
						-32,
						40,
						-32
					]), platform === "phone" ? 28 : 32);
					case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
						0,
						105,
						140,
						204,
						253,
						278,
						300,
						333,
						360
					], [
						-165,
						160,
						-105,
						101,
						-101,
						-160,
						-170,
						-165
					]), 48);
					case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(DynamicScheme.getRotatedHue(sourceColorHct, [
						0,
						38,
						71,
						105,
						140,
						161,
						253,
						333,
						360
					], [
						-72,
						35,
						24,
						-24,
						62,
						50,
						62,
						-72
					]), 56);
					default: return super.getTertiaryPalette(variant, sourceColorHct, isDark, platform, contrastLevel);
				}
			}
			static getExpressiveNeutralHue(sourceColorHct) {
				return DynamicScheme.getRotatedHue(sourceColorHct, [
					0,
					71,
					124,
					253,
					278,
					300,
					360
				], [
					10,
					0,
					10,
					0,
					10,
					0
				]);
			}
			static getExpressiveNeutralChroma(sourceColorHct, isDark, platform) {
				const neutralHue = DynamicSchemePalettesDelegateImpl2025.getExpressiveNeutralHue(sourceColorHct);
				return platform === "phone" ? isDark ? Hct.isYellow(neutralHue) ? 6 : 14 : 18 : 12;
			}
			static getVibrantNeutralHue(sourceColorHct) {
				return DynamicScheme.getRotatedHue(sourceColorHct, [
					0,
					38,
					105,
					140,
					333,
					360
				], [
					-14,
					10,
					-14,
					10,
					-14
				]);
			}
			static getVibrantNeutralChroma(sourceColorHct, platform) {
				const neutralHue = DynamicSchemePalettesDelegateImpl2025.getVibrantNeutralHue(sourceColorHct);
				return platform === "phone" ? 28 : Hct.isBlue(neutralHue) ? 28 : 20;
			}
			getNeutralPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
				switch (variant) {
					case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" ? 1.4 : 6);
					case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, platform === "phone" ? 5 : 10);
					case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(DynamicSchemePalettesDelegateImpl2025.getExpressiveNeutralHue(sourceColorHct), DynamicSchemePalettesDelegateImpl2025.getExpressiveNeutralChroma(sourceColorHct, isDark, platform));
					case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(DynamicSchemePalettesDelegateImpl2025.getVibrantNeutralHue(sourceColorHct), DynamicSchemePalettesDelegateImpl2025.getVibrantNeutralChroma(sourceColorHct, platform));
					default: return super.getNeutralPalette(variant, sourceColorHct, isDark, platform, contrastLevel);
				}
			}
			getNeutralVariantPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
				switch (variant) {
					case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, (platform === "phone" ? 1.4 : 6) * 2.2);
					case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(sourceColorHct.hue, (platform === "phone" ? 5 : 10) * 1.7);
					case Variant.EXPRESSIVE:
						const expressiveNeutralHue = DynamicSchemePalettesDelegateImpl2025.getExpressiveNeutralHue(sourceColorHct);
						const expressiveNeutralChroma = DynamicSchemePalettesDelegateImpl2025.getExpressiveNeutralChroma(sourceColorHct, isDark, platform);
						return TonalPalette.fromHueAndChroma(expressiveNeutralHue, expressiveNeutralChroma * (expressiveNeutralHue >= 105 && expressiveNeutralHue < 125 ? 1.6 : 2.3));
					case Variant.VIBRANT:
						const vibrantNeutralHue = DynamicSchemePalettesDelegateImpl2025.getVibrantNeutralHue(sourceColorHct);
						const vibrantNeutralChroma = DynamicSchemePalettesDelegateImpl2025.getVibrantNeutralChroma(sourceColorHct, platform);
						return TonalPalette.fromHueAndChroma(vibrantNeutralHue, vibrantNeutralChroma * 1.29);
					default: return super.getNeutralVariantPalette(variant, sourceColorHct, isDark, platform, contrastLevel);
				}
			}
			getErrorPalette(variant, sourceColorHct, isDark, platform, contrastLevel) {
				const errorHue = DynamicScheme.getPiecewiseHue(sourceColorHct, [
					0,
					3,
					13,
					23,
					33,
					43,
					153,
					273,
					360
				], [
					12,
					22,
					32,
					12,
					22,
					32,
					22,
					12
				]);
				switch (variant) {
					case Variant.NEUTRAL: return TonalPalette.fromHueAndChroma(errorHue, platform === "phone" ? 50 : 40);
					case Variant.TONAL_SPOT: return TonalPalette.fromHueAndChroma(errorHue, platform === "phone" ? 60 : 48);
					case Variant.EXPRESSIVE: return TonalPalette.fromHueAndChroma(errorHue, platform === "phone" ? 64 : 48);
					case Variant.VIBRANT: return TonalPalette.fromHueAndChroma(errorHue, platform === "phone" ? 80 : 60);
					default: return super.getErrorPalette(variant, sourceColorHct, isDark, platform, contrastLevel);
				}
			}
		};
		const spec2021 = new DynamicSchemePalettesDelegateImpl2021();
		const spec2025 = new DynamicSchemePalettesDelegateImpl2025();
		/**
		* Returns the DynamicSchemePalettesDelegate for the given spec version.
		*/
		function getSpec(specVersion) {
			return specVersion === "2025" ? spec2025 : spec2021;
		}
		//#endregion
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/palettes/core_palette.js
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
		*
		* @deprecated Use {@link DynamicScheme} for color scheme generation.
		* Use {@link CorePalettes} for core palettes container class.
		*/
		var CorePalette = class CorePalette {
			/**
			* @param argb ARGB representation of a color
			*
			* @deprecated Use {@link DynamicScheme} for color scheme generation.
			* Use {@link CorePalettes} for core palettes container class.
			*/
			static of(argb) {
				return new CorePalette(argb, false);
			}
			/**
			* @param argb ARGB representation of a color
			*
			* @deprecated Use {@link DynamicScheme} for color scheme generation.
			* Use {@link CorePalettes} for core palettes container class.
			*/
			static contentOf(argb) {
				return new CorePalette(argb, true);
			}
			/**
			* Create a [CorePalette] from a set of colors
			*
			* @deprecated Use {@link DynamicScheme} for color scheme generation.
			* Use {@link CorePalettes} for core palettes container class.
			*/
			static fromColors(colors) {
				return CorePalette.createPaletteFromColors(false, colors);
			}
			/**
			* Create a content [CorePalette] from a set of colors
			*
			* @deprecated Use {@link DynamicScheme} for color scheme generation.
			* Use {@link CorePalettes} for core palettes container class.
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/quantize/lab_point_provider.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/quantize/quantizer_wsmeans.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/quantize/quantizer_map.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/quantize/quantizer_wu.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/quantize/quantizer_celebi.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/scheme/scheme.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/scheme/scheme_android.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/scheme/scheme_content.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/scheme/scheme_expressive.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/scheme/scheme_fidelity.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/scheme/scheme_fruit_salad.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/scheme/scheme_monochrome.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/scheme/scheme_neutral.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/scheme/scheme_rainbow.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/scheme/scheme_tonal_spot.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/scheme/scheme_vibrant.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/score/score.js
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
			constructor() { }
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/utils/string_utils.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/utils/image_utils.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/utils/theme_utils.js
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
		//#region node_modules/.pnpm/@material+material-color-utilities@0.4.0/node_modules/@material/material-color-utilities/index.js
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
		* per the M3 spec tonal tables, plus the equally missing surface-dim /
		* surface-bright / surface-tint roles (the npm Scheme predates all of them).
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
		* @module @anningui/dsh-client-ui-skin-md3-wallpaper/palette
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
			tokens["--md-sys-color-surface-dim"] = hexFromArgb(neutral.tone(isDark ? 6 : 87));
			tokens["--md-sys-color-surface-bright"] = hexFromArgb(neutral.tone(isDark ? 24 : 98));
			tokens["--md-sys-color-surface-tint"] = hexFromArgb(scheme.primary);
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
		* @module @anningui/dsh-client-ui-skin-md3-wallpaper/wallpaper
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
				if (state.recoloredBlobId !== void 0 && typeof state.recoloredBlobId !== "string") return null;
				if (typeof state.preset !== "string" && state.wallpaper === null) state.preset = DEFAULT_PRESET;
				if (typeof state.preset !== "string") state.preset = null;
				if (typeof state.recoloredBlobId !== "string") state.recoloredBlobId = null;
				return state;
			} catch {
				return null;
			}
		}
		/** Persist the state (best-effort; quota failures are swallowed). */
		function saveState(state) {
			try {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
			} catch { }
		}
		/** Drop the persisted state (restore the default preset look). */
		function clearState() {
			try {
				localStorage.removeItem(STORAGE_KEY);
			} catch { }
		}
		/** Default state: default preset backdrop, baseline M3 purple seed. */
		function defaultState() {
			const tokens = buildThemeTokens(DEFAULT_SOURCE_TOKEN);
			const mdSys = buildMdSysTheme(DEFAULT_SOURCE_TOKEN);
			return {
				wallpaper: null,
				recoloredBlobId: null,
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
					recoloredBlobId: null,
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
		/**
		* Derive the Monet recolor target from a source color (argb integer). The
		* hue comes from the source's own CAM16 hue so the unified-tone wallpaper
		* always leans toward its own primary; the chroma ceiling and neutral
		* threshold keep grays gray.
		*
		* The MD3 light palette blend is filled from the mdSys role tokens when
		* provided: filterLow = surface-container-lowest, filterMid = primary,
		* filterHigh = surface-container-high, blended at `blend` strength (0.35 for
		* the light wallpaper tint; pass 0 to disable the filter).
		*/
		function monetTargetFromSource(source, mdSys, dark = false, blend = .35, mode = 0) {
			const { c, h } = rgbToJch((source >> 16 & 255) / 255, (source >> 8 & 255) / 255, (source & 255) / 255);
			const target = targetFromArgs(h, c);
			target.mode = mode;
			if (mdSys) {
				target.filterLow = hexToRgb01(mdSys["--md-sys-color-surface-container-lowest"] ?? (dark ? "#141218" : "#f7f2fa"));
				target.filterMid = hexToRgb01(mdSys["--md-sys-color-primary"] ?? "#6750a4");
				target.filterHigh = hexToRgb01(mdSys["--md-sys-color-surface-container-high"] ?? (dark ? "#1d3668" : "#ece6f0"));
				target.blend = blend;
			}
			return target;
		}
		//#endregion
		//#region src/client/index.ts
		/** The product title the skin pins (captured by the shell's DocumentTitle). */
		const SKIN_TITLE = "Material You · DeepSeek";
		/** Shape preference key (M3 shape system on/off). */
		const SHAPE_KEY = "dsh.md3Wallpaper.shape";
		/** Background-visible preference key (frosted panes vs opaque surfaces). */
		const SHOW_BG_KEY = "dsh.md3Wallpaper.showBg";
		/** Import-effect preference key (how uploaded wallpapers are processed). */
		const EFFECT_KEY = "dsh.md3Wallpaper.importEffect";
		const EFFECTS = [
			"original",
			"md3filter",
			"monet"
		];
		const DEFAULT_EFFECT = "md3filter";
		/** Current import-effect preference. */
		function effectPref() {
			try {
				const v = localStorage.getItem(EFFECT_KEY);
				return v !== null && EFFECTS.includes(v) ? v : DEFAULT_EFFECT;
			} catch {
				return DEFAULT_EFFECT;
			}
		}
		/** Persist the import-effect preference. */
		function setEffectPref(value) {
			try {
				localStorage.setItem(EFFECT_KEY, value);
			} catch { }
		}
		/** Locale-aware chrome copy (the skin registers no locale namespace; the
		*  chrome follows the html lang attribute like the sibling skins' chrome). */
		function copy() {
			return document.documentElement.lang?.toLowerCase().startsWith("zh") ?? false ? {
				upload: "上传壁纸",
				reset: "恢复默认",
				shape: "M3 圆角形状",
				shapeHint: "Material 3 形状系统：按钮胶囊圆角、输入框小圆角、对话框大圆角",
				showBg: "显示壁纸背景",
				showBgHint: "开启后主面板变为半透明毛玻璃，壁纸透过面板显示",
				title: "壁纸取色",
				presets: "预设背景",
				presetNames: {
					"monet-mesh": "莫奈网格",
					"monet-sunset": "落日余晖",
					"monet-ocean": "深海",
					"monet-mono": "素色"
				},
				effectLabel: "导入效果",
				effects: {
					original: "原图导入",
					md3filter: "MD3 色彩滤镜",
					monet: "Monet 统一色调"
				}
			} : {
				upload: "Upload wallpaper",
				reset: "Restore default",
				shape: "M3 shape system",
				shapeHint: "Material 3 corners: pill buttons, small inputs, large dialogs",
				showBg: "Show wallpaper",
				showBgHint: "Frost the main panes so the wallpaper glows through",
				title: "Wallpaper theme",
				presets: "Preset backdrops",
				presetNames: {
					"monet-mesh": "Monet mesh",
					"monet-sunset": "Sunset",
					"monet-ocean": "Deep ocean",
					"monet-mono": "Monochrome"
				},
				effectLabel: "Import effect",
				effects: {
					original: "Original",
					md3filter: "MD3 color filter",
					monet: "Monet unified tone"
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
			} catch { }
		}
		/** Current background-visibility preference (default off = MD3 opaque). */
		function showBgPref() {
			try {
				return localStorage.getItem(SHOW_BG_KEY) === "on" ? "on" : "off";
			} catch {
				return "off";
			}
		}
		/** Persist the background-visibility preference. */
		function setShowBgPref(value) {
			try {
				localStorage.setItem(SHOW_BG_KEY, value);
			} catch { }
		}
		/** localStorage key controlling the dev auto-reload watcher: absent or '1' =
		*  on (the default), '0' = off. */
		const DEV_RELOAD_KEY = "dsh.md3Wallpaper.devReload";
		/** Poll interval (ms) for the dev bundle watcher. */
		const DEV_RELOAD_INTERVAL_MS = 2e3;
		/** The skin's own bundle path (same origin; the live URL adds its rev). */
		const BUNDLE_PATH = "/plugins/@anningui/dsh-client-ui-skin-md3-wallpaper/client.js";
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
				}).catch(() => { });
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
			body.setAttribute("data-md3-show-bg", showBgPref());
			const stopDevReload = startDevReload();
			let state = loadState() ?? defaultState();
			/** GPU backend this environment offers (spec: none hides the wallpaper). */
			const gpuKind = detectGpu();
			/** Active object URL of the recolored (Monet-unified) full-res wallpaper. */
			let recoloredUrl = null;
			/** Object URLs this apply() created; revoked on dispose. */
			const ownedUrls = /* @__PURE__ */ new Set();
			/** Adopt a fresh object URL and retire any predecessor. Empty clears. */
			const takeUrl = (url) => {
				if (recoloredUrl) {
					URL.revokeObjectURL(recoloredUrl);
					ownedUrls.delete(recoloredUrl);
				}
				recoloredUrl = url || null;
				if (url) ownedUrls.add(url);
			};
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
				const scrim = `linear-gradient(color-mix(in srgb, ${dark ? "#0a0a0e" : "#ffffff"} ${(dark ? .78 : .78) * 100}%, transparent))`;
				if (recoloredUrl || state.wallpaper !== null && canRecolor(gpuKind)) return `${scrim}, var(--md3-image-bg)`;
				if (state.preset !== null && WALLPAPER_PRESETS.some((p) => p.id === state.preset)) return presetBackdrop(state.preset, sys, dark);
				const from = sys["--md-sys-color-surface-container-lowest"] ?? "#ffffff";
				return `linear-gradient(160deg, ${from} 0%, ${sys["--md-sys-color-surface-container"] ?? from} 55%, ${sys["--md-sys-color-primary-container"] ?? "#6750a4"} 130%)`;
			};
			/** The current wallpaper image URL (`url(...)`) or `none` when hidden. */
			const imageFor = () => {
				if (recoloredUrl) return `url(${recoloredUrl})`;
				if (state.wallpaper !== null && canRecolor(gpuKind)) return `url(${state.wallpaper})`;
				return "none";
			};
			/** (Re)apply the current theme's token set + backdrop onto body. */
			const applyTheme = () => {
				const dark = body.dataset.dsDarkTheme !== void 0;
				const tokens = dark ? state.tokens.dark : state.tokens.light;
				const sys = dark ? state.mdSys.dark : state.mdSys.light;
				for (const [key, value] of Object.entries(tokens)) setVar(key, value);
				for (const [key, value] of Object.entries(sys)) setVar(key, value);
				setVar("--md3-image-bg", imageFor());
				setVar("--md3-backdrop", backdropFor(dark));
				setVar("background-image", "var(--md3-backdrop)");
				setVar("backdrop-filter", "blur(calc(var(--dsw-skin-scrim, 0) * 100px))");
				setVar("-webkit-backdrop-filter", "blur(calc(var(--dsw-skin-scrim, 0) * 100px))");
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
				preview.style.backgroundImage = "var(--md3-image-bg)";
				preview.style.backgroundSize = "cover";
				preview.style.backgroundPosition = "center";
			};
			/**
			* Recolor a full-resolution source into a Monet-unified blob and adopt it as
			* the live backdrop. Stores the blob in IndexedDB, records the key on the
			* persisted state, and re-renders. On failure (decoding / no GPU output)
			* it falls back to the compact 512px wallpaper rather than losing the theme.
			*/
			const runRecolor = async (source) => {
				if (!canRecolor(gpuKind)) return;
				try {
					const dark = body.dataset.dsDarkTheme !== void 0;
					const mdSys = dark ? state.mdSys.dark : state.mdSys.light;
					const effect = effectPref();
					const result = await recolorBitmap(source, monetTargetFromSource(state.source, mdSys, dark, effect === "md3filter" ? .35 : 0, effect === "monet" ? 1 : 0));
					if (result === null) {
						applyTheme();
						refreshPreview();
						return;
					}
					if (!await putBlob("recolored", result.blob)) {
						applyTheme();
						refreshPreview();
						return;
					}
					state = {
						...state,
						recoloredBlobId: KEY_RECOLORED
					};
					saveState(state);
					takeUrl(objectUrlFor(result.blob));
					applyTheme();
					refreshPreview();
				} catch { }
			};
			/**
			* Restore a previously persisted recolored blob from IndexedDB on mount.
			* Without a GPU backend the spec hides the wallpaper, so we never attempt
			* a render path there.
			*/
			const restoreRecolored = async () => {
				if (!canRecolor(gpuKind)) return;
				if (!state.recoloredBlobId) return;
				const blob = await getBlob(state.recoloredBlobId);
				if (!blob) return;
				takeUrl(objectUrlFor(blob));
				applyTheme();
				refreshPreview();
			};
			const fileInput = document.createElement("input");
			fileInput.type = "file";
			fileInput.accept = "image/*";
			fileInput.className = cls("md3FileInput");
			fileInput.tabIndex = -1;
			fileInput.setAttribute("aria-hidden", "true");
			const split = document.createElement("div");
			split.className = cls("md3Split");
			const uploadRow = document.createElement("button");
			uploadRow.type = "button";
			uploadRow.className = cls("md3SplitMain");
			uploadRow.innerHTML = `${menuIcon(ICON_UPLOAD)}<span>${text.upload}</span>`;
			uploadRow.addEventListener("click", () => fileInput.click());
			const splitDivider = document.createElement("span");
			splitDivider.className = cls("md3SplitDivider");
			const splitTrail = document.createElement("button");
			splitTrail.type = "button";
			splitTrail.className = cls("md3SplitTrail");
			splitTrail.setAttribute("aria-haspopup", "menu");
			splitTrail.setAttribute("aria-expanded", "false");
			splitTrail.setAttribute("aria-label", text.effectLabel);
			splitTrail.innerHTML = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z\" fill=\"currentColor\"/></svg>";
			split.append(uploadRow, splitDivider, splitTrail);
			const splitMenu = document.createElement("div");
			splitMenu.className = cls("md3SplitMenu");
			splitMenu.setAttribute("role", "menu");
			splitMenu.setAttribute("aria-label", text.effectLabel);
			const renderEffectMenu = () => {
				splitMenu.textContent = "";
				const current = effectPref();
				for (const id of EFFECTS) {
					const option = document.createElement("button");
					option.type = "button";
					option.className = cls("md3SplitOption");
					option.setAttribute("role", "menuitemradio");
					option.setAttribute("aria-checked", String(id === current));
					const check = document.createElement("span");
					check.className = cls("md3SplitOptionCheck");
					check.textContent = "✓";
					const label = document.createElement("span");
					label.className = cls("md3SplitOptionText");
					label.textContent = text.effects[id];
					option.append(check, label);
					option.addEventListener("click", () => {
						setEffectPref(id);
						renderEffectMenu();
						splitTrail.setAttribute("aria-expanded", "false");
						splitMenu.classList.remove(cls("md3SplitMenuOpen"));
					});
					splitMenu.append(option);
				}
			};
			renderEffectMenu();
			const toggleSplitMenu = () => {
				const open = splitMenu.classList.toggle(cls("md3SplitMenuOpen"));
				splitTrail.setAttribute("aria-expanded", String(open));
			};
			splitTrail.addEventListener("click", (event) => {
				event.stopPropagation();
				toggleSplitMenu();
			});
			splitMenu.addEventListener("click", (event) => event.stopPropagation());
			document.addEventListener("click", () => {
				splitMenu.classList.remove(cls("md3SplitMenuOpen"));
				splitTrail.setAttribute("aria-expanded", "false");
			});
			const resetRow = document.createElement("button");
			resetRow.type = "button";
			resetRow.className = cls("md3MenuRow");
			resetRow.innerHTML = `${menuIcon(ICON_RESET)}<span>${text.reset}</span>`;
			resetRow.addEventListener("click", () => {
				clearState();
				state = defaultState();
				takeUrl("");
				deleteBlob("raw");
				deleteBlob(KEY_RECOLORED);
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
			const bgRow = document.createElement("label");
			bgRow.className = cls("md3MenuRow");
			bgRow.title = text.showBgHint;
			const bgSwitch = document.createElement("input");
			bgSwitch.type = "checkbox";
			bgSwitch.checked = body.getAttribute("data-md3-show-bg") === "on";
			const bgIcon = document.createElement("span");
			bgIcon.className = cls("md3MenuRowIcon");
			bgIcon.innerHTML = menuIcon(ICON_PALETTE);
			const bgText = document.createElement("span");
			bgText.className = cls("md3MenuRowText");
			bgText.textContent = text.showBg;
			bgRow.append(bgIcon, bgText, bgSwitch);
			bgSwitch.addEventListener("change", () => {
				const next = bgSwitch.checked ? "on" : "off";
				body.setAttribute("data-md3-show-bg", next);
				setShowBgPref(next);
			});
			menu.append(preview, split, splitMenu, resetRow, shapeRow, bgRow, fileInput);
			const fabPetal = fab.querySelector(".bgLightTint");
			const MORPH_MS = 520;
			let shapeRaf = 0;
			let shapeWeight = 1;
			/**
			* Animate the petal `d` toward `toWeight` (0 = ornament, 1 = capsule).
			* rAF steps morphPath() from the current weight.
			*/
			function runShapeMorph(toWeight) {
				if (fabPetal === null) return;
				cancelAnimationFrame(shapeRaf);
				const from = shapeWeight, start = performance.now();
				const step = (now) => {
					const k = Math.min(1, (now - start) / MORPH_MS);
					const eased = easeEmphasized(k);
					const w = from + (toWeight - from) * eased;
					shapeWeight = w;
					fabPetal.setAttribute("d", morphPath(FAB_MORPH_CAPSULE, FAB_MORPH_FLOWER, 1 - w));
					if (k < 1) shapeRaf = requestAnimationFrame(step);
				};
				shapeRaf = requestAnimationFrame(step);
			}
			function toggleMenu() {
				const open = menu.classList.toggle(cls("md3MenuOpen"));
				fab.classList.toggle("md3FabOpen", open);
				runShapeMorph(open ? 0 : 1);
			}
			function closeMenu() {
				menu.classList.remove(cls("md3MenuOpen"));
				fab.classList.remove("md3FabOpen");
				runShapeMorph(1);
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
				processWallpaper(file).then(async (next) => {
					state = next;
					await putBlob("raw", file);
					saveState(state);
					applyTheme();
					refreshPreview();
					setFavicon();
					runRecolor(file);
				}).catch(() => { });
			});
			body.append(fab, menu);
			document.title = SKIN_TITLE;
			applyTheme();
			refreshPreview();
			restoreRecolored();
			ctx.effect(() => () => {
				delete body.dataset.dshMd3Wallpaper;
				body.removeAttribute("data-md3-shape");
				body.removeAttribute("data-md3-show-bg");
				themeObserver.disconnect();
				html.style.overflow = prevHtmlOverflow;
				body.style.overflow = prevBodyOverflow;
				document.removeEventListener("click", onDocClick);
				document.removeEventListener("keydown", onDocKeydown);
				cancelAnimationFrame(shapeRaf);
				body.removeAttribute("data-md3-fab-open");
				fab.remove();
				menu.remove();
				favicon.remove();
				stopDevReload?.();
				terminateWorker();
				for (const key of writtenKeys) body.style.removeProperty(key);
				for (const url of ownedUrls) URL.revokeObjectURL(url);
				ownedUrls.clear();
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
/*__MD3_RECOLOR_WORKER_SRC_INLINED__*/
globalThis.__MD3_RECOLOR_WORKER_SRC__ = "({ exports: {} }).exports;\n//#region \\0rolldown/runtime.js\nvar __defProp = Object.defineProperty;\nvar __exportAll = (all, no_symbols) => {\n\tlet target = {};\n\tfor (var name in all) __defProp(target, name, {\n\t\tget: all[name],\n\t\tenumerable: true\n\t});\n\tif (!no_symbols) __defProp(target, Symbol.toStringTag, { value: \"Module\" });\n\treturn target;\n};\n//#endregion\n//#region src/client/cam16-gpu.ts\n/**\n* Self-consistent CAM16 (HCT) color math for the md3-wallpaper recolor.\n*\n* This module ports the authoritative @material/material-color-utilities CAM16\n* forward + inverse transforms (and the D65 sRGB gamma) into plain JS. It is\n* the SINGLE source of truth for the numbers that the WebGPU (WGSL) and\n* WebGL2 (GLSL) shaders embed, so the CPU reference and both GPU paths map a\n* pixel identically:\n*\n*   sRGB -> linear -> XYZ -> CAT02 cone -> CAM16 (hue, chroma, J)\n*   remap (pull hue toward target, clamp chroma, keep J)\n*   CAM16 -> XYZ -> sRGB\n*\n* `remapPixel` is the Monet-unified tone operator used by the CPU fallback.\n* Tests exercise it; the shaders mirror the same equations.\n*/\n/** sRGB linearization (RGB component 0..255 -> linear 0..100), matches material. */\nfunction srgbComponentToLinear(rgb) {\n\tconst normalized = rgb / 255;\n\tif (normalized <= .040449936) return normalized / 12.92 * 100;\n\treturn Math.pow((normalized + .055) / 1.055, 2.4) * 100;\n}\n/** sRGB delinearization (linear 0..100 -> RGB component 0..255), matches material. */\nfunction linearToSrgbComponent(rgb) {\n\tconst normalized = rgb / 100;\n\tlet value = 0;\n\tif (normalized <= .0031308) value = normalized * 12.92;\n\telse value = 1.055 * Math.pow(normalized, 1 / 2.4) - .055;\n\treturn Math.max(0, Math.min(255, Math.round(value * 255)));\n}\n/** Normalize a hue into [0, 360). */\nfunction normalizeHue(h) {\n\th = h % 360;\n\tif (h < 0) h += 360;\n\treturn h;\n}\n/** The shortest signed angle between two hues (degrees). */\nfunction shortestAngle(from, to) {\n\tlet d = (to - from) % 360;\n\tif (d > 180) d -= 360;\n\tif (d < -180) d += 360;\n\treturn d;\n}\n/** ARGB integer from R/G/B 0..255 (alpha forced opaque). */\nfunction argbFromRgb(r, g, b) {\n\treturn (255 << 24 | (r & 255) << 16 | (g & 255) << 8 | b & 255) >>> 0;\n}\n/**\n* Default CAM16 viewing conditions (ViewingConditions.DEFAULT), precomputed\n* as literals so the shader strings can interpolate the exact same numbers.\n*/\nconst CAM16_VC = {\n\tn: .0018418651851244416,\n\taw: 38.79918481018423,\n\tnbb: 2.5543854913038375,\n\tncb: 2.5543854913038375,\n\tc: .69,\n\tnc: 1,\n\trgbD: [\n\t\t1.02065563,\n\t\t.98664527,\n\t\t.93558851\n\t],\n\tfl: .0778653,\n\tfLRoot: .52824572,\n\tz: 1.52291696\n};\nconst XYZ_TO_SRGB = [\n\t[\n\t\t3.2413774792388685,\n\t\t-1.5376652402851851,\n\t\t-.49885366846268053\n\t],\n\t[\n\t\t-.9691452513005321,\n\t\t1.8758853451067872,\n\t\t.04156585616912061\n\t],\n\t[\n\t\t.05562093689691305,\n\t\t-.20395524564742123,\n\t\t1.0571799111220335\n\t]\n];\nfunction signum(v) {\n\treturn v < 0 ? -1 : v > 0 ? 1 : 0;\n}\n/** CAM16 forward: ARGB integer -> {hue, chroma, j}. */\nfunction cam16FromArgb(argb) {\n\tconst red = argb >> 16 & 255;\n\tconst green = argb >> 8 & 255;\n\tconst blue = argb & 255;\n\tconst redL = srgbComponentToLinear(red);\n\tconst greenL = srgbComponentToLinear(green);\n\tconst blueL = srgbComponentToLinear(blue);\n\tconst x = .41233895 * redL + .35762064 * greenL + .18051042 * blueL;\n\tconst y = .2126 * redL + .7152 * greenL + .0722 * blueL;\n\tconst z = .01932141 * redL + .11916382 * greenL + .95034478 * blueL;\n\tconst rC = .401288 * x + .650173 * y - .051461 * z;\n\tconst gC = -.250268 * x + 1.204414 * y + .045854 * z;\n\tconst bC = -.002079 * x + .048952 * y + .953127 * z;\n\tconst rgbD = CAM16_VC.rgbD;\n\tconst rD = rgbD[0] * rC;\n\tconst gD = rgbD[1] * gC;\n\tconst bD = rgbD[2] * bC;\n\tconst rAF = Math.pow(CAM16_VC.fl * Math.abs(rD) / 100, .42);\n\tconst gAF = Math.pow(CAM16_VC.fl * Math.abs(gD) / 100, .42);\n\tconst bAF = Math.pow(CAM16_VC.fl * Math.abs(bD) / 100, .42);\n\tconst rA = signum(rD) * 400 * rAF / (rAF + 27.13);\n\tconst gA = signum(gD) * 400 * gAF / (gAF + 27.13);\n\tconst bA = signum(bD) * 400 * bAF / (bAF + 27.13);\n\tconst a = (11 * rA + -12 * gA + bA) / 11;\n\tconst b = (rA + gA - 2 * bA) / 9;\n\tconst u = (20 * rA + 20 * gA + 21 * bA) / 20;\n\tconst p2 = (40 * rA + 20 * gA + bA) / 20;\n\tlet hue = Math.atan2(b, a) * 180 / Math.PI;\n\thue = normalizeHue(hue);\n\tconst ac = p2 * CAM16_VC.nbb;\n\tconst j = 100 * Math.pow(ac / CAM16_VC.aw, CAM16_VC.c * CAM16_VC.z);\n\thue * Math.PI / 180;\n\tconst huePrime = hue < 20.14 ? hue + 360 : hue;\n\tconst t = 5e4 / 13 * (.25 * (Math.cos(huePrime * Math.PI / 180 + 2) + 3.8)) * CAM16_VC.nc * CAM16_VC.ncb * Math.sqrt(a * a + b * b) / (u + .305);\n\tconst chroma = Math.pow(t, .9) * Math.pow(1.64 - Math.pow(.29, CAM16_VC.n), .73) * Math.sqrt(j / 100);\n\treturn {\n\t\thue,\n\t\tchroma,\n\t\tj\n\t};\n}\n/** CAM16 inverse: {hue, chroma, j} -> ARGB integer. */\nfunction cam16ViewedToArgb(hue, chroma, j) {\n\tconst alpha = chroma === 0 || j === 0 ? 0 : chroma / Math.sqrt(j / 100);\n\tconst t = Math.pow(alpha / Math.pow(1.64 - Math.pow(.29, CAM16_VC.n), .73), 1 / .9);\n\tconst hRad = hue * Math.PI / 180;\n\tconst eHue = .25 * (Math.cos(hRad + 2) + 3.8);\n\tconst ac = CAM16_VC.aw * Math.pow(j / 100, 1 / CAM16_VC.c / CAM16_VC.z);\n\tconst p1 = eHue * (5e4 / 13) * CAM16_VC.nc * CAM16_VC.ncb;\n\tconst p2 = ac / CAM16_VC.nbb;\n\tconst hSin = Math.sin(hRad);\n\tconst hCos = Math.cos(hRad);\n\tconst gamma = 23 * (p2 + .305) * t / (23 * p1 + 11 * t * hCos + 108 * t * hSin);\n\tconst a = gamma * hCos;\n\tconst b = gamma * hSin;\n\tconst rA = (460 * p2 + 451 * a + 288 * b) / 1403;\n\tconst gA = (460 * p2 - 891 * a - 261 * b) / 1403;\n\tconst bA = (460 * p2 - 220 * a - 6300 * b) / 1403;\n\tconst rCBase = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));\n\tconst rC = signum(rA) * (100 / CAM16_VC.fl) * Math.pow(rCBase, 1 / .42);\n\tconst gCBase = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));\n\tconst gC = signum(gA) * (100 / CAM16_VC.fl) * Math.pow(gCBase, 1 / .42);\n\tconst bCBase = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));\n\tconst bC = signum(bA) * (100 / CAM16_VC.fl) * Math.pow(bCBase, 1 / .42);\n\tconst rF = rC / CAM16_VC.rgbD[0];\n\tconst gF = gC / CAM16_VC.rgbD[1];\n\tconst bF = bC / CAM16_VC.rgbD[2];\n\tconst x = 1.86206786 * rF - 1.01125463 * gF + .14918677 * bF;\n\tconst y = .38752654 * rF + .62144744 * gF - .00897398 * bF;\n\tconst z = -.0158415 * rF - .03412294 * gF + 1.04996444 * bF;\n\tconst linearR = XYZ_TO_SRGB[0][0] * x + XYZ_TO_SRGB[0][1] * y + XYZ_TO_SRGB[0][2] * z;\n\tconst linearG = XYZ_TO_SRGB[1][0] * x + XYZ_TO_SRGB[1][1] * y + XYZ_TO_SRGB[1][2] * z;\n\tconst linearB = XYZ_TO_SRGB[2][0] * x + XYZ_TO_SRGB[2][1] * y + XYZ_TO_SRGB[2][2] * z;\n\treturn argbFromRgb(linearToSrgbComponent(linearR), linearToSrgbComponent(linearG), linearToSrgbComponent(linearB));\n}\n/**\n* Monet-unified tone remap. Convert to CAM16, clamp chroma toward `targetC`,\n* pull the hue toward `targetH` weighted by the pixel's own chroma (grays stay\n* gray below `neutralThreshold`), preserve tone J, and convert back.\n*/\nfunction remapPixel(r, g, b, targetH, targetC, neutralThreshold) {\n\tconst { hue, chroma, j } = cam16FromArgb(argbFromRgb(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)));\n\tconst newC = Math.min(chroma, targetC);\n\tconst t = chroma >= neutralThreshold ? 1 : chroma / Math.max(neutralThreshold, 1e-5);\n\tconst out = cam16ViewedToArgb(normalizeHue(hue + shortestAngle(hue, targetH) * t), newC, j);\n\treturn {\n\t\tr: (out >> 16 & 255) / 255,\n\t\tg: (out >> 8 & 255) / 255,\n\t\tb: (out & 255) / 255\n\t};\n}\n//#endregion\n//#region src/client/cam16.ts\n/**\n* HCT color math facade for the md3-wallpaper recolor pipeline.\n*\n* Re-exports the self-consistent CAM16 model from `cam16-gpu.ts` under the\n* names the skin and tests consume, plus a `rgbToJch` convenience and the\n* conventional 0..1 sRGB gamma helpers. Keeping this as a thin facade means\n* `cam16-gpu.ts` stays the single source of truth that the WGSL/GLSL shaders\n* also embed.\n*/\n/** sRGB (0..1) -> CAM16/HCT J, C, h. */\nfunction rgbToJch(r, g, b) {\n\tconst { hue, chroma, j } = cam16FromArgb((255 << 24 | (Math.round(r * 255) & 255) << 16 | (Math.round(g * 255) & 255) << 8 | Math.round(b * 255) & 255) >>> 0);\n\treturn {\n\t\tj,\n\t\tc: chroma,\n\t\th: hue\n\t};\n}\n//#endregion\n//#region src/client/gpu.ts\n/** Whether the recolor stage may run its GPU path at all. */\nfunction hasGpu(kind) {\n\treturn kind === \"webgpu\" || kind === \"webgl2\";\n}\n/**\n* Detect which GPU compute backend exists. WebGPU wins; otherwise we test for\n* a WebGL2 context. jsdom's canvas answers null getContext, so it returns\n* 'none' there.\n* @param win - window; default globalThis.\n*/\nfunction detectGpu(win = globalThis) {\n\tconst gpu = win.navigator.gpu;\n\tif (typeof gpu === \"object\" && gpu !== null && typeof gpu.requestAdapter === \"function\") return \"webgpu\";\n\ttry {\n\t\tconst ctx = (win.document?.createElement(\"canvas\"))?.getContext(\"webgl2\");\n\t\treturn ctx !== null && ctx !== void 0 ? \"webgl2\" : \"none\";\n\t} catch {\n\t\treturn \"none\";\n\t}\n}\n/**\n* Resolve which image format the current browser can actually encode. WebP is\n* preferred (better quality-to-size for a wallpaper). We probe synchronously\n* with `toDataURL('image/webp')` on a 1x1 canvas: jsdom reports a PNG data URL\n* for the webp type, which fails the prefix check and forces jpeg.\n* @param win - window; default globalThis.\n*/\nfunction canEncode(win = globalThis) {\n\ttry {\n\t\tconst canvas = win.document?.createElement(\"canvas\");\n\t\tif (!canvas || typeof canvas.toDataURL !== \"function\") return \"jpeg\";\n\t\treturn canvas.toDataURL(\"image/webp\").startsWith(\"data:image/webp\") ? \"webp\" : \"jpeg\";\n\t} catch {\n\t\treturn \"jpeg\";\n\t}\n}\n/** The mime type + container mapping for a resolved format. */\nfunction mimeFor(format) {\n\treturn format === \"webp\" ? \"image/webp\" : \"image/jpeg\";\n}\n//#endregion\n//#region src/client/shader.wgsl.ts\n/**\n* WGSL compute shader for the md3-wallpaper HCT tone re-map.\n*\n* Embeds the SAME faithful CAM16 forward + inverse math as `cam16-gpu.ts` so\n* GPU output matches the CPU reference. Constants (viewing conditions + sRGB\n* matrices) are interpolated from `CAM16_VC` at module load, so they can\n* never drift from the JS path.\n*\n* Buffers (layout):\n*   @group(0) @binding(0) pixels : array<u32>      // RGBA8 packed, in+out\n*   @group(0) @binding(1) params : uniform          // (targetH, targetC, neutral)\n*   @group(0) @binding(2) dims   : uniform vec2u   // (width, height)\n*\n* strided: each invocation handles one RGBA8 pixel packed into a u32\n* (R low byte .. A high byte).\n*/\nvar shader_wgsl_exports = /* @__PURE__ */ __exportAll({ SHIFT_WGSL: () => SHIFT_WGSL });\nconst VC$1 = CAM16_VC;\n/**\n* The full WGSL source. Dispatched by `recolor.ts`'s WebGPU path.\n* @internal\n*/\nconst SHIFT_WGSL = `\nstruct Params {\n  targetH : f32,\n  targetC : f32,\n  neutral : f32,\n  pad     : f32,\n};\n\n@group(0) @binding(0) var<storage, read_write> pixels : array<u32>;\n@group(0) @binding(1) var<uniform> params : Params;\n@group(0) @binding(2) var<uniform> dims : vec2u;\n// Light MD3 palette blend: [0]=filterLow, [1]=filterMid, [2]=filterHigh\n// (vec4 -> rgb normalized 0..1, a unused), [3] = (blend, 0, 0, 0).\n@group(0) @binding(3) var<uniform> filterBUF : array<vec4f, 4>;\n\nconst SRGB_TO_XYZ = mat3x3f(0.41233895, 0.35762064, 0.18051042, 0.2126, 0.7152, 0.0722, 0.01932141, 0.11916382, 0.95034478);\nconst XYZ_TO_SRGB = mat3x3f(3.2413774792388685, -1.5376652402851851, -0.49885366846268053, -0.9691452513005321, 1.8758853451067872, 0.04156585616912061, 0.05562093689691305, -0.20395524564742123, 1.0571799111220335);\nconst RGBD0 : f32 = ${VC$1.rgbD[0]};\nconst RGBD1 : f32 = ${VC$1.rgbD[1]};\nconst RGBD2 : f32 = ${VC$1.rgbD[2]};\nconst FL : f32 = ${VC$1.fl};\nconst N : f32 = ${VC$1.n};\nconst AW : f32 = ${VC$1.aw};\nconst NBB : f32 = ${VC$1.nbb};\nconst NCB : f32 = ${VC$1.ncb};\nconst CC : f32 = ${VC$1.c};\nconst NC : f32 = ${VC$1.nc};\nconst Z : f32 = ${VC$1.z};\n\nfn signum(v : f32) -> f32 {\n  if (v < 0.0) { return -1.0; }\n  if (v > 0.0) { return 1.0; }\n  return 0.0;\n}\n\nfn normalizeHue(h : f32) -> f32 {\n  var v = h % 360.0;\n  if (v < 0.0) { v = v + 360.0; }\n  return v;\n}\n\nfn shortestAngle(from : f32, to : f32) -> f32 {\n  var d = (to - from) % 360.0;\n  if (d > 180.0) { d = d - 360.0; }\n  if (d < -180.0) { d = d + 360.0; }\n  return d;\n}\n\nfn srgbComponentToLinear(v : f32) -> f32 {\n  let n = v / 255.0;\n  if (n <= 0.040449936) { return n / 12.92 * 100.0; }\n  return pow((n + 0.055) / 1.055, 2.4) * 100.0;\n}\n\nfn linearToSrgbComponent(v : f32) -> f32 {\n  let n = v / 100.0;\n  var val : f32;\n  if (n <= 0.0031308) { val = n * 12.92; } else { val = 1.055 * pow(n, 1.0 / 2.4) - 0.055; }\n  return clamp(val * 255.0, 0.0, 255.0);\n}\n\n// CAM16 forward: (rL,gL,bL linear 0..100) -> (hue, chroma, j).\nfn cam16FromLin(rL : f32, gL : f32, bL : f32) -> vec3f {\n  let x = 0.41233895 * rL + 0.35762064 * gL + 0.18051042 * bL;\n  let y = 0.2126 * rL + 0.7152 * gL + 0.0722 * bL;\n  let z = 0.01932141 * rL + 0.11916382 * gL + 0.95034478 * bL;\n  let rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;\n  let gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;\n  let bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;\n  let rD = RGBD0 * rC;\n  let gD = RGBD1 * gC;\n  let bD = RGBD2 * bC;\n  let rAF = pow(FL * abs(rD) / 100.0, 0.42);\n  let gAF = pow(FL * abs(gD) / 100.0, 0.42);\n  let bAF = pow(FL * abs(bD) / 100.0, 0.42);\n  let rA = signum(rD) * 400.0 * rAF / (rAF + 27.13);\n  let gA = signum(gD) * 400.0 * gAF / (gAF + 27.13);\n  let bA = signum(bD) * 400.0 * bAF / (bAF + 27.13);\n  let aAxis = (11.0 * rA + -12.0 * gA + bA) / 11.0;\n  let bAxis = (rA + gA - 2.0 * bA) / 9.0;\n  let u = (20.0 * rA + 20.0 * gA + 21.0 * bA) / 20.0;\n  let p2 = (40.0 * rA + 20.0 * gA + bA) / 20.0;\n  var hue = atan2(bAxis, aAxis) * 57.2957795;\n  hue = normalizeHue(hue);\n  let ac = p2 * NBB;\n  let j = 100.0 * pow(ac / AW, CC * Z);\n  var huePrime = hue;\n  if (hue < 20.14) { huePrime = hue + 360.0; }\n  let eHue = 0.25 * (cos(huePrime * 0.0174532925 + 2.0) + 3.8);\n  let p1 = (50000.0 / 13.0) * eHue * NC * NCB;\n  let t = (p1 * sqrt(aAxis * aAxis + bAxis * bAxis)) / (u + 0.305);\n  let alpha = pow(t, 0.9) * pow(1.64 - pow(0.29, N), 0.73);\n  let c = alpha * sqrt(j / 100.0);\n  return vec3f(hue, c, j);\n}\n\n// CAM16 inverse: (hue, chroma, j) -> linear RGB 0..100.\nfn cam16ToLin(hue : f32, c : f32, j : f32) -> vec3f {\n  var alpha : f32;\n  if (c == 0.0 || j == 0.0) { alpha = 0.0; } else { alpha = c / sqrt(j / 100.0); }\n  let t = pow(alpha / pow(1.64 - pow(0.29, N), 0.73), 1.0 / 0.9);\n  let hRad = hue * 0.0174532925;\n  let eHue = 0.25 * (cos(hRad + 2.0) + 3.8);\n  let ac = AW * pow(j / 100.0, 1.0 / CC / Z);\n  let p1 = eHue * (50000.0 / 13.0) * NC * NCB;\n  let p2 = ac / NBB;\n  let hSin = sin(hRad);\n  let hCos = cos(hRad);\n  let gamma = 23.0 * (p2 + 0.305) * t / (23.0 * p1 + 11.0 * t * hCos + 108.0 * t * hSin);\n  let aA = gamma * hCos;\n  let bA = gamma * hSin;\n  let rA = (460.0 * p2 + 451.0 * aA + 288.0 * bA) / 1403.0;\n  let gA = (460.0 * p2 - 891.0 * aA - 261.0 * bA) / 1403.0;\n  let bA2 = (460.0 * p2 - 220.0 * aA - 6300.0 * bA) / 1403.0;\n  let rCBase = max(0.0, 27.13 * abs(rA) / (400.0 - abs(rA)));\n  let gCBase = max(0.0, 27.13 * abs(gA) / (400.0 - abs(gA)));\n  let bCBase = max(0.0, 27.13 * abs(bA2) / (400.0 - abs(bA2)));\n  let rC = signum(rA) * (100.0 / FL) * pow(rCBase, 1.0 / 0.42);\n  let gC = signum(gA) * (100.0 / FL) * pow(gCBase, 1.0 / 0.42);\n  let bC = signum(bA2) * (100.0 / FL) * pow(bCBase, 1.0 / 0.42);\n  let rF = rC / RGBD0;\n  let gF = gC / RGBD1;\n  let bF = bC / RGBD2;\n  let x = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;\n  let y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;\n  let z = -0.0158415 * rF - 0.03412294 * gF + 1.04996444 * bF;\n  let m = mat3x3f(XYZ_TO_SRGB);\n  let lin = m * vec3f(x, y, z);\n  return lin;\n}\n\n@compute @workgroup_size(16, 16)\nfn cs_main(@builtin(global_invocation_id) gid : vec3u) {\n  if (gid.x >= dims.x || gid.y >= dims.y) { return; }\n  let idx = gid.y * dims.x + gid.x;\n  let packed = pixels[idx];\n  let r8 = packed & 255u;\n  let g8 = (packed >> 8u) & 255u;\n  let b8 = (packed >> 16u) & 255u;\n\n  let rL = srgbComponentToLinear(f32(r8));\n  let gL = srgbComponentToLinear(f32(g8));\n  let bL = srgbComponentToLinear(f32(b8));\n\n  // mode (params.pad): 0 = MD3 light blend, 1 = Monet hue-pull remap.\n  var out : vec3f;\n  if (params.pad >= 1.0) {\n    // Monet unified tone: pull hue toward target, clamp chroma, keep tone.\n    let jch = cam16FromLin(rL, gL, bL);\n    var t = 1.0;\n    if (jch.y < params.neutral) { t = jch.y / max(params.neutral, 1e-5); }\n    let delta = shortestAngle(jch.x, params.targetH) * t;\n    let newH = normalizeHue(jch.x + delta);\n    let newC = min(jch.y, params.targetC);\n    let lin = cam16ToLin(newH, newC, jch.z);\n    out = vec3f(linearToSrgbComponent(lin.x), linearToSrgbComponent(lin.y), linearToSrgbComponent(lin.z)) / 255.0;\n  } else {\n    // MD3 light palette blend by tone (default).\n    let blend = filterBUF[3].x;\n    let orig = vec3f(f32(r8) / 255.0, f32(g8) / 255.0, f32(b8) / 255.0);\n    if (blend <= 0.0) {\n      out = orig;\n    } else {\n      let jch = cam16FromLin(rL, gL, bL);\n      let t = clamp(jch.z / 100.0, 0.0, 1.0);\n      var tint : vec3f;\n      if (t < 0.5) {\n        tint = mix(filterBUF[0].xyz, filterBUF[1].xyz, t * 2.0);\n      } else {\n        tint = mix(filterBUF[1].xyz, filterBUF[2].xyz, (t - 0.5) * 2.0);\n      }\n      out = mix(orig, tint, clamp(blend, 0.0, 1.0));\n    }\n  }\n\n  let outR = u32(clamp(out.r, 0.0, 1.0) * 255.0 + 0.5);\n  let outG = u32(clamp(out.g, 0.0, 1.0) * 255.0 + 0.5);\n  let outB = u32(clamp(out.b, 0.0, 1.0) * 255.0 + 0.5);\n  pixels[idx] = (packed & 0xFF000000u) | (outB << 16u) | (outG << 8u) | outR;\n}\n`.trim();\n//#endregion\n//#region src/client/shader.frag.ts\n/**\n* WebGL2 fragment shader for the md3-wallpaper HCT tone re-map.\n*\n* Mirrors `cam16-gpu.ts` and `shader.wgsl.ts` exactly (same constants, same\n* CAM16 forward/inverse) so the WebGL2 fallback produces identical output to\n* the WebGPU path and the CPU reference. It renders each texel of the source\n* texture through a fullscreen pass; the host reads the remapped pixels back\n* with gl.readPixels.\n*\n* Input:  u_tex (source RGBA8, sRGB, linear-off)\n* Uniform: u_target (vec3: targetH, targetC, neutral)\n*/\nconst VC = CAM16_VC;\n`${VC.fl}${VC.n}${VC.aw}${VC.nbb}${VC.ncb}${VC.c}${VC.nc}${VC.z}${VC.rgbD[0]}${VC.rgbD[1]}${VC.rgbD[2]}`;\ntypeof globalThis !== \"undefined\" && globalThis.__MD3_RECOLOR_WORKER_SRC__;\n//#endregion\n//#region src/client/recolor.ts\n/**\n* Recolor orchestration for the md3-wallpaper skin.\n*\n* Given a source image and a Monet-derived primary hue/chroma target, produce\n* a full-resolution wallpaper tone-mapped into a single unified hue (the\n* \"Monet unified tone\" look): WebGPU compute when available, WebGL2 fragment\n* pass as fallback, and — per the spec — NO wallpaper at all when no GPU\n* backend is present (the caller hides it).\n*\n* The color science lives in `cam16-gpu.ts` (JS reference) and is embedded\n* verbatim in `shader.wgsl.ts` / `shader.frag.ts`, so any GPU path and the CPU\n* fallback map a pixel identically. The pipeline draws the source onto a\n* canvas, hands the RGBA8 buffer to the selected GPU backend, reads the\n* remapped pixels back, and encodes to webp/jpeg.\n*/\n/**\n* Re-map a Uint8ClampedArray RGBA8 buffer in place. Mode 0 = MD3 light\n* palette blend (tone interpolates across filterLow/Mid/High, mixed with the\n* original at `blend`); mode 1 = Monet hue-pull remap (legacy). Pure and\n* deterministic — the CPU reference mirrors the WGSL/GLSL shaders.\n*/\nfunction remapInPlace(data, target) {\n\tconst n = data.length / 4;\n\tif (target.mode === 1) {\n\t\tconst { targetH, targetC, neutral } = target;\n\t\tfor (let i = 0; i < n; i++) {\n\t\t\tconst o = i * 4;\n\t\t\tconst { r: nr, g: ng, b: nb } = remapPixel(data[o] / 255, data[o + 1] / 255, data[o + 2] / 255, targetH, targetC, neutral);\n\t\t\tdata[o] = Math.round(clamp01(nr) * 255);\n\t\t\tdata[o + 1] = Math.round(clamp01(ng) * 255);\n\t\t\tdata[o + 2] = Math.round(clamp01(nb) * 255);\n\t\t}\n\t\treturn;\n\t}\n\tconst blend = clamp01(target.blend);\n\tif (blend <= 0) return;\n\tconst [loR, loG, loB] = target.filterLow;\n\tconst [miR, miG, miB] = target.filterMid;\n\tconst [hiR, hiG, hiB] = target.filterHigh;\n\tfor (let i = 0; i < n; i++) {\n\t\tconst o = i * 4;\n\t\tconst origR = data[o] / 255;\n\t\tconst origG = data[o + 1] / 255;\n\t\tconst origB = data[o + 2] / 255;\n\t\tconst { j: tone } = rgbToJch(origR, origG, origB);\n\t\tconst t = clamp01(tone / 100);\n\t\tlet tR, tG, tB;\n\t\tif (t < .5) {\n\t\t\tconst k = t * 2;\n\t\t\ttR = loR + (miR - loR) * k;\n\t\t\ttG = loG + (miG - loG) * k;\n\t\t\ttB = loB + (miB - loB) * k;\n\t\t} else {\n\t\t\tconst k = (t - .5) * 2;\n\t\t\ttR = miR + (hiR - miR) * k;\n\t\t\ttG = miG + (hiG - miG) * k;\n\t\t\ttB = miB + (hiB - miB) * k;\n\t\t}\n\t\tdata[o] = Math.round(clamp01(origR + (tR - origR) * blend) * 255);\n\t\tdata[o + 1] = Math.round(clamp01(origG + (tG - origG) * blend) * 255);\n\t\tdata[o + 2] = Math.round(clamp01(origB + (tB - origB) * blend) * 255);\n\t}\n}\nfunction clamp01(v) {\n\treturn v < 0 ? 0 : v > 1 ? 1 : v;\n}\n//#endregion\n//#region src/client/recolor.worker.ts\n/**\n* Standalone recolor worker (classic worker).\n*\n* Receives `{ blob, target, token }`, decodes the image in this worker,\n* performs the Monet-unified tone re-map (WebGPU compute when available in the\n* worker, else the CPU CAM16 reference), encodes to webp/jpeg, and posts the\n* resulting Blob back as `{ token, blob }`.\n*\n* The main thread stays fully responsive: all pixel work — decode, canvas\n* raster, getImageData, re-map, encode — happens here, never on the UI thread.\n* No downscaling is applied: an 8K upload keeps full precision; the cost is\n* paid off-thread instead.\n*/\nself.onmessage = (event) => {\n\tconst { token, blob, target } = event.data;\n\trun(token, blob, target);\n};\nasync function run(token, blob, target) {\n\ttry {\n\t\tconst bitmap = await createImageBitmap(blob);\n\t\ttry {\n\t\t\tconst width = bitmap.width;\n\t\t\tconst height = bitmap.height;\n\t\t\tif (!width || !height) throw new Error(\"empty image\");\n\t\t\tconst canvas = new OffscreenCanvas(width, height);\n\t\t\tconst ctx = canvas.getContext(\"2d\");\n\t\t\tif (!ctx) throw new Error(\"worker 2d context unavailable\");\n\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\tconst imageData = ctx.getImageData(0, 0, width, height);\n\t\t\tlet kind = \"cpu\";\n\t\t\tif (hasGpu(detectGpu())) {\n\t\t\t\tif (await runWebGPUInWorker(imageData.data, width, height, target)) kind = \"webgpu\";\n\t\t\t}\n\t\t\tif (kind === \"cpu\") remapInPlace(imageData.data, target);\n\t\t\tctx.putImageData(imageData, 0, 0);\n\t\t\tconst mime = mimeFor(canEncode());\n\t\t\tconst reply = {\n\t\t\t\ttoken,\n\t\t\t\tblob: await canvas.convertToBlob({\n\t\t\t\t\ttype: mime,\n\t\t\t\t\tquality: .85\n\t\t\t\t}),\n\t\t\t\tkind\n\t\t\t};\n\t\t\tself.postMessage(reply);\n\t\t} finally {\n\t\t\tbitmap.close();\n\t\t}\n\t} catch (error) {\n\t\tconst reply = {\n\t\t\ttoken,\n\t\t\terror: error instanceof Error ? error.message : String(error)\n\t\t};\n\t\tself.postMessage(reply);\n\t}\n}\n/**\n* Best-effort WebGPU compute inside the worker: reuses the same WGSL shader\n* and dispatch shape as the main thread. Returns true when the dispatch +\n* readback succeeded, false to fall back to the CPU remap.\n*/\nasync function runWebGPUInWorker(data, width, height, target) {\n\tconst nav = navigator;\n\tif (typeof nav.gpu?.requestAdapter !== \"function\") return false;\n\ttry {\n\t\tconst adapter = await nav.gpu.requestAdapter();\n\t\tif (!adapter) return false;\n\t\tconst device = await adapter.requestDevice();\n\t\tconst { SHIFT_WGSL } = await Promise.resolve().then(() => shader_wgsl_exports);\n\t\tconst module = device.createShaderModule({ code: SHIFT_WGSL });\n\t\tconst pixelCount = width * height;\n\t\tconst packed = new Uint32Array(pixelCount);\n\t\tfor (let i = 0; i < pixelCount; i++) {\n\t\t\tconst o = i * 4;\n\t\t\tpacked[i] = data[o] | data[o + 1] << 8 | data[o + 2] << 16 | data[o + 3] << 24;\n\t\t}\n\t\tconst MAP_READ = 1;\n\t\tconst storage = device.createBuffer({\n\t\t\tsize: packed.byteLength,\n\t\t\tusage: 137\n\t\t});\n\t\tstorage.writeBuffer(packed);\n\t\tconst params = new Float32Array([\n\t\t\ttarget.targetH,\n\t\t\ttarget.targetC,\n\t\t\ttarget.neutral,\n\t\t\ttarget.mode\n\t\t]);\n\t\tconst paramsBuf = device.createBuffer({\n\t\t\tsize: params.byteLength,\n\t\t\tusage: 72\n\t\t});\n\t\tparamsBuf.writeBuffer(params);\n\t\tconst dims = new Uint32Array([\n\t\t\twidth,\n\t\t\theight,\n\t\t\t0,\n\t\t\t0\n\t\t]);\n\t\tconst dimsBuf = device.createBuffer({\n\t\t\tsize: dims.byteLength,\n\t\t\tusage: 72\n\t\t});\n\t\tdimsBuf.writeBuffer(dims);\n\t\tconst filterArr = /* @__PURE__ */ new Float32Array(16);\n\t\tfilterArr[0] = target.filterLow[0];\n\t\tfilterArr[1] = target.filterLow[1];\n\t\tfilterArr[2] = target.filterLow[2];\n\t\tfilterArr[4] = target.filterMid[0];\n\t\tfilterArr[5] = target.filterMid[1];\n\t\tfilterArr[6] = target.filterMid[2];\n\t\tfilterArr[8] = target.filterHigh[0];\n\t\tfilterArr[9] = target.filterHigh[1];\n\t\tfilterArr[10] = target.filterHigh[2];\n\t\tfilterArr[12] = target.blend;\n\t\tconst filterBuf = device.createBuffer({\n\t\t\tsize: filterArr.byteLength,\n\t\t\tusage: 72\n\t\t});\n\t\tfilterBuf.writeBuffer(filterArr);\n\t\tconst pipeline = device.createComputePipeline({\n\t\t\tlayout: \"auto\",\n\t\t\tcompute: {\n\t\t\t\tmodule,\n\t\t\t\tentryPoint: \"cs_main\"\n\t\t\t}\n\t\t});\n\t\tconst group = device.createBindGroup(pipeline.getBindGroupLayout(0), { entries: [\n\t\t\t{\n\t\t\t\tbinding: 0,\n\t\t\t\tresource: { buffer: storage }\n\t\t\t},\n\t\t\t{\n\t\t\t\tbinding: 1,\n\t\t\t\tresource: { buffer: paramsBuf }\n\t\t\t},\n\t\t\t{\n\t\t\t\tbinding: 2,\n\t\t\t\tresource: { buffer: dimsBuf }\n\t\t\t},\n\t\t\t{\n\t\t\t\tbinding: 3,\n\t\t\t\tresource: { buffer: filterBuf }\n\t\t\t}\n\t\t] });\n\t\tconst encoder = device.createCommandEncoder();\n\t\tconst pass = encoder.beginComputePass();\n\t\tpass.setPipeline(pipeline);\n\t\tpass.setBindGroup(0, group);\n\t\tpass.dispatchWorkgroups(Math.ceil(width / 16), Math.ceil(height / 16));\n\t\tpass.end();\n\t\tdevice.queue.submit([encoder.finish()]);\n\t\tawait storage.mapAsync(MAP_READ);\n\t\tconst mapped = new Uint32Array(storage.getMappedRange());\n\t\tfor (let i = 0; i < pixelCount; i++) {\n\t\t\tconst v = mapped[i];\n\t\t\tconst o = i * 4;\n\t\t\tdata[o] = v & 255;\n\t\t\tdata[o + 1] = v >> 8 & 255;\n\t\t\tdata[o + 2] = v >> 16 & 255;\n\t\t\tdata[o + 3] = v >> 24 & 255;\n\t\t}\n\t\tstorage.unmap();\n\t\treturn true;\n\t} catch {\n\t\treturn false;\n\t}\n}\n//#endregion\n\n//# sourceMappingURL=recolor.worker.js.map";
