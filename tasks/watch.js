'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  gulp.watch('./app/styles/*.scss', ['styles']);
  gulp.watch('./app/**/*.pug', ['template']);
  gulp.watch('./app/scripts/*.js', ['scripts'])
});
