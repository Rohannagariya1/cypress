import { baseConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...baseConfig,
  {
    ignores: ['index.d.ts', 'index.js', 'test/.mocharc.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'cypress.config.ts', 'client/initCypressTests.js'],
        },
      },
      globals: {
        process: 'readonly',
      },
    },
  },
]
