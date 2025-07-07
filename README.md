# eslint-plugin-zod-import

ESLint plugin to enforce Zod import best practices

## Overview

This plugin enforces the use of `zod/v4` or `zod/v4-mini` instead of the legacy `zod` package when importing the Zod library.

## Installation

```bash
npm install --save-dev eslint-plugin-zod-import
```

```bash
pnpm add -D eslint-plugin-zod-import
```

```bash
yarn add -D eslint-plugin-zod-import
```

## Configuration

### Basic Configuration

```javascript
// eslint.config.js
import zodImport from 'eslint-plugin-zod-import';

export default [
  {
    plugins: {
      'zod-import': zodImport,
    },
    rules: {
      'zod-import/zod-import': 'error',
    },
  },
];
```

### Recommended Configuration

```javascript
// eslint.config.js
import zodImport from 'eslint-plugin-zod-import';

export default [
  {
    plugins: {
      'zod-import': zodImport,
    },
    rules: {
      ...zodImport.configs.recommended.rules,
    },
  },
];
```

## Rules

### `zod-import/zod-import`

Detects imports from `zod` or `zod/v4` and enforces the use of the appropriate version.

#### Options

The rule accepts the following options:

```javascript
{
  "zod-import/zod-import": ["error", { "version": "zod-v4-mini" }]
}
```

- `version`: Zod version to use
  - `"zod-v4-mini"` (default): For minimal bundle size
  - `"zod-v4"`: Full-featured version

#### Examples

❌ **Incorrect**:
```javascript
import { z } from 'zod';
import { z } from 'zod/v4';
```

✅ **Correct** (default configuration):
```javascript
import { z } from 'zod/v4-mini';
```

✅ **Correct** (when `version: "zod-v4"` is configured):
```javascript
import { z } from 'zod/v4';
```

## Auto-fix

This plugin provides auto-fix functionality. You can use ESLint's `--fix` option to automatically correct import statements.

```bash
eslint --fix your-file.js
```

## Development

### Setup

```bash
pnpm install
```

### Run Tests

```bash
pnpm test
```

### Build

```bash
pnpm build
```

### Lint Check

```bash
pnpm check
```

## License

MIT

## Contributing

Bug reports and pull requests are welcome. Please feel free to report any issues via [Issues](https://github.com/dyoshikawa/eslint-plugin-zod-import/issues).