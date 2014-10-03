module.exports = function(grunt){
	grunt.initConfig({
		open:{
			all: {
				path: "http://localhost:9001/",
				options: {
					delay : 3000
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-open');
	grunt.registerTask('default', ['open','watch']);
}