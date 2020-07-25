module.exports = function(grunt){
    grunt.initConfig({
        sass: {
            dist:{
                files:[{
                    expand: true,
                    cwd: 'CSS',
                    src: ['*.SCSS'],
                    dest: 'CSS',
                    ext: '.CSS'
                }]
            }
        },
        watch:{
            files: ['css/*.SCSS'],
            task: ['css']
        },
        browserSync:{
            dev:{
                bsFiles: { //browser Files
                src:[
                    'css/*.SCSS',
                    '*.html',
                    'js/*.js'
                    ]
                },
                options:{
                    watchTask: true,
                    server:{
                        baseDir:'./' //Directorio base para nuestro servidor
                    }
                }
            }
        },
    });
    
    grunt.loadNpmTask('grunt-contrib-watch');
    grunt.loadNpmTask('grunt-contrib-sass');
    grunt.loadNpmTask('grunt-browser-sync');
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch'])
};