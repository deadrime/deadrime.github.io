import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("plugin:prettier/recommended"),

  ...compat.extends("plugin:@typescript-eslint/recommended"),

  importPlugin.flatConfigs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ...react.configs.flat.recommended,
  },
  {
    files: ["**/*.{ts,tsx}"],
    ...react.configs.flat["jsx-runtime"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      react: {
        version: "detect",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-unused-vars": [
        1,
        {
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-namespace": 0,
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
        },
      ],

      "react/prop-types": 0,
      "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
      "react/jsx-no-useless-fragment": "warn",

      "prettier/prettier": [
        "warn",
        {
          singleQuote: true,
        },
      ],

      "import/prefer-default-export": "off",
      "import/no-unresolved": "error",
      "import/no-named-as-default-member": 0,
      "import/no-named-as-default": 0,
      "import/no-unresolved": 0,
    },
  },

  {
    ignores: ["**/node_modules/**", "**/dist/**", ".content-collections"],
  },
];

export default eslintConfig;
