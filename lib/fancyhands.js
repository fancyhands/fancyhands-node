var oauth = require("oauth").OAuth;
var _ = require("lodash");

var fancyhands = (function() {
	var key;
	var secret;
	var api_host = "http://localhost:8080";

	var config = function(_key, _secret, _host) {
		key = _key;
		secret = _secret;
		if(_host) api_host = _host
	}
	
	// Basic Post / Get
	// ===========================================
	var post = function(method_url, params, callback) {
		OAuthAndSend(params, api_host + method_url, 'POST', callback);
	}

	var get = function(method_url, params, callback) {
		OAuthAndSend(params, api_host + method_url, 'GET', callback);
	}

	
	// Methods
	// ===========================================
	var echo = function(params, callback) {
		get('/api/v1/echo', params, callback)
	}

	var set_defaults = function(ob, defaults)  {
		for(var k in defaults) {
			if(!ob.hasOwnProperty(k) && (defaults[k] !== null)) {
				ob[k] = defaults[k];
			}
		}
		return ob;
	}
	
	var create_call = function(params, callback) {
		var defaults = {
			"phone": '',
			"conversation": null,
			"retry": null,
			"retry_delay": null,
			"retry_limit": null
		}
		params = set_defaults(params, defaults);
		params.conversation = JSON.stringify(params.conversation);
		post('/api/v1/call/', params, callback)
	}

	var get_call = function(params, callback) {
		get('/api/v1/call/', params, callback)
	}

	var create_custom = function(params, callback) {
		post('/api/v1/request/custom/', params, callback)
	}

	var get_custom = function(params, callback) {
		get('/api/v1/request/custom/', params, callback)
	}

	var cancel = function(params, callback) {
		post('/api/v1/request/custom/cancel/', params, callback)
	}

	var create_standard = function(params, callback) {
		post('/api/v1/request/standard/', params, callback)
	}

	var get_standard = function(params, callback) {
		get('/api/v1/request/standard/', params, callback)
	}

	var send_message = function(params, callback) {
		post('/api/v1/request/standard/messages/', params, callback)
	}

	function OAuthAndSend(params, url, method, _callback) {
		var callback = _callback || function () {}
		var oa = new oauth(null, null, key, secret, "1.0", null, "HMAC-SHA1");
		if(method.toUpperCase() == 'GET') {
			url += "?" + _transformRequest(params);
			oa.get(url, null, null, function(err, data, response) {
				if(err) {
		    		callback(err);
				} else {
		    		callback(data);
				}
			});
		}
		else if(method.toUpperCase() == 'POST') {
			s = _transformRequest(params);
			oa.post(url, null, null, params, function(err, data, response) {
				if(err) {
		    		callback(err)
				} else {
		    		callback(data)
				}
			});			
		}
	}

	return {
		config: config,
		post: post,
		get: get,
		echo: echo,
		create_call: create_call,
		get_call: get_call,
		create_custom: create_custom,
		get_custom: get_custom,
		cancel: cancel,
		create_standard: create_standard,
		get_standard: get_standard,
		send_message: send_message
	}
})()

module.exports = {
	fancyhands: fancyhands
};


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


