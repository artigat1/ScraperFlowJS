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

var websiteRoot = '../../../..';
var scriptPath = websiteRoot + '/Scripts';

require.config(
	{
		paths:
			{
				// Libraries
				'backbone': scriptPath + '/backbone.min',
				'jquery': [
					'//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0',
					scriptPath + '/jquery-1.8.0.min'
				],
				'jquery.log': scriptPath + '/jquery.log-0.1.0',
				'qunit': scriptPath + '/qunit',
				'scripts': scriptPath,
				'sinon': scriptPath + '/sinon-1.4.2',
				'sinonQunit': scriptPath + '/sinon-qunit-1.0.0',
				'text': scriptPath + '/text',
				'underscore': scriptPath + '/underscore.min',

				// App Files
				'app': '../app',
				'collections': '../collections',
				'config': '../config',
				'models': '../models',
				'routers': '../routers',
				'types': '../types',
				'views': '../views',
				
				// App Layout
				'templates': websiteRoot + '/Templates',

				// Tests
				'collectionTests': 'collections',
				'modelTests': 'models',
				'routerTests': 'routers',
				'templateTests': 'templates',
				'testData': 'data',
				'viewsTest': 'views'
			},
		shim:
			{
				'jquery': {
						exports: '$'
					},

				'underscore': {
						exports: '_'
					},

				'backbone': {
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
				},

				'sinon': {
					deps:
						[
							'jquery',
							'qunit'
						],
					exports: 'sinon'
				},

				'sinonQunit': {
					deps:
						[
							'jquery',
							'qunit',
							'sinon'
						],
					exports: 'QUnit.test'
				}
			}
	}
);

//load jquery, backbone, qunit and start the tests
require(
	[
		'jquery',
		'backbone',
		'qunit'
	],
	function() {
		QUnit.config.autostart = false;

		require(
			[
				'modelTests/FlowTests',
				'modelTests/FormTests',
				'modelTests/FormElementTests',
				'modelTests/ValidationItemTests'
			],
			function (flowTests, formTests, formElementTests, validationItemTests) {
				QUnit.start();

				validationItemTests.RunTests();
				formElementTests.RunTests();
				formTests.RunTests();
				flowTests.RunTests();
			}
		);
	}
);