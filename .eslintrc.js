module.exports = {
    root: true,
    extends: "@react-native-community",
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
                "react/prop-types": "off",
                "react/react-in-jsx-scope": "off",
                indent: [
                    "error",
                    4,
                    {
                        SwitchCase: 1,
                        ignoredNodes: ["ConditionalExpression"],
                        offsetTernaryExpressions: true,
                    },
                ],
                "react/jsx-uses-vars": [2],
                "react/display-name": "off",
                "comma-spacing": [
                    "error",
                    {
                        before: false,
                        after: true,
                    },
                ],
                "space-infix-ops": "error",
                "no-mixed-spaces-and-tabs": 0,
                "no-cond-assign": ["error", "always"],
                "no-dupe-args": "error",
                "no-dupe-keys": "error",
                "no-empty": [
                    "error",
                    {
                        allowEmptyCatch: true,
                    },
                ],
                "no-extra-parens": "off",
                "no-irregular-whitespace": "error",
                "no-template-curly-in-string": "error",
                "no-var": "error",
                "init-declarations": ["error", "always"],
                "no-constant-condition": "off",
                eqeqeq: ["error", "always"],
                "no-async-promise-executor": "off",
                "no-undef": "off",
                "no-unused-vars": ["error", { vars: "all", args: "none" }],
                "@typescript-eslint/no-explicit-any": "off",
                quotes: "none",
                semi: "off",
            },
        },
    ],
}
