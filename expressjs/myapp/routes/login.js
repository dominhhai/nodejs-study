const express = require('express')
const router = express.Router()

const username = 'A'
const password = 'password'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' })
})

/* handle login */
router.post('/', function(req, res, next) {
	if (req.session.flg) {
		return res.redirect('/')
	}	
	var param = req.body;
	if (param.username === username && param.password === password) {
		req.session.flg = true
		return res.redirect('/')
	}

	req.session.flg = false
	res.render('login', { title: 'Error' })	
})

module.exports = router