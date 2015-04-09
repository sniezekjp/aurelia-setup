module.exports = function(grunt) {
  
  grunt.initConfig({
    // Babel tasks
    babel: {
      options: {
        sourceMap: true,
        modules: 'amd'
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.js', '!tests/**/*.js', '!vendor/**', '!config.js'],
          dest: './dist'
        }]
      },
      tests: {
        files: [{
          expand: true,
          cwd: 'es6/tests',
          src: ['**/*.js'],
          dest: './tests'
        }]        
      }
    },
    // Watch tasks
    watch: {
      es: {
        files: ['src/app/**'],
        tasks: ['dev'],
        options: {
          livereload: 1337
        }
      },
      src: {
        files: ['Gruntfile.js'],
        tasks: ['dev'],
        options: {
          livereload: true
        }
      },
      scss: {
        files: ['src/assets/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    },
    // Copy tasks
    copy: {
      views: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.html'],
          dest: 'dist'
        }]
      },
      vendor: {
        files: [{
          expand: true, 
          cwd: 'src/vendor',
          src: '**/*',
          dest: 'dist/vendor'
        }]
      },
      moduleLoader: {
        files: [{
          expand: true,
          cwd: 'node_modules/es6-module-loader',
          src: 'dist/**/*',
          dest: 'dist/vendor/es6-module-loader'
        }]
      },
      config: {
        files: [{
          src: 'src/config.js',
          dest: 'dist/config.js'
        }]
      },
      theme: {
        files: [{
          expand: true,
          cwd: 'src/assets',
          src: ['theme/**','fonts/**'],
          dest: 'dist/assets'
        }]
      }
    },
    // Sass tasks
    sass: {
      dev: {
        options: {
          loadPath: '.'
        },
        files: {
          './dist/assets/css/style.css': './src/assets/scss/style.scss'
        }
      }
    },
    // Clean tasks
    clean: ['./dist/app/modules', './dist/app/components', './dist/app/services']
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask("dev", ["newer:babel", "newer:copy", "sass"]);
  grunt.registerTask("default", ["dev", "watch"]);
}