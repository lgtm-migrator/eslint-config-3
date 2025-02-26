'use strict'

module.exports = {
	extends: ['plugin:import/recommended'],
	plugins: ['import', 'unicorn'],
	rules: {
		// Static Analysis
		'import/no-absolute-path': 2,
		'import/no-cycle': [2, {ignoreExternal: true}],
		'import/no-dynamic-require': 2,
		'import/no-self-import': 2,
		'import/no-useless-path-segments': 1,
		'import/no-webpack-loader-syntax': 2,

		// Helpful Warnings
		'import/no-deprecated': 1,
		'import/no-mutable-exports': 2,
		'import/no-unused-modules': [1, {unusedExports: true}],

		// Style Guide
		'import/first': 1,
		'import/no-duplicates': 1,
		'import/extensions': 1,
		'import/max-dependencies': [1, {ignoreTypeImports: true}],
		'import/no-named-default': 1,
		'import/no-unassigned-import': [
			1,
			{allow: ['dotenv/config', 'reflect-metadata', '**/*.css']}
		],
		'import/order': [
			1,
			{'newlines-between': 'never', alphabetize: {order: 'asc'}}
		],

		'unicorn/prefer-top-level-await': 2
	}
}
