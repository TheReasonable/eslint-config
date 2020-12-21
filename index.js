'use strict';

module.exports = {
	reportUnusedDisableDirectives: true,
	rules: {
		camelcase: 'error',
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		complexity: 'warn',
		curly: [
			'error',
			'all',
		],
		'dot-location': [
			'error',
			'property',
		],
		'dot-notation': 'error',
		'eol-last': [
			'error',
			'always',
		],
		eqeqeq: [
			'error',
			'always',
		],
		'for-direction': 'error',
		indent: [
			'error',
			'tab',
			{
				offsetTernaryExpressions: true,
				SwitchCase: 1,
			},
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'no-extra-semi': 'error',
		'no-implicit-coercion': 'error',
		'no-trailing-spaces': 'error',
		quotes: [
			'error',
			'single',
			{
				allowTemplateLiterals: false,
				avoidEscape: true,
			},
		],
		semi: [
			'error',
			'always',
		],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
	},
};
