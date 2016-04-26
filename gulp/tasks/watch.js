import gulp        from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import paths       from '../config';

// Watch Jade Files
gulp.task('jade-reload', ['jade'], () => {
  browserSync.reload();
});

// Watch Sass Files
gulp.task('sass-reload', ['sass'], () => {
  browserSync.reload();
});

// Watch Riot Files
gulp.task('riot-reload', ['browserify'], () => {
  browserSync.reload();
});

// Watch Task
gulp.task('watch', () => {
  runSequence(['jade', 'sass', 'browserify'], 'server');
  gulp.watch(paths.jade_watch, ['jade-reload']);
  gulp.watch(paths.sass_watch, ['sass-reload']);
  gulp.watch(paths.js,         ['riot-reload']);
});

