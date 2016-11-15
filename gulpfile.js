// const r = require
// const gulp = r('gulp')
// const sass = r('gulp-sass')
// const mocha = r('gulp-mocha');
// const cssnano= r('gulp-cssnano');

const gulp = require('gulp')
const sass = require('gulp-sass')
const mocha = require('gulp-mocha')
const cssnano = require('gulp-cssnano')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', ["test", "styles", "scripts"],function() {
  console.log("hello")
});

gulp.task('styles',function() {
  console.log("Compiling SCSS to CSS...")
  return gulp.src('./src/styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cssnano())
  .pipe(gulp.dest('./dest'));
});

gulp.task('scripts', function () {
  return gulp.src('./src/scripts/**/*.js')
  .pipe(babel({presets:['es2015']}))
  .pipe(uglify().on("error", (e) => console.log(e)))
  .pipe(gulp.dest('./dest'));
})

gulp.task('test', function () {
    gulp.src('./test/**/*-test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
});

gulp.task('watch', function () {
  gulp.watch('./src/styles/**/*.scss',['styles'])
  gulp.watch('./src/scripts/**/*.js',['scripts'])
  gulp.watch('./test/**/*-test.js',['test'])
});
