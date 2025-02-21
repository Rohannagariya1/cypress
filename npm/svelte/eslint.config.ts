import { defaultConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...defaultConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'rollup.config.mjs'],
        },
      },
    },
  },
]
