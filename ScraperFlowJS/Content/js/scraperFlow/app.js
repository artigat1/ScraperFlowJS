/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/app.js
* Creation Date:    8 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		This file initialises the scraperFlow application.
*
*      
**************************************************************************************/

define(
	[
		'jquery',
		'backbone',
		'config',
		'views/AppView'
	],
	function ($, Backbone, Config, AppView) {
		'use strict';

		var _initialize = function () {

			// change Backbone.sync to use JSON/JSONP
			var defaultSync = Backbone.sync;
			Backbone.sync = function (method, model, options) {
				options = _.extend({
					dataType: Config.apiDataType,
					cache: Config.cacheResponses
				}, options);
				defaultSync(method, model, options);
			};

			Backbone.emulateHTTP = Config.emulateHttp;
			Backbone.emulateJSON = Config.emulateJson;
			
			// Don't need any routing, so just initialise the main view.
			var mainView = new AppView();
			mainView.render();
		};

		return {
			initialize: _initialize
		};
	}
);