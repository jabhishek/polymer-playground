
var gulp = require('gulp');
var server = require('gulp-develop-server');
var $gulp = require('gulp-load-plugins')({
	lazy: false
});

gulp.task('server:start', function() {
	"use strict";
	server.listen({path: 'server/index.js'}, $gulp.livereload.listen);
});

// restart server if app.js changed
gulp.task('watch', function () {
	gulp.watch([ 'server/**/*.js'], function restart() {
		server.changed( function( error ) {
			if( ! error ) $gulp.livereload.changed();
		});
	});

	gulp.watch([
		'**/*'
	], $gulp.livereload.changed);
});

gulp.task('default', ['server:start', 'watch']);