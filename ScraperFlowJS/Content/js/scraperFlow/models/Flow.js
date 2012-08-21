/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/models/flow.js
* Creation Date:    8 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		Model to represent a flow
*		Extends the base Model...
*      
**************************************************************************************/

define(
	[
		'config',
		'models/Model',
		'models/Form',
		'types/ScraperFlowType'
	],
	function (Config, Model, Form, ScraperFlowType) {
		'use strict';

		// Model: Flow
		var model = Model.extend({
			ModelType: 'Flow',

			defaults: {
				Name: '',
				Type: ScraperFlowType.USER,
				Form: new Form(),
				SessionId: ''
			},

			url: function () {
				return Config.apiRoot + '/FlowWith2TextBoxesADropListAndValidation.txt?sessionId=' + this.get('sessionId');
			},

			initialise: function () {
			},

			parse: function (data) {
				this.initCollections(data.Form);
				this.set({
					Name: data.Name,
					Type: data.Type,
					SessionId: data.SessionId
				});
				return data;
			},

			// reset collections with current data
			initCollections: function (formData) {
				var newForm = new Form();
				newForm.parse(formData);
				this.set({ Form: newForm });
			},

			isFullyLoaded: function () {
				return !!(this.form.length);
			}
		});

		return model;
	}
);