'use strict';

var gulp = require('gulp'),
  config = require('../config.js'),
  $ = require('gulp-load-plugins')(),
  browserSync = require('browser-sync');

gulp.task('template', function() {
  return gulp.src('./app/views/*.jade')
    .pipe($.plumber({
      handleError: config.plumber.handleError
    }))
    .pipe($.jade({
      pretty: true
    }))
    .pipe($.htmlhint('.htmlhintrc'))
    .pipe($.htmlhint.reporter('htmlhint-stylish'))
    .pipe($.bootlint())
    .pipe(gulp.dest('.tmp/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
