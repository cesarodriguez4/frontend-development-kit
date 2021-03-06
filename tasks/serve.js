'use strict';

var gulp = require('gulp'),
  notifier = require('node-notifier'),
  $ = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create();

gulp.task('serve', ['styles', 'template', 'watch'], function() {
  browserSync.init({
    server: {
      baseDir: ['.tmp', 'app', './']
    }
  });
  notifier.notify({
    title: 'Frontend Development Kit',
    message: 'Server started'
  })
  gulp.watch(['.tmp/**/*.html', '.tmp/**/*.css', '.tmp/**/*.js']).on('change', browserSync.reload);
});
