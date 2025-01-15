import { baseConfig } from '../../eslint.config'

export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: './eslint.tsconfig.json',
      },
      globals: {
        sinon: 'readonly',
      },
    },
  },
]
