import babel from 'gulp-babel';
import del from 'del';
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('clean', ['lint'], () => {

  return del('dist/*');

});

gulp.task('compile', ['clean'], () => {

  return gulp.src('src/server.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));

});

gulp.task('watch', ['compile'], () => {

  gulp.watch('src/**/*.js', ['compile']);

});

gulp.task('build', [
  'compile',
  'watch'
]);
