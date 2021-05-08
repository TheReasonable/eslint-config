# ⭕️ The Reasonable / eslint-config

[![Get from NPM](https://flat.badgen.net/npm/v/@the-reasonable/eslint-config/?icon=npm&labelColor=black&label)](https://www.npmjs.com/package/@the-reasonable/eslint-config)

This [ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) enforces reasonable code style rules for style for JavaScript and TypeScript codebases.
Each rule has a _reason_ why it was added (see [below](#rules)).

## Usage

```sh
npm install --save-dev eslint @the-reasonable/eslint-config
```

```sh
yarn add --dev eslint @the-reasonable/eslint-config
```

Then, in your ESLint config:

```json
{
  "extends": "@the-reasonable"
}
```

## Rules

There are two rules for the rules:

1. Every `--fix`able rule is always an `error`.
2. Every rule has a _reason_ why it was added — you can see them in `index.js`.

## Show the world

Tell everyone you are being Reasonable and put this badge in your docs!

[![The Reasonable code style](https://flat.badgen.net/badge/The%20Reasonable/code%20style/black?labelColor=D6001C)](https://github.com/TheReasonable/eslint-config)

```md
[![The Reasonable code style](https://flat.badgen.net/badge/The%20Reasonable/code%20style/black?labelColor=D6001C)](https://github.com/TheReasonable/eslint-config)
```

```html
<a href="https://github.com/TheReasonable/eslint-config">
  <img src="https://flat.badgen.net/badge/The%20Reasonable/code%20style/black?labelColor=D6001C"
       alt="The Reasonable code style">
</a>
```

## Licence

[BSD-3-Clause](https://spdx.org/licenses/BSD-3-Clause.html) © 2020-2021, Nikita Karamov
