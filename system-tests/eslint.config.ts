import { defaultConfig } from '../eslint.config'
import globals from 'globals'

export default [
  ...defaultConfig,
  { ignores: ['project-fixtures/**/*', 'projects/**/*', 'lib/validations/**/*', 'lib/fixtureDirs.ts'] },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts'],
        },
      },
      globals: {
        ...globals.node,
        sinon: 'readonly',
        mockery: 'readonly',
        nock: 'readonly',
      },
    },
  },
  {
    rules: {
      'no-console': 'warn',
    },
  },
]
