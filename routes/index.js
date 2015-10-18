var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:  'OSSU', });
});

/*Render Homepage with an error message*/
router.get('/error', function(req, res) {
  res.render('index', { errorMsg: req.query.err, title: 'OSS-Uh Oh' } );
});

/*Render the view with a Github Login message and ajax request*/
router.get('/login/github/authorize', function(req, res) {
  res.render('index', {
    'script': '/javascript/githubLogin.js',
    'title': 'Logging In',
    'strategy': 'github',
    'loginMsg': 'Logging you in with '
  });
});

module.exports = router;
