import type { ESLint } from "eslint";
import { zodImportRule } from "./rules/zod-import.js";

const plugin: ESLint.Plugin = {
  meta: {
    name: "eslint-plugin-zod-import",
    version: "0.1.0",
  },
  rules: {
    "zod-import": zodImportRule,
  },
  configs: {
    recommended: {
      plugins: ["zod-import"],
      rules: {
        "zod-import/zod-import": "error",
      },
    },
  },
};

export default plugin;
