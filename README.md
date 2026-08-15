# @AnNingUI/dsh-client-ui-skin-md3-wallpaper

Material You (MD3) dynamic-color skin for the dsh web GUI, as a **standalone
project** — no monorepo, no skin-center registry, no gallery. Clone it
anywhere, build it, install it with one command.

Upload any wallpaper and the skin derives the entire UI palette from it:
Monet's source-color extraction runs through
`@material/material-color-utilities` (Celebi quantization + score ranking),
the M3 light/dark schemes are built from the source hue, and the result is
mapped onto the shell's ENTIRE token surface — all 73 `--dsw-static-*`
tokens (both themes), the hard-coded interaction/scrollbar aliases, and the
standard `--md-sys-color-*` roles. Nothing is left behind: sidebar,
conversation, details, dialogs, menus, scrollbars, status colors and every
currentColor SVG follow the wallpaper; the brand logo is flattened onto the
MD3 primary, the favicon becomes a dot in the Monet source hue, and the
aionui panel surfaces (file tree, git tree, preview) ride the same M3 roles
through the stylesheet's `--aion-*` bridge. While the skin is active the
page is scroll-locked: neither html nor body scrolls in any direction.

It also ships Material You organic chrome: a four-petal blossom FAB (not a
plain circle) whose glyph is the MaterialYouNewTab temperature icon at rest
and morphs — with M3 motion (fade + rotate + scale) — into its clock icon
once the menu opens. The menu offers selectable preset backdrops (M3
gradients generated live from the theme roles), wallpaper upload, restore
default, and a switch for the M3 shape system (Material 3 corner language by
hierarchy: pill buttons, small inputs, medium list rows, large dialogs, xs
tooltips/menus, pill scrollbars — turn it off from the menu).

The skin is presentation-only: no services are injected, no cordis events
are emitted, nothing reaches a model request. Every write is retracted on
dispose (body attribute, token variables, backdrop, scroll lock, chrome,
favicon, title).

## Requirements

- Node `^22.19 || >=24`, pnpm.
- A dsh installation (the skin is a standard cordis bundle for the `web`
  profile).

## Build

```sh
pnpm install     # installs @material/material-color-utilities + build tools
pnpm build       # emits lib/index.js (node half) + lib/client.js (bundle)
pnpm test        # vitest: palette mapping + apply/dispose contract
```

## Hot reload while hand-editing the theme

The skin carries a dev watcher: while `pnpm watch` runs (tsdown rebuilds
`lib/client.js` on every save), the skin polls its own served bundle URL
every 2 s, fingerprints the content, and reloads the page the moment the
bundle changed — edit a token, a color or a CSS rule, save, and the GUI
re-applies within seconds. **No dsh restart needed.**

It is on by default. To turn it off:

```js
localStorage.setItem("dsh.md3Wallpaper.devReload", "0"); // then refresh once
```

To turn it back on, delete that key (or set it to `'1'`) and refresh once.
The poll only runs while the page is visible, and the interval is retracted
together with the rest of the skin on dispose.

## Install + activate into a dsh profile

```sh
pnpm install:dsh            # default profile: web
pnpm install:dsh headless   # or any other profile name
```

The script:

1. Links this project into `~/.dsh/profiles/<profile>/node_modules/@AnNingUI/`
   (symlink; junction fallback on Windows);
2. Writes the activation insert row into the **profile's** `cordis.patch.yml`
   — **never** the harness-home `cordis.patch.yml`, which is shared by every
   profile and would break the headless harness.

Then **restart dsh** and open the GUI. The skin applies on the settled page.
Switching skins afterwards is handled by the dsh skin center (it manages the
same profile patch); this project only installs + activates itself.

Alternative manual install (same as any official plugin):

```sh
dsh plugin --profile web add link:<path-to-this-project>
```

## Using the skin

A blossom FAB sits at the bottom-right corner, showing the temperature glyph.
Click it — the glyph morphs (M3 motion) into the clock icon — and the menu
opens:

- **Preset backdrops** — four M3 gradient backdrops generated live from the
  theme roles (mesh / sunset / ocean / monochrome).
- **Upload wallpaper** — any image; downscaled on a canvas (<= 512px, JPEG)
  for both Monet extraction and the cover backdrop; the compact state
  (wallpaper + both token sets) persists in localStorage, so a refresh
  re-applies instantly.
- **Restore default** — back to the M3 baseline seed (#6750A4) with the
  default preset backdrop.
- **M3 shape system** — toggle the Material 3 corner language (persisted).

The theme flips live with the shell's dark/light switch: the dark scheme's
inverted tonal mapping is applied immediately and the preset gradients
re-render from the dark roles.

## How the palette is mapped

MD3 has five tonal palettes; the shell has nine color families:

| Shell family     | MD3 palette         | Notes                                         |
| ---------------- | ------------------- | --------------------------------------------- |
| `deepseek`       | primary (a1)        | brand hue                                     |
| `blue`           | secondary (a2)      | auxiliary blue                                |
| `green`          | tertiary (a3)       | success rides the third accent                |
| `amber`          | primary (a1)        | warnings reuse the brand hue at offset tonals |
| `red`            | error               | danger                                        |
| `neutral`        | neutral (n1)        | text/borders/surfaces                         |
| `neutral-bluish` | neutralVariant (n2) | background/surface scale                      |

The shell's numeric suffixes are lightness steps, not M3 tones, so each
suffix maps to an explicit (light, dark) tonal pair; dark inverts lightness.
The M3 surface-container roles are completed from the neutral palette per the
M3 spec tonal tables.

## Model Experience

None. The skin mutates only the browser DOM; nothing here reaches a model
request.

## Known limitations

- The loading page stays stock (the boot page renders before plugin bundles
  exist).
- Code syntax highlighting (the json-tree component) keeps its built-in
  colors (component-root tokens out-scope body variables).
- The persisted wallpaper is a downscaled JPEG (<= 512px): a very large
  monitor may show slight softening.
