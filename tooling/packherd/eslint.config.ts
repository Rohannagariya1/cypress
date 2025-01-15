import { baseConfig } from '../../eslint.config'

export default [
  ...baseConfig,
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
