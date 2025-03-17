import baseConfig from '../../eslint.config'
import globals from 'globals'

export default [
  ...baseConfig,
  { ignores: ['test/fixtures/**/*', 'index.js'] },
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
