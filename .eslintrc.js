module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    '@typescript-eslint/indent': [2, 2],
    'indent': ['error', 2],
    'linebreak-style': ['error','unix'],
    'quotes': ['error','single'],
    'no-console': ['warn', { 'allow': ['info', 'error'] }]
  },
  globals: {
        "console": false,
        "document": false
  }
}
