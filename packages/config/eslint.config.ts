import { defaultConfig } from '../../eslint.config'

export default [
  ...defaultConfig,
  {
    ignores: ['**/__babel_fixtures__/**/*', 'index.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts'],
        },
      },
      globals: {
        exports: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
  },
]
