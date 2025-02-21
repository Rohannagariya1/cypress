import { defaultConfig } from '../../eslint.config'

export default [
  ...defaultConfig,
  {
    ignores: ['index.d.ts', 'index.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'cypress.config.ts', 'client/moduleCache.js'],
        },
      },
    },
  },
]
