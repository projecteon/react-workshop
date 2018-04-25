const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test:  /\.ts|\.tsx$/,
        include: __dirname,
        exclude: /node_modules/,
        use: ['babel-loader', 'awesome-typescript-loader']
      }
    ]
  }
}
