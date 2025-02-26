'use strict'

module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:eslint-comments/recommended',
		'plugin:jsdoc/recommended',
		'plugin:promise/recommended'
		// Don't extend unicorn's recommended config because it sets the env and parserOptions
		// Don't extend prettier's recommended config because it sets it to error
	],
	reportUnusedDisableDirectives: true,
	plugins: ['prettier', 'unicorn'],
	rules: {
		// Possible Problems
		'array-callback-return': [2, {allowImplicit: true}],
		'no-await-in-loop': 2,
		'no-cond-assign': 0,
		'no-constant-binary-expression': 2,
		'no-constant-condition': [2, {checkLoops: false}],
		'no-constructor-return': 2,
		'no-inner-declarations': [2, 'both'],
		'no-irregular-whitespace': [2, {skipComments: false}],
		'no-fallthrough': 0,
		'no-promise-executor-return': 2,
		'no-self-compare': 2,
		'no-template-curly-in-string': 1,
		'no-unmodified-loop-condition': 2,
		'no-unsafe-negation': [2, {enforceForOrderingRelations: true}],
		'no-unsafe-optional-chaining': [2, {disallowArithmeticOperators: true}],
		'no-unreachable-loop': 2,
		'no-unused-private-class-members': 1,
		'no-unused-vars': [
			1,
			{
				ignoreRestSiblings: true,
				args: 'all',
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_'
			}
		],
		'require-atomic-updates': 2,
		'use-isnan': [2, {enforceForSwitchCase: true, enforceForIndexOf: true}],

		// Suggestions
		'accessor-pairs': [1, {enforceForClassMembers: true}],
		// https://github.com/prettier/eslint-config-prettier#arrow-body-style-and-prefer-arrow-callback
		'arrow-body-style': 1,
		camelcase: [1, {ignoreGlobals: true}],
		'class-methods-use-this': 2,
		complexity: 1,
		'consistent-return': 2,
		curly: [1, 'multi-or-nest'],
		'default-case-last': 2,
		'default-param-last': 2,
		'dot-notation': 1,
		eqeqeq: [2, 'smart'],
		'func-name-matching': [1, {considerPropertyDescriptor: true}],
		'func-names': [1, 'as-needed'],
		'func-style': 1,
		'grouped-accessor-pairs': [1, 'getBeforeSet'],
		'guard-for-in': 2,
		'id-length': [1, {min: 1, max: 30}],
		'max-depth': 1,
		'max-lines': [1, {max: 500, skipBlankLines: true, skipComments: true}],
		'max-lines-per-function': [
			1,
			{max: 200, skipBlankLines: true, skipComments: true}
		],
		'max-nested-callbacks': 1,
		'max-params': [1, {max: 5}],
		'max-statements': [1, 20, {ignoreTopLevelFunctions: true}],
		'max-statements-per-line': 1,
		'new-cap': [
			1,
			{
				capIsNewExceptions: [
					'AsyncFunction',
					'GeneratorFunction',
					'AsyncGeneratorFunction'
				]
			}
		],
		'no-array-constructor': 1,
		'no-caller': 2,
		'no-else-return': [1, {allowElseIf: false}],
		'no-empty': [1, {allowEmptyCatch: true}],
		'no-empty-function': 1,
		'no-eval': 2,
		'no-extend-native': 2,
		'no-extra-bind': 2,
		'no-extra-semi': 0, // covered by Prettier
		'no-extra-label': 1,
		'no-implicit-globals': 2,
		'no-implied-eval': 2,
		'no-invalid-this': 2,
		'no-iterator': 2,
		'no-label-var': 1,
		'no-labels': [2, {allowLoop: true, allowSwitch: true}],
		'no-lone-blocks': 2,
		'no-lonely-if': 1,
		'no-loop-func': 2,
		'no-multi-assign': 2,
		'no-multi-str': 2,
		'no-negated-condition': 1,
		'no-new': 2,
		'no-new-object': 1,
		'no-new-wrappers': 2,
		'no-octal': 2,
		'no-octal-escape': 2,
		'no-proto': 2,
		'no-redeclare': [2, {builtinGlobals: true}],
		'no-restricted-syntax': [
			2,
			// https://github.com/prettier/eslint-config-prettier#no-sequences
			{
				selector: 'SequenceExpression',
				message: 'Unexpected use of comma operator.'
			},
			{
				selector: 'ForInStatement',
				message: 'Use for (const key of Object.keys(object)) { ... } instead.'
			}
		],
		'no-return-await': 2,
		'no-script-url': 2,
		'no-shadow': [2, {builtinGlobals: true}],
		'no-throw-literal': 2,
		'no-undef-init': 2,
		'no-unneeded-ternary': [2, {defaultAssignment: false}],
		'no-useless-computed-key': [1, {enforceForClassMembers: true}],
		'no-useless-constructor': 1,
		'no-useless-rename': 1,
		'no-unused-expressions': [
			1,
			{allowTernary: true, allowTaggedTemplates: true, enforceForJSX: true}
		],
		'no-unused-labels': 1,
		'no-use-before-define': [2, 'nofunc'],
		'no-useless-call': 2,
		'no-useless-concat': 2,
		'no-useless-return': 1,
		'no-var': 2,
		'no-void': 2,
		'object-shorthand': 1,
		'one-var': [1, {initialized: 'never'}],
		'operator-assignment': 1,
		'prefer-arrow-callback': 1,
		'prefer-const': 2,
		'prefer-destructuring': 1,
		'prefer-exponentiation-operator': 1,
		'prefer-numeric-literals': 2,
		'prefer-object-spread': 1,
		'prefer-promise-reject-errors': 2,
		'prefer-regex-literals': 2,
		'prefer-rest-params': 2,
		'prefer-spread': 2,
		'prefer-template': 2,
		radix: [1, 'as-needed'],
		'require-await': 2,
		'require-unicode-regexp': 2,
		'spaced-comment': [
			1,
			'always',
			{line: {markers: ['/']}, block: {markers: ['*'], balanced: true}}
		],
		strict: 2,
		'symbol-description': 2,
		'vars-on-top': 2,
		yoda: 1,

		// Layout & Formatting
		'lines-between-class-members': [1, 'always', {exceptAfterSingleLine: true}],
		'no-mixed-spaces-and-tabs': 0, // covered by Prettier
		'padding-line-between-statements': [
			1,
			{blankLine: 'always', prev: 'directive', next: '*'},
			{blankLine: 'never', prev: 'directive', next: 'directive'},
			{blankLine: 'always', prev: ['cjs-import', 'import'], next: '*'},
			{
				blankLine: 'never',
				prev: ['cjs-import', 'import'],
				next: ['cjs-import', 'import']
			},
			{blankLine: 'always', prev: ['cjs-export', 'export'], next: '*'},
			{
				blankLine: 'any',
				prev: ['cjs-export', 'export'],
				next: ['cjs-export', 'export']
			},
			{blankLine: 'always', prev: 'function', next: '*'}
		],
		quotes: [1, 'single', {avoidEscape: true}],

		// ESLint Comments
		'eslint-comments/require-description': [1, {ignore: ['eslint-enable']}],

		// JSDoc
		// Can't disable new line at end of 'file' for Prettier
		// https://github.com/prettier/prettier/issues/6360
		// Also https://github.com/eslint/eslint/issues/14745
		/* 'jsdoc/check-examples': [
      1,
      {
        exampleCodeRegex: '/^\\s*```(?:js|ts)\\n([\\s\\S]*)\\n```s*$/ug',
        matchingFileName: 'dummy.md/*.js'
      }
    ], */
		'jsdoc/check-indentation': 1,
		'jsdoc/check-param-names': [1, {checkDestructured: false}],
		'jsdoc/check-syntax': 1,
		'jsdoc/match-description': [
			1,
			{matchDescription: '^([A-Z]|[`\\d_{])[\\s\\S]*[.?!`]\\s*$'}
		],
		'jsdoc/multiline-blocks': 0,
		'jsdoc/no-multi-asterisks': [1, {allowWhitespace: true}],
		'jsdoc/require-description': 1,
		'jsdoc/require-description-complete-sentence': 1,
		'jsdoc/require-hyphen-before-param-description': [1, 'never'],
		'jsdoc/require-param': [1, {checkDestructured: false}],
		'jsdoc/require-throws': 1,
		'jsdoc/require-yields': 1,
		'jsdoc/require-yields-check': [1, {checkGeneratorsOnly: true}],
		'jsdoc/sort-tags': 1,
		'jsdoc/tag-lines': 1,

		// Prettier
		'prettier/prettier': [
			1,
			{
				arrowParens: 'avoid',
				bracketSpacing: false,
				semi: false,
				singleQuote: true,
				trailingComma: 'none',
				useTabs: true
			}
		],

		// Promise
		// then can be used for side effects
		'promise/always-return': 0,
		'promise/catch-or-return': [2, {allowFinally: true}],
		'promise/param-names': 1,
		'promise/prefer-await-to-callbacks': 2,
		'promise/valid-params': 2,

		// Unicorn
		'unicorn/better-regex': 1,
		'unicorn/catch-error-name': 1,
		'unicorn/consistent-destructuring': 1,
		'unicorn/consistent-function-scoping': 1,
		'unicorn/custom-error-definition': 2,
		'unicorn/error-message': 1,
		'unicorn/escape-case': 1,
		'unicorn/expiring-todo-comments': 1,
		'unicorn/new-for-builtins': 1,
		'unicorn/no-array-for-each': 2,
		'unicorn/no-array-method-this-argument': 2,
		'unicorn/no-array-push-push': 1,
		'unicorn/no-console-spaces': 1,
		'unicorn/no-empty-file': 1,
		'unicorn/no-for-loop': 2,
		'unicorn/no-hex-escape': 1,
		'unicorn/no-instanceof-array': 2,
		'unicorn/no-lonely-if': 1,
		'unicorn/no-static-only-class': 2,
		'unicorn/no-thenable': 1,
		'unicorn/no-this-assignment': 2,
		'unicorn/no-unsafe-regex': 2,
		'unicorn/no-unused-properties': 1,
		'unicorn/no-useless-fallback-in-spread': 2,
		'unicorn/no-useless-length-check': 2,
		'unicorn/no-useless-promise-resolve-reject': 2,
		'unicorn/no-useless-spread': 2,
		'unicorn/no-useless-switch-case': 2,
		'unicorn/no-useless-undefined': [1, {checkArguments: false}],
		'unicorn/no-zero-fractions': 1,
		'unicorn/numeric-separators-style': [1, {hexadecimal: {minimumDigits: 7}}],
		'unicorn/prefer-array-find': 2,
		'unicorn/prefer-array-flat': 2,
		'unicorn/prefer-array-flat-map': 2,
		'unicorn/prefer-array-index-of': 2,
		'unicorn/prefer-array-some': 2,
		'unicorn/prefer-code-point': 2,
		'unicorn/prefer-date-now': 2,
		'unicorn/prefer-default-parameters': 2,
		'unicorn/prefer-export-from': 1,
		'unicorn/prefer-includes': 2,
		'unicorn/prefer-logical-operator-over-ternary': 2,
		'unicorn/prefer-math-trunc': 2,
		'unicorn/prefer-modern-math-apis': 2,
		'unicorn/prefer-native-coercion-functions': 2,
		'unicorn/prefer-negative-index': 2,
		'unicorn/prefer-object-from-entries': 2,
		'unicorn/prefer-optional-catch-binding': 1,
		'unicorn/prefer-prototype-methods': 2,
		'unicorn/prefer-reflect-apply': 2,
		'unicorn/prefer-regexp-test': 2,
		'unicorn/prefer-set-has': 2,
		'unicorn/prefer-spread': 1,
		'unicorn/prefer-string-slice': 2,
		'unicorn/prefer-string-starts-ends-with': 2,
		'unicorn/prefer-string-trim-start-end': 1,
		'unicorn/prefer-switch': [1, {emptyDefaultCase: 'no-default-case'}],
		'unicorn/prefer-ternary': 2,
		'unicorn/prefer-type-error': 2,
		'unicorn/relative-url-style': 1,
		'unicorn/throw-new-error': 1
	}
}
