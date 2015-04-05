// ▼1. Ex1: Hello World
// module.exports = function (input) {
// 	return input.toUpperCase()
// }
// ▲1. Ex1: Hello World

// ▼2. Ex2: Higher Order Functions
// module.exports = function (operator, num) {
// 	for (var i = 0; i < num; i++) {
// 		operator()
// 	}
// }
// ▲2. Ex2: Higher Order Functions

// // ▼3. Ex3: Basic: Map
// module.exports = function (numbers) {
// 	return numbers.map(function (val, id, arr) {
// 		return val * 2
// 	})
// }
// ▲3. Ex3: Basic: Map

// ▼4. Ex4: Basic: Filter
// module.exports = function getShortMessages(messages) {
// 	return messages.filter(function (val, id, arr) {
// 		return val.message.length < 50
// 	}).map(function (val, id, arr) {
// 		return val['message']
// 	})
// }
// ▲4. Ex4: Basic: Filter

// ▼5. Ex5: Basic: Every Some
// module.exports = function checkUsersValid(goodUsers) {
//      return function(submittedUsers) {
//      	return submittedUsers.every(function (val) {
//      		var _checker = val
//      		return goodUsers.some(function (val) {
//      			return _checker.id === val.id
//      		})
//      	})
// 	}
// }
// ▲5. Ex5: Basic: Every Some

// ▼6. Ex6: Basic: Reduce
// module.exports = function countWords(inputWords) {
// 	return inputWords.reduce(function (preVal, curVal, id, arr) {
// 		preVal[curVal] = (typeof(preVal[curVal]) != 'undefined') 
// 							? preVal[curVal] + 1
// 							: 1
// 		return preVal
// 	}, {})
// }
// ▲6. Ex6: Basic: Reduce

// ▼7. Ex7: Basic: Recursion
// module.exports = function reduce(arr, func, initial) {
// 	// if (arr.length < 1) return initial;
// 	// initial = func(initial, arr[0], 0, arr)
// 	// return reduce(arr.slice(1), func, initial)
// 	return (function eat(index, value) {
// 		if (index >= arr.length) return value
// 		return eat(index + 1, func(value, arr[index], index, arr))
// 	})(0, initial)
// }
// ▲7. Ex7: Basic: Recursion

// ▼8. Ex8: Basic: Call
// module.exports = function duckCount() {
// 	return Array.prototype.slice.call(arguments, 0)
// 			.reduce(function(preVal, curVal, index, arr) {
// 				if (Object.prototype.hasOwnProperty.call(curVal, 'quack')) {
// 					preVal += 1
// 				}
// 				return preVal;
// 			}, 0)
// }
// ▲8. Ex8: Basic: Call

// ▼9. Ex9: Partial Application without Bind
// var slice = Array.prototype.slice
    
// module.exports = function logger(namespace) {
// 	return function() {
// 		console.log.apply(null, [namespace].concat(slice.call(arguments)))
// 	}
// }
// ▲9. Ex9: Partial Application without Bind

// ▼10. Ex10: Partial Application with Bind
// module.exports = function logger(namespace) {
// 	return console.log.bind(null, namespace)
// }
// ▲10. Ex10: Partial Application with Bind

// ▼11. Ex11: Implement Map with Reduce
// module.exports = function arrayMap(arr, func) {
// 	return arr.reduce(function(preVal, curVal, index, arr) {
// 		preVal[index] = func(curVal, index, arr)
// 		return preVal
// 	}, [])
// }
// ▲11. Ex11: Implement Map with Reduce

// ▼12. Ex12: Function Spies
// module.exports = function Spy(target, method) {
// 	var obj = {count: 0}
// 	var _method = target[method]

// 	target[method] = function () {
// 		obj.count ++
// 		return _method.apply(this, arguments)
// 	}
// 	return obj
// }
// ▲12. Ex12: Function Spies

// ▼13. Ex13: Blocking Event Loop
// module.exports = function repeat(operation, num) {
// 	if (num <= 0) return
//   	operation()

//   	if (num % 1000 === 0) {
//    		setTimeout(function() {
//       		repeat(operation, --num)
//     	})
//   	} else {
//     	return repeat(operation, --num)
//   	}
// }
// ▲13. Ex13: Blocking Event Loop

// ▼14. Ex14: Trampoline
// function repeat(operation, num) {
//   // Modify this so it doesn't cause a stack overflow!
//   return function() {
//   	if (num <= 0) return
// 	  operation()
// 	  return repeat(operation, --num)
// 	}
// }

// function trampoline(fn) {
//   // You probably want to implement a trampoline!
//   while(fn && typeof fn === 'function')
//   	fn = fn() // call by function ~ stack of code instead of long time statement
// }

// module.exports = function(operation, num) {
//   // You probably want to call your trampoline here!
//   // return repeat(operation, num)
//   return trampoline(repeat(operation, num))
// }
// ▲14. Ex14: Trampoline

// ▼15. Ex15: Async Loops
// module.exports = function loadUsers(userIds, load, done) {
// 	var users = []
// 	  , count = 0
// 	  , length = userIds.length

// 	userIds.forEach(function(val, id) {
// 		load(val, function(user) {
// 			users[id] = user
// 			count ++
// 			if (count === length) {
// 				return done(users)
// 			}
// 		})
// 	})
// }
// ▲15. Ex15: Async Loops

// ▼16. Ex16: Recursion
// module.exports = function getDependencies(tree, initial) {
// 	initial = initial || []

// 	var depen = tree.dependencies || {}
// 	var keys = Object.keys(depen)

// 	keys.forEach(function(val, id) {
// 		var obj = depen[val]
// 		var rls = val + '@' + depen[val]['version']

// 		if (initial.indexOf(rls) === -1)
// 			initial.push(rls)

// 		getDependencies(depen[val], initial)
// 	})

// 	return initial.sort()
// }
// ▲16. Ex16: Recursion

// ▼17. Ex17: Currying
// function curryN(fn, n) {
//   // If `n` argument was omitted, use the function .length property.
//   if (typeof n !== 'number') n = fn.length

// 	return function (arg) {
// 	  // Implement rest of function for the final argument
// 		if (n <= 1) return fn(arg)
// 		// Otherwise, continue to calling grouped arguments with bind method
// 		return curryN(fn.bind(null, arg), n - 1)
// 	}
// }

// module.exports = curryN
// ▲17. Ex17: Currying

// ▼18. Ex18: Function Call
module.exports = Function.prototype.call.bind(Array.prototype.slice)
// ▲18. Ex18: Function Call