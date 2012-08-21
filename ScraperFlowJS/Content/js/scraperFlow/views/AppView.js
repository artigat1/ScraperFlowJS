/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/views/AppView.js
* Creation Date:    16 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		This main application view for ScraperFlow
*      
**************************************************************************************/

define(
	[
		'config',
		'jquery',
		'underscore',
		'backbone',
		'models/Flow',
		'views/FormView',
		'text!templates/main.html'
	], function (Config, $, _, Backbone, Flow, FormView, mainHomeTemplate) {

		var view = Backbone.View.extend({

			initialize: function () {
				// Get the starting model
				this.model = new Flow();
				
				// Set the sessionId for the first fetch request. 
				// This is on the page as it's done via the server.
				this.model.set({ sessionId: apiToken });
				
				// Go get the model
				this.model.fetch({
					success: this.fetchSuccess,
					error: this.fetchError
				});

				// Add in the events for the model
				this.bind('reset', this.fetchSuccess);
			},

			fetchSuccess: function (model, response) {
				this.model = model;
				var template = _.template(mainHomeTemplate);
				$(Config.appSelector).html(template(this.model.toJSON()));

				// Add in the child view and render it
				var childView = new FormView({
					model: this.model.get('Form')
				});
				var app = $(Config.appSelector);
				$(Config.formSelector, app).append(childView.render().el);

				return this;
			},

			fetchError: function (collection, response) {
				throw new Error("Flow fetch didn't get model from API");
			}
		});

		return view;
	}
);