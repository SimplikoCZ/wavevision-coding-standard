module.exports = {
  extends: require.resolve('./ts/eslint'),
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    {
      files: ['postcss.js'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
