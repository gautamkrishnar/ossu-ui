'use strict';

let express = require('express');
let router = express.Router();


router.get('login/github/authorize', function(req, res) {
  res.render('index', {
    'script': '/javascript/githubLogin.js',
    'title': 'Logging In',
    'strategy': 'github',
    'loginMsg': 'Logging you in with '
  });
});

module.exports = router;
