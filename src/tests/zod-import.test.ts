import { RuleTester } from "eslint";
import { zodImportRule } from "../rules/zod-import.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
});

ruleTester.run("zod-import", zodImportRule, {
  valid: [
    // Default behavior (zod)
    'import { z } from "zod"',
    'import * as z from "zod"',
    'import { z } from "some-other-package"',
    // With explicit variant options
    {
      code: 'import { z } from "zod"',
      options: [{ variant: "zod" }],
    },
    {
      code: 'import { z } from "zod/mini"',
      options: [{ variant: "zod-mini" }],
    },
    {
      code: 'import * as z from "zod"',
      options: [{ variant: "zod" }],
    },
  ],
  invalid: [
    // Default behavior (prefer zod)
    {
      code: 'import { z } from "zod/mini"',
      errors: [
        {
          messageId: "useZod",
          data: { actual: "zod/mini" },
        },
      ],
      output: 'import { z } from "zod"',
    },
    // With explicit variant: zod-mini
    {
      code: 'import { z } from "zod"',
      options: [{ variant: "zod-mini" }],
      errors: [
        {
          messageId: "useZodMini",
          data: { actual: "zod" },
        },
      ],
      output: 'import { z } from "zod/mini"',
    },
    // Star imports
    {
      code: 'import * as z from "zod/mini"',
      errors: [
        {
          messageId: "useZod",
          data: { actual: "zod/mini" },
        },
      ],
      output: 'import * as z from "zod"',
    },
  ],
});
