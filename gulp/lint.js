import gulp from 'gulp';
import eslint from 'gulp-eslint';
import reporter from 'eslint-friendly-formatter';

gulp.task('lint', () => {

  gulp.src([
      'gulp/**/*.js',
      'src/**/*.js',
      'gulpfile.babel.js'
    ])
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format(reporter))
    .pipe(eslint.failAfterError());

});
