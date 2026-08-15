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
export const FAB_PETAL_PATH =
  "M28 2.5 C30.6 17.2 38.8 25.4 53.5 28 C38.8 30.6 30.6 38.8 28 53.5 C25.4 38.8 17.2 30.6 2.5 28 C17.2 25.4 25.4 17.2 28 2.5 Z";

/** Temperature glyph — the MaterialYouNewTab feels-like (thermostat) icon,
 *  verbatim. */
export const FAB_THERMO_PATH =
  "M8 10.255V5a4 4 0 0 1 8 0v5.255a7 7 0 1 1-8 0ZM8 16a4 4 0 1 0 8 0H8Z";

/** Clock glyph — the MaterialYouNewTab default-weather (dial + ticks + hand)
 *  icon, verbatim. */
export const FAB_CLOCK_PATH =
  "M11.997 17.887a.903.903 0 0 1 .896.796l.006.105v1.313a.9.9 0 0 1-.85.898.903.903 0 0 1-.948-.794l-.006-.104v-1.313a.9.9 0 0 1 .902-.9Zm5.446-1.74.929.927a.9.9 0 0 1-1.277 1.274l-.928-.928a.9.9 0 0 1 1.276-1.274Zm-9.618 0a.9.9 0 0 1 0 1.273l-.928.929a.903.903 0 0 1-1.276-1.276l.93-.928a.903.903 0 0 1 1.275 0l-.001.001Zm4.184-9.128c1.322 0 2.59.524 3.524 1.458a4.976 4.976 0 0 1 0 7.042 4.987 4.987 0 0 1-8.51-3.521c0-1.32.526-2.587 1.46-3.521a4.988 4.988 0 0 1 3.526-1.458Zm-.686 2.278a.677.677 0 0 0-.67.584l-.007.092v2.707l.006.092a.676.676 0 0 0 .58.578l.09.006h1.805l.092-.006a.676.676 0 0 0 .579-.578l.006-.092-.006-.092a.676.676 0 0 0-.579-.578l-.092-.006H12V9.973l-.006-.092a.675.675 0 0 0-.671-.584Zm8.776 1.819a.902.902 0 0 1 .105 1.796l-.105.006h-1.313a.902.902 0 0 1-.106-1.796l.106-.006h1.313ZM5.215 11.09a.902.902 0 0 1 .69 1.48.902.902 0 0 1-.585.316l-.105.007H3.9a.903.903 0 0 1-.69-1.48.902.902 0 0 1 .586-.316l.104-.007h1.315Zm1.597-5.512.085.075.929.928a.9.9 0 0 1-1.191 1.35l-.085-.076-.93-.927a.9.9 0 0 1 1.192-1.35Zm11.56.075a.9.9 0 0 1 .075 1.19l-.075.085-.93.928a.903.903 0 0 1-1.35-1.19l.075-.085.93-.929a.903.903 0 0 1 1.275.001ZM12 3a.903.903 0 0 1 .896.796l.006.105v1.312a.9.9 0 0 1-1.485.695.901.901 0 0 1-.314-.59l-.006-.105V3.9A.9.9 0 0 1 12 3Z";

/**
 * Full FAB markup: petal (primary container) + two stacked glyphs — the
 * temperature icon (idle state) and the clock icon (menu-open state). The
 * glyph switch rides M3 motion: the CSS toggles the `md3-fab-open` class on
 * the FAB element; both glyphs are absolutely stacked and cross-fade/rotate.
 */
export function fabMarkup(): string {
  return [
    `<svg class="md3-fab-petal" viewBox="0 0 56 56" width="56" height="56" aria-hidden="true">`,
    `<path d="${FAB_PETAL_PATH}" fill="var(--md-sys-color-primary-container)"/>`,
    `</svg>`,
    `<svg class="md3-fab-glyph md3-fab-thermo" viewBox="0 0 24 24" aria-hidden="true">`,
    `<path d="${FAB_THERMO_PATH}" fill="var(--md-sys-color-on-primary-container)"/>`,
    `</svg>`,
    `<svg class="md3-fab-glyph md3-fab-clock" viewBox="0 0 24 24" aria-hidden="true">`,
    `<path d="${FAB_CLOCK_PATH}" fill="var(--md-sys-color-on-primary-container)"/>`,
    `</svg>`,
  ].join("");
}

/** A 24px inline icon (generic shape used inside the menu rows). */
export function menuIcon(path: string): string {
  return [
    `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">`,
    `<path d="${path}" fill="currentColor"/>`,
    `</svg>`,
  ].join("");
}

/** Upload glyph. */
export const ICON_UPLOAD = "M12 16l4-4h-3V4h-2v8H8l4 4zm-8 4h16v-2H4v2z";

/** Reset glyph. */
export const ICON_RESET =
  "M12 6V2L7 7l5 5V8c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z";

/** Shape-system glyph (rounded square). */
export const ICON_SHAPE =
  "M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5z";

/** Palette glyph (M3 dynamic color). */
export const ICON_PALETTE =
  "M12 3a9 9 0 0 0 0 18h.5a1.5 1.5 0 0 0 1.1-2.5 1.5 1.5 0 0 1 1.1-2.5H16a5 5 0 0 0 5-5c0-4.4-4-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z";

/** Dynamic favicon: a dot in the Monet source hue (M3 style). */
export function faviconSvg(sourceHex: string): string {
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">',
    `<circle cx="24" cy="24" r="22" fill="${sourceHex}"/>`,
    '<circle cx="24" cy="24" r="9" fill="rgba(255,255,255,0.92)"/>',
    "</svg>",
  ].join("");
}
