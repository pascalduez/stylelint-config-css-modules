# stylelint-config-css-modules

[![npm version][npm-image]][npm-url]
[![CI Status][ci-image]][ci-url]

> CSS modules shareable config for stylelint.

Tweaks [stylelint] rules to accept [css modules] specific syntax.  
This is useful as an override of pre-defined rules, for instance the [stylelint-config-standard].

## Installation

```
npm install stylelint-config-css-modules --save-dev
```

or

```
yarn add stylelint-config-css-modules --dev
```

## Usage

```json
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-css-modules"
  ],
  "rules": {
    [...]
  }
}
```

## Examples

```css
@value colors: './colors.css';
@value primary, secondary from colors;

.base {
  content: 'base';
  color: primary;
}

.composed {
  composes: base;
}

.composedWith {
  compose-with: base;
}

.flexible {
  composes: flex from './utils.css';
  flex-direction: column;
}

:global(.js) .progressive {
  display: block;
}

:export {
  black: #000;
  white: #111;
}
```

## Credits

- [Pascal Duez](https://github.com/pascalduez)

## Licence

stylelint-config-css-modules is [unlicensed](http://unlicense.org/).

[npm-url]: https://www.npmjs.org/package/stylelint-config-css-modules
[npm-image]: http://img.shields.io/npm/v/stylelint-config-css-modules.svg?style=flat-square
[ci-url]: https://github.com/pascalduez/stylelint-config-css-modules/actions/workflows/ci.yml
[ci-image]: https://img.shields.io/github/workflow/status/pascalduez/stylelint-config-css-modules/CI?style=flat-square
[stylelint]: https://github.com/stylelint/stylelint
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[css modules]: https://github.com/css-modules/css-modules
