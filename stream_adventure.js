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
var concat = require('concat-stream')
process.stdin
	.pipe(concat(function(data) {
		console.log(data.toString().split('').reverse().join(''))
	}))
// ▲6. Ex6: CONCAT

// ▼7. Ex7: HTTP SERVER
// ▲7. Ex7: HTTP SERVER

// ▼8. Ex8: HTTP CLIENT
// ▲8. Ex8: HTTP CLIENT

// ▼9. Ex9: WEBSOCKETS
// ▲9. Ex9: WEBSOCKETS

// ▼10. Ex10: HTML STREAM
// ▲10. Ex10: HTML STREAM

// ▼11. Ex11: DUPLEXER
// ▲11. Ex11: DUPLEXER

// ▼12. Ex12: DUPLEXER REDUX
// ▲12. Ex12: DUPLEXER REDUX

// ▼13. Ex13: COMBINER
// ▲13. Ex13: COMBINER

// ▼14. Ex14: CRYPT
// ▲14. Ex14: CRYPT

// ▼15. Ex15: SECRETZ
// ▲15. Ex15: SECRETZ