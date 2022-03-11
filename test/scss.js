const path = require('path');
const test = require('ava');
const stylelint = require('stylelint');

const config = {
  extends: ['stylelint-config-standard-scss', path.join(__dirname, '..')],
};

test('should not results errors nor warnings', async t => {
  const data = await stylelint.lint({
    config,
    files: 'test/*.scss',
  });

  const { errored, results } = data;
  const { warnings } = results[0];

  t.falsy(errored, 'no errors');
  t.is(warnings.length, 0, 'no warnings');
});
