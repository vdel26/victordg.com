var webpack = require('webpack')

module.exports = {
  entry: './scripts/_source/main.js',
  output: {
      path: './scripts/',
      filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: { presets: ['es2015'] }
      }
    ]
  }
}