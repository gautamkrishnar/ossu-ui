app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});

// GET /auth/github
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in GitHub authentication will involve redirecting
//   the user to github.com.  After authorization, GitHubwill redirect the user
//   back to this application at /auth/github/callback
app.get('/auth/github',
  passport.authenticate('github'),
  function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

// GET /auth/github/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3000);


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}





// From the course node auth 




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register',{
  	'title': 'Register'
  });
});

router.get('/login', function(req, res, next) {
  res.render('login',{
  	'title': 'Login'
  });
});



const authenicationSuccess = function () {

	return	router.post('/api/users',function(req, res, next){
				// Get Form Values
				let fname = req.body.fname;
				let lname = req.body.lname;
				let email = req.body.email;
				let github = req.body.github;
				let twitter = req.body.twitter;
				let linkedin = req.body.linkedin;

				// Form Validation
				req.checkBody('fname','First Name is required').notEmpty();
				req.checkBody('lname','Last name is required').notEmpty();
				req.checkBody('email','Email field is required').notEmpty();
				req.checkBody('email','Email not valid').isEmail();
				req.checkBody('github','A github account is required').notEmpty();


				//Sanitize
				req.body.fname;
				req.body.lname;
				req.body.email;
				req.body.github;
				req.body.twitter;
				req.body.linkedin;


				// Check for errors
				var errors = req.validationErrors();

				if(errors){
					res.render('register',{
						errors: errors,
						fname: name,
						lname: lname,
						email: email,
						github: github,
						twitter: twitter,
						linkedin: linkedin
					});
				} else {
					var newUser = new User({
						fname: fname,
						lname: lname,
						email: email,
						github: github,
						password: password,
						profileimage: profileImageName
					});

						// Create User
				User.createUser(newUser, function(err, user){
					if (err) throw err;
					console.log(user);
				});


					// Success Message
					req.flash('success','You are now registered and may log in');

					res.location('/');
					res.redirect('/');
				}
			});

}
module.exports = router;
