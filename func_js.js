// ▼1. Ex1: Hello World
module.exports = function (input) {
	return input.toUpperCase()
}
// ▲1. Ex1: Hello World

// ▼2. Ex2: Higher Order Functions
module.exports = function (operator, num) {
	for (var i = 0; i < num; i++) {
		operator()
	}
}
// ▲2. Ex2: Higher Order Functions

// ▼3. Ex3: Basic: Map
module.exports = function (numbers) {
	return numbers.map(function (val, id, arr) {
		return val * 2
	})
}
// ▲3. Ex3: Basic: Map

// ▼4. Ex4: Basic: Filter
module.exports = function getShortMessages(messages) {
	return messages.filter(function (val, id, arr) {
		return val.message.length < 50
	}).map(function (val, id, arr) {
		return val['message']
	})
}
// ▲4. Ex4: Basic: Filter

// ▼5. Ex5: Basic: Every Some
module.exports = function checkUsersValid(goodUsers) {
     return function(submittedUsers) {
     	return submittedUsers.every(function (val) {
     		var _checker = val
     		return goodUsers.some(function (val) {
     			return _checker.id === val.id
     		})
     	})
	}
}
// ▲5. Ex5: Basic: Every Some

// ▼6. Ex6: Basic: Reduce
module.exports = function countWords(inputWords) {
	return inputWords.reduce(function (preVal, curVal, id, arr) {
		preVal[curVal] = (typeof(preVal[curVal]) != 'undefined') 
							? preVal[curVal] + 1
							: 1
		return preVal
	}, {})
}
// ▲6. Ex6: Basic: Reduce

// ▼7. Ex7: Basic: Recursion
module.exports = function reduce(arr, func, initial) {
	// if (arr.length < 1) return initial;
	// initial = func(initial, arr[0], 0, arr)
	// return reduce(arr.slice(1), func, initial)
	return (function eat(index, value) {
		if (index >= arr.length) return value
		return eat(index + 1, func(value, arr[index], index, arr))
	})(0, initial)
}
// ▲7. Ex7: Basic: Recursion

// ▼8. Ex8: Basic: Call
module.exports = function duckCount() {
	return Array.prototype.slice.call(arguments, 0)
			.reduce(function(preVal, curVal, index, arr) {
				if (Object.prototype.hasOwnProperty.call(curVal, 'quack')) {
					preVal += 1
				}
				return preVal;
			}, 0)
}
// ▲8. Ex8: Basic: Call

// ▼9. Ex9: Partial Application without Bind
// ▲9. Ex9: Partial Application without Bind

// ▼10. Ex10: 
// ▲10. Ex10:

// ▼11. Ex11: 
// ▲11. Ex11:

// ▼12. Ex12: 
// ▲12. Ex12:

// ▼13. Ex13: 
// ▲13. Ex13:

// ▼14. Ex14: 
// ▲14. Ex14:

// ▼15. Ex15: 
// ▲15. Ex15:

// ▼16. Ex16: 
// ▲16. Ex16:

// ▼17. Ex17: 
// ▲17. Ex17:

// ▼18. Ex18: 
// ▲18. Ex18: