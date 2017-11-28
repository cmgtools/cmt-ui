module.exports = function( grunt ) {

	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );

    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

		sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'dist/css/cmgtools.css': 'src/scss/cmgtools.scss'
	            }
	        }
	   },
    	cssmin: {
			options: {

			},
      		target: {
	        	files: {
	          		'dist/css/cmgtools.min.css': [ 'dist/css/cmgtools.css' ]
	        	}
      		}
    	},
		copy: {
			main: {
				files: [
					{ expand: true, cwd: 'src/scss/cmt/', src: ['**'], dest: 'dist/scss/', filter: 'isFile' },
					{ expand: true, cwd: 'dist/css/', src: ['*.css'], dest: 'examples/styles/', filter: 'isFile' }
				]
			}
		}
    });

    grunt.registerTask( 'default', [ 'sass', 'cssmin', 'copy' ] );
};
