var should = require('chai').should();
var fancyhands = require('../index').fancyhands;
var test_data = require('../test/test-data');


// Change to your key, and secret
fancyhands.config('PuREN1kznQ4UyWI', 'dzvNP3hg0idkb0x')

describe('fancyhands', function() {
	describe('#echo()', function() {
		it('Should echo something :) ', function(done) {
			fancyhands.echo({'test': 'test'}, function(data) {
				JSON.parse(data).should.have.property('test')
				done();
			})
		})
	});

	describe('#create_call()', function() {
		it('Should create a call and return request data', function(done) {
			fancyhands.create_call(test_data.create_call.phone, test_data.create_call.conversation, function(data) {
				console.log(data)
				JSON.parse(data).should.have.property('date_updated')
				done();
			})
		})
	})

	describe('#create_custom()', function() {
		it('Should create a custom request and return request data', function(done) {
			fancyhands.create_custom(test_data.create_custom, function(data) {
				JSON.parse(data).should.have.property('date_updated')
				done();
			})
		})
	})
})
