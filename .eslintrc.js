module.exports = {
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
        "prefer-const": "off",
      },
      settings: {
        "svelte3/ignore-warnings": (output) => {
          if (output.code === "css-unused-selector") {
            return true;
          }
          return false;
        },
      },
    },
  ],
  rules: { "no-use-before-define": ["error", "nofunc"] },
};
