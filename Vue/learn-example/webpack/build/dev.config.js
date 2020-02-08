const webpackMerge = require('webpack-merge')

module.exports = webpackMerge({
  devServer: {
    contentBase: './dist',
    inline: true
  }
})