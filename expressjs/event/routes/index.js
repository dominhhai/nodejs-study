const express = require('express');
const router = express.Router();
const db = require('../model/connector')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Nodemon' });
  db('select * from users', function(err, result) {
  	if (err)  return console.err('Error:', err)
  	console.log('list todos:', result.rows.length)
  	result.rows.forEach(function(item) {
  		console.log(JSON.stringify(item))
  	})  
  })
});

module.exports = router;