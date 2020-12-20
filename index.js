'use strict';

module.exports = {
	reportUnusedDisableDirectives: true,
	rules: {
		eqeqeq: [
			'error',
			'always'
		],
		indent: [
			'error',
			'tab',
			{
				offsetTernaryExpressions: true,
				SwitchCase: 1,
			}
		],
		semi: [
			'error',
			'always'
		],
	}
};
