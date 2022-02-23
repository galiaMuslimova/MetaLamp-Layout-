module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jquery: true,
  },
  extends: [
    'airbnb',
    'plugin:fsd/all',
  ],
  plugins: ['fsd'],
  rules: {
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-globals': 'off',
    'no-unused-vars': 'off'
  },
};
