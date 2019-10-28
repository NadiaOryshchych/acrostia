const gulp = require('gulp');
const rename = require('gulp-rename'); // Перейменування файлів
const sass = require('gulp-sass'); // Компіляція SASS в CSS
const autoprefixer = require('gulp-autoprefixer'); // Проставляє вендорні префікси в CSS для подтримки старих браузерів
const sourcemaps = require('gulp-sourcemaps');
// const terser = require('gulp-terser'); // Мінімізація javascript 
// const htmlmin = require('gulp-htmlmin'); // Мінімізація html
const browserSync = require('browser-sync').create();

// cssnano = require("gulp-cssnano"), // Мінімізація CSS
// ще почитати про gulp-clean-css
//   concat = require("gulp-concat"), // Об'єднання файлів - конкатинація
// jshint / eslint ??
// const uglify = require('gulp-uglify-es'); // Мінімізація javascript
// const minify = require('gulp-minify'); // Мінімізація javascript 
// imagemin = require('gulp-imagemin'), // Зтиснення зображень
// Tinypng — сжатие изображений. Работает по той же аналогии, что и imagemin, но сжимает значительно лучше.

// CSS task
function cssStyle(done) {
  gulp.src('sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename({
      dirname: '.',
      basename: 'style',
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
  done();
}

// JS task
// function compressedJs(done) {
//   gulp.src('src/js/*.js')
//     .pipe(terser())
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest('dist/js/'))
//     .pipe(browserSync.stream());
//   done();
// }

// HTML task
// function minifyHtml(done) {
//   gulp.src('src/*.html')
//     .pipe(htmlmin({
//       collapseWhitespace: true
//     }))
//     .pipe(gulp.dest('dist'));
//   done();
// }

function serve(done) {
  browserSync.init({
    server: {
      baseDir: './'
    },
    port: 3000
  });
  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}

// function watchSass() {
//   gulp.watch('./src/sass/**/*', cssStyle);
// }

// function watchJs() {
//   gulp.watch('./src/js/**/*.js', compressedJs);
// }

// function watchHtml() {
//   gulp.watch('./src/*.html', minifyHtml);
// }

function watchFiles() {
  gulp.watch('./**/*.html', /* gulp.parallel(minifyHtml, */ browserReload);
  gulp.watch('./sass/**/*', gulp.parallel(cssStyle, browserReload));
  gulp.watch('./**/*.js', /* gulp.parallel(compressedJs, */ browserReload);
  gulp.watch('./**/*', browserReload);
}

gulp.task('default', gulp.parallel(serve, watchFiles));