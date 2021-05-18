const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'client', 'dist'),
    open: true,
    clientLogLevel: 'silent',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'client', 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults"
              }],
              '@babel/preset-react'
            ]
          }
        }, {
          loader: 'eslint-loader',
          options: {
            fix: true
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js','.jsx']
  }
}
