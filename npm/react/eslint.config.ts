import { reactConfig } from '../../eslint.config'

export default [
  ...reactConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['babel.config.js', 'cypress.config.js', 'eslint.config.ts', 'rollup.config.mjs', 'vite.config.ts'],
        },
      },
    },
  },
  {
    rules: {
      'no-console': 'warn',
    },
  },
]
