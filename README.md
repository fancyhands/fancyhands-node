Node wrapper for Fancyhands's API
=====================

For more information visit the [Fancyhands API Docs](https://github.com/fancyhands/api)


#####Installation
If you don't have node installed, get it at [nodejs.org](http://nodejs.org/download/) 

Then run:
`npm install fancyhands-node`

#####Getting your Key and Secret
Go to the [Fancy Hands API site](www.fancyhands.com/api) to get your OAuth credentials.

#####Example
```
var FH = require('fancyhands-node').fancyhands
FH.config('YOUR_API_KEY', 'YOUR_API_SECRET')

FH.post('/api/v1/echo', {}, function(data) {
    console.log(data)
})

```

 
