// import path from 'path';
const path = require('path')

module.exports = {
  mode: 'development',
  watch: true,
  entry: ['./src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist', 'assets', 'js'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        },
      },
    }]
  }
}
