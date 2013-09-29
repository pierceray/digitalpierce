var compassConfig = require( "./configs/grunt_configs/compassConfig.js" ),
	cssminConfig = require( "./configs/grunt_configs/cssminConfig.js" ),
	copyConfig = require( "./configs/grunt_configs/copyConfig.js" ),
	jshintConfig = require( "./configs/grunt_configs/jshintConfig.js" ),
	uglifyConfig = require( "./configs/grunt_configs/uglifyConfig.js" );

module.exports = function( grunt ) {
	grunt.initConfig({
		cssmin: cssminConfig,
		compass: compassConfig,
		copy: copyConfig,
		jshint: jshintConfig,
		uglify: uglifyConfig
	});

	grunt.loadNpmTasks( "grunt-contrib-jshint" );
	grunt.loadNpmTasks( "grunt-contrib-compass" );
	grunt.loadNpmTasks( "grunt-contrib-copy" );
	grunt.loadNpmTasks( "grunt-contrib-cssmin" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );

	grunt.registerTask("default", ["jshint", "compass:devel", "copy", "cssmin", "uglify"]);
};
