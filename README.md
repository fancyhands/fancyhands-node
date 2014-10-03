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
```javascript
var FH = require('fancyhands-node').fancyhands;

// Configuration
FH.config('YOUR_API_KEY', 'YOUR_API_SECRET');

// Create a Standard Request
var request = {
    title: 'Sample Request',
    description: 'Do something awesome for me!',
    bid: 3,
    expiration_date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(); // tomorrow
};

// Send the request. 
// The method returns a promise. Use the 'then' method to pass in response and error handlers.
FH.standard_request_create(request).then(function(data) {
    console.log(data)
});

```

## Methods

##### All methods return a promise. [We use the Q Promise Library, read more about it here.](https://github.com/kriskowal/q/wiki/API-Reference) 

#### Utility

**.post(** *\<url String\>, \<params Object\>* **)**  
Manual POST to Fancyhands. Can use any API method.

**.get(** *\<url String\>, \<params Object\>* **)**  
Manual GET from Fancyhands. Can use any API method.

**.put(** *\<url String\>, \<params Object\>* **)**  
Manual PUT to Fancyhands. Can use any API method.

**.delete(** *\<url String\>, \<params Object\>* **)**  
Manual DELETE from Fancyhands. Can use any API method.

[**.echo(** *\<params Object | String\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.echo.Echo)  
We'll echo back whatever params you send. Use to test your API key and secret.

#### Outgoing Calls

[**.outgoing_call_create(** *\<params Object\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.call.Call)  
Specifically for making phone calls and getting structured data back. Super fast!

[**.outgoing_call_get(** *\<params Object\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.call.Call)  
Returns list of created calls




[**.create_custom(** *\<params Object\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Custom)  
Make a request and get customized structured data back.

[**.get_custom(** *\<params Object\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Custom)  
Returns list of created custom requests

[**.create_standard(** *\<params Object\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Standard)  
Make a request and get freeform data back.

[**.get_standard(** *\<params Object\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Standard)  
Return list of created standard requests.

[**.cancel(** *\<params Object\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Cancel)  
Cancel a request before you get billed for it.

[**.send_message(** *\<params Object\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Messages)  
Send a message to the assistant working on a task



 
