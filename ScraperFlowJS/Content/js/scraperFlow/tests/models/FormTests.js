/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/tests/models/FormTests.js
* Creation Date:    17 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		Test suite for the Form model
*      
**************************************************************************************/

define(
	[
		'jquery',
		'backbone',
		'sinon',
		'sinonQunit',
		'models/Form'
	],
	function($, Backbone, sinon, qu, Form) {
		return {
			RunTests: function() {
				module("About Form model");

				test(
					"Can be created with default values for its attributes.",
					3,
					function() {
						var model = new Form();

						equal(model.ModelType, 'Form', 'Model is of type Form');
						equal(model.get('ActionName'), '', 'Model has an actionName of ""');
						equal(model.get('Elements').length, 0, 'Model has an empty array of elements');
					}
				);

				test(
					"Can initialise Form with data",
					3,
					function() {
						var model = new Form();
						var dropdownValues = [
							{
								Key: '1',
								Value: 'Option 1'
							},
							{
								Key: '2',
								Value: 'Option 3'
							},
							{
								Key: '3',
								Value: 'Option 3'
							},
							{
								Key: '4',
								Value: 'Option 4'
							}
						];

						model.parse({
							ActionName: '/api/test',
							Elements: [
								{
									Name: 'Name',
									Label: 'Your Name',
									Value: '',
									Values: [],
									Error: '',
									Type: 'Email'
								},
								{
									Name: 'Test2',
									Label: 'Test 2',
									Value: '2',
									Values: dropdownValues,
									Error: '',
									Type: 'DropList'
								},
								{
									Name: 'Email',
									Label: 'Your email address',
									Value: '',
									Values: [],
									Error: '',
									Type: 'Email'
								}
							]
						});

						equal(model.ModelType, 'Form', 'Model is of type Form');
						equal(model.get('ActionName'), '/api/test', 'Model has an actionName of "/api/test"');
						equal(model.get('Elements').length, 3, 'Model has 3 elements');
					}
				);

				test(
					"Ensure the initCollections is called when setting the form elements.",
					1,
					function() {
						var model = new Form();

						var formMock = sinon.mock(model);
						formMock.expects('initCollections').once();

						model.parse({
							ActionName: '/api/test',
							Elements: []
						});

						formMock.verify();
					}
				);
			}
		};
	}
);

