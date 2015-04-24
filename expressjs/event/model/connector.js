const pg = require('pg')

const config = 'postgres://username:password@127.0.0.1:5432/todo'

module.exports = function (query, cb) {
	pg.connect(config, function(err, client, done) {
		if (err)  return cb(err)		
		client.query(query, function(err, result) {
			// release the client back to the pool
			done()

			if (err)  return cb(err)
			cb(null, result)

			client.end()
		})
	})
}