/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/config.js
* Creation Date:    15 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		Application configuration.
*
*      
**************************************************************************************/

define(
	function() {
		return {
			// Base url to call back to for data
			apiRoot: '/Content/js/scraperFlow/tests/data',
			apiDataType: 'json',
			cacheResponses: false,

			// Whether to fake the server calls
			emulateHttp: false,
			emulateJson: false,
			
			// DOM Elements
			appSelector: '#scraperFlow-app',
			formSelector: '#theForm',
			formFieldsSelector: '#theFields'
		};
	}
);