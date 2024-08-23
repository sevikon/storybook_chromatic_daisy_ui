import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {languageOptions: {globals: globals.browser}},
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off"
        }
    },
    {
        ignores: [
            // for non-global ignores a full glob pattern is required
            '.next/**/*',
            '/.next/**/*',
        ]
    }, {
        "settings": {
            "react": {
                "pragma": "React",
                "version": "detect"
            },
        }
    }
];