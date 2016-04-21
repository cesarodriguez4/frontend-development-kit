'use strict';

var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create();

gulp.task('serve', ['clean', 'template', 'styles'], function() {
  browserSync.init({
    server: {
      baseDir: ['.tmp', 'app']
    }
  });
  gulp.watch('./app/**/*.scss', ['styles']);
  gulp.watch('./app/**/*.jade', ['template']);
  gulp.watch(['.tmp/**/*.html', '.tmp/**/*.css']).on('change', browserSync.reload);
});
