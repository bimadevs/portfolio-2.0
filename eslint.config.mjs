import nextPlugin from "@next/eslint-plugin-next";
import { plugin as shadcn } from "@shadcn/lint";
import tsParser from "@typescript-eslint/parser";

export default [
  { ignores: [".next/", "node_modules/", "out/"] },
  {
    plugins: { "@next/next": nextPlugin },
    rules: { ...nextPlugin.configs["core-web-vitals"].rules },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { shadcn },
  },
];

