import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { projectStructureParser, projectStructurePlugin } from "eslint-plugin-project-structure";
import { folderStructureConfig } from "./folderStructure.mjs";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  {
    files: [
      "**/*.{js,mjs,cjs,ts,jsx,tsx}",
      // 확장자가 없는 파일
      "**/!(*.*)",
      "**/*.json",
      "**/*.scss",
    ],
    languageOptions: {
      parser: projectStructureParser,
    },
    plugins: {
      "project-structure": projectStructurePlugin,
    },
    rules: {
      "project-structure/folder-structure": ["warn", folderStructureConfig],
    },
  },
);
