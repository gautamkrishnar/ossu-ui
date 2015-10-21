// var path = require('path');
var express = require('express');
var rewrite = require('express-urlrewrite');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var logger = require('morgan');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: '/__build__/',
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(logger('dev'));

// var fs = require('fs');

// fs.readdirSync(__dirname).forEach(function (file) {
//   if (fs.statSync(path.join(__dirname, file)).isDirectory()) {
//     console.log('I am entering the if statement');
//     console.log('rewriting /' + file + '/* to /index.html');
//     app.use(rewrite('/' + file + '/*', '/index.html'));
//   }
// });

app.use(rewrite('/authorize/*', '/index.html'));
app.use(express.static(__dirname));
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});

/* 'use strict';

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
