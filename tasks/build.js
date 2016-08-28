'use strict';

var gulp = require('gulp'),
  config = require('../config.js'),
  del = require('del'),
  runSequence = require('run-sequence'),
  notifier = require('node-notifier'),
  $ = require('gulp-load-plugins')();

gulp.task('build', function() {
  runSequence('build:prepareData', function() {
    del('.tmp');
    notifier.notify({
      title: 'Frontend Development Kit',
      message: 'Build finished'
    });
  });
});

gulp.task('build:prepareData', ['template', 'styles', 'scripts'], function() {
  return gulp.src('.tmp/**')
    .pipe($.plumber({
      handleError: config.plumber.handleError
    }))
    .pipe($.if('*.html', $.useref()))
    .pipe($.if('**/*.css', $.cleanCss()))
    .pipe($.if('**/*.js', $.uglify()))
    .pipe($.if('**/*.html', $.htmlmin({
      collapseWhitespace: true
    })))
    .pipe(gulp.dest('dist'));
});
