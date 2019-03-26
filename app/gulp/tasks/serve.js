'use strict'

module.exports = function() {
	$.gulp.task('serve', function() {
		$.serve.init({
			open: true,
			server: './dist'
		});

		$.gulp.watch('./dist', $.serve.reload());
	});
}