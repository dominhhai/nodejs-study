// ▼1. Ex1: HELLO ES6
// console.log('HELLO ES6')
// ▲1. Ex1: HELLO ES6

// ▼2. Ex2: TEMPLATE STRINGS
// var name = process.argv[2]

// var str = 
// `Hello, ${name}!
// Your name lowercased is "${name.toLowerCase()}".`

// console.log(str)
// ▲2. Ex2: TEMPLATE STRINGS

// ▼3. Ex3: ARROW FUNCTIONS, Part 1
// var inputs = process.argv.slice(2)
// var result = inputs.map((val, id, arr) => val[0])
// 					.reduce((preVal, curVal, id) => preVal + curVal)

// console.log(`[${inputs.toString()}] becomes "${result}"`)
// ▲3. Ex3: ARROW FUNCTIONS, Part 1

// ▼4. Ex4: ARROW FUNCTIONS AND THIS
// var foot = {
// 	kick: function() {
// 		this.yelp = 'Ouch!'
// 		setImmediate(() => console.log(this.yelp))
// 	}
// }
// foot.kick()
// ▲4. Ex4: ARROW FUNCTIONS AND THIS

// ▼5. Ex5: SPREAD
// var inputs = process.argv.slice(2)
// console.log(`The minimum of [${inputs.toString()}] is ${Math.min(...inputs)}`)
// ▲5. Ex5: SPREAD

// ▼6. Ex6: REST
// module.exports = function average(...args) {
// 	var sum = args.reduce((preVal, curVal) => preVal + curVal)
// 	return sum / args.length
// }
// ▲6. Ex6: REST

// ▼7. Ex7: DEFAULT ARGUMENTS, Part 1
// module.exports = function midpoint(lower = 0, upper = 1) {
// 	return (lower + upper) / 2
// }
// ▲7. Ex7: DEFAULT ARGUMENTS, Part 1

// ▼8. Ex8: DEFAULT ARGUMENTS, Part 2
// module.exports = (mess, excl = mess.length) => `${mess}${'!'.repeat(excl)}`
// ▲8. Ex8: DEFAULT ARGUMENTS, Part 2

// ▼9. Ex9: TAGGED TEMPLATE STRINGS
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`)

function html(temp, username, comment) {
	// return comment.replace('')
	return temp.toString + username + comment
}
// ▲9. Ex9: TAGGED TEMPLATE STRINGS
