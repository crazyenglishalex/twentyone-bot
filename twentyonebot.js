'use strict';

var twentyoneBot = require('./src/twentyone-bot/twentyone-bot');

var App = (function() {

	var Bot;
	var phrase = 'twenty one pilots';

	var initialize = function() {
		Bot = new twentyoneot();
	};

	var stream = function() {
		Bot.getStream(phrase);
	};

	var get = function() {
		Bot.getTweets(phrase, 5);
	};

	var streamAndRetweet = function() {
		Bot.streamAndRetweet(phrase);
	};

	return {
		init: function() {
			initialize();
		},
		stream: function() {
			stream();
		},
		get: function() {
			get();
		},
		streamAndRetweet: function() {
			streamAndRetweet();
		}
	}

}());

App.init();
App.streamAndRetweet();
//App.get();
