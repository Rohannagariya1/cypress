declare module 'app-studio' {
  export const helloWorld: () => void
  export const triggerAISuggestion: () => void
  export const renderInContainer: (container: HTMLElement, { gql, client }) => void
}
