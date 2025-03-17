import baseConfig from '../../eslint.config'
import path from 'path'
import globals from 'globals'

export default [
  ...baseConfig,
  {
    ignores: ['dist/**'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'rollup.config.mjs'],
        },
        tsconfigRootDir: path.join(__dirname, '.'),

      },
      globals: {
        ...globals.browser,
      },
    },
  },
]
