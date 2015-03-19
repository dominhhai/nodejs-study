// ▼1. Ex1: HELLO WORLD
// var express = require('express')
// var app = express()
// app.get('/home', function handler (req, res) {
// 	res.end('Hello World!');
// })
// app.listen(process.argv[2])
// var server = app.listen(3000, function () {

//   var host = server.address().address
//   var port = server.address().port

//   console.log('Example app listening at http://%s:%s', host, port)

// })
// ▲1. Ex1: HELLO WORLD

// ▼2. Ex2: STATIC
// var express = require('express')
// var path = require('path')

// var app = express()
// var basePath = process.argv[3] || path.join(__dirname, 'public')
// app.use(express.static(basePath))
// app.listen(process.argv[2] || 3000)
// ▲2. Ex2: STATIC

// ▼3. Ex3: JADE
// var express = require('express')
// var jade = require('jade')

// var app = express()

// app.set('view engine', 'jade')
// app.set('views', process.argv[3] || './views')

// app.get('/', function (req, res) {
// 	res.render('index', { title: 'Hey', message: 'Hello there!'});
// })

// app.get('/home', function(req, res) {
// 	res.render('index', {date: new Date().toDateString()})
// })

// app.listen(process.argv[2] || 3000)
// ▲3. Ex3: JADE

// ▼4. Ex4: GOOD OLD FORM
// var express = require('express')
// var bodyparser = require('body-parser')

// var app = express()
// app.use(bodyparser.urlencoded({extended: false}))

// app.post('/form', function handler (req, res) {
// 	res.end(req.body.str.split('').reverse().join(''))
// })

// app.listen(process.argv[2] || 3000)
// ▲4. Ex4: GOOD OLD FORM

// ▼5. Ex5: STYLISH CSS
// var express = require('express')

// var app = express()
// var basePath = process.argv[3] || __dirname + '/public'
// app.use(require('stylus').middleware(basePath));
// app.use(express.static(basePath))

// app.listen(process.argv[2] || 3000)
// ▲5. Ex5: STYLISH CSS

// ▼6. Ex6: PARAM PAM PAM
// var express = require('express')
// var crypto = require('crypto')

// var app = express()

// app.put('/message/:id', function (req, res) {
// 	res.end(crypto.createHash('sha1')
//       		.update(new Date().toDateString() + req.params.id)
//       		.digest('hex'))
// })

// app.listen(process.argv[2] || 3000)
// ▲6. Ex6: PARAM PAM PAM

// ▼7. Ex7: WHAT'S IN QUERY
// var express = require('express')

// var app = express()

// app.get('/search', function (req, res) {
// 	res.send(req.query)
// })

// app.listen(process.argv[2] || 3000)
// ▲7. Ex7: WHAT'S IN QUERY

// ▼8. Ex8: JSON ME
var express = require('express')
var fs = require('fs')

var app = express()

app.get('/books', function (req, res) {
	fs.readFile(process.argv[3], function(err, content) {
		var obj = JSON.parse(content.toString())
		res.json(obj)
	})
})

app.listen(process.argv[2] || 3000)
// ▲8. Ex8: JSON ME