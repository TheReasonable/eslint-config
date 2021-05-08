/*!
 * (c) 2020-2021, Nikita Karamov
 * SPDX-License-Identifier: BSD-3-Clause
 * https://github.com/TheReasonable/eslint-config
 */

const assert = require("assert").strict;
const { ESLint } = require("eslint");
const { test } = require("uvu");

// cred: Standard
// https://github.com/standard/eslint-config-standard/blob/8c5203f7e48177345a7aaf212cb0cb5915880096/test/validate-config.js#L4
test("ESLint config is valid", async () => {
	const cli = new ESLint({
		useEslintrc: false,
		baseConfig: require("../index"),
	});

	// basic code example that should pass the tests
	const code = `const foo = 0;
const bar = {
	baz: 2,
	quux: 222,
};
bar
	.baz = 4;
`;

	assert.equal(
		(await cli.lintText(code))[0].errorCount,
		0,
	);
});

test.run();
