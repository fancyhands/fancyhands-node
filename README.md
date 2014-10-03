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

**FH.post(** *url, { params }* **)**  
Manual POST to Fancyhands. Can use any API method.

**FH.get(** *url, { params }* **)**  
Manual GET from Fancyhands. Can use any API method.

**FH.put(** *url, { params }* **)**  
Manual PUT to Fancyhands. Can use any API method.

**FH.delete(** *url, { params }* **)**  
Manual DELETE from Fancyhands. Can use any API method.

[**FH.echo(** *\<params Object | String\>* **)**](https://github.com/fancyhands/api/wiki/fancyhands.echo.Echo)  
We'll echo back whatever params you send. Use to test your API key and secret.


#### Incoming Calls
**FH.incoming_call_create(** *{ params }* **)**  
Allows you to create a new Incoming Call Object, with custom built script for our assistants to read.

**FH.incoming_call_get(** *{ params }* **)**  
Retrieves a list or specific Incoming call objects

**FH.incoming_call_update(** *{ params }* **)**  
Updates an Incoming call object

**FH.incoming_call_delete(** *{ params }* **)**  
Deletes an Incoming call object

**FH.incoming_call_history(** *{ params }* **)**  
Gets a list of all calls made on an Incoming call object

**FH.number_search(** *{ params }* **)**  
Search for an available phone number to buy and returns a list of them

**FH.number_buy(** *{ params }* **)**  
This method allows you to purchase a phone number that will be used as your incoming call display number.

**FH.number_delete(** *{ params }* **)**  
his method allows you to delete a previously purchased number, you will no longer be billed for it.


#### Outgoing Calls
[**FH.outgoing_call_create(** *{ params }* **)**](https://github.com/fancyhands/api/wiki/fancyhands.call.Outgoing)  
Specifically for making phone calls and getting structured data back. Super fast!

[**FH.outgoing_call_get(** *{ params }* **)**](https://github.com/fancyhands/api/wiki/fancyhands.call.Outgoing)  
Returns list of created calls


#### Custom Requests
[**FH.custom_request_create(** *{ params }* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Custom)  
Make a request and get customized structured data back.

[**FH.custom_request_get(** *{ params }* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Custom)  
Returns list of created custom requests

[**FH.custom_request_cancel(** *{ params }* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Cancel)  
Cancel a request before you get billed for it.

#### Standard Requests
[**FH.standard_request_create(** *{ params }* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Standard)  
Make a request and get freeform data back.

[**FH.standard_request_get(** *{ params }* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Standard)  
Return list of created standard requests.

#### Messages
[**FH.message_send(** *{ params }* **)**](https://github.com/fancyhands/api/wiki/fancyhands.request.Messages)  
Send a message to the assistant working on a task



 
