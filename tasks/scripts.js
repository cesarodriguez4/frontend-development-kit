'use strict';

var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();


gulp.task('scripts', ['eslint'], function() {
  return gulp.src('./app/**/*.js')
    .pipe(gulp.dest('.tmp'));
});

gulp.task('eslint', function() {
  return gulp.src('./app/**/*.js')
    .pipe($.eslint({
      rules: {
        'strict': 2
      }
    }))
    .pipe($.eslint.formatEach('stylish', process.stderr))
    .pipe($.eslint.failAfterError());
});
