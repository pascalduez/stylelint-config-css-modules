const path = require('path');
const test = require('ava');
const stylelint = require('stylelint');

const config = {
  extends: ['stylelint-config-standard', path.join(__dirname, '..')],
};

const code = `
@value grey: #ccc;
@value colors: "./colors.css";
@value primary, secondary from colors;
@value small as bp-small, large as bp-large from "./breakpoints.css";

.base {
  content: "base";
  color: grey;
}

.composed {
  composes: base;
}

.composed-with {
  compose-with: base;
}

.flexible {
  composes: flex from "./utils.css";
  flex-direction: column;
}

.globals {
  composes: u-whatever from global;
  composes: global(u-whatsoever);
  compose-with: global(u-anything);
}

:global(.js) .progressive {
  display: block;
}

:export {
  black: #000;
  white: #111;
}

:import("./path/to/file.css") {
  alias: keyfromfile;
}

/**
 * Modular CSS
 * https://github.com/tivac/modular-css
 */
.fieldset :external(input from "./input.css") {
  width: 50%;
}
`;

test('should not results errors nor warnings', async t => {
  const data = await stylelint.lint({
    code: code.trimStart(),
    config,
  });

  const { errored, results } = data;
  const { warnings } = results[0];

  t.falsy(errored, 'no errors');
  t.is(warnings.length, 0, 'no warnings');
});
