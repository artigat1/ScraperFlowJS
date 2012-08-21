/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/views/FormInputTextView.js
* Creation Date:    20 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		This file renders the text input box for a form
*      
**************************************************************************************/

define(
	[
		'config',
		'jquery',
		'underscore',
		'backbone',
		'text!templates/form-input-text.html'
	], function (Config, $, _, Backbone, formInputTextView) {

		var view = Backbone.View.extend({
			template: _.template(formInputTextView),

			initialize: function (options) {
				_.bindAll(this, 'render');
			},

			render: function () {
				this.el = this.template(this.model);
				return this;
			}
		});

		return view;
	}
);