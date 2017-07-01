var gulp    = require('gulp');
var concat = require('gulp-concat');
var uglify  = require('gulp-uglify');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
  gulp.src(['./app/**/*.js', '!./app/**/*.test.js', '!./app/app.min.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('./app.min.js'))
      .pipe(uglify({mangle: true}))
      .pipe(gulp.dest('public/javascripts/'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('styles', function() {
  gulp.src(['./app/**/*.css', '!./app/app.min.css'])
      .pipe(concat('./app.min.css'))
      .pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('index', function() {
  gulp.src('app/index.html')
  .pipe(gulp.dest('public/'))
});


gulp.task('templates', function() {
  gulp.src('./app/templates/**/*')
  .pipe(gulp.dest('public/templates/'));
});



gulp.task('watch', function() {
  watch(['./app/**/*.js', '!./app/**/*.test.js', '!./app/app.min.js'], function () {
    gulp.start('scripts');
  });

  watch(['./app/**/*.css', '!./app/app.min.css'], function () {
    gulp.start('styles');
  });
});

gulp.task('default', ['scripts', 'styles', 'index', 'templates', 'watch']);