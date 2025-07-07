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
    'import { z } from "zod/v4-mini"',
    'import { z } from "some-other-package"',
    'import * as z from "zod/v4-mini"',
    {
      code: 'import { z } from "zod/v4"',
      options: [{ version: "zod-v4" }],
    },
    {
      code: 'import { z } from "zod/v4-mini"',
      options: [{ version: "zod-v4-mini" }],
    },
    {
      code: 'import * as z from "zod/v4"',
      options: [{ version: "zod-v4" }],
    },
  ],
  invalid: [
    {
      code: 'import { z } from "zod"',
      errors: [
        {
          messageId: "useZodV4Mini",
          data: { actual: "zod" },
        },
      ],
      output: 'import { z } from "zod/v4-mini"',
    },
    {
      code: 'import { z } from "zod/v4"',
      errors: [
        {
          messageId: "useZodV4Mini",
          data: { actual: "zod/v4" },
        },
      ],
      output: 'import { z } from "zod/v4-mini"',
    },
    {
      code: 'import { z } from "zod"',
      options: [{ version: "zod-v4" }],
      errors: [
        {
          messageId: "useZodV4",
          data: { actual: "zod" },
        },
      ],
      output: 'import { z } from "zod/v4"',
    },
    {
      code: 'import { z } from "zod/v4-mini"',
      options: [{ version: "zod-v4" }],
      errors: [
        {
          messageId: "useZodV4",
          data: { actual: "zod/v4-mini" },
        },
      ],
      output: 'import { z } from "zod/v4"',
    },
    {
      code: 'import * as z from "zod"',
      errors: [
        {
          messageId: "useZodV4Mini",
          data: { actual: "zod" },
        },
      ],
      output: 'import * as z from "zod/v4-mini"',
    },
  ],
});
