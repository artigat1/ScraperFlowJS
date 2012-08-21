/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/views/FormView.js
* Creation Date:    16 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		This file renders the Scraper Flow form
*      
**************************************************************************************/

define(
	[
		'config',
		'jquery',
		'underscore',
		'backbone',
		'models/Form',
		'views/FormElementView',
		'text!templates/form.html'
	], function (Config, $, _, Backbone, Form, FormElementView, formTemplate) {

		var view = Backbone.View.extend({
			template: _.template(formTemplate),

			initialize: function (options) {
				_.bindAll(this, 'render');
			},

			render: function () {
				// Render the basic form template and add it to the DOM
				$(Config.formSelector).html(this.template(this.model));

				// Add in the child view and render it
				var childView = new FormElementView({
					model: this.model.Elements
				});
				childView.render();

				return this;
			}
		});

		return view;
	}
);