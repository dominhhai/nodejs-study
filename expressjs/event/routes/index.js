const express = require('express')
const router = express.Router()
const User = require('../model/user')

/* GET login page. */
router.get('/', function(req, res, next) {
  var val = { title: 'Express Nodemon' }
  if (req.session.login) {
    val.login = req.session.login
    delete req.session.login
  }
  res.render('index', val)
})

/* handle login */
router.post('/', function(req, res, next) {
	 User.login(req.body.username, req.body.password, function(user) {
	 	if (user) {	 		
		 	req.session.user = user

    	if (req.session.originalUrl) {
    		var originalPage = req.session.originalUrl
    		delete req.session.originalUrl
    	}

  	  res.redirect(originalPage || 'home')
		} else {
		 	req.session.error = 'Authentication failed, please check your username and password.'
      req.session.login = { username: req.body.username, password: req.body.password }
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
  var context = {title: 'User Registration'}
  if (req.session.login) {
    context.login = req.session.login
    delete req.session.login
  }
  res.render('register', context)
})

/* handle register */
router.post('/register', function(req, res, next) {
  var data = req.body
  if (data.password !== data.repassword) {
    req.session.error = 'Password is not consistent. Please type password again.'
    req.session.login = { username: data.username }
    return res.redirect('/register')
  }

  User.find({ name: data.username }, function(user) {
    if (user) {
      req.session.error = 'This user is already registered, please use other name.'
      return res.redirect('/register')
    }
    User.hash(data.password, function(password) {
      User.register({name: data.username, pass: password}, function(result) {
        
        req.session.login = { username: data.username }

        if (result) {
          req.session.success = 'Register Successfully'                    
          return res.redirect('/')
        }
        req.session.error = 'Register Error! Please try again'
        res.redirect('/register')
      })      
    })
  })
})

module.exports = router