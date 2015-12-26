module.exports = function( grunt ) {

	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

		sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'dist/styles/cmgtools.css': 'scss/cmgtools.scss'
	            }
	        }
	   },
    	cssmin: {
			options: {

			},
      		target: {
	        	files: {
	          		'dist/styles/cmgtools.min.css': [ 'dist/styles/cmgtools.css' ]
	        	}
      		}
    	}
    });

    grunt.registerTask( 'default', [ 'sass', 'cssmin' ] );
};