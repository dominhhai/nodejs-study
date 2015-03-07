// ▼1. Ex1: HELLO WORLD
// console.log("HELLO WORLD");
// ▲1. Ex1: HELLO WORLD


// ▼2. Ex2: BABY STEP
// process.argv will store command-line arguments
// argv[0] -> program name : node
// argv[1] -> program path : /Users/haidominh/Study/Nodejs/learnyounode.js
// argv[2]... -> command-line arguments 
// var sum = 0;
// var argv = process.argv;
// for (var i =  argv.length - 1; i >= 2; i--) {
// 	sum += Number(argv[i]);
// }
// console.log(sum);
// ▲2. Ex2: BABY STEP

// ▼3. Ex3: MY FIRST I/O!
// var fs = require('fs');
// var filePath = process.argv[2] || 'mfile.txt';//__dirname + "/mfile.txt";
// console.log("read file: " + filePath);
// var buf = fs.readFileSync(filePath).toString();
// buf = buf.split('\n');
// // print out the newline of file (except the end newline character of the file)
// console.log(buf.length - 1);
// ▲3. Ex3: MY FIRST I/O!

// ▼4. Ex4: MY FIRST ASYNC I/O!
// var fs = require('fs');
// var filePath = process.argv[2] || 'mfile.txt';
// fs.readFile(filePath, function readFileCallback (err, contents) {
// 	var strs = contents.toString().split('\n');
// 	console.log(strs.length - 1);
// });
// ▲4. Ex4: MY FIRST ASYNC I/O!

// ▼5. Ex5: FILTERED LS
// var fs = require('fs');
// var path = require('path');
// var dir = process.argv[2] || './';
// var ext = '.' + (process.argv[3] || 'txt');
// fs.readdir(dir, function readDirCallback(err, list) {
// 	for(var i = 0, j = list.length; i < j; i ++) {
// 		if (ext === path.extname(list[i])) {
// 			console.log(list[i]);
// 		}
// 	}
// });
// ▲5. Ex5: FILTERED LS

// ▼6. Ex6: MAKE IT MODULAR
// var filter = require('./mmodule');
// var dir = process.argv[2] || './';
// var ext = process.argv[3] || 'txt';
// filter(dir, ext, function(err, files) {
// 	if (err) {
// 		return console.err(err);
// 	}
// 	files.forEach(function(file) {
// 		console.log(file);
// 	});
// });
// ▲6. Ex6: MAKE IT MODULAR

// ▼7. Ex7: HTTP CLIENT
// var http = require('http');
// var url = process.argv[2] || 'http://dantri.com.vn/';
// http.get(url, function(resp){
// 	resp.setEncoding('utf8');
// 	resp.on('data', console.log);
// });
// ▲7. Ex7: HTTP CLIENT

// ▼8. Ex8: HTTP COLLECT
// var http = require('http');
// var bl = require('bl');
// var url = process.argv[2] || 'http://dantri.com.vn/';
// http.get(url, function(resp) {
// 	resp.pipe(bl(function(err, buf) {
// 		if (err) {
// 			return console.error(err);
// 		}
// 		var data = buf.toString();
// 		console.log(data.length);
// 		console.log(data);
// 	}));
// });
// ▲8. Ex8: HTTP COLLECT

// ▼9. Ex9: JUGGLING ASYNC
var http = require('http');
var bl = require('bl');
var data = [];
var counter = 0;

function printData() {
	for (var i = 0; i< 3; i++) {
		console.log(data[i]);
	}
}

function loadData(index) {
	http.get(process.argv[2 + index], function(resp) {
		resp.pipe(bl(function(err, buf) {
			// console.log(index);
			if (err) {
				data[index] = err.toString();
			} else {
				data[index] = buf.toString();
			}
			counter ++;
			if (counter === 3) {
				printData();
			}
		}));
	});
}

for (var i = 0; i < 3; i++) {
	loadData(i);
}
// ▲9. Ex9: JUGGLING ASYNC

// ▼10. Ex10: TIME SERVER
// "YYYY-MM-DD hh:mm"
// var net = require('net');

// function zeroPadding(x) {
// 	return (x < 10 ? '0' : '') + x;
// }

// var srv = net.createServer(function(socket) {
// 	var now = new Date();
// 	now = now.getFullYear() + '-'
// 			+ zeroPadding(now.getMonth() + 1) + '-'
// 			+ zeroPadding(now.getDate()) + ' '
// 			+ zeroPadding(now.getHours()) + ':'
// 			+ zeroPadding(now.getMinutes());
// 	socket.end(now + '\n');
// });
// srv.listen(process.argv[2], '127.0.0.1');
// ▲10. Ex10: TIME SERVER

// ▼11. Ex11: HTTP FILE SERVER
// var http = require('http');
// var fs = require('fs');
// var port = process.argv[2] || 8000;
// var filename = process.argv[3] || 'mfile.txt';
// var srv = http.createServer(function(req, res) {
// 	res.writeHead(200, { 'content-type': 'text/plain' });
// 	var readStream = fs.createReadStream(filename);
// 	readStream.pipe(res);
// });
// srv.listen(port, '127.0.0.1');
// ▲11. Ex11: HTTP FILE SERVER

// ▼12. Ex12: HTTP UPPERCASERER
// var http = require('http');
// var map = require('through2-map');
// var server = http.createServer(function(req, res) {
// 	if (req.method !== 'POST') {
// 		res.end('not is POST request\n');
// 	}
// 	req.pipe(map(function(chunk) {
// 		return chunk.toString().toUpperCase();
// 	}))
// 	.pipe(res);
// });
// server.listen(process.argv[2]);
// ▲12. Ex12: HTTP UPPERCASERER

// ▼13. Ex13: HTTP JSON API SERVER
// var http = require('http');
// var url = require('url');

// function zeroPadding(x) {
// 	return (x < 10 ? '0' : '') + x;
// }

// var server = http.createServer(function(req, res) {
// 	res.writeHead(200, { 'Content-Type': 'application/json' })
	
// 	var parse = url.parse(req.url, true);
// 	var pathname = parse.pathname;
// 	if (!parse.query.iso) {
// 		return res.end(JSON.stringify({err: 'iso NOT FOUND'}));
// 	}
// 	var query = parse.query.iso;

// 	var data = {};
// 	if (pathname === '/api/parsetime') {
// 		var date = new Date(query);
// 		data.hour = date.getHours();
// 		data.minute = date.getMinutes();
// 		data.second = date.getSeconds();
// 	} else if (pathname === '/api/unixtime') {
// 		var date = new Date(query);
// 		data.unixtime = date.getTime();
// 	} else {
// 		data.err = '404 NOT FOUND';
// 	}
// 	res.end(JSON.stringify(data));
// });
// server.listen(process.argv[2]);
// ▲13. Ex13: HTTP JSON API SERVER

