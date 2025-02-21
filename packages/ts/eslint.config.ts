import { defaultConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...defaultConfig,
  {
    ignores: ['test/.mocharc.js', 'test/fixtures/**/*'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: './eslint.tsconfig.json',
      },
      globals: globals.node,
    },
  },
]
