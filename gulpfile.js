// load packages
var gulp              = require('gulp'),
	Less              = require('gulp-less'),
	minifyCSS         = require('gulp-minify-css'),
	rename 			  = require("gulp-rename"),
	concate   		  = require('gulp-concat'),
	jshint 			  = require('gulp-jshint'),
	jsmin 			  = require('gulp-jsmin'),
	jpegoptim 		  = require('imagemin-jpegoptim'),
	pngquant 		  = require('imagemin-pngquant'),
	optipng 		  = require('imagemin-optipng'),
 	svgo 			  = require('imagemin-svgo');

// gulp less
gulp.task('less', function () {
    gulp.src('less/**/*.less')
        .pipe(Less())
        .pipe(concate('style.css'))
        .pipe(gulp.dest('css/'))
});

//gulp mincss
gulp.task('mincss', function() {
	gulp.src('css/style.css')
	.pipe(minifyCSS())
	.pipe(rename('main.min.css'))
    .pipe(gulp.dest('css/'));
});

//gulp jshint
gulp.task('jshint', function(){
	gulp.src(['js/intro.js','js/project.js'])
	.pipe(jshint())
	.pipe(concate('main.js'))
	.pipe(gulp.dest('js/'))
});

//gulp minjs
gulp.task('minjs', function() {
	gulp.src('js/main.js')
	.pipe(jsmin())
	.pipe(rename('main.min.js'))
	.pipe(gulp.dest('js/'));
});

//gulp imagemin
gulp.task('imagemin', function() {
	gulp.src('images/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe(pngquant({quality: '65-80', speed: 4})())
    .pipe(optipng({optimizationLevel: 3})())
    .pipe(jpegoptim({max: 70})())
    .pipe(svgo()())
    .pipe(gulp.dest('images/compressed'));
});
 
//gulp watch
gulp.task('watch', function(){
  gulp.watch('less/*.less', ['less']);
  gulp.watch(['js/intro.js','js/project.js'], ['jshint']);
});

//gulp
gulp.task('default', ['less']);