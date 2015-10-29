var timer = require("grunt-timer"); // used to report exact timings of individual tasks
module.exports = function (grunt) {

    timer.init(grunt);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            components: {
                files: [{
                    expand: true,
                    src: "components/**/*.less",
                    ext: ".css"
                }]
            }
        },

        concurrent: {
            dev: {
                tasks: ['watch:js', 'watch:less', 'watch:livereload'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        watch: {
            js: {
                files: ['*.js', 'components/**/*.js'],
                tasks: ['jshint:all']
            },
            less: {
                files: ['components/**/*.less'],
                tasks: ['less:components']
            },
            livereload: {
                files: ['*.js', 'components/**/*.js', 'components/**/*.css', '*.html', 'components/**/*.html'],
                tasks: [],
                options: {
                    livereload: true
                }
            }
        },

        jshint: {
            all: ['app.js', 'components/**/*.js']
        },

        karma: {
            files: [
                {src: ['components/**/*.js'], included: false},
                {src: ['config.js', 'app.js'], included: false}
            ],
            options: {
                basepath: '',
                frameworks: ['requirejs', 'jasmine', 'jasmine-matchers'],
                reporters: ['progress'],
                colors: true,
                logLevel: 'INFO',
                autoWatch: false,
                browsers: ['PhantomJS'],
                singlerun: true
            },
            unit: {
                files: '<%= karma.files %>'
            }
        }


    });

    grunt.registerTask('dev', ['jshint:all', 'less:components', 'concurrent:dev']);

    return grunt;
};