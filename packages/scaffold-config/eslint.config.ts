import { defaultConfig } from '../../eslint.config'

export default [
  ...defaultConfig,
  {
    ignores: ['index.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts'],
        },
      },
    },
  },
]
