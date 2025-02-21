import { defaultConfig } from '../../eslint.config'

export default [
  ...defaultConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['index.js'],
        },
      },
    },
  },
]
