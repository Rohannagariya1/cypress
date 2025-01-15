import { baseConfig } from '../../eslint.config'

export default [
  ...baseConfig,
  {
    ignores: ['bin/**/*', 'test/fixtures/**/*', 'test/.mocharc.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts'],
        },
      },
    },
  },
]
