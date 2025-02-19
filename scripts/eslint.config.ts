import baseConfig from '@tooling/eslint-config'
import globals from 'globals'

export default [
  ...baseConfig,
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
]
