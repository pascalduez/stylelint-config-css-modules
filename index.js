module.exports = {
  'rules': {
    'selector-pseudo-class-no-unknown': [ true, {
      ignorePseudoClasses: [
        'export',
        'import',
        'global',
        'local',
      ],
    }],
    'property-no-unknown': [ true, {
      ignoreProperties: [
        'composes',
      ],
    }],
    'at-rule-no-unknown': [ true, {
      ignoreAtRules: [
        'value',
      ],
    }],
  },
};
