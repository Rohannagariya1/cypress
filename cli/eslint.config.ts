import path from 'path'
import { defaultConfig, globals } from '../eslint.config'

export default [
  ...defaultConfig,
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: path.join(__dirname, '../packages/ts/tsconfig.json'),
      },
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      '__snapshots__/**/*',
      'angular/**/*',
      'build/**/*',
      'mount-utils/**/*',
      'node_modules/**/*',
      'react/**/*',
      'svelte/**/*',
      'vue/**/*',
      'types/**/*',
    ],
  },
  {
    files: ['test/**/*.{ts,js}'],
    languageOptions: {
      globals: {
        sinon: 'readonly',
        lib: 'readonly',
      },
    },
  },
]
