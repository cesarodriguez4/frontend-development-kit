'use strict';

var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();


gulp.task('scripts', ['eslint'], function() {
  return gulp.src('./app/**/*.js')
    .pipe(gulp.dest('.tmp'));
});

gulp.task('eslint', function() {
  return gulp.src('./app/scripts/*.js')
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});
