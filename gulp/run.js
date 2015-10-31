import gulp from 'gulp';
import nodemon from 'gulp-nodemon';

gulp.task('run', ['build'], () => {

  return nodemon({
    tasks: [
      'compile'
    ],
    script: 'dist/server.js',
    watch: [
      'src'
    ]
  });

});
