// @ts-check

import { createFolderStructure } from "eslint-plugin-project-structure";

export const folderStructureConfig = createFolderStructure({
  structure: {
    children: [
      { name: "*" },
      {
        name: "src",
        children: [
          { name: "assets", children: [{ name: "*" }] },

          { name: "pages", ruleId: "component_folder" },
          { name: "layouts", ruleId: "component_folder" },
          { name: "components", ruleId: "component_folder" },

          { name: "apis", ruleId: "api_rule" },
          { name: "stores", ruleId: "store_rule" },
          { name: "routes", ruleId: "ts_rule" },
          { name: "hooks", ruleId: "hook_rule" },
          { name: "utils", ruleId: "ts_rule" },
          { name: "types", ruleId: "ts_rule" },
          { name: "constants", ruleId: "ts_rule" },
          { name: "mocks", ruleId: "json_rule" },

          //tailwind 용
          { name: "lib", children: [{ name: "*" }] },

          { name: "App.tsx" },
          { name: "main.tsx" },
          { name: "index.css" },
          { name: "vite-env.d.ts" },
        ],
      },
    ],
  },
  rules: {
    ts_rule: {
      children: [{ name: "{camelCase}.ts" }],
    },
    api_rule: {
      children: [
        { name: "api", ruleId: "ts_rule" },
        { name: "services", ruleId: "ts_rule" },
        { name: "dtos", ruleId: "ts_rule" },
        { name: "axios.ts" },
      ],
    },
    component_folder: {
      children: [{ name: "{PascalCase}", children: [{ name: "{PascalCase}.tsx" }, { name: "{PascalCase}.scss" }] }],
    },
    hook_rule: {
      children: [{ name: "use{PascalCase}.ts" }],
    },
    store_rule: {
      children: [{ name: "use{PascalCase}Store.ts" }],
    },
    json_rule: {
      children: [{ name: "{camelCase}.json" }],
    },
  },
});
