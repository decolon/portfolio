module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('../../index.html')
		    .pipe(plugins.htmlmin({collapseWhitespace: true}))
    		.pipe(gulp.dest('../../dist'));
    };
};
