const { override, addBabelPlugin } = require('customize-cra')
const { injectBabelPlugin } = require('react-app-rewired')

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathPrefix: '@',
      rootPathSuffix: 'src'
    }
  ])
)
