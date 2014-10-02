var should = require('chai').should();
var fancyhands = require('../index').fancyhands;
var test_data = require('../test/test-data');


// Change to your key, and secret
fancyhands.config('abcdefghijklmno', 'pqrstuvwxyznwsw', 'http://localhost:8080')

describe('fancyhands', function() {
	describe('#echo()', function() {
		it('Should echo something :) ', function(done) {
			fancyhands.echo({'test': 'test'})
				.then(function(data) {
					JSON.parse(data).should.have.property('test')
					done();
				})
			;
		})
	});

	describe('#incoming_call_create', function() {
		it('Should create an incoming call object', function(done) {
			fancyhands.incoming_call_create(test_data.incoming_call_create)
				.then(function(data) {
					data.data.should.have.property('date_updated');
					done();
				}, function(err) {
					done(err);
				})
				
			;
		})
	})
	
	describe('#incoming_call_get', function() {
		it('Should get incoming call object', function(done) {
			fancyhands.incoming_call_get({})
				.then(function(data) {
					JSON.parse(data).should.have.property('calls')
					done();
				},
				function(err) {
					done(err)
				})
			;
		})
		it('Should get a specific call object', function(done) {
			fancyhands.incoming_call_get({key: test_data.incoming_call_key}) 
				.then(function(data) {
					JSON.parse(data).should.have.property('call')
					done();	
				},	
				function(err) {
					done(err)
				})
			;	
		})
	})

	describe('#incoming_call_update', function() {
		it('Should update an incoming call object', function(done) {
			fancyhands.incoming_call_update(test_data.incoming_call_update)
				.then(function(data) {
					JSON.parse(data).should.have.property('success');
					done();
				}, function(err) {
					done(err);
				})
			;
		})
	})

	describe('#incoming_call_delete', function() {
		it('Should delete an incoming call object', function(done) {
			fancyhands.incoming_call_delete({key: 'ahJkZXZ-ZmFuY3loYW5kcy1ocmRyGQsSDEluY29taW5nQ2FsbBiAgICAgICrCww' })
				.then(function(data) {
					console.log(data)
					done();
				}, function(err) {
					done(err);
				})
			;
		})
	})

	describe('#incoming_call_history_get', function() {
		it('Should get all history of calls for incoming call object', function(done) {
			fancyhands.incoming_call_history_get()
				.then(function(data) {
					done();
				}, function(err) {
					done(err);
				})
			;
		})
	})

	describe('#number_search', function() {
		it('Should return a list of phone numbers', function(done) {
			fancyhands.number_search({area_code: '215'})
				.then(function(data) {
					JSON.parse(data).should.have.property('available_phone_numbers');
					done();
				}, function(err) {
					done(err);
				})
			;
		})
	})

	describe('#number_buy', function() {
		it('Should buy a phone numbers', function(done) {
			fancyhands.number_buy({phone_number: '12155964208'})
				.then(function(data) {
					JSON.parse(data).should.have.property('phone_number');
					done();
				}, function(err) {
					done(err);
				})
			;
		})
	})

	describe('#number_delete', function() {
		it('Should delete a phone numbers', function(done) {
			fancyhands.number_delete({phone_number: '12155964208'})
				.then(function(data) {
					JSON.parse(data).should.have.property('success');
					done();
				}, function(err) {
					done(err);
				})
			;
		})
	})

	describe('#outgoing_call_create', function() {
		it('Should create an outgoing call request', function(done) {
			fancyhands.outgoing_call_create(test_data.outgoing_call_create)
				.then(function(data) {
					JSON.parse(data).should.have.property('status');
					done();
				}, function(err) {
					done(err);
				})
				
			;
		})
	})
	
	describe('#outgoing_call_get', function() {
		it('Should get outgoing call objects', function(done) {
			fancyhands.outgoing_call_get()
				.then(function(data) {
					console.log(data);
					JSON.parse(data).should.have.property('next_page')
					done();
				},
				function(err) {
					done(err)
				})
			;
		})
	})

	describe('#custom_request_create', function() {
		it('Should create a custom request', function(done) {
			fancyhands.custom_request_create(test_data.create_custom)
				.then(function(data) {
					JSON.parse(data).should.have.property('date_updated')
					done();
				},
				function(err) {
					done(err)
				})
			;
		})
	})

	describe('#custom_request_get', function() {
		it('Should get a custom request', function(done) {
			fancyhands.custom_request_get(test_data.create_custom)
				.then(function(data) {
					JSON.parse(data).should.have.property('cursor')
					done();
				},
				function(err) {
					done(err)
				})
			;
		})
	})

	describe('#custom_request_cancel', function() {
		it('Should cancel a custom request', function(done) {
			fancyhands.custom_request_cancel({key: 'ahJkZXZ-ZmFuY3loYW5kcy1ocmRyKQsSBkZIVXNlchiAgICAgICQCQwLEglGSFJlcXVlc3QYgICAgICAlwgM'})
				.then(function(data) {
					console.log(data);
					JSON.parse(data).should.have.property('success')
					done();
				},
				function(err) {
					done(err)
				})
			;
		})
	})

	describe('#standard_request_create', function() {
		it('Should create a standard request', function(done) {
			fancyhands.standard_request_create(test_data.create_custom)
				.then(function(data) {
					console.log(data)
					JSON.parse(data).should.have.property('date_updated')
					done();
				},
				function(err) {
					done(err)
				})
			;
		})
	})

	describe('#standard_request_get', function() {
		it('Should get a standard request', function(done) {
			fancyhands.standard_request_get(test_data.create_custom)
				.then(function(data) {
					JSON.parse(data).should.have.property('cursor')
					done();
				},
				function(err) {
					done(err)
				})
			;
		})
	})

	describe('#message_send', function() {
		it('Should send a message to a request', function(done) {
			fancyhands.message_send({key: 'ahJkZXZ-ZmFuY3loYW5kcy1ocmRyKQsSBkZIVXNlchiAgICAgICQCQwLEglGSFJlcXVlc3QYgICAgICA9wgM', message: 'Hello!'})
				.then(function(data) {
					console.log(data)
					JSON.parse(data).should.have.property('key')
					done();
				},
				function(err) {
					done(err)
				})
			;
		})
	})




	
})
