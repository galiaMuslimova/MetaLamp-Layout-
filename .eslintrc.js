module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jquery: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-globals': 'off',
  },
};
