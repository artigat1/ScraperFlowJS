define(
	[
		'qunit'
	],
	function () {
		return {
			RunTests: function () {
				module("Module One");
				test(
					"first test",
					function() {
						expect(1);

						equal('steve', 'steve', 'both are the same, so should be equal');
					});
				test(
					"another test",
					function () {
						expect(1);

						notEqual('steve', 'andrea', 'both are different, so should not be equal');
					});

				module("Module Two");
				test(
					"second test",
					function () {
						expect(1);

						ok(true, 'it is true');
					});
				test(
					"another test",
					function () {
						expect(1);

						equal(false, false, 'it is false');
					});
			}
		};
	}
);
