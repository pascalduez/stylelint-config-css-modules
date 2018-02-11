import path from 'path';
import test from 'ava';
import stylelint from 'stylelint';


const config = {
  extends: [
    'stylelint-config-standard',
    path.join(__dirname, '..'),
  ],
};

const code = `
@value grey: #ccc;
@value colors: './colors.css';
@value primary, secondary from colors;
@value small as bp-small, large as bp-large from './breakpoints.css';

.base {
  content: 'base';
  color: grey;
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

.useSomeGlobal {
  composes: u-whatever from global;
  composes: global(u-whatsoever);
  compose-with: global(u-anything);
}

:global(.js) .progressive {
  display: block;
}
`;

test('should not results errors nor warnings', async t => {
  const data = await stylelint.lint({
    code,
    config,
  });

  const { errored, results } = data;
  const { warnings } = results[0];

  t.falsy(errored, 'no errors');
  t.is(warnings.length, 0, 'no warnings');
});
