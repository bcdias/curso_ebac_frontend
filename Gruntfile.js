module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            },
            scripts:{
                files: ['src/scripts/*.js'],
                tasks: ['replace:dev']
                
            }
        },

        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'CSS_ADDRESS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'JS_ADDRESS',
                            replacement: './scripts/main.js'
                        },
                        {
                            match: 'CREATECARD_JS',
                            replacement: './createCard.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/scripts/main.js'],
                        dest: 'dev/scripts'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/scripts/createCard.js'],
                        dest: 'dev/scripts'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'CSS_ADDRESS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'JS_ADDRESS',
                            replacement: './scripts/main.min.js'
                        },
                        {
                            match: 'CREATECARD_JS',
                            replacement: './createCard.min.js'
                        }

                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/scripts/main.min.js'],
                        dest: 'dist/scripts'
                    }
                ]
            }
        },

        htmlmin: {
            dist:{
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },

        uglify: {
            target: {
                files: {
                    'prebuild/scripts/main.min.js': 'src/scripts/main.js',
                    'dist/scripts/createCard.min.js': 'src/scripts/createCard.js',
                }
            }
        },

        clean: ['prebuild']


    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'uglify', 'replace:dist', 'clean'])
}