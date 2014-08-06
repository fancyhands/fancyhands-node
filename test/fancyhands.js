var should = require('chai').should();
var fancyhands = require('../index').fancyhands;

console.log(fancyhands)

describe('fancyhands', function() {
	describe('#haha()', function() {
		it('Should return true :)', function() {
			fancyhands.haha().should.equal(true);
		})
	})
})