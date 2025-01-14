const fs = require('fs-extra')
const path = require('path')
const { includeTypes } = require('./utils')

// eslint-disable-next-line no-restricted-syntax
fs.removeSync(path.join(__dirname, '..', 'build'))

includeTypes.forEach((folder) => {
  try {
    // eslint-disable-next-line no-restricted-syntax
    fs.removeSync(path.join(__dirname, '..', 'types', folder))
  } catch (e) {
    //
  }
})
