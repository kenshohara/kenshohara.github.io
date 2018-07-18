var gulp = require('gulp');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var sassGlob = require( 'gulp-sass-glob' );
 
gulp.task('pug', () => {
  return gulp.src(['./src/pug/*.pug', '!./src/pug/_*.pug'])
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
  gulp.src(['src/scss/style.scss'])
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest('src/css/'));
});

gulp.task('watch', ['pug', 'sass'], function () {
  gulp.watch(['./src/pug/*.pug'], ['pug']);
  gulp.watch(['./src/scss/**/*.scss'], ['sass']);
});

gulp.task('default', ['watch']);