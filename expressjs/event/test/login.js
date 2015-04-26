var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var suite = lab.suite;
var test = lab.test;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var User = require('../model/user')

suite('login', function () {

    test('returns true when (admin, 123456)', function (done) {
        User.prototype.login('admin', '123456', function(user) {
        	expect(user.id).to.equal(1)
	 		done()
		})
    })

    test('returns false when (admin, 1234567)', function (done) {
        User.prototype.login('admin', '1234567', function(user) {
        	expect(user).to.equal(null)
	 		done()
		})
    })
})