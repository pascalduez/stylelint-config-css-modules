export default {
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'export',
          'import',
          'global',
          'local',
          'external',
        ],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
        ignoreTypes: ['from'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', 'compose-with'],
        ignoreSelectors: [':export', /^:import/],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['value'],
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['value', 'else'],
      },
    ],
  },
  overrides: [
    {
      files: '**/*.scss',
      plugins: ['stylelint-scss'],
      rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['value'],
          },
        ],
      },
    },
  ],
};
