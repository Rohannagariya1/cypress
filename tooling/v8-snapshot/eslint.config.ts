import { baseConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...baseConfig,
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
