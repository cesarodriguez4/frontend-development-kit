'use strict';

var gulp = require('gulp'),
  config = require('../config.js'),
  $ = require('gulp-load-plugins')(),
  browserSync = require('browser-sync');

gulp.task('styles', function() {
  return gulp.src('./app/**/*.scss')
    .pipe($.plumber({
      handleError: config.plumber.handleError
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'expanded'
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
