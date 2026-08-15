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

import {
  argbFromRgb,
  CorePalette,
  hexFromArgb,
  QuantizerCelebi,
  Scheme,
  Score,
  type TonalPalette,
} from "@material/material-color-utilities";

/** The default M3 baseline seed (Material 3's canonical purple) used when no
 *  wallpaper has been uploaded yet. */
export const DEFAULT_SOURCE_TOKEN = 0xff6750a4;

/** One complete token set for a theme: every dsw static token + dynamic aliases. */
export type DsTokens = Record<string, string>;

/** Light and dark token sets ready to write onto document.body. */
export interface ThemeTokens {
  light: DsTokens;
  dark: DsTokens;
}

/** An (lightTonal, darkTonal) pair for one shell token suffix. */
type TonalPair = readonly [light: number, dark: number];

/** Blue (secondary) family — the shell's auxiliary blue scale. */
const BLUE_TONALS: Record<string, TonalPair> = {
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
  "950": [12, 96],
};

/** DeepSeek (primary) family — the shell's brand blue scale. */
const DEEPSEEK_TONALS: Record<string, TonalPair> = {
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
  "900": [20, 93],
};

/** Green (tertiary) family — the shell's success scale. */
const GREEN_TONALS: Record<string, TonalPair> = {
  "100": [90, 26],
  "400": [65, 50],
  "500": [50, 62],
  "900": [20, 93],
};

/** Amber family — warnings ride the brand (primary) hue at offset tonals
 *  (MD3 has no amber role; Material Theme Builder conventions reuse the
 *  brand family for warning accents). */
const AMBER_TONALS: Record<string, TonalPair> = {
  "100": [84, 34],
  "400": [58, 56],
  "500": [42, 68],
  "600": [32, 78],
  "900": [14, 97],
};

/** Red (error) family — the shell's danger scale. */
const RED_TONALS: Record<string, TonalPair> = {
  "50": [95, 18],
  "100": [90, 26],
  "400": [65, 55],
  "500": [50, 65],
  "600": [40, 74],
  "900": [20, 94],
};

/** Neutral family — surfaces, text, borders (lightness-inverted per theme). */
const NEUTRAL_TONALS: Record<string, TonalPair> = {
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
  "1000": [6, 99],
};

/** Neutral-bluish family — the shell's background/surface scale, carried by
 *  MD3's neutralVariant (neutral with a chroma offset — exactly the bluish
 *  tint the shell's name promises). */
const BLUISH_TONALS: Record<string, TonalPair> = {
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
  "1000": [6, 99],
};

/** Family -> tonal table, suffix -> (light, dark) M3 tonal. */
const FAMILY_TONALS: Record<string, Record<string, TonalPair>> = {
  blue: BLUE_TONALS,
  deepseek: DEEPSEEK_TONALS,
  green: GREEN_TONALS,
  amber: AMBER_TONALS,
  red: RED_TONALS,
  neutral: NEUTRAL_TONALS,
  "neutral-bluish": BLUISH_TONALS,
};

/** Family -> MD3 tonal palette from the core palette (theme-neutral). */
function palettesOf(core: CorePalette): Record<string, TonalPalette> {
  return {
    blue: core.a2,
    deepseek: core.a1,
    green: core.a3,
    amber: core.a1,
    red: core.error,
    neutral: core.n1,
    "neutral-bluish": core.n2,
  };
}

