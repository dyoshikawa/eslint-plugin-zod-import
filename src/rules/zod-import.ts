import type { Rule } from "eslint";
import type { ImportDeclaration } from "estree";

type ZodVariant = "zod" | "zod-mini";

interface RuleOptions {
  variant: ZodVariant;
}

export const zodImportRule: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce using zod or zod-mini imports",
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          variant: {
            type: "string",
            enum: ["zod", "zod-mini"],
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      useZod: 'Use "zod" instead of "{{actual}}" for full features',
      useZodMini: 'Use "zod/mini" instead of "{{actual}}" for reduced bundle size',
    },
  },

  create(context) {
    const options: RuleOptions | undefined = context.options[0];
    const variant = options?.variant ?? "zod";

    return {
      ImportDeclaration(node: ImportDeclaration) {
        const source = node.source.value;

        if (typeof source !== "string") {
          return;
        }

        // Check if this is a zod-related import (including legacy formats)
        if (source === "zod" || source === "zod/mini") {
          const targetImport = variant === "zod" ? "zod" : "zod/mini";

          // If already using the correct import, skip
          if (source === targetImport) {
            return;
          }

          const messageId = variant === "zod" ? "useZod" : "useZodMini";

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
