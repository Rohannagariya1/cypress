import { defaultConfig } from '../../eslint.config'

export default [
  ...defaultConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: './eslint.tsconfig.json',
      },
    },
  },
  {
    files: ['extension/lib/extension.js'],
  },
  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: {
        sinon: 'readonly',
        global: 'readonly',
        process: 'readonly',
      },
    },
  },
]
