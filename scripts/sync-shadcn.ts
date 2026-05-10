#!/usr/bin/env bun
import { readdirSync } from "node:fs";
import { join } from "node:path";
/**
 * Sync shadcn/ui components from upstream.
 * Usage: bun run scripts/sync-shadcn.ts [component-name]
 *
 * Without arguments, syncs all known components.
 * With a component name, syncs only that component.
 */
import { $ } from "bun";

const COMPONENTS_DIR = join(import.meta.dir, "..", "src", "components", "ui");
const componentFiles = readdirSync(COMPONENTS_DIR)
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => f.replace(".tsx", ""));

const target = process.argv[2];

async function syncComponent(name: string) {
  console.log(`Syncing ${name}...`);
  try {
    await $`npx shadcn add ${name} --overwrite --yes --cwd ${join(import.meta.dir, "..")}`;
    console.log(`  ✓ ${name}`);
  } catch (err) {
    console.error(`  ✗ ${name} failed:`, err);
    process.exitCode = 1;
  }
}

if (target) {
  if (!componentFiles.includes(target)) {
    console.error(`Unknown component: ${target}`);
    console.error(`Known components: ${componentFiles.join(", ")}`);
    process.exit(1);
  }
  await syncComponent(target);
} else {
  console.log(`Syncing ${componentFiles.length} components...`);
  for (const name of componentFiles) {
    await syncComponent(name);
  }
  console.log("Done. Run `bun run build` and `bun test` to verify.");
}
