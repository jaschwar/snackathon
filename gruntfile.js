module.exports = function(grunt) {
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cucumberjs: {
      options: {
        format: 'html',
        output: 'cucumber-report.html',
        theme: 'bootstrap',
      },
      my_features: ['/features/login_logout.feature'],
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: {
            path: '.'
          },
          keepalive: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-cucumberjs');
  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('test', [
        'selenium_start',
        'cucumberjs',
        'selenium_stop',
    ]);
};
