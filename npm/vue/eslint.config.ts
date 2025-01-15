import { baseConfig } from '../../eslint.config'
import ts from 'typescript-eslint'
import globals from 'globals'

export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'cypress.config.ts', 'vite.config.ts', 'webpack.config.js', 'rollup.config.mjs'],
        },
      },
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
]
