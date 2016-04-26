import gulp       from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => {
	runSequence(['jade', 'sass', 'browserify', 'watch']);
});

