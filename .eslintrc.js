/* eslint-env node */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		indent: ["warn", "tab"],
		"linebreak-style": "off",
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-unused-vars": ["warn"],
		"prettier/prettier": [
			"error",
			{
				semi: true,
				useTabs: true,
			},
		],
	},
};
