module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON
		('package.json'),
		watch: {
			scripts: {
			    files: ['src/static/js/*.js'],
			    options: {
			      spawn: true,
			      livereload: true
			    }
			},
			templates: {
				files: 'src/templates/*.jade',
    			tasks: ['jade'],
    			options: {
    				spawn: true,
      				livereload: true,
    			}				
			}
		},
		run: {
			min_server: {
				options : {
					wait: false
				},
				args: ['simple-server.js']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-run');

	grunt.registerTask('default', ['run:min_server','watch']);

};