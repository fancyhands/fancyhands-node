var qs = require("querystring"),
    url = require("url"),
    http = require("http"),
    oauth = require("oauth").OAuth;


var fancyhands = (function() {
	var key;
	var secret;
	var api_host = "http://localhost:8080/";

	var config = function(_key, _token) {
		key = _key;
		token = _token;
	}

	var test = function() {
		return {
			key: key,
			token: token
		}
	}

	var post = function(method_url, params, _callback) {
		var callback = _callback || function () {}
		OAuthAndSend(params, res, api_host + method_url, 'POST', callback);
	}

	var get = function(method_url, params, _callback) {
		var callback = _callback || function () {}
		OAuthAndSend(params, res, api_host + method_url, 'POST', get);
	}

	
	return {
		config: config,
		test: test,
	}

})()


function OAuthAndSend(params, res, url, method, callback) {
		var oa = new oauth(
			null,
		   	null,
		   	key,
		   	secret,
		   	"1.0",
		   	null,
		   	"HMAC-SHA1"
		);
		
		oa._performSecureRequest(
		    null, 
		    null, 
		    method,
		    url,
		    params, 
		    null,
		    null, 
		    callback
		);
	}

module.exports = {
	fancyhands: fancyhands
};