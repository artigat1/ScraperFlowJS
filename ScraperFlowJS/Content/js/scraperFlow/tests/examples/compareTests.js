define(
	[
		'jquery',
		'qunit',
		'enumerate'
	],
	function() {
		return {
			RunTests: function() {

				function reverseString(str) {
					return str.split("").reverse().join("");
				}

				module('Comparison tests');

				test(
					"reverseString()",
					function() {
						expect(4);

						equal(reverseString("hello"), "olleh", "The value expected was olleh");
						equal(reverseString("foobar"), "raboof", "The value expected was raboof");
						equal(reverseString("world"), "dlrow", "The value expected was dlrow");
						notEqual(reverseString("world"), "dlroo", "The value was expected to not be dlroo");
						//equal(reverseString("bubble"), "double", "The value expected was elbbub");
					}
				);
			}
		};
	}
);