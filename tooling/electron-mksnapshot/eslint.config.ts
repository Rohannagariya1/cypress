import { defaultConfig } from '../../eslint.config'

export default [
  ...defaultConfig,
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
