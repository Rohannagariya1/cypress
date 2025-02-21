import { vueConfig, globals } from '../../eslint.config'

export default [
  ...vueConfig,
  {
    ignores: ['**/generated/**/*'],
  },
  {
    files: ['index.js'],
    languageOptions: {
      globals: {
        process: 'readonly',
      },
    },
  },
  {
    files: ['script/**/*'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
