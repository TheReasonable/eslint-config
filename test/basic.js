const assert = require('assert');
const { test } = require('uvu');

// cred: Airbnb
// https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/test/requires.js#L7
test('require does not throw', () => {
	assert.doesNotThrow(() => require('../index'));
});

// cred: Standard
// https://github.com/standard/eslint-config-standard/blob/8c5203f7e48177345a7aaf212cb0cb5915880096/test/basic.js#L4
test('config fields are objects', () => {
	const config = require('../index');
	[
		'env',
		'parserOptions',
		'rules',
	].forEach((field) => {
		assert.ok(typeof config[field] === 'object' && config[field] !== null);
	});
});

test.run();
