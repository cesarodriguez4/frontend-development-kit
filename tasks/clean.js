'use strict';

var gulp = require('gulp'),
  del = require('del'),
  notifier = require('node-notifier');

gulp.task('clean', function() {
  del('.tmp');
  notifier.notify({
    title: 'Frontend Development Kit',
    message: 'Directory cleaned successfully!'
  });
});
