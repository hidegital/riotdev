import gulp    from 'gulp';
import sass    from 'gulp-sass';
import notify  from 'gulp-notify';
import plumber from 'gulp-plumber';
import paths   from '../config';

gulp.task('sass', () => {
  return gulp.src(paths.sass)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass())
    .pipe(gulp.dest(paths.css_dir));
});

