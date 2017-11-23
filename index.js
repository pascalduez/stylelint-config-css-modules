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
        'compose-with',
      ],
    }],
    'at-rule-no-unknown': [ true, {
      ignoreAtRules: [
        'each',
        'else',
        'extend',
        'for',
        'function',
        'if',
        'include',
        'mixin',
        'return',
        'value',
        'while',
      ],
    }],
  },
};
