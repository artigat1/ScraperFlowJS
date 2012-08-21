/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/views/FormElementView.js
* Creation Date:    20 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		This file renders the elements of the form
*      
**************************************************************************************/

define(
	[
		'config',
		'jquery',
		'underscore',
		'backbone',
		'models/FormElement',
		'types/FormElementType',
		'views/FormInputDroplistView',
		'views/FormInputEmailView',
		'views/FormInputTextView'
	], function (Config, $, _, Backbone, FormElement, FormElementType, FormInputDroplistView, FormInputEmailView, FormInputTextView) {

		var view = Backbone.View.extend({

			initialize: function (options) {
				_.bindAll(this, 'render');
			},

			render: function () {
				var childView = null;
				// Go through each element of the form and create it's view
				$.each(this.model, function () {
					switch (this.Type) {
						case FormElementType.DROPLIST:
							childView = new FormInputDroplistView({
								model: this
							});
							break;

						case FormElementType.EMAIL:
							childView = new FormInputEmailView({
								model: this
							});
							break;
							
						case FormElementType.TEXT:
							childView = new FormInputTextView({
								model: this
							});
							break;
					};
					
					// If there's a view to render, add it into the DOM
					if (childView != null) {
						$(Config.formFieldsSelector).append(childView.render().el);
						childView = null;
					}
				});
				
				return this;
			}
		});

		return view;
	}
);