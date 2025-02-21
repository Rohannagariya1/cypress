import { defaultConfig } from '../../eslint.config'
import globals from 'globals'

export default [
  ...defaultConfig, {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
