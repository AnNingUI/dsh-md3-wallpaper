/**
 * Palette-engine tests: the Monet pipeline must cover the shell's ENTIRE
 * static token surface (all 73 tokens, light + dark, hex values), invert
 * lightness between themes, and emit the M3 role tokens the chrome uses.
 * The token list is the authoritative one extracted from the official shell
 * stylesheet — any future shell token added here must extend the mapping,
 * and this list is the guard that none is forgotten.
 */
import { describe, expect, it } from "vitest";
import {
  buildMdSysTheme,
  buildThemeTokens,
  DEFAULT_SOURCE_TOKEN,
  extractSourceFromImage,
} from "../src/client/palette.ts";

/** The shell's full --dsw-static-* surface, family -> suffixes (official CSS). */
const SHELL_STATIC_TOKENS: Record<string, readonly string[]> = {
  amber: ["100", "400", "500", "600", "900"],
  blue: ["100", "300", "400", "450", "50", "500", "50p", "600", "75", "800", "900", "950"],
  deepseek: ["100", "200", "300", "400", "450", "50", "500", "600", "700-delete", "800", "900"],
  green: ["100", "400", "500", "900"],
  neutral: [
    "00",
    "100",
    "1000",
    "150",
    "200",
    "250",
    "300",
    "400",
    "50",
    "500",
    "550",
    "600",
    "700",
    "800",
    "850",
    "900",
  ],
  "neutral-bluish": [
    "00",
    "100",
    "1000",
    "150",
    "200",
    "300",
    "400",
    "50",
    "500",
    "60",
    "600",
    "700",
    "75",
    "750",
    "800",
    "850",
    "875",
    "900",
    "950",
  ],
  red: ["100", "400", "50", "500", "600", "900"],
};

function shellTokenCount(): number {
  return Object.values(SHELL_STATIC_TOKENS).reduce((sum, suffixes) => sum + suffixes.length, 0);
}

describe("md3-wallpaper palette engine", () => {
  it("covers every shell static token in both themes with hex values", () => {
    const tokens = buildThemeTokens(DEFAULT_SOURCE_TOKEN);
    expect(shellTokenCount()).toBe(73);
    for (const [family, suffixes] of Object.entries(SHELL_STATIC_TOKENS)) {
      for (const suffix of suffixes) {
        const key = `--dsw-static-${family}-${suffix}`;
        expect(tokens.light[key], `light ${key}`).toMatch(/^#[0-9a-f]{6}$/);
        expect(tokens.dark[key], `dark ${key}`).toMatch(/^#[0-9a-f]{6}$/);
      }
    }
  });

  it("also covers the interaction and scrollbar aliases in both themes", () => {
    const tokens = buildThemeTokens(DEFAULT_SOURCE_TOKEN);
    for (const key of [
      "--dsw-alias-interactive-bg-hover",
      "--dsw-alias-interactive-bg-active",
      "--dsw-alias-interactive-bg-hover-accent",
      "--dsw-alias-scrollbar-bg-l1",
      "--dsw-alias-scrollbar-bg-l2",
      "--dsw-alias-scrollbar-hover-l1",
      "--dsw-alias-scrollbar-hover-l2",
    ]) {
      expect(tokens.light[key], `light ${key}`).toBeTruthy();
      expect(tokens.dark[key], `dark ${key}`).toBeTruthy();
    }
  });

  it("inverts lightness between light and dark themes", () => {
    const tokens = buildThemeTokens(DEFAULT_SOURCE_TOKEN);
    const lightness = (hex: string): number => {
      const value = parseInt(hex.slice(1), 16);
      const r = (value >> 16) & 0xff;
      const g = (value >> 8) & 0xff;
      const b = value & 0xff;
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    // The background (neutral-bluish-00) must be near-white in light and
    // near-black in dark; the strong text (neutral-1000) the reverse.
    expect(lightness(tokens.light["--dsw-static-neutral-bluish-00"])).toBeGreaterThan(240);
    expect(lightness(tokens.dark["--dsw-static-neutral-bluish-00"])).toBeLessThan(20);
    expect(lightness(tokens.light["--dsw-static-neutral-1000"])).toBeLessThan(40);
    expect(lightness(tokens.dark["--dsw-static-neutral-1000"])).toBeGreaterThan(240);
    // The brand (deepseek-500) differs between themes (tonal 50 vs 62).
    expect(tokens.light["--dsw-static-deepseek-500"]).not.toBe(
      tokens.dark["--dsw-static-deepseek-500"],
    );
  });

  it("emits the standard M3 role tokens for both themes", () => {
    const sys = buildMdSysTheme(DEFAULT_SOURCE_TOKEN);
    for (const key of [
      "--md-sys-color-primary",
      "--md-sys-color-on-primary",
      "--md-sys-color-primary-container",
      "--md-sys-color-surface",
      "--md-sys-color-on-surface",
      "--md-sys-color-surface-container-highest",
      "--md-sys-color-surface-dim",
      "--md-sys-color-surface-bright",
      "--md-sys-color-surface-tint",
      "--md-sys-color-error",
      "--md-sys-color-outline",
    ]) {
      expect(sys.light[key], `light ${key}`).toMatch(/^#[0-9a-f]{6}$/);
      expect(sys.dark[key], `dark ${key}`).toMatch(/^#[0-9a-f]{6}$/);
    }
    // Dark primary is a light tone, light primary a dark one (M3 contract).
    expect(sys.light["--md-sys-color-primary"]).not.toBe(sys.dark["--md-sys-color-primary"]);
  });

  it("extracts a red-dominant source from a red wallpaper", () => {
    const data = new Uint8ClampedArray(2 * 2 * 4);
    for (let i = 0; i < 4; i++) {
      data[i * 4] = 230;
      data[i * 4 + 1] = 20;
      data[i * 4 + 2] = 20;
      data[i * 4 + 3] = 255;
    }
    const imageData = { data, width: 2, height: 2 } as unknown as ImageData;
    const source = extractSourceFromImage(imageData);
    const hex = `#${(source & 0xffffff).toString(16).padStart(6, "0")}`;
    const r = parseInt(hex.slice(1, 3), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    expect(r).toBeGreaterThan(b);
  });
});
