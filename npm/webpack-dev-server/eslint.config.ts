import { defaultConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...defaultConfig,
  {
    ignores: ['__snapshots__/**/*', 'test/fixtures/compilation-fails.spec.js', 'test/.mocharc.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'cypress.config.ts'],
        },
      },
    },
  },
]
