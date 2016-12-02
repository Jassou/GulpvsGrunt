module.exports = function(grunt) {
	grunt.initConfig({
	// running `grunt less` will compile once
	less: {
		development: {
            options: {
                paths: ["less"],
                yuicompress: true
            },
			files: {
				"css/style.css": ['less/app.less', 'less/utility.less']
			}
		}
	},
	// running `grunt cssmin` will compile once
	cssmin: {
   		min_css: {
      		src: 'css/style.css',
      		dest: 'css/main.min.css'
    	}
  	},
	// running `grunt watch` will watch for changes
	watch: {
		files: "less/*",
		tasks: ["less"]
	}
});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-css');
	grunt.registerTask('default', ['less', 'cssmin'])
	grunt.loadNpmTasks('grunt-contrib-watch');
};