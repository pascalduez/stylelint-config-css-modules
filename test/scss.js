const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');
const stylelint = require('stylelint');

const config = {
  extends: ['stylelint-config-standard-scss', path.join(__dirname, '..')],
};

test('should not results errors nor warnings', async () => {
  const data = await stylelint.lint({
    config,
    files: 'test/*.scss',
  });

  const { errored, results } = data;
  const { warnings } = results[0];

  assert.equal(errored, false, 'no errors');
  assert.equal(warnings.length, 0, 'no warnings');
});
