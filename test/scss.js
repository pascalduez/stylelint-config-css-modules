import path from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';
import stylelint from 'stylelint';

const config = {
  extends: [
    'stylelint-config-standard-scss',
    path.join(import.meta.dirname, '..', 'index.js'),
  ],
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
