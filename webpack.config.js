var path = require('path')

console.log(__dirname)

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
