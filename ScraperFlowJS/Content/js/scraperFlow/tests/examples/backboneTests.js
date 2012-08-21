define(
	[
		'jquery',
		'backbone',
		'underscore',
		'qunit',
		'sinon',
		'../../collections/todos'
	],
	function () {
		return {
			RunTests: function() {
				module(
					"Should function when instantiated with model literals",
					{
						setup: function() {
							this.todoStub = sinon.stub(window, "Todo");
							this.model = new Backbone.Model({
								id: 2,
								title: "Hello world"
							});
							this.todoStub.returns(this.model);

							this.todos = arguments[5].create();
							// Let's reset the relationship to use a stub
							this.todos.model = window.Todo;
							this.todos.add({
								id: 2,
								title: "Hello world"
							});
						},
						teardown: function() {
							this.todoStub.restore();
						}
					}
				);

				test(
					"should add a model",
					function() {
						equal(this.todos.length, 1);
					}
				);

				test(
					"should find a model by id",
					function() {
						equal(this.todos.get(5).get("id"), 5);
					}
				);
			}
		};
	}
);
	


