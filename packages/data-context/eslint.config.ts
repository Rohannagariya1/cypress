import { combinedReactVueConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...combinedReactVueConfig,
  {
    ignores: [
      'index.js',
      'test/unit/actions/project/empty.jsx', // this is just an empty file, but vue complains
    ],
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
]
