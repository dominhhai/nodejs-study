// ▼1. Ex1: BEEP BOOP
// console.log('beep boop');
// ▲1. Ex1: BEEP BOOP

// ▼2. Ex2: MEET PIPE
// var fs = require('fs');
// var filePath = process.argv[2] || 'mfile.txt';
// fs.createReadStream(filePath).pipe(process.stdout);
// ▲2. Ex2: MEET PIPE

// ▼3. Ex3: INPUT OUTPUT
// process.stdin.pipe(process.stdout);
// ▲3. Ex3: INPUT OUTPUT

// ▼4. Ex4: TRANSFORM
// var through2 = require('through2');
// process.stdin
// 	.pipe(through2(write, end))
// 	.pipe(process.stdout);

// function write (buffer, encoding, next) {
// 	this.push(buffer.toString().toUpperCase());
// 	next();
// }

// function end () {
// 	this.push(null);
// }
// ▲4. Ex4: TRANSFORM
	
// ▼5. Ex5: LINES
// var split = require('split');
// var through2 = require('through2');

// var lineCounter = 0;

// process.stdin
// 	.pipe(split())
// 	.pipe(through2(write, end))
// 	.pipe(process.stdout);

// function write (line, encoding, next) {	
// 	lineCounter ++;
// 	var buffer = line.toString();
// 	this.push(lineCounter % 2 === 0
// 				? buffer.toUpperCase()
// 				: buffer.toLowerCase()
// 			);
// 	this.push('\n');

// 	next();
// }

// function end () {
// 	this.push(null);
// }
// ▲5. Ex5: LINES

// ▼6. Ex6: CONCAT
// var concat = require('concat-stream')
// process.stdin
// 	.pipe(concat(function(data) {
// 		console.log(data.toString().split('').reverse().join(''))
// 	}))
// ▲6. Ex6: CONCAT

// ▼7. Ex7: HTTP SERVER
// var http = require('http')
// var through = require('through')
// var server = http.createServer(function(req, res) {
// 	if (req.method === 'POST') {
// 		req.pipe(
// 			through(
// 				function(buf) {
// 					this.queue(buf.toString().toUpperCase())
// 				}, function() {
// 					this.queue(null)
// 				}
// 			)
// 		).pipe(res)
// 	} else {
// 		res.end('Not a POST request!')
// 	}
// })

// server.listen(process.argv[2])
// ▲7. Ex7: HTTP SERVER

// ▼8. Ex8: HTTP CLIENT
// var request = require('request')
// process.stdin.pipe(request.post('http://localhost:8099'))
// 	.pipe(process.stdout)
// ▲8. Ex8: HTTP CLIENT

// ▼9. Ex9: WEBSOCKETS
// var ws = require('websocket-stream')
// var stream = ws('ws://localhost:8099')
// stream.end('hello\n')
// ▲9. Ex9: WEBSOCKETS

// ▼10. Ex10: HTML STREAM
// var through = require('through')
// var trumpet = require('trumpet')
// var tr = trumpet()
// process.stdin.pipe(tr)//.pipe(process.stdout)
// var stream = tr.select('.loud').createStream()
// stream.pipe(through(
// 		function(buf) {
// 			this.queue(buf.toString().toUpperCase())
// 		}, function() {
// 			this.queue(null)
// 		}
// 	)).pipe(stream)
// tr.pipe(process.stdout)
// ▲10. Ex10: HTML STREAM

// ▼11. Ex11: DUPLEXER
// var spawn = require('child_process').spawn
// var duplexer = require('duplexer')

// module.exports = function(cmd, args) {
// 	var ps = spawn(cmd, args)
// 	return duplexer(ps.stdin, ps.stdout)
// }
// ▲11. Ex11: DUPLEXER

// ▼12. Ex12: DUPLEXER REDUX
var duplexer = require('duplexer2')
var through = require('through2').obj

module.exports = function(counter) {
	var countries = []
	var writeable = through(
		function (chunk, enc, next) {
			countries[chunk.country] = (countries[chunk.country] || 0) + 1
			next()
		}, function(done) {
			counter.setCounts(countries)
			done()
		})
	return duplexer(writeable, counter)
}
// ▲12. Ex12: DUPLEXER REDUX

// ▼13. Ex13: COMBINER
// ▲13. Ex13: COMBINER

// ▼14. Ex14: CRYPT
// ▲14. Ex14: CRYPT

// ▼15. Ex15: SECRETZ
// ▲15. Ex15: SECRETZ