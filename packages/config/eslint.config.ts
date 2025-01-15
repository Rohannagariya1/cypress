import { baseConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...baseConfig,
  {
    ignores: ['**/__babel_fixtures__/**/*'],
  },
  {
    languageOptions: {
      globals: {
        exports: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
  },
]
