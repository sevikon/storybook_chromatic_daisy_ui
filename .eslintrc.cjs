module.exports = {
  env: {
    browser: true,
    es2024: true
  },
  globals: {
    process: true,
    React: true,
    JSX: true
  },
  ignorePatterns: ['*.md'],
  extends: ['standard', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@next/next/recommended', 'plugin:tailwindcss/recommended', 'plugin:testing-library/react', 'plugin:vitest/recommended', 'plugin:react-hooks/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@stylistic/all-extends', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'simple-import-sort',
    'jsx-a11y',
    'unused-imports',
    'vitest',
    'testing-library',
    '@stylistic',
    '@typescript-eslint'
  ],
  rules: {
    'react/jsx-max-depth': [
      'warn',
      { max: 7 }
    ],
    'react/prop-types': 0,
    'unused-imports/no-unused-imports': 'error',
    'testing-library/prefer-screen-queries': 0,
    'testing-library/no-manual-cleanup': 0,
    indent: 0,
    'react-hooks/exhaustive-deps': 0,
    '@stylistic/indent': [
      'error',
      2
    ],
    '@stylistic/quote-props': [
      'error',
      'as-needed'
    ],
    '@stylistic/quotes': [
      'error',
      'single'
    ],
    '@stylistic/semi': [
      'error',
      'never'
    ],
    '@stylistic/object-curly-spacing': [
      'error',
      'always'
    ],
    '@stylistic/padded-blocks': [
      'error',
      'never'
    ],
    '@stylistic/arrow-parens': [
      'error',
      'as-needed'
    ],
    '@stylistic/dot-location': [
      'error',
      'property'
    ],
    '@stylistic/function-call-argument-newline': [
      'error',
      'never'
    ],
    '@stylistic/object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true }
    ],
    '@stylistic/multiline-ternary': [
      'error',
      'always-multiline'
    ],
    '@stylistic/member-delimiter-style': 'off',
    '@stylistic/no-extra-parens': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react'],
          ['^next'],
          // Themes
          ['^(@/themes)'],
          // Internal packages.
          ['^(@/atoms)(/.*|$)'],
          ['^(@/molecules)(/.*|$)'],
          ['^(@/organisms)(/.*|$)'],
          ['^(@/layouts)(/.*|$)'],
          ['^(@/lib)(/.*|$)'],
          ['^(@/store)(/.*|$)'],
          ['^(@/hooks)(/.*|$)'],
          ['^(@/models)(/.*|$)'],
          ['^(@/utils)(/.*|$)'],
          ['^(@/mocks)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          [
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$'
          ],
          // Other relative imports. Put same-folder imports and `.` last.
          [
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$'
          ],
          // Style imports.
          ['^.+\\.?(css)$']
        ]
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
