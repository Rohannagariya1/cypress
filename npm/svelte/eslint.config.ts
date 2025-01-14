import { baseConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...baseConfig,
  {
    files: ['src/mount.ts'],
    rules: {
      'cypress/no-unnecessary-waiting': 'warn',
    }
  }
]