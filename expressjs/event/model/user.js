var Model = require('./model')
var hash = require('./pass').hash

function User() {
	Model.call(this, 'User')
	this.id = -1
	this.name = null
	this.pass =  null
}

User.prototype = new Model()
User.prototype.constructor = User

User.prototype.login = function(name, pass, cb) {
	hash(pass, function(err, salt, hash){
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

User.prototype.getAll = function(cb) {
	this.db('select * from users', cb)
}

module.exports = User