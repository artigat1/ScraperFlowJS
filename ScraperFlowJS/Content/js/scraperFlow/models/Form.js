/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/models/Form.js
* Creation Date:    17 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		Model to represent a form
*		Extends the base Model...
*      
**************************************************************************************/

define(
	[
		'config',
		'models/Model',
		'models/FormElement'
	],
	function (Config, Model, FormElement) {
		'use strict';

		// Model: Form
		var model = Model.extend({
			ModelType: 'Form',

			defaults: {
				ActionName: '',
				Elements: []
			},

			initialise: function () {
			},

			// Override the default parse to set the object data ourselves and cope with nested objects
			parse: function (data) {
				this.initCollections(data.Elements);
				this.set({
					ActionName: data.ActionName
				});
				return data;
			},

			// reset collections with current data
			initCollections: function (formElements) {
				var newElements = [];
				$.each(formElements, function () {
					var newElement = new FormElement();
					newElements.push(newElement.parse(this));
				});
				this.set({ Elements: newElements });
			},

			isFullyLoaded: function () {
				return !!(this.elements.length);
			}
		});

		return model;
	}
);