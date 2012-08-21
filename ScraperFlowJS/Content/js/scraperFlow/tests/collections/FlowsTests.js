/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/tests/models/FlowTests.js
* Creation Date:    17 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		Test suite for the Flows collection
*      
**************************************************************************************/

define(
	[
		'jquery',
		'backbone',
		'sinonQunit',
		'collections/Flows',
		'models/Flow'
	],
	function ($, Backbone, sinon, Flows, Flow) {
		return {
			RunTests: function () {
				module("Backbone collection can recieve data", {
					setup: function () {
						this.server = sinon.fakeServer.create();
						this.server.respondWith("GET", "", // todo: stick in the url for the callbacks
							[200, { "Content-Type": "application/json" },
								'[{"id":16,"text":"Les Miserables","done":false,"order":5}]']);

						this.todos = new arguments(3)();
					},
					teardown: function () {
						this.server.restore();
					}
				});

				test(
					"Do we have the expected collection",
					2,
					function () {
						this.todos.fetch();
						this.server.respond();
						notEqual(this.todos, undefined);
						equal(this.todos.length, 2);
					}
				);
			}
		};
	}
);