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

### [`comma-dangle: always-multiline`](https://eslint.org/docs/rules/comma-dangle#always-multiline)

Dangling commas at the end of multi-line literals (arrays, objects) can clean up
your git diffs and save your from conflicts.

### [`eqeqeq: always`](https://eslint.org/docs/rules/eqeqeq#always)

`===` is typesafe and will save you tons of headache when comparing things in
JavaScript. `null` is not ignored for consistency.

### [`indent: tab`](https://eslint.org/docs/rules/indent#tab)

Using Tabs lets people choose their desired indent size while keeping the file
size smaller. A double win!

- `offsetTernaryExpressions: true`, because this is more correct visually
- `SwitchCase: 1`, because this increases readability

### [`no-extra-semi: error`](https://eslint.org/docs/rules/no-extra-semi#rule-details)

Extra semicolons are unnecessary and pollute source code.

### [`semi: always`](https://eslint.org/docs/rules/semi#always)

Mandatory semicolons help people make less errors by not making them think about
where JavaScript will automatically insert them.
