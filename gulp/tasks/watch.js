import gulp        from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import paths       from '../config';

//gulp.task('jade-reload', ['jade','htmllint'], () => {
gulp.task('jade-reload', ['jade'], () => {
  browserSync.reload();
});

gulp.task('sass-reload', ['sass'], () => {
  browserSync.reload();
});

gulp.task('riot-reload', ['browserify'], () => {
  browserSync.reload();
});

gulp.task('watch', () => {
  runSequence(['jade', 'sass', 'browserify'], 'server');
  gulp.watch(paths.jade_watch, ['jade-reload']);
  gulp.watch(paths.sass_watch, ['sass-reload']);
  gulp.watch(paths.js,         ['riot-reload']);
});

