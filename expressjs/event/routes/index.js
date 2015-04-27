const express = require('express')
const router = express.Router()
const User = require('../model/user')
// var hash = require('../model/pass')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Nodemon' });
  // hash.hash('1234567', hash.PASSWORD_SALT, function(err, salt){
  // 	console.log(salt)
  // })
})

/* handle login */
router.post('/', function(req, res, next) {
	 User.prototype.login(req.body.username, req.body.password, function(user) {
	 	if (user) {
	 		console.log(user)
		 	req.session.regenerate(function() {
		 		// Store the user's primary key
		 		// in the session store to be retrieved
		 		// or in the case the entire user object
		 		req.session.user = user
		 		req.session.success = 'Authenticated as ' + user.name
	          		+ ' click to <a href="/logout">logout</a>. '
	          		+ ' You may now access <a href="/restricted">/restricted</a>.';
	          	
	          	if (req.session.originalUrl) {
	          		var originalPage = req.session.originalUrl
	          		delete req.session.originalUrl
	          	}

	        	res.redirect(originalPage || 'home')
		 	})
		} else {
		 	req.session.error = 'Authentication failed, please check your '
	        	+ ' username and password.'
	        	+ ' (use "tj" and "foobar")';
	      	res.redirect('/');
		}
	})	 
})

module.exports = router