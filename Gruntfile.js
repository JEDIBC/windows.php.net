module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        less: {
            build: {
                files: {
                    "public/style.min.css": "assets/less/style.less"
                }
            }
        },
        concat: {
            js: {
                src: [
                    "bower_components/jquery/jquery.js",
                    "bower_components/bootstrap/dist/bootstrap.js"
                ],
                dest: "public/script.min.js"
            }
        },
        uglify: {
            options: {
                preserveComments: false,
                compress: false,
                mangle: true,
                beautify: false
            },
            build: {
                src: "public/script.min.js",
                dest: "public/script.min.js"
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            build: {
                files: {
                    "public/style.min.css": "public/style.min.css"
                }
            }
        },
        watch: {
            js: {
                files: "assets/**/*.js",
                tasks: ["concat:js"],
                options: {
                    interrupt: true
                }
            },
            css: {
                files: ["assets/**/*.less", "assets/**/*.css"],
                tasks: ["less"],
                options: {
                    interrupt: true
                }
            }
        }
    });

    // Load plugins.
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-less");

    // Tasks.
    grunt.registerTask("default", ["less", "concat"]);
    grunt.registerTask("build", ["less", "concat", "cssmin", "uglify"]);

};