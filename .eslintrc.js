module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint',
    'jest'
  ],
  extends: ["airbnb-base",
    "airbnb-typescript/base",
    'plugin:jest/recommended'
  ],
  env: {
    'jest': true
  },
};
