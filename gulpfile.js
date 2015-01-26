var gulp = require('gulp'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	mincss = require('gulp-minify-css');

gulp.task('buildcss', function(){
	return gulp.src('sass/*.{scss,sass}')
			.pipe(compass({
				css: 'dist/css',
				sass: 'sass',
				image: 'images'
			}))
			.pipe(autoprefixer({
	            browsers: ['last 3 versions'],
	            cascade: false
	        }))
	        .pipe(mincss())
			.pipe(connect.reload())
			.pipe(gulp.dest('dist/css'));
});

gulp.task('watch', ['buildcss', 'connect'], function(){
	gulp.watch('./sass/*.{scss,sass}', ['buildcss']);
});

gulp.task('connect', function(){
	connect.server({
        livereload: true,
        host: '0.0.0.0',
        port: 8400
    });
})

gulp.task('default', function(){});