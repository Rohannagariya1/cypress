import baseConfig from '@tooling/eslint-config'
import globals from 'globals'

export default [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals['shared-node-browser'],
        require: 'readonly',
        module: 'readonly',
      },
    },
  },
  {
    files: ['expects/test-npm-module.js', 'src/plugin.js'],
    languageOptions: {
      globals: {
        process: 'readonly',
      },
    },
  },
  // These rules emit many errors in this package
  {
    rules: {
      'import-x/no-unresolved': 'off',
      'import-x/no-duplicates': 'off',
      'import-x/namespace': 'off',
      'import-x/default': 'off',
      'import-x/no-named-as-default': 'off',
    },
  },
]
