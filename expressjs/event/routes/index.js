const express = require('express')
const router = express.Router()
const User = require('../model/user')
// var hash = require('../model/pass')

/* GET login page. */
router.get('/', function(req, res, next) {
  var val = { title: 'Express Nodemon' }
  if (req.session.login)
    val.login = req.session.login
  res.render('index', val)  
})

/* handle login */
router.post('/', function(req, res, next) {
	 User.login(req.body.username, req.body.password, function(user) {
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

/* GET register page. */
router.get('/register', function(req, res, next) {
  // logged-in user should not do this task
  if (req.session.user) return res.redirect('/home')
  res.render('register', {title: 'User Registration'})
})

/* handle register */
router.post('/register', function(req, res, next) {
  var data = req.body
  if (data.password !== data.repassword) {
    return res.redirect('/register')
  }

  User.find({name: data.username}, function(user) {
    if (user) {
      return res.redirect('/register')
    }
    User.hash(data.password, function(password) {
      User.register({name: data.username, pass: password}, function(result) {
        if (result) {
          return res.redirect('/')
        }
        res.redirect('/register')
      })      
    })
  })
})

module.exports = router