module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:mocha/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'mocha', 'eslint-plugin-import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
    react: {
      // Dummy value to keep eslint quiet
      version: '16.3',
    }
  },
  rules: {
    "prettier/prettier": ["error", { "endOfLine":"auto" }],
    'import/no-extraneous-dependencies': [
      "error", {
        devDependencies: [
          '**/*.spec.ts',
          '**/tests/**/*.ts',
          'tasks/ReleaseFlowVersion/lib/GitGraphTestHelper.ts',
          'tools/**/*.js',
          'gulpfile.js'
        ]
      }
    ],
    '@typescript-eslint/indent': [2, 2],
    'linebreak-style': ["error", (require("os").EOL === "\r\n" ? "windows" : "unix")],
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    'import/extensions': [ 'error', { ts: 'ignorePackages' }],
    'no-plusplus': 'off',
    'no-continue': 'off',
    'max-len': ['error', { code: 120, comments: 120 }],
    'object-curly-newline': 0
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      files: ['*.spec.ts'],
      rules: {
        'prefer-arrow-callback': 0,
        'mocha/prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
        'func-names': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'no-unused-expressions': 0
      }
    }
  ],
  env: {
    node: true,
    mocha: true,
  }
};
