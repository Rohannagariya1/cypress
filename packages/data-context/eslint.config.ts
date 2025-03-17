import baseConfig from '../../eslint.config'
import globals from 'globals'

export default [
  ...baseConfig,
  {
    ignores: ['index.js'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'scripts/build.js'],
        },
      },
    },
  },
  {
    // this package uses autobarrel, and autobarrel isn't smart enough to understand when
    // it's exporting * from a module that doesn't have any named exports
    rules: {
      'import-x/export': 'warn',
    },
  },
]
