'use strict';

module.exports = function(grunt){

    require("time-grunt")(grunt);

    require("jit-grunt")(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                files:{
                    "css/styles.css": "css/styles.scss"
                }
            }
        },
        watch: {
            files: "css/*.scss",
            tasks: ["sass"]
        },

        browserSync: {
            dev: {
                bsFiles:{
                    src: [
                        "css/*.scss",
                        "*.html",
                        "js/*.js"
                    ]
                },
                options:{
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },

        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "./",
                    src: ["*.html"],
                    dest: "dist"

                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "node_modules/font-awesome",
                    src: ["fonts/*.*"],
                    dest: "dist"
                }]
            }
        }

        
    });

    grunt.registerTask("css", ["sass"]);
    grunt.registerTask("default", ["browserSync", "watch"]);
}