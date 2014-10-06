var FH = require('./lib/fancyhands').fancyhands

FH.config('YOUR_KEY', 'YOUR_SECRET')

FH.echo({'hello': 'world'}).then(function(data) {
	console.log(data)
})
