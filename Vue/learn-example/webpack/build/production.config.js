const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge({
  plugins: [
    new uglifyJsPlugin()
  ]
})