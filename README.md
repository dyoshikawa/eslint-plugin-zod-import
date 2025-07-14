# eslint-plugin-zod-import

ESLint plugin to enforce Zod import best practices

## Overview

This plugin enforces the use of `zod` or `zod-mini` imports for better bundle size optimization and clearer module selection.

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

Detects imports from various Zod packages and enforces the use of the appropriate variant. Also automatically converts legacy imports from `zod/v4` and `zod/v4-mini` to the new format.

#### Options

The rule accepts the following options:

```javascript
{
  "zod-import/zod-import": ["error", { "variant": "zod" }]
}
```

- `variant`: Zod variant to use
  - `"zod"` (default): Full-featured version
  - `"zod-mini"`: For minimal bundle size

#### Examples

❌ **Incorrect**:
```javascript
import { z } from 'zod-mini';      // When variant: "zod" (default)
import { z } from 'zod';           // When variant: "zod-mini"
import { z } from 'zod/v4';        // Legacy format
import { z } from 'zod/v4-mini';   // Legacy format
```

✅ **Correct** (default configuration):
```javascript
import { z } from 'zod';
```

✅ **Correct** (when `variant: "zod-mini"` is configured):
```javascript
import { z } from 'zod-mini';
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