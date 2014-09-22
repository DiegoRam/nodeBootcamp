var path = require('path');

module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON
		('package.json'),
		run: {
			min_server: {
				options : {
					wait: false
				},
				args: ['simple-server.js']
			}
		},
		express: {
			complex_server: {
				options: {
					port: 9001,
					hostname: 'localhost',
					server: './server-exp.js',
					bases: [path.resolve(__dirname, 'templates'),
					path.resolve(__dirname, 'static')],
					livereload: true,
					serverreload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-run');
	grunt.loadNpmTasks('grunt-express');

	grunt.registerTask('default', ['run:min_server','express', 'express-keepalive']);

};