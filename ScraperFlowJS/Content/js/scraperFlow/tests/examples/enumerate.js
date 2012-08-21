define(
	[
		'jquery'
	],
	function() {
		$.fn.enumerate = function(start) {
			if (typeof start !== "undefined") {
				// Since `start` value was provided, enumerate and return
				// the initial jQuery object to allow chaining.
				return this.each(function(i) {
					$(this).prepend("<b>" + (i + start) + "</b> ");
				});
			} else {
				// Since no `start` value was provided, function as a
				// getter, returing the appropriate value from the first
				// selected element.
				var val = this.eq(0).children("b").eq(0).text();
				return Number(val);
			}
		};
		/* Example output
		<ul>
		<li>1. hello</li>
		<li>2. world</li>
		<li>3. i</li>
		<li>4. am</li>
		<li>5. foo</li>
		</ul>
		*/
	}
);
