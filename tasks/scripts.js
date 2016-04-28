var gulp = require('gulp');

gulp.task('scripts', function() {
  return gulp.src('./app/**/*.js')
    .pipe(gulp.dest('.tmp'));
});
