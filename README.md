# stylelint-config-css-modules

[![npm version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

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
[travis-url]: https://travis-ci.org/pascalduez/stylelint-config-css-modules?branch=master
[travis-image]: http://img.shields.io/travis/pascalduez/stylelint-config-css-modules.svg?style=flat-square
[stylelint]: https://github.com/stylelint/stylelint
[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[css modules]: https://github.com/css-modules/css-modules
