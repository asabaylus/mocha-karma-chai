/* jshint camelcase: false */
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    grunt.initConfig({
        clean: {
            dist: ['test-reports']
        },
        watch: {
            script: {
                files: ['spec/*.js','js/{,*/}*.jsx.js',,'js/{,*/}*.js','!js/{,*/}*.min.js'],
                tasks: ['jshint', 'karma:dev:run']
            }
        },
        jshint: {
            // options: {
            //     jshintrc: '.jshintrc'
            // },
            all: [
                'Gruntfile.js',
                'js/{,*/}*.js',
                '!js/{,*/}*.min.js',
                '!js/{,*/}*.jsx.js',
                'spec/{,*/}*.js'
            ]
        },
        karma: {
            dev: {
                configFile: './karma.conf.js',
                autoWatch: true,
                singleRun: false,
                background: false,
                captureConsole: false
            }
            // continuous: {
            //     configFile: './karma.conf-ci.js'
            // }
        }
    });

    grunt.registerTask('test', [
        'jshint',
        'karma:dev'
    ]);


    grunt.registerTask('default', [
        'test'
    ]);
};
