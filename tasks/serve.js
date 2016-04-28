'use strict';

var gulp = require('gulp'),
  notifier = require('node-notifier'),
  $ = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create();

gulp.task('serve', ['clean', 'template', 'styles', 'watch'], function() {
  browserSync.init({
    server: {
      baseDir: ['.tmp', 'app', './']
    }
  });
  notifier.notify({
    title: 'Frontend Development Kit',
    message: 'Server started'
  })
  gulp.watch(['.tmp/**/*.html', '.tmp/**/*.css']).on('change', browserSync.reload);
});
