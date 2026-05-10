import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const packageJsonPath = join(process.cwd(), "package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

const componentsDir = join(process.cwd(), "src", "components", "ui");
const componentFiles = readdirSync(componentsDir)
  .filter((f) => f.endsWith(".tsx") && !f.endsWith(".test.tsx"))
  .map((f) => f.replace(".tsx", ""));

const otherExports: Record<string, { types?: string; import?: string }> = {
  "./utils": {
    types: "./dist/lib/utils.d.ts",
    import: "./dist/lib/utils.js",
  },
  "./use-toast": {
    types: "./dist/hooks/use-toast.d.ts",
    import: "./dist/hooks/use-toast.js",
  },
  "./styles": "./dist/index.css",
  "./package.json": "./package.json",
};

const componentExports: Record<string, { types: string; import: string }> = {};
for (const name of componentFiles) {
  componentExports[`./${name}`] = {
    types: `./dist/components/ui/${name}.d.ts`,
    import: `./dist/components/ui/${name}.js`,
  };
}

packageJson.exports = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/index.js",
  },
  ...componentExports,
  ...otherExports,
};

writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);
console.log(`Updated package.json with ${componentFiles.length} subpath exports.`);
