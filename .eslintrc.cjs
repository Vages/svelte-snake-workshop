module.exports = {
	root: true,
	extends: ["eslint:recommended", "prettier"],
	plugins: ["svelte3", "import"],
	overrides: [
		{
			files: ["*.svelte"],
			processor: "svelte3/svelte3",
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
	rules: {
		"import/extensions": ["warn", "ignorePackages"],
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
