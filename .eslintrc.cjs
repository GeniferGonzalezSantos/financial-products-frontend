module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',

    // React
    'react/react-in-jsx-scope': 'off', // Vite + React 17+
    'react/prop-types': 'off', // usamos TS

    // TypeScript
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_' },
    ],

    // Qualidade de código
    'no-console': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
