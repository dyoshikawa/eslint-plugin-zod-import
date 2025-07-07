export default {
  "*.ts": () => ["pnpm typecheck", "pnpm fix"],
  "*.test.ts": () => ["pnpm test"],
  "**/*": ["pnpm exec secretlint"],
};