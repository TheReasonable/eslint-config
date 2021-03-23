"use strict";

module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2021,
	},
	reportUnusedDisableDirectives: true,
	rules: {
		// Consistency is key to code readability. Placing a line break in arrays
		// increases readability, but for arrays like `[1, 2, 3]` it is unnecessary.
		"array-bracket-newline": [
			"error",
			"consistent",
		],

		// camelCase is used by most JavaScript developers. I also find it more
		// beautiful than any other naming convention.
		camelcase: "error",

		// Dangling commas at the end of multi-line literals (arrays, objects) can
		// clean up your git diffs and save your from merge conflicts.
		"comma-dangle": [
			"error",
			"always-multiline",
		],

		// Reducing the cyclomatic complexity of the code improves readability and
		// reduces error risk. This is not an enforcement, but a recommendation.
		complexity: "warn",

		// Not using curly braces in `if`, `while` and other statements decreases
		// code readability significantly. Nesting is fine, but I go for consistency
		// in code.
		curly: [
			"error",
			"all",
		],

		// When the attribute dot is placed after the object, the subsequent
		// property name on the new line seems out of place. Placing the dot at the
		// property increases readability. Seeing, that there is neither a dot nor a
		// semicolon near the object tells us to look at the next line, where the
		// dot will explain the reason for the line break.
		"dot-location": [
			"error",
			"property",
		],

		// It's cleaner and more correct to access an object's properties via a dot.
		// If you use JS objects as dictionaries, don't — there is a `Map` for that.
		"dot-notation": "error",

		// Add an EOL at the end of the files to be able to concatenate them easily
		// or output them to terminal without errors.
		"eol-last": [
			"error",
			"always",
		],

		// `===` is typesafe and will save you tons of headache when comparing
		// things in JavaScript. `null` is not ignored for consistency.
		eqeqeq: [
			"error",
			"always",
		],

		// Saves you from `for` loops that run forever because of a faulty counter.
		"for-direction": "error",

		// Using Tabs lets people choose their desired indent size while keeping
		// the file size smaller. A double win!
		//
		// - `offsetTernaryExpressions: true`, because this is more clear visually
		// - `SwitchCase: 1`, because this increases readability
		indent: [
			"error",
			"tab",
			{
				offsetTernaryExpressions: true,
				SwitchCase: 1,
			},
		],

		// Unix-style linebreaks are cleaner and take less space. IMO, LF should be
		// a standard for line endings (and it de facto is). Every major editor
		// (even notepad.exe) supports it as of 2021.
		"linebreak-style": [
			"error",
			"unix",
		],

		// Extra semicolons are unnecessary and pollute source code.
		"no-extra-semi": "error",

		// Shorthands like `!!foo` and `+bar` for type casting can be clean
		// at the first glance but they are unclear, especially for the beginners.
		"no-implicit-coercion": "error",

		// Trailing spaces are useless and only take space.
		"no-trailing-spaces": "error",

		// A lesson from Java and C: single quotes are for chars, double quotes are
		// for strings. Since we don't have chars in JS, double quotes all the way
		// it is!
		//
		// - `allowTemplateLiterals: false`, because it's unnecessary when you don't
		//   use interpolation
		// - `avoidEscape: true`, because escaping is ugly
		quotes: [
			"error",
			"double",
			{
				allowTemplateLiterals: false,
				avoidEscape: true,
			},
		],

		// Mandatory semicolons help people make less errors by not making them
		// think about where JavaScript will automatically insert them.
		semi: [
			"error",
			"always",
		],

		// Spaces are only allowed after semicolons, just like in written languages.
		"semi-spacing": [
			"error",
			{
				before: false,
				after: true,
			},
		],

		// IIFEs can be confusing, but wrapping the function separately from the
		// call (and `Function`'s methods) is IMO the cleanest solution.
		//
		// - `functionPrototypeMethods: true`, because methods of `Function` are,
		//   just like the function calls, separate from the function body.
		"wrap-iife": [
			"error",
			"inside",
			{
				functionPrototypeMethods: true,
			},
		],

		// Yoda-style conditions are unnatural for the English language (which JS is
		// based on).
		yoda: "error",
	},
};
