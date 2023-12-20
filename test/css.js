import path from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';
import stylelint from 'stylelint';

const dir = new URL('.', import.meta.url).pathname;

const config = {
  extends: ['stylelint-config-standard', path.join(dir, '..', 'index.js')],
};

test('should not results errors nor warnings', async () => {
  const data = await stylelint.lint({
    config,
    files: 'test/*.css',
  });

  const { errored, results } = data;
  const { warnings } = results[0];

  assert.equal(errored, false, 'no errors');
  assert.equal(warnings.length, 0, 'no warnings');
});
