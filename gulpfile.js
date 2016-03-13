var gulp = require('gulp');
var autoprefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('css', function () {
  gulp.src('./scss/newlyweb.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefix())
    .pipe(minify())
    .pipe(gulp.dest('./css'));
})

gulp.task('default',function () {
  gulp.watch('./scss/*.scss', ['css']);
})
