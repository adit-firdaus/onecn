# @adit_firdaus/onecn

This file contains project-specific context for AI coding agents. Read this first before making any changes.

---

## Project Overview

`@adit_firdaus/onecn` is a React component library that bundles all [shadcn/ui](https://ui.shadcn.com) components into a single, easy-to-install npm package. Instead of installing shadcn components one-by-one via the CLI, consumers can install everything in one shot with `bun add @adit_firdaus/onecn`.

- **Package name:** `@adit_firdaus/onecn`
- **Version:** 0.1.0
- **License:** MIT
- **Author:** Adit Firdaus <aditfirdaus@gmail.com>
- **Repository:** https://github.com/aditfirdaus/onecn
- **Total components:** 47 shadcn/ui components + utilities

## Technology Stack

- **Runtime / Package Manager:** [Bun](https://bun.sh/) — used for everything (install, test, build, scripts). Do not use Node.js, npm, pnpm, or yarn.
- **Language:** TypeScript 5 with strict mode enabled.
- **UI Framework:** React 18+ (peer dependency).
- **Styling:** TailwindCSS 3+ (peer dependency).
- **Primitives:** Radix UI (`@radix-ui/react-*`) for accessible, unstyled component primitives.
- **Class Management:** `class-variance-authority` (CVA) for variant definitions, `clsx` for conditional classes, `tailwind-merge` for deduplication.
- **Other Notable Dependencies:** `lucide-react` (icons), `cmdk`, `embla-carousel-react`, `recharts`, `sonner`, `vaul`, `react-hook-form`, `next-themes`, `react-day-picker`, `input-otp`, `react-resizable-panels`.

## Project Structure

```
src/
  components/ui/     # All 47 shadcn/ui components (e.g., button.tsx, card.tsx, dialog.tsx)
                     # Co-located test files: button.test.tsx, card.test.tsx, etc.
  hooks/             # use-toast.ts (toast state management hook) + test
  lib/               # utils.ts (the `cn()` helper) + test
  index.ts           # Barrel export file — re-exports all components and utils
  styles.css         # Tailwind directives + CSS variables for light/dark themes

scripts/
  build-subpaths.ts  # Auto-generates package.json subpath exports after build
  sync-shadcn.ts     # Syncs components from upstream shadcn/ui via `npx shadcn add`
  analyze-size.ts    # Rough bundle size analysis script

dist/                # Build output (TypeScript compilation + copied CSS)
```

## Build and Development Commands

All commands use **Bun**. Do not use npm/yarn/pnpm.

| Command | Description |
|---------|-------------|
| `bun install` | Install dependencies. Use `--frozen-lockfile` in CI. |
| `bun run build` | Full production build: cleans `dist/`, runs `tsc -p tsconfig.build.json`, copies `src/styles.css` to `dist/index.css`, and regenerates subpath exports in `package.json`. |
| `bun run dev` | Watch-mode build via `tsc -p tsconfig.build.json --watch`. |
| `bun run clean` | Removes the `dist/` directory. |
| `bun test` | Runs the full test suite using `bun:test`. |
| `bun run lint` | Runs Biome linter/formatter in check mode. |
| `bun run lint:fix` | Runs Biome and auto-fixes issues. |
| `bun run format` | Runs Biome formatter in write mode. |
| `bun run scripts/sync-shadcn.ts` | Syncs all components from upstream shadcn/ui. |
| `bun run scripts/sync-shadcn.ts <name>` | Syncs a single component (e.g., `button`). |
| `bun run scripts/analyze-size.ts` | Rough bundle size check. |

## TypeScript Configuration

- **`tsconfig.json`** (dev): `noEmit: true`, `module: "Preserve"`, `moduleResolution: "bundler"`, `jsx: "react-jsx"`, `verbatimModuleSyntax: true`, `allowImportingTsExtensions: true`. Path alias `@/*` maps to `./src/*`.
- **`tsconfig.build.json`** (production): extends the base, sets `noEmit: false`, `declaration: true`, `sourceMap: true`, `outDir: "./dist"`, `rootDir: "./src"`. Test files (`**/*.test.ts`, `**/*.test.tsx`) are explicitly excluded from the build output.

## Code Style Guidelines

We use [Biome](https://biomejs.dev/) for both linting and formatting.

- **Indent:** 2 spaces
- **Quotes:** double
- **Semicolons:** always
- **Trailing commas:** ES5 style
- **Line width:** 100
- **Import organization:** enabled (auto-sorted)
- **Relaxed rules:** `noExplicitAny` and `noNonNullAssertion` are disabled so the codebase can use `any` and non-null assertions freely.
- **Ignored directories:** `node_modules`, `dist`, `coverage`

Run `bun run lint:fix` before committing. Biome runs automatically on staged files via lefthook pre-commit hooks.

## Component Patterns

All components follow the standard shadcn/ui authoring conventions:

1. **Use `cn()` for class merging:**
   ```tsx
   import { cn } from "../../lib/utils";
   ```

2. **Use `cva` for variants:**
   ```tsx
   import { cva, type VariantProps } from "class-variance-authority";
   const buttonVariants = cva("base-classes", { variants: { ... } });
   ```

3. **Forward refs and support `className`:**
   ```tsx
   const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(...);
   Button.displayName = "Button";
   ```

4. **Support `asChild` via `@radix-ui/react-slot` where appropriate.**

5. **Co-locate tests:** If you add or modify a component, place its test file right next to it (`ComponentName.test.tsx`).

## Testing Strategy

- **Framework:** `bun:test` (Bun's built-in test runner).
- **Style:** Tests are co-located with source files, not in a separate `tests/` directory.
- **Component Testing:** We use `react-dom/server` `renderToString` for SSR-style smoke tests that verify rendered output contains expected classes and text. There is no JSDOM or browser environment.
- **Existing Tests:**
  - `src/lib/utils.test.ts` — `cn()` utility
  - `src/hooks/use-toast.test.ts` — toast reducer logic
  - `src/components/ui/button.test.tsx` — Button variants and `asChild`
  - `src/components/ui/card.test.tsx` — Card subcomponents
  - `src/components/ui/input.test.tsx` — Input rendering
  - `src/components/ui/toast.test.tsx` — Toast rendering

When adding new utilities or modifying component behavior, add corresponding `bun:test` tests.

## Git Hooks (lefthook)

The project uses `lefthook` for Git hooks:

- **`commit-msg`**: Lints the commit message with Biome.
- **`pre-commit`** (parallel):
  - Runs `biome check --write` on staged `*.{ts,tsx,js,jsx,json}` files and re-stages them.
  - Runs `bun test`.
- **`pre-push`**: Runs `bun run build` to ensure the package compiles before pushing.

## CI / CD

GitHub Actions workflow: `.github/workflows/ci.yml`

- **On push to `main` and PRs:**
  1. Checkout code
  2. Setup Bun (latest)
  3. `bun install --frozen-lockfile`
  4. `bun run lint`
  5. `bun test`
  6. `bun run build`

- **On version tag push (`refs/tags/v*`):**
  1. Runs the same build steps
  2. Publishes to npm with `bun publish --access public` using `NPM_TOKEN`

## Publishing

The package is published to npm under the `@adit_firdaus` scope.

- `package.json` `files` field only includes `["dist"]` — do not rely on `src/` being present in the published package.
- `prepublishOnly` runs `bun run build` automatically before publishing.
- Subpath exports are auto-generated by `scripts/build-subpaths.ts` during build. Each component gets its own subpath (e.g., `@adit_firdaus/onecn/button`, `@adit_firdaus/onecn/dialog`).

## Syncing with Upstream shadcn/ui

To pull the latest versions of components from the official shadcn/ui registry:

```bash
# Sync all components
bun run scripts/sync-shadcn.ts

# Sync a specific component
bun run scripts/sync-shadcn.ts button
```

After syncing, always run `bun test` and `bun run build` to verify nothing broke.

## Important Notes for Agents

- **Always use Bun.** Do not introduce npm, yarn, pnpm, or vite into this project. The `.cursor/rules` file and `CLAUDE.md` reinforce this.
- **Do not change the path alias.** `@/*` maps to `./src/*`. Keep imports consistent.
- **Keep tests co-located.** If you write tests, place them next to the file they test.
- **Run `bun run lint:fix` and `bun test` before finishing.** The pre-commit hook enforces this, but catching issues early saves time.
- **Do not check in `dist/`.** It is gitignored and generated at build/publish time.
- **Be careful with `package.json` exports.** The `build-subpaths.ts` script overwrites the `exports` field. If you add new top-level exports (not components), you may need to update `otherExports` in that script.
- **Dependencies are mostly peer or runtime.** This is a library, so avoid pinning unnecessary runtime dependencies that consumers would have to install.
