(function () {
	'use strict';

	var scriptPath = '../../../../../Scripts';

	require.config(
		{
			paths:
				{
					// Libraries
					'scripts': scriptPath,
					'backbone': scriptPath + '/backbone.min',
					'jquery': [
						'//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.min',
						scriptPath + '/jquery-1.7.2.min'
					],
					'jquery.log': scriptPath + '/jquery.log-0.1.0',
					'qunit': scriptPath + '/qunit',
					'sinon': scriptPath + '/sinon-1.4.2',
					'sinonQUnit': scriptPath + '/sinon-qunit-1.0.0',
					'text': scriptPath + '/text',
					'underscore': scriptPath + '/underscore.min',

					// Application
					'appRoot': '../..',
					'collections': '../../collections',
					'models': '../../models',
					'templates': '../../templates',
					'views': '../../views'
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
					},

					'sinon': {
						deps:
							[
								'qunit'
							],
						exports: 'sinon'
					},

					'sinonQUnit': {
						deps:
							[
								'qunit',
								'sinon'
							],
						exports: 'sinon'
					}
				}
		}
	);

	//load jquery, backbone and initialise the app
	require(
		[
			'qunit'
		],
		function () {
			QUnit.config.autostart = false;

			require(
				[
					'asyncTests',
					'backboneTests',
					'compareTests',
					'enumerateTests',
					'helloTest',
					'moduleTests',
					'spyTests',
					'storeTests'
				],
				function (async, backbone, compare, enumerate, hello, modules, spies, stores) {
					QUnit.start();

					async.RunTests();
					//backbone.RunTests();
					compare.RunTests();
					enumerate.RunTests();
					hello.RunTests();
					modules.RunTests();
					spies.RunTests();
					stores.RunTests();
				}
			);
		}
	);
}).call(this);