import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disable no-unused-vars globally
      "react/no-unescaped-entities": "off", // Disable no-unescaped-entities globally
      "@typescript-eslint/no-empty-interface": "off", // Disable no-empty-interface globally
      "@next/next/no-img-element": "off", // Disable no-img-element globally
      "@typescript-eslint/no-empty-object-type": "off"
    },
  },
];

export default eslintConfig;