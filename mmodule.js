// ▼6. Ex6: MAKE IT MODULAR
// var fs = require('fs');
// var path = require('path');
// module.exports = function(dir, ext, callback) {
// 	fs.readdir(dir, function (err, list) {
// 		if (err) {
// 			return callback(err);
// 		}
// 		var extname = '.' + ext;
// 		var result = list.filter(function(item) {
// 			return path.extname(item) === extname;
// 		});
// 		callback(null, result);
// 	});
// };
// });
// ▲6. Ex6: MAKE IT MODULAR

//
// BROWSERIFY-ADVENTURE
//
// ▼3. Ex3: SINGLE EXPORT
// var uniq = require('uniq')

// module.exports = function (str) {
// 	return uniq(str.split(','))
// }
// ▲3. Ex3: SINGLE EXPORT

//
// BROWSERIFY-ADVENTURE
//
// ▼4. Ex4: MULTI EXPORT
exports.parse = function (str) {	
	return str.split('\n').map(function (val) {
		return JSON.parse(val)
	})
}

exports.stringify = function (rows) {
	var arr = rows.map(function (val) {
		return JSON.stringify(val)
	})
	return arr.join('\n')
}
// ▲4. Ex4: MULTI EXPORT

