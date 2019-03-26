'use strict'

module.exports = function() {
	$.gulp.task('sass', function(done) {
		$.gulp.src('./app/sass/main.sass')
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(function(error) {
				return {
					title: 'Styles(SASS)',
					message: error.message
				};
			})
		}))
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.sass())
		.pipe($.gp.sourcemaps.write())
		.pipe($.gulp.dest('./dist/assets/css'))
		.pipe($.serve.stream());

		done(); //Finished the stream
	})
}