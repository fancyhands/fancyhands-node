Node wrapper for Fancyhands's API
=====================

For more information visit the [Fancyhands API Docs](https://github.com/fancyhands/api)


##Installation
If you don't have node installed, get it at [nodejs.org](http://nodejs.org/download/) 

Then run:
```
npm install fancyhands-node
```

##Getting your Key and Secret
Go to the [Fancy Hands API site](www.fancyhands.com/api) to get your OAuth credentials.

##Example
```
var FH = require('fancyhands-node').fancyhands;
FH.config('YOUR_API_KEY', 'YOUR_API_SECRET');

FH.post('/api/v1/echo', { hello: 'world' }, function(data) {
    console.log(data)
    // {hello: 'world'}
});

```

## Methods
####[**.echo(** *\<params Object | String\>, \<callback Function\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.echo.Echo)  
We'll echo back whatever params you send. Use to test your API key and secret.

####[**.create_call(** *\<params Object\>, \<callback Function\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.call.Call)  
Specifically for making phone calls and getting structured data back. Super fast!

####[**.get_call(** *\<params Object\>, \<callback Function\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.call.Call)  
Returns list of created calls

####[**.create_custom(** *\<params Object\>, \<callback Function\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Custom)  
Make a request and get customized structured data back.

####[**.get_custom(** *\<params Object\>, \<callback Function\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Custom)  
Returns list of created custom requests

####[**.create_standard(** *\<params Object\>, \<callback Function\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Standard)  
Make a request and get freeform data back.

####[**.get_standard(** *\<params Object\>, \<callback Function\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Standard)  
Return list of created standard requests.

####[**.cancel(** *\<params Object\>, \<callback Function\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Cancel)  
Cancel a request before you get billed for it.

####[**.send_message(** *\<params Object\>, \<callback Function\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Messages)  
Send a message to the assistant working on a task

####**.post(** *\<url String\>, \<params Object\>, \<callback Function\>* **)**  
Manual POST to Fancyhands. Can use any API method.

####**.get(** *\<url String\>, \<params Object\>, \<callback Function\>* **)**  
Manual GET from Fancyhands. Can use any API method.

 
