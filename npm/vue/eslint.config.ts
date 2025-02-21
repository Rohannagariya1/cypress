import { vueConfig } from '../../eslint.config'

export default [
  ...vueConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts', 'cypress.config.ts', 'vite.config.ts', 'webpack.config.js', 'rollup.config.mjs'],
        },
      },
    },
  },
]
