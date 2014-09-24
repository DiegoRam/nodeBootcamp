var path = require('path');

module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON
		('package.json'),
		watch: {
			configFiles: {
				files: ['Gruntfile.js'],
				options: {
					reload: true
				}
			},
			html: {
				files: 'src/static/*.html',
				options: {
					livereload: true
				}
			},
			templates: {
				files: 'src/templates/*.jade',
				option: {
					livereload: true
				}
			}
		},
		run: {
			min_server: {
				options : {
					wait: false
				},
				args: ['simple-server.js']
			},
			cassandra: {
				option: {
					wait: false
				},
				exec: 'sudo cassandra'
			}
		},
		express: {
			all: {
				options: {
					port: 9001,
					hostname: 'localhost',
					server: './server-exp.js',
					bases: [path.resolve(__dirname, 'src/static'),
					path.resolve(__dirname,'src/templates')],
					livereload: true		
				}				
			}
		},
		open: {
			all: {
				path: "http://localhost:9001/",
				options: {
					delay : 5000
				}
			}
		}
	});

	grunt.event.on('watch', function(action, filepath, target) {
	  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-run');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('default', ['run:min_server','express', 'open','watch']);

};