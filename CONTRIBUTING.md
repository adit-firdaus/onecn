# Contributing to @coolaf/onecn

Thanks for your interest in contributing!

## Development Setup

```bash
# Clone the repo
git clone https://github.com/adit-firdaus/onecn.git
cd onecn

# Install dependencies (uses Bun)
bun install

# Run tests
bun test

# Run linter
bun run lint

# Build package
bun run build

# Watch mode
bun run dev
```

## Project Structure

```
src/
  components/ui/     # All shadcn/ui components (47 files)
  hooks/             # use-toast hook
  lib/               # cn() utility
  index.ts           # Barrel exports
  styles.css         # Tailwind CSS variables
tests/               # Test files (co-located or in __tests__)
scripts/             # Build and sync utilities
```

## Adding or Updating Components

This package mirrors shadcn/ui. To sync with upstream:

```bash
# Sync all components
bun run scripts/sync-shadcn.ts

# Sync a specific component
bun run scripts/sync-shadcn.ts button
```

After syncing, run tests and build to verify:

```bash
bun test
bun run build
```

## Code Style

We use [Biome](https://biomejs.dev/) for linting and formatting. It runs automatically in CI.

```bash
# Check issues
bun run lint

# Auto-fix issues
bun run lint:fix

# Format code
bun run format
```

## Testing

Tests use `bun:test`. Add tests for any new utility or component behavior.

```bash
# Run all tests
bun test

# Run specific test file
bun test src/lib/utils.test.ts
```

## Pull Request Process

1. Fork the repo and create a branch
2. Make your changes
3. Ensure `bun run lint` and `bun test` pass
4. Update `CHANGELOG.md` under `[Unreleased]`
5. Open a PR with a clear description

## Release Process

Maintainers only:

1. Update version in `package.json`
2. Update `CHANGELOG.md` with release date
3. Tag: `git tag vX.Y.Z`
4. Push: `git push origin vX.Y.Z`
5. CI will auto-publish to npm

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
