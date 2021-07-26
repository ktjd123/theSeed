module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
