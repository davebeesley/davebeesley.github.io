var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');

 gulp.task('styles', function() {
  return gulp.src('sass/style.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'))
    .pipe(notify({ message: 'Styles task complete' }));
});

 gulp.task('scripts', function() {
  return gulp.src('scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

 gulp.task('images', function() {
  return gulp.src('images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/img/'))
    .pipe(notify({ message: 'Images task complete' }));
});

 gulp.task('clean', function() {
  return gulp.src(['dist/css/', 'dist/js/', 'dist/img/'], {read: false})
    .pipe(clean());
});

 gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images');
});

 gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('css/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('js/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('img/**/*', ['images']);

  // Create LiveReload server
  var server = livereload();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', function(file) {
    server.changed(file.path);
  });

});