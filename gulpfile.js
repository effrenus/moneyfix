var gulp = require('gulp'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect'),
	plumber = require('gulp-plumber');

gulp.task('buildcss', function(){
	return gulp.src('sass/*.{scss,sass}')
			.pipe(compass({
				css: 'dist/css',
				sass: 'sass',
				image: 'images'
			}))
			.pipe(connect.reload())
			.pipe(gulp.dest('./tmp'))
});

gulp.task('watch', ['buildcss', 'connect'], function(){
	gulp.watch('./sass/*.{scss,sass}', ['buildcss']);
});

gulp.task('connect', function(){
	connect.server({
        livereload: true,
        port: 8400
    });
})

gulp.task('default', function(){});