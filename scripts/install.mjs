#!/usr/bin/env node
/**
 * Standalone install + activate for the md3-wallpaper skin.
 *
 * Usage: node scripts/install.mjs [profile]
 *
 *   1. Links this project into the target profile's node_modules
 *      (<home>/profiles/<profile>/node_modules/@AnNingUI/<pkg>), so the dsh
 *      loader can resolve the skin bundle.
 *   2. Writes the activation insert row into the ACTIVE PROFILE's
 *      cordis.patch.yml — NEVER the harness-home cordis.patch.yml (that
 *      launcher layer is shared by every profile; a skin row there breaks
 *      the headless harness).
 *
 * After installing, restart dsh so the loader picks up the new boot graph.
 * Switching skins afterwards is handled by the skin center (it manages the
 * profile patch the same way); this script only installs + activates THIS
 * skin idempotently.
 */
import { homedir } from "node:os";
import { basename, dirname, join } from "node:path";
import {
  chmodSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  renameSync,
  rmSync,
  statSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { fileURLToPath } from "node:url";

const PKG = "@AnNingUI/dsh-client-ui-skin-md3-wallpaper";
const ENTRY_ID = "ui-skin-md3-wallpaper";
// new URL('..', import.meta.url) already lands on the project root.
const SELF_DIR = fileURLToPath(new URL("..", import.meta.url));
const SYMLINK_PRIVILEGE_CODES = ["EPERM", "EACCES", "ENOSYS"];

function harnessHome() {
  const env = process.env.DSH_HOME;
  if (typeof env === "string" && env.trim() !== "") return env.trim();
  return join(homedir(), ".dsh");
}

function resolveProfile(explicit) {
  for (const candidate of [explicit, process.env.DSH_SKIN_PROFILE, process.env.DSH_PROFILE]) {
    if (typeof candidate === "string" && candidate.trim() !== "") return candidate.trim();
  }
  return "web";
}

/** Make the profile node_modules link (symlink, junction fallback on win32). */
function ensureLink(profileModulesDir) {
  const target = join(profileModulesDir, PKG);
  let entryReal = SELF_DIR;
  try {
    entryReal = realpathSync(SELF_DIR);
  } catch {
    /* keep raw */
  }
  let stat = null;
  try {
    stat = lstatSync(target);
  } catch {
    /* absent */
  }
  if (stat !== null) {
    if (stat.isSymbolicLink()) {
      try {
        if (realpathSync(target) === entryReal) return;
      } catch {
        /* stale link */
      }
    } else if (stat.isDirectory()) {
      console.error(`refusing: ${target} exists as a real directory (remove it first)`);
      process.exit(1);
    }
    // Windows junctions report as symbolic links AND directories; rmSync with
    // recursive+force handles both a plain link and a directory reparse point.
    rmSync(target, { recursive: true, force: true });
  }
  mkdirSync(dirname(target), { recursive: true });
  try {
    symlinkSync(entryReal, target);
  } catch (error) {
    const code = error && typeof error === "object" ? error.code : undefined;
    if (
      process.platform === "win32" &&
      typeof code === "string" &&
      SYMLINK_PRIVILEGE_CODES.includes(code)
    ) {
      // Directory junction needs no Developer Mode / elevation.
      symlinkSync(entryReal, target, "junction");
    } else {
      console.error(
        `symlink failed (${String(code)}). On Windows run as admin or enable Developer Mode, then retry.`,
      );
      process.exit(1);
    }
  }
  console.log(`linked ${PKG} -> ${target}`);
}

/** Remove this skin's own rows from the patch text (idempotent). */
function stripOwnRows(patch) {
  return (
    patch
      // Comment-headed insert blocks of this skin.
      .replace(
        new RegExp(
          `^[ \\t]*# [^\\n]*\\n(?:[ \\t]*- id: ${ENTRY_ID}\\n(?:[ \\t]+[^\\n]*\\n?)*)`,
          "gm",
        ),
        "",
      )
      // Bare disabled row of this skin.
      .replace(new RegExp(`(?:^|\\n) *- id: ${ENTRY_ID}\\n *disabled: true\\n`, "g"), "\n")
      // Bare insert block of this skin (previous installs).
      .replace(
        new RegExp(`(?:^|\\n) *- insert:\\n *- id: ${ENTRY_ID}\\n +name: '[^']*'\\n?`, "g"),
        "\n",
      )
      .replace(/\n{3,}/g, "\n\n")
      .replace(/^\s+/, "")
  );
}

/** Append this skin's activation insert row (idempotent: own rows stripped first). */
function activationRow() {
  return `- insert:\n    - id: ${ENTRY_ID}\n      name: '${PKG}'\n`;
}

/** Atomic write preserving the file's existing permission bits. */
function writeAtomic(filePath, next) {
  const dir = dirname(filePath);
  mkdirSync(dir, { recursive: true });
  let previousMode;
  try {
    previousMode = statSync(filePath).mode & 0o777;
  } catch {
    /* absent */
  }
  const tmpDir = mkdtempSync(join(dir, `${basename(filePath)}.tmp-`));
  const tmp = join(tmpDir, basename(filePath));
  try {
    writeFileSync(tmp, next, { flag: "wx" });
    chmodSync(tmp, previousMode ?? 0o600);
    renameSync(tmp, filePath);
  } finally {
    try {
      rmSync(tmpDir, { recursive: true, force: true });
    } catch {
      /* best-effort */
    }
  }
}

function main() {
  const profile = resolveProfile(process.argv[2]);
  const home = harnessHome();
  const profileDir = join(home, "profiles", profile);
  const profilePatchPath = join(profileDir, "cordis.patch.yml");
  const profileModulesDir = join(profileDir, "node_modules");

  ensureLink(profileModulesDir);

  let patch = "";
  try {
    patch = readFileSync(profilePatchPath, "utf8");
  } catch {
    /* absent */
  }
  const next = `${stripOwnRows(patch).replace(/\s+$/, "")}\n\n${activationRow()}`;
  writeAtomic(profilePatchPath, next);

  console.log(`activated ${ENTRY_ID} in ${profilePatchPath}`);
  console.log(
    "Restart dsh to load the new boot graph, then open the GUI: the skin applies on the settled page.",
  );
}

main();
