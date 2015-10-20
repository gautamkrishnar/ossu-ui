'use strict';

let express = require('express');
let router = express.Router();
let request = require('request');

router.get('/error', function(req, res) {
  res.render('/', { error: req.query.err, script: req.query.script + '.js'} );
});


module.exports = router;
