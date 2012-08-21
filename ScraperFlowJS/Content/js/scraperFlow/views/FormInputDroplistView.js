/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/views/FormInputDroplistView.js
* Creation Date:    20 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		This file renders the drop list for a form
*      
**************************************************************************************/

define(
	[
		'config',
		'jquery',
		'underscore',
		'backbone',
		'text!templates/form-input-droplist.html'
	], function (Config, $, _, Backbone, formInputDroplistView) {

		var view = Backbone.View.extend({
			template: _.template(formInputDroplistView),

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