import baseConfig from '../../eslint.config'

export default [
  ...baseConfig,
  {
    ignores: ['app/**/*', 'build/**/*', 'cypress/**/*'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['bin/*.js', 'eslint.config.ts', 'cypress.config.js', 'gulpfile.js', 'index.d.ts', 'index.js', 'lib/*.{js,ts}'],
          maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 10,
        },
      },
    },
  },
]
