import { defineConfig } from "cspell";

export default defineConfig({
  version: "0.2",
  language: "en",
  words: [
    "eslint",
    "plugin",
    "zod",
    "import",
    "dyoshikawa",
    "biome",
    "oxlint",
    "secretlint",
    "pnpm",
    "vitest",
    "lint-staged",
    "tsup",
    "tsx",
    "bcheck",
    "prepublish",
    "devdependencies",
    "typecheck",
    "outdir",
    "rootdir",
    "declarationmap",
    "sourcemap",
    "unchecked",
    "exactoptional",
    "workspaces",
    "monorepo",
    "nodenext",
    "tseslint",
    "cspell",
    "codeql",
    "sarif",
    "gitignore",
    "packagejson",
    "tsconfig",
    "versionrc",
    "lintstagedrc",
    "prettierrc",
    "biomejs",
    "oxlintrc",
    "noemit",
    "nodenext",
    "esnext",
    "babelrc",
    "nodemailer",
    "browserslist",
    "polyfill",
    "autoprefixer",
    "postcss",
    "cssnano",
    "stylelint",
    "tailwindcss",
    "nextjs",
    "astro",
    "nuxt",
    "vite",
    "webpack",
    "rollup",
    "esbuild",
    "swc",
    "turbo",
    "turborepo",
    "dockerfile",
    "dockerignore",
    "kubernetes",
    "kubectl",
    "helm",
    "terraform",
    "cloudformation",
    "serverless",
    "netlify",
    "vercel",
    "github",
    "gitlab",
    "bitbucket",
    "workflows",
    "pullrequest",
    "repo",
    "deps",
    "lockfile",
    "changelog",
    "semver",
    "precommit",
    "postinstall",
    "husky",
    "commitlint",
    "conventional",
    "rulesync",
    "rulesgen",
  ],
  ignorePaths: [
    "node_modules/**",
    "dist/**",
    "coverage/**",
    ".git/**",
    "*.min.js",
    "*.min.css",
    "*.map",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "*.log",
  ],
  ignoreRegExpList: [
    "\\b[A-Z][a-z]*[A-Z][a-z]*\\b",
    "\\b[A-Z]{2,}\\b",
    "\\b[a-z]+[A-Z][a-z]*\\b",
    "\\b[0-9]+\\b",
    "\\bv[0-9]+\\.[0-9]+\\.[0-9]+\\b",
    "\\b[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\\b",
    "\\b[a-f0-9]{40}\\b",
    "\\b[a-f0-9]{64}\\b",
    "\\b[A-Za-z0-9+/]{16,}={0,2}\\b",
    "\\b[A-Za-z0-9_-]{20,}\\b",
    "\\b[A-Za-z0-9]{32,}\\b",
    "\\b0x[a-fA-F0-9]+\\b",
    "\\b[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\\b",
    "\\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\\b",
    "\\bhttps?://[^\\s]+\\b",
    "\\bwww\\.[^\\s]+\\b",
    "\\b[a-z]+\\.[a-z]{2,}\\b",
    "\\b[A-Z_][A-Z0-9_]*\\b",
    "\\b[a-z][a-zA-Z0-9]*[A-Z][a-zA-Z0-9]*\\b",
    "\\b[A-Z][a-z]+(?:[A-Z][a-z]+)*\\b",
    "\\b[a-z]+(?:-[a-z]+)*\\b",
    "\\b[a-z]+(?:_[a-z]+)*\\b",
    "\\b[A-Z]+(?:_[A-Z]+)*\\b",
    "\\b[a-z]+(?:\\.[a-z]+)*\\b",
    "\\b[A-Z]+(?:\\.[A-Z]+)*\\b",
    "\\b[a-zA-Z0-9]+\\.[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9_-]+\\.[a-zA-Z0-9_-]+\\b",
    "\\b[a-zA-Z0-9]+@[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+#[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+\\$[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+%[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+&[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+\\*[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+\\+[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+=[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+\\?[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+\\|[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+\\\\[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+/[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+:[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+;[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+,[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+\\.[a-zA-Z0-9]+\\.[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+\\.[a-zA-Z0-9]+\\.[a-zA-Z0-9]+\\.[a-zA-Z0-9]+\\b",
    "\\b[a-zA-Z0-9]+\\.[a-zA-Z0-9]+\\.[a-zA-Z0-9]+\\.[a-zA-Z0-9]+\\.[a-zA-Z0-9]+\\b",
  ],
  allowCompoundWords: true,
  caseSensitive: false,
  checkFilenames: true,
  includeRegExpList: [],
  maxDuplicateProblems: 5,
  maxNumberOfProblems: 10000,
  minWordLength: 4,
  numSuggestions: 8,
  suggestionsTimeout: 5000,
  useGitignore: true,
  validateDirectives: true,
});