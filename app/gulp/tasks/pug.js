'use strict'

module.exports = function() {
	$.gulp.task('pug', function(done) {
		$.gulp.src('./app/pug/**/*.pug')
				.pipe($.gp.plumber({
					errorHandler: $.gp.notify.onError(function(error) {
						return {
							title: 'HTML(Pug)',
							message: `Message: ${error.message}`
						}
					})
				}))
				.pipe($.gp.pug({
					pretty: '\t'
				}))
				.pipe($.gulp.dest('./dist/'))
				.pipe($.serve.stream());

		done();
	});
}