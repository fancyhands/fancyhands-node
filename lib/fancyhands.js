var oauth = require("oauth").OAuth;
var Q = require("q");

var fancyhands = (function() {
    // ============================================================================================
    //                                        Init
    // ============================================================================================

    var key
    ,   secret
    ,   api_host = "http://www.fancyhands.com"
    ,   tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString();

    var config = function(_key, _secret, _host) {
        key = _key;
        secret = _secret;
        if(_host) api_host = _host
    }
    
    
    // ============================================================================================
    //                                        API Methods
    // ============================================================================================
    
    /**
     * echo()
     *
     * Echos back what you send us so you can test your oauth implementation with a very simple API call.
     */

    var echo = function(params) {

        var defaults = {
            "Fancyhands": "It works!!",     // We'll echo back any type of data
        }
        var params = set_defaults(params, defaults);
        return _get('/api/v1/echo', params)
    }


    // --------------------------------------------------------------------------------------------
    //                                        Incoming Call API
    // --------------------------------------------------------------------------------------------
    

    /**
     * incoming_call_create()
     * ----------------------
     *
     * Allows you to create a new Incoming Call Object, with custom built script for our assistants to read.
     * http://www.fancyhands.com/api/explorer/script/builder?incoming=call 
     */
    var incoming_call_create = function(params) {

        var defaults = {
            "phone": null,              // The phone number we need to call
            "conversation": null,       // Multidimensional array of conversation script that the assistant will use. 
        }
        var params = set_defaults(params, defaults);
        if(params.conversation) params.conversation = JSON.stringify(params.conversation);
        return _post('/api/v1/call/incoming/', params)
    }



    /**
     * incoming_call_get()
     * -------------------
     *
     * Retrieves an incoming call object
     */

    var incoming_call_get= function(params) {

        var defaults = {
            "key": null,                // (Optional) The key of the incoming object you'd like to get
            "phone_number": null,       // (Optional) Phone number attached to the incoming call
            "cursor": null              // (Optional) When getting a list, you can provide a cursor to get the next set of results. It's provided in the results as 'next_page.'
        }
        var params = set_defaults(params, defaults);
        return _get('/api/v1/call/incoming/', params)
    }



    /**
     * incoming_call_update()
     * ----------------------
     *
     * Updates an incoming call object 
     */
    
    var incoming_call_update = function(params) {

        var defaults = {
            "key": null,                // The key of the incoming object you'd like to update
            "conversation": null,       // The updated Conversation object 
        }
        var params = set_defaults(params, defaults);
        if(params.conversation) params.conversation = JSON.stringify(params.conversation);
        return _put('/api/v1/call/incoming/', params)
    }



    /**
     * incoming_call_delete()
     * ----------------------
     *
     * Deletes an incoming call object 
     */
    
    var incoming_call_delete = function(params) {

        var defaults = {
            "key": null,                // The key of the incoming object you'd like to delete
        }
        var params = set_defaults(params, defaults);
        return _delete('/api/v1/call/incoming/', params)
    }


    /**
     * incoming_call_history()
     * -------------------
     *
     * Retrieves all or specific incoming call requests made
     */

    var incoming_call_history= function(params) {

        var defaults = {
            "key": null,                // (Optional) The key of the incoming object you'd like to get
            "phone_number": null,       // (Optional) Phone number attached to the incoming call
            "cursor": null              // (Optional) When getting a list, you can provide a cursor to get the next set of results. It's provided in the results as 'next_page.'
        }
        var params = set_defaults(params, defaults);
        return _get('/api/v1/call/history/', params)
    }



    /**
     * number_search()
     * ---------------
     *
     * This method lets you search for an available phone number to buy and returns a list of them
     */
    
    var number_search = function(params) {

        var defaults = {
            "area_code": null,          // Area Code of phone number you would like to purchase.
            "contains": null,           // Numbers you would like to be in the phone number.
            "state": null               // State or region you would like the phone number to be in.
        }
        var params = set_defaults(params, defaults);
        return _get('/api/v1/call/number/', params)
    }


    /**
     * number_buy()
     * ------------
     *
     * This method allows you to purchase a phone number that will be used as your incoming call display number. 
     */
    
    var number_buy = function(params) {

        var defaults = {
            "phone_number": null,       // The phone number to buy
        }
        var params = set_defaults(params, defaults);
        return _post('/api/v1/call/number/', params)
    }


    /**
     * number_delete()
     * ---------------
     *
     * This method allows you to delete a previously purchased number, you will no longer be billed for it
     */
    
    var number_delete = function(params) {

        var defaults = {
            "phone_number": null,       // The phone number to delete
        }
        var params = set_defaults(params, defaults);
        return _delete('/api/v1/call/number/', params)
    }





    // --------------------------------------------------------------------------------------------
    //                                        Outgoing Call API
    // --------------------------------------------------------------------------------------------


    /**
     * outgoing_call_create()
     * ----------------------
     *
     * Allows you to create a new FancyHands Call task, with custom built script for our assistants to read.
     * http://www.fancyhands.com/api/explorer/script/builder 
     */
    var outgoing_call_create = function(params) {

        var defaults = {
            "phone": null,              // The phone number we need to call
            "conversation": null,       // Multidimensional array of conversation script that the assistant will use. 
            "title": null,              // (Optional) The 'title' of the request if you want to have one, otherwise it'll be "Call to [number]"
            "retry": null,              // (Optional) If nobody answers the phone, or it goes to voicemail would you like the call to be retried.
            "retry_delay": null,        // (Optional) Delay in seconds to retry phone call.
            "retry_limit": null         // (Optional) Amount of times you would like this call retried (max is 5).
        }
        var params = set_defaults(params, defaults);
        if(params.conversation) params.conversation = JSON.stringify(params.conversation);
        return _post('/api/v1/call/outgoing/', params)
    }

    /**
     * outgoing_call_get()
     * -------------------
     *
     * Allows you to get a specific outgoiing call task
     * http://www.fancyhands.com/api/explorer/script/builder 
     */
    var outgoing_call_get = function(params) {

        var defaults = {
            "key": null,                // (Optional) The key of the call you'd like to get
            "status": null,             // (Optional) Get a list of calls with a certain (numeric) status
            "cursor": null              // (Optional) When getting a list, you can provide a cursor to get the next set of results. It's provided in the results as 'next_page.'
        }
        var params = set_defaults(params, defaults);
        return _get('/api/v1/call/outgoing/', params)
    }


    

    // --------------------------------------------------------------------------------------------
    //                                        Custom Request API
    // --------------------------------------------------------------------------------------------

    
    /**
     * custom_request_create()
     * ----------------------
     *
     * This is the main request method. This will allow you to submit a task, specify which data you'd like back (custom_fields) and set the price you're willing to pay. 
     */
    var custom_request_create = function(params) {

        var defaults = {
            "title": null,                  // Title of the task.
            "description": null,            // Description of the task.
            "bid": 4,                       // Amount you would like to pay for the task. (Default set at $4).
            "expiration_date": tomorrow,    // Expiration date - Must be within 7 days. (Set to 24hrs by default)
            "custom_fields": null           // (Optional) Custom data fields to be filled out by the assistants
        }
        var params = set_defaults(params, defaults);
        return _post('/api/v1/request/custom/', params)
    }

    /**
     * custom_request_get()
     * --------------------
     *
     * List all or return specific requests
     */
    var custom_request_get = function(params) {

         var defaults = {
            "key": null,                // (Optional) The key of the request you'd like to get
            "status": null,             // (Optional) Get a list of requests with a certain (numeric) status
            "cursor": null              // (Optional) When getting a list, you can provide a cursor to get the next set of results. It's provided in the results as 'next_page.'
        }
        var params = set_defaults(params, defaults);
        return _get('/api/v1/request/custom/', params)
    }


    /**
     * custom_request_cancel()
     * ----------------------
     *
     * Calling this method will cancel a request from being completed. 
     */
    var custom_request_cancel = function(params) {

         var defaults = {
            "key": null,                // The key of the request you'd like to cancel
        }
        var params = set_defaults(params, defaults);
        return _post('/api/v1/request/custom/cancel/', params)
    }


    // --------------------------------------------------------------------------------------------
    //                                        Standard Request API
    // --------------------------------------------------------------------------------------------


    /**
     * standard_request_create()
     * -------------------------
     *
     * Allows you to create a new Standard FancyHands task, with or without custom fields.
     */

    var standard_request_create = function(params) {

        var defaults = {
            "title": null,                  // Title of the task.
            "description": null,            // Description of the task.
            "bid": 4,                       // Amount you would like to pay for the task. (Default set at $4).
            "expiration_date": tomorrow,    // Expiration date - Must be within 7 days. (Set to 24hrs by default)
        }
        var params = set_defaults(params, defaults);

        return _post('/api/v1/request/standard/', params)
    }



    /**
     * standard_request_get()
     * ----------------------
     *
     * Allows you to retrieve one or multiple FancyHands standard tasks.
     */
    var standard_request_get = function(params) {

        var defaults = {
            "key": null,                    // (Optional) Key of the task you wish retrieve 
            "status": null,                 // (Optional) Status code of the task(s) you wish to retrieve. 
            "cursor": null,                 // (Optional) Results cursor. 
        }
        var params = set_defaults(params, defaults);
        return _get('/api/v1/request/standard/', params)
    }


    // --------------------------------------------------------------------------------------------
    //                                        Message API
    // --------------------------------------------------------------------------------------------


    /**
     * message_send()
     * --------------
     *
     * Send a message to the assistants 
     */
    var message_send = function(params) {

        var defaults = {
            "key": null,                    // Key of the request you'd like to message
            "message": null,                 // The message 
        }
        var params = set_defaults(params, defaults);
        return _post('/api/v1/request/standard/messages/', params)
    }


    // ============================================================================================
    //                                        OAuth Helpers
    // ============================================================================================
    var _post = function(method_url, params) {
        return OAuthAndSend(params, api_host + method_url, 'POST');
    }

    var _get = function(method_url, params) {
        return OAuthAndSend(params, api_host + method_url, 'GET');
    }

    var _put = function(method_url, params) {
        return OAuthAndSend(params, api_host + method_url, 'PUT');
    }

    var _delete = function(method_url, params) {
        return OAuthAndSend(params, api_host + method_url, 'DELETE');
    }

    
    function OAuthAndSend(params, url, method) {
        var deferred = Q.defer();
        var oa = new oauth(null, null, key, secret, "1.0", null, "HMAC-SHA1");
        
        if(method.toUpperCase() === 'GET') {
            url += "?" + _transformRequest(params);
            oa.get(url, null, null, function(err, data, response) {
                if(err) {
                    var error = JSON.parse(err.data)
                    deferred.reject(new Error(error.message));
                } else {
                    deferred.resolve(data)
                }
            });
        }
        else if(method.toUpperCase() === 'POST') {
            s = _transformRequest(params);
            oa.post(url, null, null, params, function(err, data, response) {
                if(err) {
                    console.log(err)
                    var error = JSON.parse(err.data)
                    deferred.reject(new Error(error.message));
                } else {
                    deferred.resolve(data)
                }
            });         
        } 
        else if(method.toUpperCase() === 'PUT') {
            s = _transformRequest(params);
            oa.put(url, null, null, params, function(err, data, response) {
                if(err) {
                    var error = JSON.parse(err.data)
                    deferred.reject(new Error(error.message));
                } else {
                    deferred.resolve(data)
                }
            });         
        }
        else if(method.toUpperCase() === 'DELETE') {
            url += "?" + _transformRequest(params);
            oa.delete(url, null, null, function(err, data, response) {
                if(err) {
                    var error = JSON.parse(err.data)
                    deferred.reject(new Error(error.message));
                } else {
                    deferred.resolve(data)
                }
            });
        }

        return deferred.promise;
    }


    // Public Methods
    return {
        config: config,
        
        _post: _post,
        _get: _get,
        _put: _put,
        _delete: _delete,

        echo: echo,

        incoming_call_create: incoming_call_create,
        incoming_call_get: incoming_call_get,
        incoming_call_update: incoming_call_update,
        incoming_call_delete: incoming_call_delete,
        incoming_call_history: incoming_call_history,

        number_search: number_search,
        number_buy: number_buy,
        number_delete: number_delete,

        outgoing_call_create: outgoing_call_create,
        outgoing_call_get: outgoing_call_get,
        
        custom_request_create: custom_request_create,
        custom_request_get: custom_request_get,
        custom_request_cancel: custom_request_cancel,
                
        standard_request_create: standard_request_create,
        standard_request_get: standard_request_get,
        
        message_send: message_send
    }
})()

module.exports = {
    fancyhands: fancyhands
};


// ============================================================================================
//                                        Utility
// ============================================================================================

function _transformRequest(data) {
    var payload = "";
    for(k in data) {
        if(payload.length) {
            payload += "&";
        }
        if(data[k] === null) {
            payload += k + '=';
        }
        else if (typeof data[k] === 'object') {
            payload += k + '=' + encodeURIComponent(encodeURIComponent(JSON.stringify(data[k])));
        } else {
            payload += k + '=' + encodeURIComponent(data[k]);
        }
    }
    return payload;
}


function set_defaults(obj, defaults)  {
    var obj = obj || {}
    for(var k in defaults) {
        if(!obj.hasOwnProperty(k) && (defaults[k] !== null)) {
            obj[k] = defaults[k];
        }
    }
    return obj;
}


