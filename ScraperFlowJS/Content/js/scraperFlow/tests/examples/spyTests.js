define(
	[
		'jquery',
		'sinonQUnit'
	],
	function() {
		return {
			RunTests: function() {
				module("Testing Sinon spies");

				test(
					"should inspect jQuery.ajax",
					function() {
						sinon.spy($, 'ajax');
						stop();
						$.ajax({
							url: 'text.txt',
							dataType: 'text',
							success: function(data) {
								deepEqual(data, 'hello');
								start();
							}
						});
						ok($.ajax.calledOnce);
						equals($.ajax.getCall(0).args[0].url, 'text.txt');
						equals($.ajax.getCall(0).args[0].dataType, 'text');
					});
			}
		};
	}
);

