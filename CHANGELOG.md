# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
- Subpath exports for all 47 components (`@adit_firdaus/onecn/button`, etc.)
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
