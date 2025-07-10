# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an ESLint plugin (`eslint-plugin-zod-import`) that enforces Zod import best practices. It prevents the use of legacy `zod` imports and enforces `zod/v4` or `zod/v4-mini` usage for better bundle size optimization.

## Development Commands

### Build
```bash
pnpm build           # Build the plugin (outputs to dist/)
```

### Testing
```bash
pnpm test            # Run all tests
pnpm test:watch      # Run tests in watch mode
pnpm test:coverage   # Run tests with coverage report
```

### Linting and Type Checking
```bash
pnpm check           # Run all checks (biome, oxlint, eslint, typecheck)
pnpm fix             # Fix all auto-fixable issues
pnpm typecheck       # Run TypeScript type checking only
```

### Individual Linters
```bash
pnpm bcheck          # Run Biome check
pnpm bcheck:fix      # Run Biome with auto-fix
pnpm oxlint          # Run Oxlint
pnpm oxlint:fix      # Run Oxlint with auto-fix
pnpm eslint          # Run ESLint
pnpm eslint:fix      # Run ESLint with auto-fix
```

### Other Tools
```bash
pnpm cspell          # Run spell check
pnpm secretlint      # Check for secrets/sensitive data
pnpm sort            # Sort package.json
```

## Architecture

### Core Structure
```
src/
├── index.ts              # Plugin entry point, exports rules and configs
├── rules/
│   └── zod-import.ts    # Main rule implementation
└── tests/
    └── zod-import.test.ts  # Rule tests using ESLint RuleTester
```

### Key Implementation Details

1. **Rule Implementation Pattern**: Rules follow ESLint's standard structure with:
   - `meta` object defining rule metadata and fixable status
   - `create` function returning visitor methods for AST nodes
   - Auto-fix support via `fixer` API

2. **Testing Approach**: Uses ESLint's RuleTester with Vitest for comprehensive rule testing including:
   - Valid code examples
   - Invalid code examples with expected errors
   - Auto-fix verification

3. **Build Output**: The plugin is built to support both CommonJS and ESM:
   - `dist/index.js` - CommonJS entry
   - `dist/index.mjs` - ESM entry
   - `dist/index.d.ts` - TypeScript definitions

4. **Configuration Export**: The plugin exports a `recommended` configuration that can be easily consumed by users.

## Development Practices

### Type Safety
- Strict TypeScript configuration with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`
- All ESLint types are properly typed using `@types/eslint`

### Code Quality Tools
- **Biome**: Primary formatter (2 spaces, double quotes)
- **ESLint**: TypeScript linting with no-type-assertion plugin
- **Oxlint**: Fast additional linting
- **Git Hooks**: Pre-commit hooks via simple-git-hooks and lint-staged

### Testing Requirements
- All new rules must have comprehensive tests
- Tests should cover both valid and invalid cases
- Auto-fix functionality must be tested when implemented

### Release Process
The `prepublishOnly` script ensures the plugin is built before publishing to npm.