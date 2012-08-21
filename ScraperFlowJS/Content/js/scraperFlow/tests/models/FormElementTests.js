/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/tests/models/FormElementTests.js
* Creation Date:    17 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		Test suite for the FormElement model
*      
**************************************************************************************/

define(
	[
		'jquery',
		'backbone',
		'sinon',
		'sinonQunit',
		'models/FormElement',
		'types/FormElementType',
		'types/ValidationType'
	],
	function ($, Backbone, sinon, sinonqu, FormElement, FormElementType, ValidationType) {
		return {
			RunTests: function () {
				module("About FormElement model");

				test(
					"Can be created with default values for its attributes.",
					4,
					function () {
						var model = new FormElement();

						equal(model.ModelType, 'FormElement', 'Model is of type FormElement');
						equal(model.get('Name'), '', 'Model has a name of ""');
						equal(model.get('Type'), FormElementType.TEXT, 'Model has a type of FormElementType.TEXT');
						equal(model.get('Values').length, 0, 'Model has an empty array of values');
					}
				);

					test(
					"Can initialise FormElement with data",
					5,
					function () {
						var model = new FormElement();
						model.parse({
							Name: 'Test1',
							Label: 'Test 1',
							Value: '',
							Values: [],
							Error: '',
							Type: 'Text',
							Validation: []
						});

						equal(model.ModelType, 'FormElement', 'Model is of type FormElement');
						equal(model.get('Name'), 'Test1', 'Model has a name of "Test1"');
						equal(model.get('Type'), FormElementType.TEXT, 'Model has a type of FormElementType.USER');
						equal(model.get('Values').length, 0, 'Model has an empty array of values');
						equal(model.get('Validation').length, 0, 'Model has an empty array of valiidationItems');
					}
				);

					test(
					"Can initialise FormElement with data missing Values and Validation",
					5,
					function () {
						var model = new FormElement();
						model.parse({
							Name: 'Test1',
							Label: 'Test 1',
							Value: '',
							Error: '',
							Type: 'Text'
						});

						equal(model.ModelType, 'FormElement', 'Model is of type FormElement');
						equal(model.get('Name'), 'Test1', 'Model has a name of "Test1"');
						equal(model.get('Type'), FormElementType.TEXT, 'Model has a type of FormElementType.USER');
						equal(model.get('Values').length, 0, 'Model has an empty array of values');
						equal(model.get('Validation').length, 0, 'Model has an empty array of valiidationItems');
					}
				);

				module("About FormElement model values", {
					setup: function () {
						this.model = new FormElement();
						this.model.parse({
							Name: 'Test1',
							Label: 'Test 1',
							Value: '2',
							Values: [
								{
									Key: '1',
									Value: 'Option 1'
								},
								{
									Key: '2',
									Value: 'Option 2'
								},
								{
									Key: '3',
									Value: 'Option 3'
								},
								{
									Key: '4',
									Value: 'Option 4'
								}
							],
							Validation: [{
								Type: 'Required',
								ErrorMessage: 'Say what?'
							}],
							Error: '',
							Type: 'DropList'
						});
					},

					teardown: function () {
						window.errors = null;
					}
				});

				test(
					"Can initialise FormElement with data containing values",
					7,
					function () {
						equal(this.model.ModelType, 'FormElement', 'Model is of type FormElement');
						equal(this.model.get('Name'), 'Test1', 'Model has a name of "Test1"');
						equal(this.model.get('Type'), FormElementType.DROPLIST, 'Model has a type of FormElementType.USER');
						equal(this.model.get('Values').length, 4, 'Model has 4 values');
						equal(this.model.get('Values')[0].Key, '1', 'The 1st object in the values array has a key of 1');
						equal(this.model.get('Validation').length, 1, 'Model has 1 validation item');
						equal(this.model.get('Validation')[0].Type, ValidationType.REQUIRED, 'The 1st object in the validation array has a type of REQUIRED');
					}
				);

				test(
					"The getValue method returns the expected value",
					1,
					function () {
						equal(this.model.getValue('2'), 'Option 2', 'Returns the correct values from the element options.');
					}
				);

				test(
					"The getValue method returns null when a non-existant key is requested",
					1,
					function () {
						equal(this.model.getValue('-1'), null, 'Returns null for a key of -1');
					}
				);

				test(
					"Verify that initCollections is called once when parsing data",
					1,
					function () {
						var model = new FormElement();
						var formElementMock = sinon.mock(model);
						formElementMock.expects('initCollections').once();

						model.parse({
							Name: 'Test1',
							Label: 'Test 1',
							Value: '2',
							Values: [],
							Error: '',
							Type: 'DropList',
							Validations: []
						});

						formElementMock.verify();
					}
				);
			}
		};
	}
);

