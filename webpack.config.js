var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    sourceMapFilename: "bundle.js.map"
  },
  devtool: "#inline-source-map",
  module: {
    loaders: [
      { test: /\.js?$/, exclude: '/node_modules/', loader: 'babel-loader' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false,
        semicolons: true
      },
      sourceMap: true
    })
  // ,
  //   new webpack.SourceMapDevToolPlugin({
  //   // asset matching
  //   // file and reference
  //   append: true,

  //   // sources naming

  //   // quality/performance
  //   module: true,
  //   columns: true
  // })
  ]

};
