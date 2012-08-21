define(
	[
		'jquery',
		'qunit',
		'enumerate'
	],
	function () {
		return {
			RunTests: function () {
				// Define a group for our tests
				module(
					"Tests for jQuery#enumerate",
					{
						setup: function () {
							// Add in the fixture we are gonna enumerate
							$('#qunit-fixture').html(
								'<ul>'
									+ '<li>hello</li>'
										+ '<li>world</li>'
											+ '<li>i</li>'
												+ '<li>am</li>'
													+ '<li>foo</li>'
														+ '</ul>');
						},

						teardown: function () {
							window.errors = null;
						}
					}
				);

				test(
					"No arguments passed",
					1,
					function () {
						var items = $("#qunit-fixture li").enumerate();
						equal(items, "0", "No start number provided, returns value from first selected element");
					}
				);

				test(
					"0 passed as an argument",
					5,
					function () {
						var items = $("#qunit-fixture li").enumerate(5);
						equal(items.eq(0).text(), "5 hello", "first item should have index 0");
						equal(items.eq(1).text(), "6 world", "second item should have index 1");
						equal(items.eq(2).text(), "7 i", "third item should have index 2");
						equal(items.eq(3).text(), "8 am", "fourth item should have index 3");
						equal(items.eq(4).text(), "9 foo", "fifth item should have index 4");
					}
				);

				test(
					"1 passed as an argument",
					5,
					function() {
						var items = $("#qunit-fixture li").enumerate(1);
						equal(items.eq(0).text(), "1 hello", "first item should have index 1");
						equal(items.eq(1).text(), "2 world", "second item should have index 2");
						equal(items.eq(2).text(), "3 i", "third item should have index 3");
						equal(items.eq(3).text(), "4 am", "fourth item should have index 4");
						equal(items.eq(4).text(), "5 foo", "fifth item should have index 5");
					}
				);
			}
		};
	}
);