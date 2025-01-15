import { baseConfig } from '../../eslint.config'

export default [
  ...baseConfig,
  {
    ignores: ['test/.mocharc.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'index.js', 'scripts/nexus-build.ts', 'test/stubCloudTypes.ts'],
        },
      },
      globals: {
        process: 'readonly',
      },
    },
  },
]
