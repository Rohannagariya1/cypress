import { baseConfig } from '../eslint.config'
import globals from 'globals'

export default [
  ...baseConfig,
  { ignores: ['project-fixtures/**/*', 'projects/**/*', '/**/*.d.ts'] },
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
