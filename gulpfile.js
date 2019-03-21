'use strict'

global.$ = {
	path: {
		tasks: require('./app/gulp/paths/tasks')
	},
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	del: require('del'), 
	serve: require('browser-sync').create()
}

$.gp.sass.compiler = require('node-sass'); // For right's works converting by Sass into Css

$.path.tasks.forEach(function(task) {
	require(task)();
})

$.gulp.task('default', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'sass',
		'pug'
	),
	$.gulp.parallel(
		'watch',
		'serve'
	)
))