const gulp = require('gulp');
const webpack = require('webpack-stream');
var sass = require('gulp-sass');

const file = {
  all: ['app/**/*.js', 'app/*.html']
}

// Copy HTML to build
gulp.task('html:dev', () => {
  gulp.src(__dirname + '/app/**/*.html')
    .pipe(gulp.dest(__dirname + '/build'));
});

// Webpack
gulp.task('webpack:dev', () => {
  gulp.src(__dirname + '/app/js/app.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'))
});

gulp.task('sass:all', function() {
  return gulp.src('./app/stylesheets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

// gulp.task('sass:vendor', function() {
//   return gulp.src('./app/stylesheets/vendor/*.css')
//     .pipe(gulp.dest('build/css'));
// })

gulp.task('sass:watch', function() {
  gulp.watch('./app/stylesheets/sass/*.scss', ['sass:all']);
});


gulp.task('dev:watch', () => {
  gulp.watch(file.all, ['webpack:dev', 'html:dev'])
});

gulp.task('default', ['dev:watch', 'sass:watch']);
