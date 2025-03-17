import baseConfig from '../../eslint.config'

export default [
  ...baseConfig,
  {
    ignores: ['src/main.scss.d.ts'],
  },
]
