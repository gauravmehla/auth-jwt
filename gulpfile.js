var gulp    = require('gulp');
var concat = require('gulp-concat');
var uglify  = require('gulp-uglify');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

// Concat all JS files 
gulp.task('scripts', function() {
  gulp.src(['./app/**/*.js', '!./app/lib/**/*.js', '!./app/app.min.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('./app.min.js'))
      .pipe(uglify({mangle: true}))
      .pipe(gulp.dest('public/javascripts/'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/javascripts/'));
});

// Concat all CSS files
gulp.task('styles', function() {
  gulp.src(['./app/**/*.css', '!./app/app.min.css'])
      .pipe(concat('./app.min.css'))
      .pipe(gulp.dest('public/stylesheets/'));
});

// Copy index.html to /public/
gulp.task('index', function() {
  gulp.src('app/index.html')
  .pipe(gulp.dest('public/'))
});

// Copy all templates to /public/templates/
gulp.task('templates', function() {
  gulp.src('./app/templates/**/*')
  .pipe(gulp.dest('public/templates/'));
});

// Copy all library files to /public/lib/
gulp.task('lib', function() {
  gulp.src('./app/lib/**/*')
  .pipe(gulp.dest('public/lib/'));
});


// Watch for change in css and js files
gulp.task('watch', function() {
  watch(['./app/**/*.js', '!./app/**/*.test.js', '!./app/app.min.js'], function () {
    gulp.start('scripts');
  });

  watch(['./app/**/*.css', '!./app/app.min.css'], function () {
    gulp.start('styles');
  });
});

// Default task
gulp.task('default', ['scripts', 'styles', 'index', 'templates', 'lib', 'watch']);