var should = require('chai').should();
var fancyhands = require('../index').fancyhands;

console.log(fancyhands)

describe('fancyhands', function() {
	describe('#echo()', function() {
		it('Should return echo something :)', function() {
			fancyhands.echo()
		})
	})
})