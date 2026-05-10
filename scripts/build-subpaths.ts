import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const packageJsonPath = join(process.cwd(), "package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

function scanComponents(
  dir: string,
  distPrefix: string
): Record<string, { types: string; import: string }> {
  const files = readdirSync(dir)
    .filter((f) => f.endsWith(".tsx") && !f.endsWith(".test.tsx"))
    .map((f) => f.replace(".tsx", ""));

  const exports: Record<string, { types: string; import: string }> = {};
  for (const name of files) {
    exports[`./${name}`] = {
      types: `./${distPrefix}/${name}.d.ts`,
      import: `./${distPrefix}/${name}.js`,
    };
  }
  return exports;
}

const uiExports = scanComponents(
  join(process.cwd(), "src", "components", "ui"),
  "dist/components/ui"
);

const helperExports = scanComponents(
  join(process.cwd(), "src", "components", "helpers"),
  "dist/components/helpers"
);

const hookDir = join(process.cwd(), "src", "hooks");
const hookFiles = readdirSync(hookDir)
  .filter((f) => f.endsWith(".ts") && !f.endsWith(".test.ts"))
  .map((f) => f.replace(".ts", ""));

const hookExports: Record<string, { types: string; import: string }> = {};
for (const name of hookFiles) {
  hookExports[`./${name}`] = {
    types: `./dist/hooks/${name}.d.ts`,
    import: `./dist/hooks/${name}.js`,
  };
}

const otherExports: Record<string, { types?: string; import?: string }> = {
  "./utils": {
    types: "./dist/lib/utils.d.ts",
    import: "./dist/lib/utils.js",
  },
  "./config": {
    types: "./dist/lib/config.d.ts",
    import: "./dist/lib/config.js",
  },
  "./onecn-provider": {
    types: "./dist/components/onecn-provider.d.ts",
    import: "./dist/components/onecn-provider.js",
  },
  "./styles": "./dist/index.css",
  "./package.json": "./package.json",
};

packageJson.exports = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/index.js",
  },
  ...uiExports,
  ...helperExports,
  ...hookExports,
  ...otherExports,
};

writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);
console.log(
  `Updated package.json with ${Object.keys(uiExports).length} UI, ${Object.keys(helperExports).length} helper, and ${Object.keys(hookExports).length} hook subpath exports.`
);
