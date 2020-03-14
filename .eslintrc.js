module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	extends: [
		"prettier",
		"airbnb",
		"airbnb/hooks",
		"prettier/react",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended"
	],
	rules: {
		"react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
		"no-underscore-dangle": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never"
			}
		]
	},
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"]
			}
		}
	}
};
