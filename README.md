# concat-src

> Parse src attributes and concat into a bundle.js. Made to modernise the build tools for a legacy project that contains a lot of circa 2010 document.write('<script />')

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install concat-src --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('concat-src');
```

## The "concat_src" task

### Overview
In your project's Gruntfile, add a section named `concat_src` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  concat_src: {
    options: {
      // Task-specific options go here.
    },
    yourFileList: [
      // Target-specific file lists
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `''`

A string value that is used to do separate the files in the bundle

#### options.dest
Type: `String`
Default value: `'dist'`

Destination folder for bundle files

#### options.reflectPath
Type: `Boolean`
Default value: `false`

Replicate the files original paths within the destination folder.

### Usage Examples

#### Default Options
No custom options, the assets listed in the two files will be concatenated into two bundles at dist/docwrite.js & dist/scripts.js

```js
grunt.initConfig({
  concat_src: {
    options: {},
    files: ['src/docwrite.js', 'src/scripts.js'],
  },
});
```

#### Custom Options
All options set. The bundles will have a custome string between each concatenated asset. The assets listed in the two files will be concatenated into two bundles at build/some/deep/folder/docwrite.js & build/lib/scripts.js

```js
grunt.initConfig({
  concat_src: {
    options: {
			separator: ' /*   --- end of file ---   */',
			dest: 'build',
			reflectPath: true
    },
		files: ['some/deep/folder/docwrite.js', 'lib/scripts.js'],
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
