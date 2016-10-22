var gulp = require('gulp'),
    browserify = require('gulp-browserify');

gulp.task('browserify', function () {
  return gulp.src('./app/alerter.js')
    .pipe(browserify())
    .pipe(gulp.dest('./app/bin'));
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.js'], ['browserify']);
});

