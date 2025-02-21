import { defaultConfig, globals } from '../../eslint.config'

export default [
  ...defaultConfig,
  {
    ignores: ['index.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['script/worker-shim.js'],
        },
      },
    },
  },
  {
    files: ['script/worker-shim.js'],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

  },
]
