# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.4.1] - 2026-05-13

### Fixed
- npm publish step in CI now writes `.npmrc` to project root (instead of `~/.npmrc`) so `bun publish` picks up the auth token reliably. The 0.4.0 tag failed to publish with `error: missing authentication`; 0.4.1 is the first version actually pushed to the npm registry.
- Explicitly set `registry=https://registry.npmjs.org/` in the generated `.npmrc`.
- Added cleanup step to remove `.npmrc` post-publish, and added `.npmrc` to `.gitignore`.

## [0.4.0] - 2026-05-13 [not published]

### Changed
- **BREAKING (consumer-facing):** Renamed package from `@adit_firdaus/onecn` to unscoped `onecn`. Update imports from `@adit_firdaus/onecn` / `@adit_firdaus/onecn/<subpath>` to `onecn` / `onecn/<subpath>`.
- Repository moved to `github.com/adit-firdaus/onecn` (was `aditfirdaus/onecn`); CI badge, repository, homepage, and bugs URLs updated accordingly.

### Fixed
- CI workflow now triggers on `v*` tag pushes (previously only `main` branch pushes), so the `publish` job actually runs on release tags.
- npm publish auth now writes `~/.npmrc` instead of relying on `NPM_CONFIG_TOKEN`, which `bun publish` reads more reliably.

## [0.3.0] - 2026-05-10

### Added
- `ConfigProvider` and `useConfig` for global component default overrides
- `OneCNProvider` — single wrapper for next-themes + toast + config
- Re-export `useTheme` from next-themes
- Helper components: `EmptyState`, `ConfirmDialog`, `PageHeader`, `FormField`, `CopyButton`, `SkeletonCard`, `StatusBadge`, `ThemeToggle`
- Utility hooks: `useMediaQuery`, `useClipboard`, `useDisclosure`, `usePrevious`
- `mergeProps` utility in `lib/utils`
- Config integration in `Button`, `Input`, `Badge`, `Card`

### Changed
- Updated `scripts/build-subpaths.ts` to auto-export helpers and hooks

## [0.2.0] - 2026-05-10

### Added
- Subpath exports for all 47 components (`onecn/button`, etc.)
- Test suite with `bun:test` covering `cn()`, `useToast` reducer, and `Button` component
- Biome configuration for linting and formatting
- GitHub Actions CI/CD workflow for testing and automated npm publishing
- `scripts/sync-shadcn.ts` to sync components with upstream shadcn/ui
- MIT LICENSE file
- `repository`, `homepage`, `bugs`, and `author` fields in `package.json`

### Changed
- `dev` script now runs `tsc --watch` instead of `bun --watch src/index.ts`
- `build` script now auto-generates subpath exports in `package.json`
- Excluded test files and stories from TypeScript build output

### Fixed
- Fixed `use-toast.ts` `useEffect` dependency array (removed unnecessary `state`)
- Replaced `forEach` with `for...of` in `use-toast.ts` for better performance

## [0.1.0] - 2024-XX-XX

### Added
- Initial release with all shadcn/ui components bundled into a single package
