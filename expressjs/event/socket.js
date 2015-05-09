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

	    	socket.on('welcome', function(msg){
	    		console.log('wellcome')
  			})

	    	socket.emit('welcome', 'welcome message')

	    	home.emit('yes', 'welcome you')

	    	socket.broadcast.emit('hi', 'hello')
	  	})

	return io
}