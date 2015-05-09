var socket = io(window.location.href)

socket.on('yes', function (msg) {
	console.log(msg)
})

socket.on('hi', function (msg) {
	console.log(msg)
})

socket.on('welcome', function (msg) {
	console.log(msg)
	socket.emit('welcome')
})