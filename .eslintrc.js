module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  globals: {
    jestPuppeteer: "readonly",
    page: "readonly",
  },

  overrides: [
    {
      files: ["*.test.?(m|t)js"],
      env: {
        "jest/globals": true,
      },
      plugins: ["jest"],
    },
    {
      files: ["*.ts"],
      extends: "plugin:@typescript-eslint/recommended",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: [
          "./tsconfig.json",
          "./packages/expect-puppeteer/tsconfig.json",
          "./packages/jest-dev-server/tsconfig.json",
          "./packages/jest-environment-server/tsconfig.json",
          "./packages/jest-puppeteer/tsconfig.json",
        ],
        tsconfigRootDir: __dirname,
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
      },
    },
  ],
};
