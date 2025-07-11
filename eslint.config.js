import { defineConfig, globalIgnores } from "eslint/config"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import globals from "globals"

export default defineConfig([
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2021,
            },
            parser: tseslint.parser,

            parserOptions: {
                project: "tsconfig.json",
            },
        },

        plugins: {
            "@typescript-eslint": tseslint.plugin,
        },

        rules: {
            "no-empty-function": 0,
            "@typescript-eslint/no-empty-function": 0,
            "@typescript-eslint/no-floating-promises": [
                "error",
                {
                    ignoreIIFE: true,
                },
            ],
            "@typescript-eslint/no-misused-promises": "error",
        },
    },
    globalIgnores([
        "**/node_modules",
        "**/jest.config.eslint",
        "**/eslint.config.js",
    ]),
])
