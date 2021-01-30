module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "no-console": "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-plusplus": "off",
        "no-param-reassign": "off",
        "func-names": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "quotes": "off"
    },
};