// ▼1. Ex1: RUN STOP RUN
// yield: 産出
// function *range(from, to) {
// 	for (; from <= to; from ++) {
// 		yield from
// 	}	
// }

// for (var r of range(5, 10)) {
//     console.log(r)
// }
// ▲1. Ex1: RUN STOP RUN

// ▼2. Ex2: GENERATOR ITERATOR
// function *factorial(n){
// 	for (var i = 1, rsl = 1; i <= n; i++) {
// 		yield rsl *= i
// 	}
// }

// for (var n of factorial(5)) {
//   console.log(n)
// }
// ▲2. Ex2: GENERATOR ITERATOR

// ▼3. Ex3: DELEGATING GENERATORS
// function *flat (arr) {
// 	for (var i = 0, j = arr.length; i < j; i++) {
// 		var val = arr[i]
// 		if (Array.isArray(val)) {
// 			yield *flat(val)
// 		} else {
// 			yield val
// 		}
// 	}
// }

// var A = [1, [2, [3, 4], 5], 6];
// for (var f of flat(A)) {
//     console.log( f );
// }
// ▲3. Ex3: DELEGATING GENERATORS

// ▼4. Ex4: CATCH ERROR!
// function *upper (items) {
// 	for (var i = 0, j = items.length; i < j; i++) {
// 		var val
// 		try {
// 			val = items[i].toUpperCase()
// 		} catch (e) {
// 			val = null
// 		}

// 		yield val
// 	}
// }

// var bad_items = ['a', 'B', 1, 'c'];

// for (var item of upper(bad_items)) {
//   console.log(item);
// }
// ▲4. Ex4: CATCH ERROR!

// ▼5. Ex5: LOOK SYNC. DO ASYNC.
// param for next() is the result state of yield
// var fs = require('fs')

// function run (generator) {
//   	var it = generator(go)

//   	function go (err, result) {
//   		if (err) it.throw(err)
//   		it.next(result)  		
//   	}

// 	go()
// }

// run(function* (done) {
// 	var firstFile
//   	// catch exception
//   	try {
// 	  	var dirFiles = yield fs.readdir('NoNoNoNo', done) // No such dir
// 	  	var firstFile = dirFiles[0] // TypeError: Cannot read property '0' of undefined
// 	} catch (err) {
// 	  	// console.log(err)
// 	  	firstFile = null
// 	}

//   	console.log(firstFile)
// })
// ▲5. Ex5: LOOK SYNC. DO ASYNC.

// ▼6. Ex6: LOOK SYNC. MAKE PROMISE.
// it.next() returns Promise
function askFoo () {
  	return new Promise(function (resolve, reject) {
    	resolve('foo')
  	})
}

function run (generator) {
  	var it = generator()
  	function go(result) {
  		// check promise object (result) by its state
	    if (result.done) return result.value

	    return result.value.then(
	    	function fullfill(value) {
	      		return go(it.next(value))
	    	}, function reject(error) {
	      		return go(it.throw(error))
	    	}
	    )
  }

  go(it.next())
}

run(function* () {
  	// improve: errors?
  	try {
  		var foo = yield askFoo()
  		console.log(foo)
  	} catch (err) {
  		console.log(err)
  	}
})
// ▲6. Ex6: LOOK SYNC. MAKE PROMISE.