import baseConfig from '../../eslint.config'
import globals from 'globals'

export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'create-rollup-entry.mjs'],
        },
      },
    },
  },
]
