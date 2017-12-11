module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['script.js', 'Gruntfile.js'],
    },
    watch: {
      scripts: {
          files: ['script.js', 'Gruntfile.js'],
          tasks: ['jshint'],
          options: {
              spawn: false,
            },
        },
    },
    browserSync: {
        dev: {
            bsFiles: {
                src: ['index.html', 'script.js', 'style.css'],
              },
            options: {
                watchTask: true,
                server: true, // server: true for baseDir: "./" Default - port: 3000
              },
          },
      },
  });

  // Load the plugins tasks

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browser-sync');

  // 'npm run watch" runs task watch for jshint, jsdoc
  grunt.registerTask('wait', ['browserSync', 'watch']);

  // "npm test" runs these task(s)
  grunt.registerTask('test', ['jshint']);

  // Default task(s).
  grunt.registerTask('default', ['wait']);
};
