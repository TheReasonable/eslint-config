'use strict';

module.exports = {
	reportUnusedDisableDirectives: true,
	rules: {
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
