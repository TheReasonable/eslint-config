# @nickkaramoff/eslint-config

> My own [shareable ESLint config](https://eslint.org/docs/developer-guide/shareable-configs.html).

This config enforces reasonable code style rules for style for JavaScript and
TypeScript codebases.
Each rule has a _reason_ why it was added
(see [below](#rules)).

## Usage

```sh
npm install --save-dev @nickkaramoff/eslint-config
```

```sh
yarn add --dev @nickkaramoff/eslint-config
```

Then, in your ESLint config:

```json
{
  "extends": "@nickkaramoff"
}
```

## Rules

Every `--fix`able rule is always an `error`.

### [`camelcase`](https://eslint.org/docs/rules/camelcase#rule-details)

camelCase is used by most JavaScript developers. I also find it more beautiful
than any other naming convention.

### [`comma-dangle: always-multiline`](https://eslint.org/docs/rules/comma-dangle#always-multiline)

Dangling commas at the end of multi-line literals (arrays, objects) can clean up
your git diffs and save your from conflicts.

### [`complexity`](https://eslint.org/docs/rules/complexity#rule-details)

Reducing the cyclomatic complexity of the code improves readability and reduces
error risk. This is not an enforcement though, but a recommendation.

### [`curly: all`](https://eslint.org/docs/rules/curly#all)

Not using curly braces in `if`, `while` and other statements decreases the code
readability significantly. Nesting is fine, but I go for consistency in code.

### [`dot-location: property`](https://eslint.org/docs/rules/dot-location#property)

When the attribute dot is placed after the object, the subsequent property name
on the new line seems out of place. Placing the dot at the property increases
readability. Seeing, that there is neither a dot nor a semi near the object
tells us to look at the next line, where the dot will explain the reason for the
line break.

### [`dot-notation`](https://eslint.org/docs/rules/dot-notation#rule-details)

It is cleaner and more correct to access an object's properties via a dot. If
you use JS objects as dictionaries, don't — there is a `Map` for that.

### [`eol-last: always`](https://eslint.org/docs/rules/eol-last#rule-details)

Add an EOL at the end of the files to be able to concatenate them easily or
output them to terminal without errors.

### [`eqeqeq: always`](https://eslint.org/docs/rules/eqeqeq#always)

`===` is typesafe and will save you tons of headache when comparing things in
JavaScript. `null` is not ignored for consistency.

### [`for-direction`](https://eslint.org/docs/rules/for-direction#rule-details)

Saves you from `for` loops that run endlessly because of a faulty counter.

### [`indent: tab`](https://eslint.org/docs/rules/indent#tab)

Using Tabs lets people choose their desired indent size while keeping the file
size smaller. A double win!

- `offsetTernaryExpressions: true`, because this is more correct visually
- `SwitchCase: 1`, because this increases readability

### [`linebreak-style: unix`](https://eslint.org/docs/rules/linebreak-style#unix)

Unix-style linebreaks are cleaner and take less space. IMO, LF should be a
standard for line endings (and it _de facto_ is). Every major editor (even
notepad.exe) supports it as of 2020.

### [`no-extra-semi`](https://eslint.org/docs/rules/no-extra-semi#rule-details)

Extra semicolons are unnecessary and pollute source code.

### [`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces#rule-details)

Trailing spaces are useless and only take space.

### [`quotes: single`](https://eslint.org/docs/rules/quotes#single)

Single quotes are easier to type and look cleaner.

- `allowTemplateLiterals: false`, because it's unnecessary when you don't use
  interpolation
- `avoidEscape: true`, because escaping looks even less clean than double quotes

### [`semi: always`](https://eslint.org/docs/rules/semi#always)

Mandatory semicolons help people make less errors by not making them think about
where JavaScript will automatically insert them.

### [`semi-spacing`](https://eslint.org/docs/rules/semi-spacing#before-false-after-true)

Spaces are only allowed after semicolons, just like in written languages.
