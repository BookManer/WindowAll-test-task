'use strict'

module.exports = function() {
	$.gulp.task('watch', function() {
		$.gulp.watch('./app/sass/**/*.sass', $.gulp.series('sass')); 
		$.gulp.watch('./app/pug/**/*.pug', $.gulp.series('pug')); 
	});
}