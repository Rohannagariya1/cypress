import { defaultConfig } from '../../eslint.config'

export default [
  ...defaultConfig,
  { ignores: ['test/.mocharc.js'] },
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
