/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/models/ValidationItem.js
* Creation Date:    20 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		Model to represent the Validation options for a FormElement
*		Extends the base Model...
*      
**************************************************************************************/

define(
	[
		'models/Model'
	],
	function (Model) {
		'use strict';

		// Model: Form
		var model = Model.extend({
			ModelType: 'ValidationItem',

			defaults: {
				Type: '',
				ErrorMessage: ''
			},

			initialise: function () {
				//var form = this;
			},

			// Override the default parse to set the object data ourselves and cope with nested objects
			parse: function (data) {
				this.set({
					Type: data.Type,
					ErrorMessage: data.ErrorMessage
				});
				return data;
			},

			isFullyLoaded: function () {
				return !!(this.elements.length);
			}
		});

		return model;
	}
);