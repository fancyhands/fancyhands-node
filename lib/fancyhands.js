var oauth = require("oauth").OAuth;

var fancyhands = (function() {
	var key;
	var secret;
	var api_host = "http://localhost:8080";

	var config = function(_key, _secret) {
		key = _key;
		secret = _secret;
	}

	var post = function(method_url, params, _callback) {
		var callback = _callback || function () {}
		OAuthAndSend(params, api_host + method_url, 'POST', callback);
	}

	var get = function(method_url, params, _callback) {
		var callback = _callback || function () {}
		OAuthAndSend(params, api_host + method_url, 'GET', callback);
	}

	function OAuthAndSend(params, url, method, callback) {
		var oa = new oauth(null, null, key, secret, "1.0", null, "HMAC-SHA1");

		oa._performSecureRequest(null, null, method, url, params, null, null, function(err, data, response) {
		    callback(err, data, response)
		});
	}

	return {
		config: config,
		post: post,
		get: get
	}
})()

module.exports = {
	fancyhands: fancyhands
};