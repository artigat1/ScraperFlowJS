/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/tests/models/ValidationItemTests.js
* Creation Date:    20 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		Test suite for the ValidationItem model
*      
**************************************************************************************/

define(
	[
		'jquery',
		'backbone',
		'sinon',
		'sinonQunit',
		'models/ValidationItem',
		'types/ValidationType'
	],
	function ($, Backbone, sinon, sinonqu, ValidationItem, ValidationType) {
		return {
			RunTests: function () {
				module("About ValidationItem model");

				test(
					"Can be created with default values for its attributes.",
					3,
					function () {
						var model = new ValidationItem();

						equal(model.ModelType, 'ValidationItem', 'Model is of type FormElement');
						equal(model.get('ErrorMessage'), '', 'Model has an error message of ""');
						equal(model.get('Type'), '', 'Model has a type of ""');
					}
				);

				test(
					"Can initialise ValidationItem with data",
					3,
					function () {
						var model = new ValidationItem();
						model.parse({
							Type: 'Required',
							ErrorMessage: 'What?'
						});

						equal(model.ModelType, 'ValidationItem', 'Model is of type ValidationItem');
						equal(model.get('ErrorMessage'), 'What?', 'Model has an error message of "What?"');
						equal(model.get('Type'), ValidationType.REQUIRED, 'Model has a type of REQUIRED');
					}
				);
			}
		};
	}
);

