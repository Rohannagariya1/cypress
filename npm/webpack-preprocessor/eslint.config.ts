import { defaultConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...defaultConfig,
  {
    ignores: ['__snapshots__/**/*', 'cypress/tests/e2e/compile-error.js', 'test/fixtures/**/*'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['cypress.config.js', 'scripts/test-webpack-5.js'],
        },
      },
      globals: {
        ...globals.node,
      },
    },
  },
]
