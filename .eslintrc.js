module.exports = {
  extends: ["airbnb", "prettier"],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["svelte3"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      rules: {
        "import/no-extraneous-dependencies": "off",
        "import/no-mutable-exports": "off",
        "import/first": "off",
      },
    },
  ],
  rules: {
    "no-use-before-define": ["error", "nofunc"],
    "import/prefer-default-export": "off",
  },
};
