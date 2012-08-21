/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/models/model.js
* Creation Date:    15 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		Base model class for all models to inherit from.
*      
**************************************************************************************/

define(
	[
	],
	function () {

	function stringifyId(item) {
		item.id = String(item.id);
		return item;
	}

	var Model = Backbone.Model;

	// set up default model
	return Model.extend({
		modelType: 'Model',

		// add .json to url
		url: function () {
			return Model.prototype.url.call(this);
		},

		isFullyLoaded: function () {
			// override in subclasses
			return true;
		},

		// support for common pattern
		ready: function (loadCallback, immediateCallback) {
			var model = this;
			immediateCallback = immediateCallback || loadCallback;
			if (!model.isFullyLoaded()) {
				model.on('ready', loadCallback);
				
				// fetch model, avoiding multiple simultaneous calls
				if (!model._fetching) {
					model._fetching = true;
					model.fetch({
						success: function () {
							model.trigger('ready');
							model._fetching = false;
						},
						error: function () {
//							sf.state.set({
//								message: {
//									text: 'Error: Could not get data for the ' + model.type +
//                                        ' with ID ' + model.id,
//									type: 'error'
//								}
//							});
						}
					});
				}
			} else {
				immediateCallback();
			}
		}

	});
});