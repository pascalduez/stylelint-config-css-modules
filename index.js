module.exports = {
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
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['global'],
      },
    ],
  },
  overrides: [
    {
      files: '**/*.scss',
      rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['value'],
          },
        ],
        'function-no-unknown': null,
        // https://github.com/stylelint-scss/stylelint-scss/pull/591
        // 'scss/function-no-unknown': [
        //   true,
        //   {
        //     ignoreAtRules: ['global'],
        //   },
        // ],
      },
    },
  ],
};
