const socketio = require('socket.io')

exports = module.exports = function (server) {
	var io = socketio(server)

	io.on('connection', function(socket){
		console.log('a user connected')
	  	socket.on('disconnect', function () {
	    	console.log('user disconnect')
	    })
	})

	var home = io.of('/home')
	  	.on('connection', function (socket){
	    	console.log('home connected')
	    	socket.on('disconnect', function () {
	    		console.log('home disconnect')
	    	})
	  	})

	return io
}