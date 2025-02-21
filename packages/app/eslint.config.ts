import { combinedReactVueConfig, disabledReactRules } from '../../eslint.config'

export default [
  ...combinedReactVueConfig,
  {
    ignores: ['.__mf__temp/**/*'],
  },
  {
    files: ['src/**/*.{spec,cy}.tsx'],
    rules: disabledReactRules,
  },
]
