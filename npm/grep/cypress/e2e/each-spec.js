// https://github.com/bahmutov/cypress-each
// eslint-disable-next-line import-x/no-unresolved
import 'cypress-each'

describe('tests that use .each work', () => {
  // creating tests dynamically works with "cypress-grep"
  it.each([1, 2, 3])('test for %d', (x) => {
    expect(x).to.be.oneOf([1, 2, 3])
  })
})
