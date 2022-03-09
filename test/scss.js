const path = require('path');
const test = require('ava');
const stylelint = require('stylelint');

const config = {
  extends: [
    'stylelint-config-recommended-scss',
    path.join(__dirname, '..', 'scss'),
  ],
};

const code = `
@use 'sass:math';

@value grey: #ccc;

.globals {
  composes: global(u-whatsoever);
}

@mixin foo() {
  @content;
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
