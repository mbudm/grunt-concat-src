/*
 * concat-src
 * https://github.com/mbudm/grunt-concat-src
 *
 * Copyright (c) 2015 Steve Roberts
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

	grunt.registerMultiTask('concat_src', 'Parse src attributes and concat into a bundle.js', function(arg1) {

		var options = this.options({
			separator: '',
			dest: 'dist',
			reflectPath: false
		});


		var legitFiles = this.filesSrc.filter(function(f) {
			// Warn on and remove invalid source files.
			if (!grunt.file.exists(f)) {
				grunt.log.warn('Source file "' + f + '" not found.');
				return false;
			} else {
				return true;
			}
		});

		// Parse files for assets
		legitFiles.forEach(function(f) {

			var fileSrc = grunt.file.read(f);
			var lines = fileSrc.replace(/\r\n/g, '\n').split(/\n/);
			var srcDir = path.dirname(f);
			var bundleSrc = lines.map(function(line) {
				var asset = (line.match(/(src)=["']([^'"]+)["']/) || [])[2];
				if (!asset) {
					return false; //fail early
				}

				//handle absolute paths
				var baseDir = asset.charAt(0) === '/' ? '' : srcDir;
				var assetCorrected = asset.charAt(0) === '/' ? '.' + asset : asset;

				// Warn on and remove invalid asset files
				if (!grunt.file.exists(baseDir, assetCorrected)) {
					grunt.log.warn('Asset "' + path.join(baseDir, assetCorrected) + '" listed in "' + f + '" not found.');
					return false;
				} else {
					return path.join(baseDir, assetCorrected);
				}
			}).filter(function(assetPath) {
				return assetPath ? true : false;
			}).map(function(assetPath) {
				return grunt.file.read(assetPath);
			}).join(grunt.util.normalizelf(options.separator));


			var bundlePath = options.reflectPath ? f : path.basename(f);
			var dest = path.join(options.dest, bundlePath);

			// Write the bundle file.
			grunt.file.write(dest, bundleSrc);

			// Print a success message.
			grunt.log.writeln('Bundle "' + dest + '" created.');
		});

	});

};
