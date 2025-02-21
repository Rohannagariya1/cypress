import { defaultConfig } from '../../eslint.config'

export default [
  ...defaultConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['index.ts', 'eslint.config.ts', 'cypress.config.ts', 'webpack.config.ts'],
        },
      },
    },
  },
]
