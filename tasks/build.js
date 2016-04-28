var gulp = require('gulp'),
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
      handleError: function(err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe($.if('*.html', $.useref()))
    .pipe($.if('**/*.js', $.uglify()))
    .pipe($.if('**/*.html', $.htmlmin({
      collapseWhitespace: true
    })))
    .pipe(gulp.dest('dist'));
});
