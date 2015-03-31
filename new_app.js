#!/usr/bin/env node

var fs = require('fs');
var filePath = process.argv[2] || 'app.js';//__dirname + "/mfile.txt";
console.log("read file: " + filePath);
var buf = fs.readFileSync(filePath).toString();
buf = buf.split('\n');
// print out the newline of file (except the end newline character of the file)
console.log(buf.length - 1);
console.log(buf);

fs.createReadStream(filePath).pipe(fs.createWriteStream('new_'+filePath));