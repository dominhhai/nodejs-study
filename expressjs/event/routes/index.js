const express = require('express')
const router = express.Router()
const User = require('../model/user')
// var hash = require('../model/pass')

/* GET home page. */
router.get('/', function(req, res, next) {
  var val = { title: 'Express Nodemon' }
  if (req.session.login)
    val.login = req.session.login
  res.render('index', val)
  // hash.hash('1234567', hash.PASSWORD_SALT, function(err, salt){
  // 	console.log(salt)
  // })
})

/* handle login */
router.post('/', function(req, res, next) {
	 User.prototype.login(req.body.username, req.body.password, function(user) {
	 	if (user) {	 		
		 	req.session.user = user
	 		req.session.success = 'Authenticated as ' + user.name
          		+ ' click to <a href="/logout">logout</a>. '
          		+ ' You may now access <a href="/restricted">/restricted</a>.'
          	
          	if (req.session.originalUrl) {
          		var originalPage = req.session.originalUrl
          		delete req.session.originalUrl
          	}

        	res.redirect(originalPage || 'home')
		} else {
		 	req.session.error = 'Authentication failed, please check your username and password.'
      req.session.login = {username: req.body.username, password: req.body.password}
      res.redirect('/')
		}
	})	 
})

/* handle logout */
router.all('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    res.redirect('/')
  })
})

module.exports = router