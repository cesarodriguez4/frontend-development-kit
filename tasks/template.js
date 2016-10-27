'use strict';

var gulp = require('gulp'),
  config = require('../config.js'),
  $ = require('gulp-load-plugins')(),
  browserSync = require('browser-sync');

gulp.task('template', function() {
  return gulp.src('./app/views/*.pug')
    .pipe($.plumber({
      handleError: config.plumber.handleError
    }))
    .pipe($.pug({
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
