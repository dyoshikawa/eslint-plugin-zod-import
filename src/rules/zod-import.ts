import type { Rule } from "eslint";
import type { ImportDeclaration } from "estree";

type ZodVersion = "zod-v4" | "zod-v4-mini";

interface RuleOptions {
  version: ZodVersion;
}

export const zodImportRule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce using zod/v4 or zod/v4-mini instead of zod",
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          version: {
            type: "string",
            enum: ["zod-v4", "zod-v4-mini"],
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      useZodV4: 'Use "zod/v4" instead of "{{actual}}" for better compatibility',
      useZodV4Mini: 'Use "zod/v4-mini" instead of "{{actual}}" for reduced bundle size',
    },
  },

  create(context) {
    const options: RuleOptions | undefined = context.options[0];
    const version = options?.version ?? "zod-v4-mini";

    return {
      ImportDeclaration(node: ImportDeclaration) {
        const source = node.source.value;

        if (typeof source !== "string") {
          return;
        }

        if (source === "zod" || source === "zod/v4" || source === "zod/v4-mini") {
          const targetImport = version === "zod-v4" ? "zod/v4" : "zod/v4-mini";

          if (source === targetImport) {
            return;
          }

          const messageId = version === "zod-v4" ? "useZodV4" : "useZodV4Mini";

          context.report({
            node: node.source,
            messageId,
            data: {
              actual: source,
            },
            fix(fixer) {
              return fixer.replaceText(node.source, `"${targetImport}"`);
            },
          });
        }
      },
    };
  },
};
