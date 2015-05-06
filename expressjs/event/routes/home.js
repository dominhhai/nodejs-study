const express = require('express')
const router = express.Router()
const User = require('../model/user')
// const io = require('socket.io')(router)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express Nodemon Home' })
})

module.exports = router