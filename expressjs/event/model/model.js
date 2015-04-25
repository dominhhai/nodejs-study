function Model(name) {
	// table name in DB
	this.table = name || "Model"
}

Model.prototype.db = require('./connector')

Model.prototype.toString = function() {
	return JSON.stringify(this)
}

Model.prototype.fromString = function(str) {
	return JSON.parse(str)
}

module.exports = Model