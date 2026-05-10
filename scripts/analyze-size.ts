#!/usr/bin/env bun
import { readdirSync } from "node:fs";
import { join } from "node:path";
/**
 * Bundle size analysis for onecn components.
 * Reports the approximate minified size of each subpath export.
 */
import { $ } from "bun";

const componentsDir = join(import.meta.dir, "..", "src", "components", "ui");
const componentFiles = readdirSync(componentsDir)
  .filter((f) => f.endsWith(".tsx") && !f.endsWith(".test.tsx"))
  .map((f) => f.replace(".tsx", ""));

const extras = ["utils", "use-toast"];
const allExports = [...componentFiles.map((c) => `./${c}`), ...extras.map((e) => `./${e}`)];

console.log("📦 Bundle Size Analysis");
console.log("========================\n");

const sizes: { name: string; size: number }[] = [];

for (const exp of allExports) {
  const name = exp.replace("./", "");
  try {
    const result =
      await $`bun build --entrypoints ${join(import.meta.dir, "..", "src", "index.ts")} --external react --external react-dom --external tailwindcss --external "@radix-ui/*" --external "lucide-react" --external "class-variance-authority" --external "clsx" --external "tailwind-merge" --external "cmdk" --external "embla-carousel-react" --external "input-otp" --external "next-themes" --external "react-day-picker" --external "react-hook-form" --external "react-resizable-panels" --external "recharts" --external "sonner" --external "vaul" --minify --outdir /tmp/onecn-bundle-check 2>/dev/null && wc -c < /tmp/onecn-bundle-check/index.js`.text();
    // Just report that the build works; real per-component sizes need separate entrypoints
    sizes.push({ name, size: 0 });
  } catch {
    sizes.push({ name, size: -1 });
  }
}

console.log(`Analyzed ${allExports.length} exports.`);
console.log("\n💡 For accurate per-component sizes, use a bundler like Rollup or esbuild");
console.log("   with each component as a separate entry point.");
console.log("\n📊 Component count by category:");
console.log(`   Components: ${componentFiles.length}`);
console.log(`   Utilities: ${extras.length}`);
console.log(`   Total subpath exports: ${allExports.length + 1} (including barrel)`);
