'use strict';
import gulp        from 'gulp';
//import jade        from 'gulp-jade';
//import sass        from 'gulp-sass';
//import notify      from 'gulp-notify';
//import plumber     from 'gulp-plumber';
//import browserify  from 'browserify';
//import babelify    from 'babelify';
//import riotify     from 'riotify';
//import source      from 'vinyl-source-stream';
//import browserSync from 'browser-sync';
//import runSequence from 'run-sequence';

import requireDir from 'require-dir';

requireDir('./gulp/tasks', {recurse: true});
//
//const paths = {
//  js:         ['src/js/**/*.js', 'src/js/**/*.jade'],
//  jade:       'src/jade/*.jade',
//  jade_watch: 'src/jade/**/*.jade',
//  sass:       'src/sass/*.sass',
//  sass_watch: 'src/sass/**/*.sass',
//  dist:       'dist/**/*',
//  dist_dir:   'dist',
//  js_dir:     'dist/js',
//  sass_dir:   'src/sass',
//  css_dir:    'dist/css'
//};
//
//// Server Settings
//gulp.task('server', () => {
//  browserSync({
//    server: {
//      baseDir: paths.dist_dir
//    }
//  })
//});
//
//// Sass
//gulp.task('sass', () => {
//  return gulp.src(paths.sass)
//    .pipe(plumber({
//      errorHandler: notify.onError('Error: <%= error.message %>')
//    }))
//    .pipe(sass())
//    .pipe(gulp.dest(paths.css_dir));
//});
//
//// Jade
//gulp.task('jade', () => {
//  return gulp.src(paths.jade)
//    .pipe(plumber({
//      errorHandler: notify.onError('Error: <%= error.message %>')
//    }))
//    .pipe(jade())
//    .pipe(gulp.dest(paths.dist_dir));
//});
//
//// Browserify
//gulp.task('browserify', () => {
//  return browserify('src/js/app.js')
//    .transform(babelify, { presets: 'es2015' })
//    .transform(riotify, {
//      compact: true,
//      template: 'jade',
//      type: 'es6',
//      ext: 'jade'
//    })
//    .bundle()
//    .on('error', function(err) {
//      console.error('Error: ' + err.message);
//      this.emit('end');
//    })
//    .pipe(source('app.js'))
//    .pipe(gulp.dest(paths.js_dir));
//});
//
//// Watch Jade Files
//gulp.task('jade-reload', ['jade'], () => {
//  browserSync.reload();
//});
//
//// Watch Sass Files
//gulp.task('sass-reload', ['sass'], () => {
//  browserSync.reload();
//});
//
//// Watch Riot Files
//gulp.task('riot-reload', ['browserify'], () => {
//  browserSync.reload();
//});
//
//// Watch Task
//gulp.task('watch', () => {
//  runSequence(['jade', 'sass', 'browserify'], 'server');
//  gulp.watch(paths.jade_watch, ['jade-reload']);
//  gulp.watch(paths.sass_watch, ['sass-reload']);
//  gulp.watch(paths.js,         ['riot-reload']);
//});
//
//// Deploy Task
////gulp.task('deploy', () => {
////  runSequence(['jade', 'sass', 'browserify'], 'push-ghp');
////});
//
//gulp.task('deploy', () => {
//  runSequence(['jade', 'sass', 'browserify']);
//});
//
//// Build Task
//gulp.task('build', ['jade', 'sass', 'browserify']);
//
//// Default Task
//gulp.task('default', () => {
//  runSequence('build', 'server');
//});
