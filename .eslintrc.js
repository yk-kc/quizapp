module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    curly: 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'eslint-comments/no-unlimited-disable': 'off',
  },
}
