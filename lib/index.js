'use strict';

module.exports = {
	rules: {
		'linebreak-style': [2, 'unix'],
		'eol-last': [2],
		'no-trailing-spaces': [2],
		'no-mixed-spaces-and-tabs': [2],
		'no-multiple-empty-lines': [2, {max: 2}],
		'camelcase': [2],
		'new-cap': [2, {newIsCap: true, capIsNew: true}],
		'new-parens': [2],
		'vars-on-top': [2],
		'object-curly-spacing': [2, 'never'],
		'array-bracket-spacing': [2, 'never'],
		'quotes': [2, 'single'],
		'semi': [2, 'always'],
		'no-extra-semi': [2],
		'semi-spacing': [2],
		'comma-style': [2, 'last'],
		'no-spaced-func': [2],
		'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
		'keyword-spacing': [2, {before: true, after: true}],
		'space-in-parens': [2, 'never'],
		'no-multi-spaces': [2],
		'operator-linebreak': [2, 'after'],
		'curly': [2],
		'brace-style': [2],
		'space-before-blocks': [2, 'always'],
		'no-cond-assign': [2],
		'yoda': [2, 'never'],
		'no-duplicate-case': [2],
		'no-unreachable': [2],
		'no-with': [2],
		'eqeqeq': [2],
		'no-unneeded-ternary': [2],
		'space-unary-ops': [2, {words: true, nonwords: false}],
		'no-eval': [2],
		'no-throw-literal': [2],
		'valid-typeof': [2],
		'no-implicit-coercion': [2, {boolean: true, number: true, string: true}],
		'no-multi-str': [2],
		'spaced-comment': [2, 'always'],
		'comma-dangle': [2, 'never'],
		'no-const-assign': 2,
		'no-control-regex': 2,
		'strict': [2, 'global'],
		'accessor-pairs': 2,
		'arrow-body-style': [0, 'as-needed'],
		'arrow-parens': [2, 'always'],
		'arrow-spacing': [2, {'before': true, 'after': true}],
		'comma-spacing': [2, {'before': false, 'after': true}],
		'computed-property-spacing': [2, 'never'],
		'constructor-super': 2,
		'dot-location': [2, 'property'],
		'generator-star-spacing': [2, {'before': false, 'after': true}],
		'handle-callback-err': [2, '^(err|error)$'],
		'callback-return': [2, ['callback', 'cb', 'next']],
		'no-mixed-requires': [2, {'grouping': true}],
		'no-new-require': 2,
		'no-sync': 2,
		'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
		'indent': [2, 'tab', {'SwitchCase': 1}],
		'max-len': 0,
		'no-shadow': 0,
		'no-array-constructor': 2,
		'no-caller': 2,
		'no-class-assign': 2,
		'no-debugger': 2,
		'no-delete-var': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-empty-character-class': 2,
		'no-ex-assign': 2,
		'no-extend-native': 2,
		'no-extra-bind': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-parens': [2, 'functions'],
		'no-fallthrough': 2,
		'no-floating-decimal': 2,
		'no-func-assign': 2,
		'no-implied-eval': 2,
		'no-inner-declarations': [2, 'functions'],
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-iterator': 2,
		'no-label-var': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-native-reassign': 2,
		'no-negated-in-lhs': 2,
		'no-new': 2,
		'no-new-func': 2,
		'no-new-object': 2,
		'no-new-wrappers': 2,
		'no-obj-calls': 2,
		'no-octal': 2,
		'no-octal-escape': 2,
		'no-proto': 2,
		'no-redeclare': [2, {builtinGlobals: false}],
		'no-regex-spaces': 2,
		'no-return-assign': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-shadow-restricted-names': 2,
		'no-sparse-arrays': 2,
		'no-this-before-super': 2,
		'no-undef': 2,
		'no-undef-init': 2,
		'no-unexpected-multiline': 2,
		'no-unused-vars': [2, {'vars': 'all', 'args': 'after-used'}],
		'no-useless-call': 2,
		'no-var': 2,
		'object-shorthand': [2, 'methods'],
		'one-var': [2, {'initialized': 'never'}],
		'prefer-const': 2,
		'prefer-reflect': 0,
		'prefer-arrow-callback': 2,
		'radix': 2,
		'space-infix-ops': 2,
		'use-isnan': 2,
		'wrap-iife': [2, 'any'],
		'complexity': [2, 10],
		'max-params': [2, 5],
		'max-depth': [2, 5],
		'max-statements': [2, 25]
	}
};
