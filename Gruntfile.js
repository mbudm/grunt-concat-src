/*
 * concat-src
 * https://github.com/mbudm/grunt-concat-src
 *
 * Copyright (c) 2015 Steve Roberts
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['dist']
		},

		// Configuration to be run (and then tested).
		concat_src: {
			options:{
				convertPaths:[
					{
						from:'legacyPath/',
						to:''
					}
				]
			},
			allFiles: ['test/fixtures/docwrite.js', 'test/fixtures/scripts.js']
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		},


		eslint: {
			options: {
				configFile: '.eslintrc',
				quiet: true //would like to turn this off but all the ignored files are output as warnings
			}
		},
		'node-inspector': {
			dev: {}
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-node-inspector');

	// Whenever the "test" task is run, first clean the "dist" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'concat_src', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['eslint', 'test']);

};
