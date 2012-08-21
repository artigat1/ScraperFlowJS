/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/views/FormInputEmailView.js
* Creation Date:    20 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		This file renders the email input box for a form
*      
**************************************************************************************/

define(
	[
		'config',
		'jquery',
		'underscore',
		'backbone',
		'text!templates/form-input-email.html'
	], function (Config, $, _, Backbone, formInputEmailView) {

		var view = Backbone.View.extend({
			template: _.template(formInputEmailView),

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