# Contributing to eslint-plugin-zod-import

Thank you for your interest in contributing to eslint-plugin-zod-import! This guide will help you get started.

## Development Setup

### Prerequisites

- Node.js 20.0.0 or higher
- pnpm 10.12.2 or higher

### Installation

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/eslint-plugin-zod-import.git
   cd eslint-plugin-zod-import
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

## Development Workflow

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Code Quality

We use multiple tools to ensure code quality:

```bash
# Run all checks
pnpm check

# Fix auto-fixable issues
pnpm fix

# Individual checks
pnpm bcheck      # Biome check
pnpm oxlint      # Oxlint
pnpm eslint      # ESLint
pnpm typecheck   # TypeScript check
```

### Building

```bash
pnpm build
```

### Development Server

```bash
pnpm dev
```

## Code Standards

### Formatting and Linting

- We use [Biome](https://biomejs.dev/) for formatting
- We use [oxlint](https://oxc.rs/) and [ESLint](https://eslint.org/) for linting
- All code must pass TypeScript type checking

### Testing

- Write tests for new rules and bug fixes
- Tests are located in the `src/` directory alongside the source code
- Use descriptive test names and cover edge cases

### Commit Guidelines

We use conventional commits. Your commit messages should follow this format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build process or auxiliary tool changes

Examples:
```
feat(rules): add new zod-import rule
fix(zod-import): handle dynamic imports correctly
docs: update README with new examples
```

## Creating a New Rule

1. Create the rule file in `src/rules/`
2. Add tests in the same directory
3. Export the rule from `src/index.ts`
4. Update documentation if needed

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Run `pnpm check` to ensure all checks pass
4. Write or update tests as needed
5. Update documentation if applicable
6. Submit a pull request

### Pull Request Requirements

- [ ] All tests pass
- [ ] Code follows the project's style guidelines
- [ ] Documentation is updated if needed
- [ ] Commit messages follow conventional commit format
- [ ] No breaking changes (unless discussed)

## Reporting Issues

When reporting issues, please include:

- Node.js version
- ESLint version
- Plugin version
- Minimal reproduction case
- Expected vs actual behavior

## Code of Conduct

Please be respectful and constructive in all interactions. We welcome contributions from everyone regardless of experience level.

## Getting Help

- Create an issue for bugs or feature requests
- Start discussions for questions or ideas
- Check existing issues before creating new ones

## License

By contributing to eslint-plugin-zod-import, you agree that your contributions will be licensed under the MIT License.