import { defaultConfig } from '../../eslint.config'

export default [
  ...defaultConfig,
  {
    ignores: ['index.js'],
  },
]
