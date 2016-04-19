var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('clean', function() {
  return gulp.src('.tmp', {
    read: false
  })
    .pipe($.clean())
});
