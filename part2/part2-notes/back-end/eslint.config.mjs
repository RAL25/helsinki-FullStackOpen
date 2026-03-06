import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

// The ESLint version has updated, therefore i wrote the files to ignore in eslint config file
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },

  // Add to ignore build and node_modules files
  {
    rules: {
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-console": 0,
    },
    ignores: ["build/*", "node_modules/*"],
  },
]);
