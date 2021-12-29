module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jquery: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-globals': 'off',
  },
};
