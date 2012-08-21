/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/models/state.js
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
		'sf'
	],
	function(sf) {

		// model to hold current state
		sf.State = sf.State.extend({
			initialize: function() {
				var state = this;
				// listen for state changes
				state.on('change:flowid', function() {
					state.clearFlowState(true);
				});
			},

			defaults: {
				
			},

			// clear all data relating to the current flow
			clearFlowState: function(silent) {
				var s = this,
				    opts = silent ? { silent: true } : { };
				_(_.keys(s.attributes))
					.without('view', 'flowid')
					.forEach(function(k) {
						s.unset(k, opts);
					});
			}
		});

		// reset to use new class
		sf.resetState();

	}
);