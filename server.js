var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.join(__dirname)));

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(3000, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});











/*'use strict';

let express = require('express');
let logger = require('morgan');
let path = require('path');

let app = express();

app.use(logger());
app.use(express.static(path.join(__dirname)));

// app.get('*', )

app.listen(3000, function () {
  console.log('lisening on port 3000');
});
*/