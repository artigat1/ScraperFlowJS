/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/models/FormElements.js
* Creation Date:    17 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		Model to represent a form element
*		Extends the base Model...
*      
**************************************************************************************/

define(
	[
		'models/Model',
		'models/ValidationItem',
		'types/FormElementType'
	],
	function (Model, ValidationItem, FormElementType) {
		'use strict';

		// Model: Form
		var model = Model.extend({
			ModelType: 'FormElement',

			defaults: {
				Name: '',
				Label: '',
				Value: '',
				Error: '',
				Type: FormElementType.TEXT,
				Values: [],
				Validation: []
			},

			initialise: function () {
			},

			// Override the default parse to set the object data ourselves and cope with nested objects
			parse: function (data) {
				this.initCollections(data.Values, data.Validation);
				this.set({
					Name: data.Name,
					Label: data.Label,
					Value: data.Value,
					Error: data.Error,
					Type: data.Type
				});
				return data;
			},

			// reset collections with current data
			initCollections: function (values, validation) {
				if (values != undefined && values != null && values.length > 0) {
					var dict = [];
					$.each(values, function () {
						dict.push(this);
					});
					this.set({ Values: dict });
				}

				if (validation != undefined && validation != null && validation.length > 0) {
					var valid = [];
					$.each(validation, function () {
						var v = new ValidationItem();
						valid.push(v.parse(this));
					});
					this.set({ Validation: valid });
				}
			},

			isFullyLoaded: function () {
				return !!(this.elements.length);
			},

			// Get the value from the element values for the selected key.
			getValue: function (key) {
				var values = this.get('Values');
				if (values == null || values.length == 0)
					return null;

				var selectedValue = null;
				$.each(values, function () {
					if (this.Key == key) {
						selectedValue = this.Value;
						return false;
					}
				});

				return selectedValue;
			},

			// Get the selected value from the Values.
			getSelectedValue: function () {
				var selectedValue = this.get('Value');
				if (selectedValue == '' || selectedValue == null)
					return null;

				return getValue(selectedValue);
			}
		});

		return model;
	}
);