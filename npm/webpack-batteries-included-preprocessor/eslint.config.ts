import { defaultConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...defaultConfig,
  { ignores: ['test/fixtures/**/*', 'index.js', 'test/_test-output/**/*'] },
  {
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ['eslint.config.ts'],
      },
    },
    globals: {
      ...globals.node,
    },
  },
},
]
