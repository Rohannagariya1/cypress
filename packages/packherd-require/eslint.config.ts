import { defaultConfig } from '../../eslint.config'

export default [
  ...defaultConfig,
  {
    ignores: ['test/.mocharc.js', 'test/fixtures/**/*'],
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
