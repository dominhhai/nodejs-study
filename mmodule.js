// ▼6. Ex6: MAKE IT MODULAR
var fs = require('fs');
var path = require('path');
module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function (err, list) {
		if (err) {
			return callback(err);
		}
		var extname = '.' + ext;
		var result = list.filter(function(item) {
			return path.extname(item) === extname;
		});
		callback(null, result);
	});
};
// });
// ▲6. Ex6: MAKE IT MODULAR