/** rgba() string from an argb integer and an alpha (0..1). */
function rgbaFromArgb(argb: number, alpha: number): string {
  const r = (argb >> 16) & 0xff;
  const g = (argb >> 8) & 0xff;
  const b = argb & 0xff;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** One scheme's full dsw token map: 73 static tokens + interaction/scrollbar aliases. */
function tokensForScheme(palettes: Record<string, TonalPalette>, isDark: boolean): DsTokens {
  const tokens: DsTokens = {};
  // Every static family/suffix pair from the shell's :root surface.
  for (const [family, tonals] of Object.entries(FAMILY_TONALS)) {
    const palette = palettes[family];
    for (const [suffix, pair] of Object.entries(tonals)) {
      tokens[`--dsw-static-${family}-${suffix}`] = hexFromArgb(palette.tone(pair[isDark ? 1 : 0]));
    }
  }
  // The interaction aliases the shell hard-codes as dark rgba values: carry
  // them onto MD3 neutral/brand hues so hover/active states follow the theme.
  const onSurface = isDark ? 90 : 10;
  tokens["--dsw-alias-interactive-bg-hover"] = rgbaFromArgb(palettes.neutral.tone(onSurface), 0.06);
  tokens["--dsw-alias-interactive-bg-active"] = rgbaFromArgb(palettes.neutral.tone(onSurface), 0.1);
  tokens["--dsw-alias-interactive-bg-hover-accent"] = rgbaFromArgb(
    palettes.deepseek.tone(isDark ? 80 : 40),
    0.14,
  );
  // Scrollbar thumb aliases: restate them on the neutral ramp so the thumb
  // matches the surface depth.
  tokens["--dsw-alias-scrollbar-bg-l1"] = hexFromArgb(palettes.neutral.tone(isDark ? 26 : 90));
  tokens["--dsw-alias-scrollbar-bg-l2"] = hexFromArgb(palettes.neutral.tone(isDark ? 32 : 84));
  tokens["--dsw-alias-scrollbar-hover-l1"] = hexFromArgb(palettes.neutral.tone(isDark ? 40 : 74));
  tokens["--dsw-alias-scrollbar-hover-l2"] = hexFromArgb(palettes.neutral.tone(isDark ? 45 : 68));
  tokens["--dsw-alias-label-primary-inverted"] = hexFromArgb(
    palettes.neutral.tone(isDark ? 100 : 0),
  );
  return tokens;
}

/** The standard M3 role tokens (`--md-sys-color-*`) for the skin's own chrome. */
export function buildMdSysTokens(
  scheme: Scheme,
  neutral: TonalPalette,
  isDark: boolean,
): Record<string, string> {
  const roles: ReadonlyArray<keyof Scheme> = [
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
    "shadow",
  ];
  const tokens: Record<string, string> = {};
  for (const role of roles) {
    // M3 token spelling is kebab-case (onSurface -> on-surface).
    const kebab = role.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    tokens[`--md-sys-color-${kebab}`] = hexFromArgb(scheme[role] as number);
  }
  // M3 surface-container roles (the npm 0.3.0 Scheme predates them; the spec
  // tonal tables are fixed): lowest/low/container/high/highest.
  tokens["--md-sys-color-surface-container-lowest"] = hexFromArgb(neutral.tone(isDark ? 4 : 100));
  tokens["--md-sys-color-surface-container-low"] = hexFromArgb(neutral.tone(isDark ? 10 : 96));
  tokens["--md-sys-color-surface-container"] = hexFromArgb(neutral.tone(isDark ? 12 : 94));
  tokens["--md-sys-color-surface-container-high"] = hexFromArgb(neutral.tone(isDark ? 17 : 92));
  tokens["--md-sys-color-surface-container-highest"] = hexFromArgb(neutral.tone(isDark ? 22 : 90));
  return tokens;
}

/** Monet source color from a wallpaper's pixel buffer. */
export function extractSourceFromImage(imageData: ImageData): number {
  const { data, width, height } = imageData;
  const pixels: number[] = [];
  for (let i = 0; i < width * height; i++) {
    const offset = i * 4;
    const alpha = data[offset + 3];
    if (alpha < 255) continue;
    pixels.push(argbFromRgb(data[offset], data[offset + 1], data[offset + 2]));
  }
  const quantized = QuantizerCelebi.quantize(pixels, 128);
  const ranked = Score.score(quantized);
  return ranked[0];
}

/** The M3 light/dark schemes + shared core palette from a source argb color. */
export function buildTheme(sourceArgb: number): {
  light: Scheme;
  dark: Scheme;
  core: CorePalette;
} {
  const core = CorePalette.of(sourceArgb);
  return {
    light: Scheme.lightFromCorePalette(core),
    dark: Scheme.darkFromCorePalette(core),
    core,
  };
}

/** Full dsw token set for both themes (light values + dark values). */
export function buildThemeTokens(sourceArgb: number): ThemeTokens {
  const { light, dark, core } = buildTheme(sourceArgb);
  const palettes = palettesOf(core);
  return {
    light: tokensForScheme(palettes, false),
    dark: tokensForScheme(palettes, true),
  };
}

/** M3 role tokens for both themes (the skin chrome's own palette). */
export function buildMdSysTheme(sourceArgb: number): ThemeTokens {
  const { light, dark, core } = buildTheme(sourceArgb);
  return {
    light: buildMdSysTokens(light, core.n1, false),
    dark: buildMdSysTokens(dark, core.n1, true),
  };
}

/** The source-color hex used as the skin's accent + favicon hue. */
export function hexFromSource(argb: number): string {
  return hexFromArgb(argb);
}
