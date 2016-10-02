'use strict';

var gulp = require("gulp"),
  replace = require("gulp-replace");

gulp.task("images", function(){
  return gulp.src('./app/images/**', { nodir: true })
    .pipe(gulp.dest('./dist/images'));
});

gulp.task("videos", function(){
  return gulp.src('./app/videos/**', { nodir: true })
    .pipe(gulp.dest('./dist/videos'));
});

gulp.task("bootstrap-fonts", function(){
  return gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/**')
    .pipe(gulp.dest('./dist/fonts/'));
});

gulp.task("plugins", function(){
  return gulp.src('./app/plugins/**', { nodir: true })
    .pipe(gulp.dest('./dist/plugins'));
});

gulp.task("fix-fonts", function(){
  return gulp.src(['./dist/styles/main.css'])
    .pipe(replace('../../node_modules/bootstrap-sass/assets/fonts/bootstrap/', '../fonts/'))
    .pipe(gulp.dest('./dist/styles/'));
});

gulp.task("copy", ['bootstrap-fonts','fix-fonts', 'images', 'videos', 'plugins'], function(){
});
