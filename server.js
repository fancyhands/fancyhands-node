var FH = require('./lib/fancyhands').fancyhands

FH.config('PuREN1kznQ4UyWI', 'dzvNP3hg0idkb0x')

FH.post('/api/v1/echo/', {'hahaha': 'hahahahaha'}, function(err, data, response) {
	console.log(err)
	console.log(data)
});