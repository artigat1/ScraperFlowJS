/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/tests/models/FlowTests.js
* Creation Date:    17 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		Test suite for the Flow model
*      
**************************************************************************************/

define(
	[
		'jquery',
		'backbone',
		'sinonQunit',
		'models/Flow',
		'types/ScraperFlowType',
		'types/FormElementType'
	],
	function($, Backbone, sinon, Flow, ScraperFlowType, FormElementType) {
		return {
			RunTests: function() {
				module("About Flow model");

				test(
					"Can be created with default values for its attributes.",
					4,
					function() {
						var model = new Flow();

						equal(model.ModelType, 'Flow', 'Model is of type Flow');
						equal(model.get('Name'), '', 'Model has a name of ""');
						equal(model.get('Type'), ScraperFlowType.USER, 'Model has a type of ScraperFlowType.USER');
						equal(model.get('Form').ModelType, "Form", 'Model has a form property of type Form');
					}
				);

				test(
					"Can initialise Flow with data",
					7,
					function() {
						var model = new Flow();
						model.parse({
							Name: 'Three Text Box Form',
							Type: 'User',
							Form: {
								ActionName: 'Test',
								Elements: [
									{
										Name: 'Test1',
										Label: 'Test 1',
										Value: '',
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
										Error: '',
										Type: 'DropList'
									},
									{
										Name: 'Test2',
										Label: 'Test 2',
										Value: '',
										Values: [],
										Error: '',
										Type: 'Text'
									},
									{
										Name: 'Test3',
										Label: 'Test 3',
										Value: '',
										Values: [],
										Error: '',
										Type: 'Text'
									}
								]
							},
							SessionId: 'c06937b1a73d4d3b9592e056afb87d4e'
						});

						equal(model.ModelType, 'Flow', 'Model is of type Flow');
						equal(model.get('Name'), 'Three Text Box Form', 'Model has a name of "Three Text Box Form"');
						equal(model.get('Type'), ScraperFlowType.USER, 'Model has a type of ScraperFlowType.USER');
						equal(model.get('Form').get('Elements').length, 3, 'Model has a form with 3 elements');

						var firstFormElement = model.get('Form').get('Elements')[0];
						equal(firstFormElement.Name, 'Test1', 'The 1st FormElement has a name of "Test1"');
						equal(firstFormElement.Type, FormElementType.DROPLIST, 'The 1st FormElement has a type of Text');
						equal(firstFormElement.Values.length, 4, 'The 1st FormElement has 4 values');
					}
				);
			}
		};
	}
);

