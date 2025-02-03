# `plugin-accessibility-warnings`

This is a Cypress plugin to provide some warnings about potential accessibility issues in applications you test with Cypress.

## How it works

This package adds a check to each interaction you carry out in Cypress, similar to our existing actionability checks. If an element is interacted with in a way that doesn't appear to match the markup for that element, this can be detected and flagged. Most traditional forms of accessibility scans rely on HTML semantics to determine how an element is used, and non-semantic elements can escape this analysis. For this reason, information about how the elements are used, such as how you treat the elements in your tests.
