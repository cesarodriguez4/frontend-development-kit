var gulp = require('gulp'),
  browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  gulp.watch('./app/**/*.scss', ['styles']);
  gulp.watch('./app/**/*.jade', ['template']);
});
