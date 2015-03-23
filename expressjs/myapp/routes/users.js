var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/nope', function(req, res, next) {
  res.send('respond with a resource nope');
});

router.all('/secret', function (req, res, next) {
  res.send('Accessing the secret section ...')
  next() // pass control to the next handler
})


var cb0 = function (req, res, next) {
	res.setHeader("Content-Type", "text/html");	
  	console.log('CB0')
  	res.write('Hello from CB0!')
  	next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  res.write('Hello from CB1!')
  next()
}

router.get('/multicall', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...')
  res.write('Hello from CB - extend!')
  next()
}, function (req, res) {
  res.end('Hello from D!')
})

module.exports = router;
