'use strict';

module.exports = {
	reportUnusedDisableDirectives: true,
	rules: {
		'comma-dangle': [
			'error',
			'always-multiline',
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
		semi: [
			'error',
			'always',
		],
	},
};
