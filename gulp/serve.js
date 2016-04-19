var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

gulp.task('serve',['template', 'styles'], function() {
  browserSync.init({
    server: {
      baseDir: ".tmp"
    }
  });
});
