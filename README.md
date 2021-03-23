# @nickkaramoff/eslint-config

> A reasonable [ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html).

[![Get from NPM](https://badgen.net/npm/v/@nickkaramoff/eslint-config/?icon=npm&label)](https://www.npmjs.com/package/@nickkaramoff/eslint-config)
[![Get from GitHub](https://badgen.net/github/release/NickKaramoff/eslint-config/?icon=github&label)](https://github.com/NickKaramoff/eslint-config/packages/687214)

This config enforces reasonable code style rules for style for JavaScript and TypeScript codebases.
Each rule has a _reason_ why it was added (see [below](#rules)).

## Usage

```sh
npm install --save-dev eslint @nickkaramoff/eslint-config
```

```sh
yarn add --dev eslint @nickkaramoff/eslint-config
```

Then, in your ESLint config:

```json
{
  "extends": "@nickkaramoff"
}
```

## Rules

There are two rules for the rules:

1. Every `--fix`able rule is always an `error`.
2. Every rule has a _reason_ why it was added — you can see them in `index.js`.

## Show others

Use my ESLint config? Show it with a badge!

[![Code Style: @nickkaramoff](https://badgen.net/badge/code%20style/@nickkaramoff/c23)](https://github.com/NickKaramoff/eslint-config)

```md
[![Code Style: @nickkaramoff](https://badgen.net/badge/code%20style/@nickkaramoff/c23)](https://github.com/NickKaramoff/eslint-config)
```

```html
<a href="https://github.com/NickKaramoff/eslint-config">
  <img src="https://badgen.net/badge/code%20style/@nickkaramoff/c23"
       alt="Code Style: @nickkaramoff">
</a>
```

## Licence

ISC © 2020-2021, Nikita Karamov
