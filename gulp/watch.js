var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.watch('./app/**/*.scss', ['styles']);
gulp.watch('./app/views/*.jade', ['template']);
