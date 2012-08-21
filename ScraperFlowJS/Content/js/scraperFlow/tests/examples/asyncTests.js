define(
	[
		'jquery',
		'qunit'
	],
	function () {
		return {
			RunTests: function () {
				module('Async tests');

				test(
					"Get content of a basic text file",
					function() {
						stop();
						expect(1);
						$.ajax({
							url: "text.txt",
							success: function(data) {
								deepEqual(data, 'hello');
								start();
							}
						});
					});
			}
		};
	}
);