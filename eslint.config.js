import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
// 3rd party
import stylistic from "@stylistic/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import comments from "eslint-plugin-eslint-comments";
import json from "eslint-plugin-json";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import promise from "eslint-plugin-promise";
// import react from "eslint-plugin-react";
// import hooks from "eslint-plugin-react-hooks";
import * as regexpPlugin from "eslint-plugin-regexp";
import security from "eslint-plugin-security-node";
// import storybook from "eslint-plugin-storybook";

export default tseslint.config(
  // @ts-ignore -- temp
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  // react.configs.recommended,
  regexpPlugin.configs["flat/recommended"],
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
      "**/*.js",
      "**/*.jsx",
      "**/*.json",
      "**/*.mjs",
      "**/*.cjs",
      "**/*.es6",
      "**/*.es",
      "**/*.esm",
      "**/*.node",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021,
        ...globals.browser,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      "@stylistic": stylistic,
      "eslint-comments": comments,
      promise,
      securityNode: security,
      json,
      // storybook,
      // react,
      // "react-hooks": hooks,
    },
    rules: {
      ...json.configs.recommended.rules,
      // ...storybook.rules,
      // ...hooks.configs.recommended.rules,
      // ...react.rules,
      // "react/jsx-uses-react": "error",
      // "react/jsx-uses-vars": "error",
      // "react/react-in-jsx-scope": "off",
      // "react-hooks/rules-of-hooks": "error",
      // "react-hooks/exhaustive-deps": "warn",
      // general
      "no-unused-vars": "off",
      "no-undef": ["error", { typeof: true }],
      "no-constant-condition": ["error", { checkLoops: false }],
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-irregular-whitespace": ["error", { skipComments: true }],
      "no-prototype-builtins": ["error"],
      "no-unreachable": ["error"],
      "no-unsafe-finally": ["error"],
      "no-unused-labels": ["error"],
      "no-useless-escape": ["error"],
      "no-unsafe-negation": ["error"],
      "no-unsafe-optional-chaining": ["error"],
      // complexity: [2],
      "no-useless-catch": ["error"],
      "no-self-compare": ["error"],
      "no-useless-return": ["error"],
      "no-const-assign": ["error"],
      "no-useless-constructor": ["error"],
      "no-param-reassign": ["error"],
      "no-use-before-define": [
        "error",
        { functions: true, classes: true, variables: true },
      ],
      "no-var": ["error"],
      "max-lines": [
        "error",
        { max: 300, skipBlankLines: true, skipComments: true },
      ],
      "max-nested-callbacks": ["error", 15],
      "max-params": ["error", 4],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "prefer-arrow-callback": ["error"],

      // ts
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/member-ordering": "off",
      "@typescript-eslint/no-explicit-any": [
        "error",
        { ignoreRestArgs: false },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": "allow-with-description",
          "ts-nocheck": "allow-with-description",
          "ts-check": "allow-with-description",
          minimumDescriptionLength: 3,
        },
      ],
      "@typescript-eslint/no-redeclare": ["error"],
      // styling
      "@stylistic/keyword-spacing": "error",
      "@stylistic/ts/semi": ["off", null],
      "@stylistic/block-spacing": ["error", "always"],
      "@stylistic/lines-around-comment": [0],
      "@stylistic/lines-between-class-members": ["error", "always"],
      "@stylistic/newline-per-chained-call": ["off"],
      "@stylistic/no-multi-spaces": ["error"],
      "@stylistic/no-multiple-empty-lines": ["error"],
      "@stylistic/func-call-spacing": ["error"],
      "@stylistic/no-whitespace-before-property": ["error"],
      "@stylistic/space-before-blocks": ["error", "always"],
      "@stylistic/spaced-comment": ["error", "always", { markers: ["/"] }],
      "@stylistic/padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "const", next: "*" },
        { blankLine: "always", prev: "*", next: "const" },
        { blankLine: "always", prev: "function", next: "*" },
        { blankLine: "always", prev: "*", next: "function" },
        { blankLine: "always", prev: "if", next: "*" },
        { blankLine: "always", prev: "*", next: "if" },
        { blankLine: "always", prev: "for", next: "*" },
        { blankLine: "always", prev: "*", next: "for" },
        { blankLine: "always", prev: "switch", next: "*" },
        { blankLine: "always", prev: "*", next: "switch" },
        { blankLine: "always", prev: "try", next: "*" },
        { blankLine: "always", prev: "*", next: "try" },
        { blankLine: "always", prev: "export", next: "*" },
        { blankLine: "always", prev: "*", next: "export" },
        { blankLine: "always", prev: "multiline-expression", next: "*" },
      ],
      // comments
      "eslint-comments/require-description": "error",
      "eslint-comments/no-unused-disable": "error",
      // promise
      "promise/always-return": "error",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/catch-or-return": "error",
      "promise/no-native": "off",
      "promise/no-nesting": "warn",
      "promise/no-promise-in-callback": "warn",
      "promise/no-callback-in-promise": "warn",
      "promise/avoid-new": "warn",
      "promise/no-new-statics": "error",
      "promise/no-return-in-finally": "warn",
      "promise/valid-params": "warn",
    },
  },
);
