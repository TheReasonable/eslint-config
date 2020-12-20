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

### [`semi: always`](https://eslint.org/docs/rules/semi#always)

Mandatory semicolons help people make less errors by not making them think about
where JavaScript will automatically insert them.

## Credits

This config was based off of [XO][xo], [Standard][standard] and [Airbnb][airbnb] shareable configs.

[xo]: https://github.com/xojs
[standard]: https://standardjs.com/
[airbnb]: https://github.com/airbnb/javascript
