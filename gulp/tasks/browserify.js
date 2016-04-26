import gulp       from 'gulp';
import browserify from 'browserify';
import babelify   from 'babelify';
import riotify    from 'riotify';
import source     from 'vinyl-source-stream';
import paths      from '../config';

gulp.task('browserify', () => {
	return browserify('src/js/app.js')
		.transform(babelify, { presets: 'es2015' })
		.transform(riotify, {
			compact: true,
			template: 'jade',
			type: 'es6',
			ext: 'jade'
		})
		.bundle()
		.on('error', function(err) {
			console.error('Error: ' + err.message);
			this.emit('end');
		})
		.pipe(source('app.js'))
		.pipe(gulp.dest(paths.js_dir));
});
