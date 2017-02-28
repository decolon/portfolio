 var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
    return require('./scripts/gulp-tasks/' + task)(gulp, plugins);
}

gulp.task('min', getTask('minHtml'));

gulp.task('default', ['min']);
