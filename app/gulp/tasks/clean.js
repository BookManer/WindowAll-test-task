'use strict'

module.exports = function() {
	$.gulp.task('clean', function(cb) {
		return $.del('./dist/assets/css', cb);
	})
}