import { defaultConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...defaultConfig,
  { ignores: ['test/.mocharc.js', '__snapshots__/**/*', 'cache/**/*', 'test/fixtures/**/*'] },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'scripts/setup-v8-snapshot-in-cypress.js'],
        },
      },
      globals: {
        ...globals.node,
      },
    },
  },
]
