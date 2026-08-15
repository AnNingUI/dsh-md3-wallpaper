/**
 * Standalone tsdown preset for the md3-wallpaper skin bundle (self-contained
 * port of the dsh-web-ui monorepo's shared/tsdown.client.ts). Emits a
 * closure-factory artifact: the bundle calls window.__ModuleLoader__.load
 * ({id, factory}) and resolves externals through the injected require (the
 * dsh loader module table). CSS Modules are compiled by lightningcss inside
 * the bundle: importing `x.module.css` yields the hashed class map, and the
 * css text auto-injects a <style data-plugin="<id>"> tag at factory
 * execution. The platform module list mirrors the shell's seed table.
 */
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, dirname, isAbsolute, relative, resolve as resolvePath, sep } from "node:path";
import { fileURLToPath } from "node:url";
import type { UserConfig } from "tsdown";
import { transform } from "lightningcss";

/** Platform modules the dsh loader table answers at runtime (external). */
const PLATFORM_MODULES: readonly string[] = [
  "react",
  "@deepseek-ai/cordis",
  "@deepseek-ai/dsh-client-ui-slots",
  "@deepseek-ai/dsh-client-web-react",
  "@deepseek-ai/dsh-client-ui-primitives",
  "@deepseek-ai/dsh-client-schema-form",
];

/** Virtual-id wrapper keeping module CSS away from tsdown's own css pipeline. */
const CSS_VIRTUAL_PREFIX = "\0dsh-css:";
const CSS_VIRTUAL_SUFFIX = ".mjs";

/** Inline-safe wire layers a client bundle may bundle (no runtime identity). */
const INLINE_SAFE = /^@deepseek-ai\/dsh-(host-apiproxy|session|llm|tools|brand)(\/|$)/;

const REPOSITORY_ROOT = fileURLToPath(new URL(".", import.meta.url));

/** Rebase a physical path onto a repository-relative id when it lives under the repo. */
function repositoryRelativePath(physical: string): string {
  if (!isAbsolute(physical)) return physical;
  const repositoryPath = relative(REPOSITORY_ROOT, physical).split(sep).join("/");
  return repositoryPath.startsWith("../") ? physical : repositoryPath;
}

/** Rebase a physical lib-relative source onto a browser URL that mirrors the directories. */
function browserSourcePath(source: string, sourcemapPath: string): string {
  if (!source.startsWith(".")) return source;
  const physicalSource = resolvePath(dirname(sourcemapPath), source);
  const repositoryPath = relative(REPOSITORY_ROOT, physicalSource).split(sep).join("/");
  return repositoryPath.startsWith("src/") ? `../${repositoryPath}` : source;
}

/** Resolve an emitted JS asset import against its source-tree counterpart. */
function sourceAssetPath(source: string, importer: string): string {
  const emitted = resolvePath(dirname(importer), source);
  if (existsSync(emitted)) return emitted;
  const marker = `${sep}lib${sep}types${sep}`;
  const boundary = emitted.indexOf(marker);
  if (boundary < 0) return emitted;
  return resolvePath(emitted.slice(0, boundary), "src", emitted.slice(boundary + marker.length));
}

/**
 * Build the tsdown config for the skin package: the node-half lib build plus
 * the browser client bundle.
 * @param id - plugin id (package name), stamped into the loader handoff.
 * @param libEntry - node-half entries.
 * @returns the tsdown config array.
 */
export function clientBundle(id: string, libEntry: readonly string[]): UserConfig[] {
  return [
    {
      name: id,
      entry: [...libEntry],
      outDir: "lib",
      format: ["esm"],
      platform: "node",
      target: "es2024",
      fixedExtension: false,
      dts: false,
      clean: false,
      external: ["@deepseek-ai/cordis"],
    },
    {
      name: `${id}/client`,
      entry: { client: "src/client/index.ts" },
      outDir: "lib",
      format: "cjs",
      platform: "browser",
      dts: false,
      sourcemap: true,
      clean: false,
      external: [...PLATFORM_MODULES],
      define: {
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV ?? "production"),
        "import.meta.env.MODE": JSON.stringify(process.env.NODE_ENV ?? "production"),
        "import.meta.env": JSON.stringify({ MODE: process.env.NODE_ENV ?? "production" }),
      },
      // Bundle everything that is NOT a loader-table entry (material-color-
      // utilities inlines here); a require() the table cannot answer is a
      // guaranteed runtime throw.
      noExternal: (id: string) => (PLATFORM_MODULES.includes(id) ? undefined : true),
      plugins: [
        {
          // Bundle purity gate: platform seed entries stay external,
          // inline-safe wire layers inline, every other @deepseek-ai value
          // import is a build error.
          name: "dsh-client-bundle-purity",
          resolveId(source: string) {
            if (!source.startsWith("@deepseek-ai/")) return null;
            if (PLATFORM_MODULES.includes(source)) return null;
            if (INLINE_SAFE.test(source)) return null;
            throw new Error(
              `client bundle purity: "${source}" is not a platform module — cross-plugin value imports are forbidden`,
            );
          },
        },
        {
          name: "dsh-css-modules-inline",
          resolveId(source: string, importer: string | undefined) {
            if (!source.endsWith(".module.css")) return null;
            const abs = importer !== undefined ? sourceAssetPath(source, importer) : source;
            return CSS_VIRTUAL_PREFIX + repositoryRelativePath(abs) + CSS_VIRTUAL_SUFFIX;
          },
          async load(virtualId: string) {
            if (!virtualId.startsWith(CSS_VIRTUAL_PREFIX)) return null;
            const fileId = virtualId.slice(CSS_VIRTUAL_PREFIX.length, -CSS_VIRTUAL_SUFFIX.length);
            const physical = isAbsolute(fileId) ? fileId : resolvePath(REPOSITORY_ROOT, fileId);
            this.addWatchFile(physical);
            const source = await readFile(physical);
            const { code, exports: cssExports } = transform({
              filename: fileId,
              code: source,
              cssModules: { pattern: "[hash]_[local]" },
              minify: true,
            });
            const classMap: Record<string, string> = {};
            for (const [local, exp] of Object.entries(cssExports ?? {}).sort(([a], [b]) =>
              a < b ? -1 : a > b ? 1 : 0,
            )) {
              classMap[local] = exp.name;
            }
            return [
              `const css = ${JSON.stringify(code.toString())};`,
              `const tagId = ${JSON.stringify(`${id}/${basename(fileId)}`)};`,
              `if (typeof document !== 'undefined' && document.querySelector('style[data-plugin-css=' + JSON.stringify(tagId) + ']') === null) {`,
              `  const tag = document.createElement('style');`,
              `  tag.dataset.plugin = ${JSON.stringify(id)};`,
              `  tag.dataset.pluginCss = tagId;`,
              `  tag.textContent = css;`,
              `  document.head.appendChild(tag);`,
              `}`,
              `export default ${JSON.stringify(classMap)};`,
            ].join("\n");
          },
        },
      ],
      outputOptions: {
        entryFileNames: "client.js",
        sourcemapPathTransform: browserSourcePath,
        banner: `window.__ModuleLoader__.load({ id: ${JSON.stringify(id)}, factory: (require) => {`,
        footer: "return module.exports; } });",
        intro: "var module = { exports: {} }; var exports = module.exports;",
      },
    },
  ];
}
