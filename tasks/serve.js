'use strict';

var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create();

gulp.task('serve', ['clean', 'template', 'styles', 'watch'], function() {
  browserSync.init({
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });
  gulp.watch(['.tmp/**/*.html', '.tmp/**/*.css']).on('change', browserSync.reload);
});
