var Model = require('./model')
var passHash = require('./pass')

function User() {
	Model.call(this, 'User')
	this.id = -1
	this.name = null
	this.pass =  null
}

User.prototype = new Model()
User.prototype.constructor = User

exports = module.exports = User

exports.login = function(name, pass, cb) {
	passHash.hash(pass, passHash.PASSWORD_SALT, function(err, hash) {
  		if (err) throw err

  		Model.prototype.db("SELECT * FROM users WHERE name='"+ name
			+"' AND pass='"+ hash +"'"
			, function(err, result) {
				if (err || !result.rowCount) return cb(null)
				result = result.rows[0]
				var user = new User()
				for (var i in result) {
					user[i] = result[i]
				}
				return cb(user)
			})
	})	
}

exports.find = function(opts, cb) {
	var query = "SELECT * FROM users"
	  , opt = []
	opts = opts || {}
	for (var key in opts) {
		opt.push(key + "='" + opts['key'])
	}
	if (opt.length > 0) {
		query += " " + opt.join(" AND ")
	}
	console.log(query)

	Model.prototype.db(query, function(err, result) {
		if (err || !result.rowCount) return cb(null)
		cb(result)
	})
}

exports.getAll = function(cb) {
	this.db('select * from users', cb)
}

exports.register = function(opts, cb) {
	var query = "INSERT INTO users VALUES('"+ opts['name'] +"','"+ opts['pass'] +"')"
	Model.prototype.db(query, function(err, result) {
		if (err || !result.rowCount) return cb(null)
		cb(result)
	})
}

exports.hash = function(pass, cb) {
	passHash.hash(pass, passHash.PASSWORD_SALT, function(err, hash){
		cb(hash)
  	})
}