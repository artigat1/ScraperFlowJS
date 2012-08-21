define(
	[
		'qunit'
	],
	function () {
		return {
			RunTests: function() {
				var myString = 'Hello Backbone.js';

				module('Hello world tests');

				test(
					'Our first QUnit test - asserting results',
					function() {
						//ok(true, 'The test succeeds');

						//ok(false, 'The test fails');

						equal(myString, 'Hello Backbone.js', 'The value expected is Hello Backbone.js!');
					}
				);
			}
		};
	}
);