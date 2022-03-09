module.exports = {
  extends: './',
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['value'],
      },
    ],
  },
};
