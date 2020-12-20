'use strict';

module.exports = {
	reportUnusedDisableDirectives: true,
	rules: {
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'eol-last': [
			'error',
			'always',
		],
		eqeqeq: [
			'error',
			'always',
		],
		indent: [
			'error',
			'tab',
			{
				offsetTernaryExpressions: true,
				SwitchCase: 1,
			},
		],
		'no-extra-semi': 'error',
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
