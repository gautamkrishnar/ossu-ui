module.exports = {
  entry: './public/javascript/index.js',
  output: {
    path: __dirname,
    filename: '/public/javascript/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel?cacheDirectory' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
