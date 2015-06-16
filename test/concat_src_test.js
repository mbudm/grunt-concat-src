'use strict';

var grunt = require('grunt');

exports.concat_src = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  docwrite: function(test) {
    test.expect(1);

    var actual = grunt.file.read('dist/docwrite.js');
    var expected = grunt.file.read('test/expected/docwrite.js');
    test.equal(actual, expected, 'Concat files in src atts within doc write.');

    test.done();
  },

  scripts: function(test) {
    test.expect(1);

    var actual = grunt.file.read('dist/scripts.js');
    var expected = grunt.file.read('test/expected/docwrite.js');
    test.equal(actual, expected, 'Concat files in src atts in script tags.');

    test.done();
  }
};
