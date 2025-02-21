import { defaultConfig } from '../../eslint.config'
import globals from 'globals'

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
      globals: globals.node,
    },
  },
]
