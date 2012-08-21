/*************************************** MoBank **************************************
* Filename:			/Content/js/scraperFlow/main.js
* Creation Date:    8 August 2012
* Created By:       Steve
* Edited ----------------------------------------------------------------------------
*		By:	    On:
* Description -----------------------------------------------------------------------
*		This is the bootstrap called to create the scraperFlow app.
*       Requires require.js to be included...
*
*      
**************************************************************************************/

var websiteRoot = '../../..';
var scriptPath = websiteRoot + '/Scripts';

require.config(
	{
		paths:
			{
				// Libraries
				'backbone': scriptPath + '/backbone.min',
				'jquery': [
					'//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.min',
					scriptPath + '/jquery-1.8.0.min'
				],
				'jquery.log': scriptPath + '/jquery.log-0.1.0',
				'scripts': scriptPath,
				'text': scriptPath + '/text',
				'underscore': scriptPath + '/underscore.min',

				// App Files
				'app': 'app',
				'collections': 'collections',
				'config': 'config',
				'models': 'models',
				'routers': 'routers',
				'types': 'types',
				'views': 'views',
				
				// App Layout
				'templates': websiteRoot + '/Templates'
			},
		shim:
			{
				'jquery':
					{
						exports: '$'
					},

				'underscore':
					{
						exports: '_'
					},

				'backbone':
					{
						deps:
							[
								'underscore',
								'jquery'
							],
						exports: 'Backbone'
					},

				'jquery.log': {
					deps:
						[
							'jquery'
						],
					exports: 'jQuery.fn.log'
				}
			}
	}
);

//load jquery, backbone and initialise the app
require(
	[
		'jquery',
		'jquery.log',
		'backbone'
	],
	function() {

		require(
			[
				'app'
			],
			function(App) {
				App.initialize();
			}
		);
	}
);