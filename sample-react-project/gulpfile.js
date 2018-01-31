var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');


var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require("vinyl-buffer");
var transform = require('vinyl-transform');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
/*
var genv = require('gulp-env');
//var env = process.env.NODE_ENV || 'development';
/*
gulp.task('set-env', function () {
    var envId = gutil.env.env || 'development';
    genv({
        file: "env." + envId + ".json"
    });
});
*/
var env = gutil.env.env || 'development';
process.env.NODE_ENV = env;
function isProd() {
    return env === 'production';
}
function isDev() {
    return env != 'production';
}

const paths = {
    basedir: './src',
    basescss: './scss',
    src: [
      './node_modules',
      './src',
      './src/components/',
    ],
    js: './js/',
    dest: './public/js',
    dist_js: './public/js/',
    dist_css: './public/css/',
    bundle: 'bundle.js',
    scripts: 'scripts.js',
    bundleMin: 'bundle.min.js',
    entryPoint: './src/app.jsx'
};

gulp.task('scripts', ['build'], function() {
    return gulp.src(paths.bundle)
        .pipe(concat(paths.scripts))
        .pipe(gulp.dest(paths.dest))
	.pipe(rename(paths.bundleMin))
	.pipe(uglify())
	.pipe(gulp.dest(paths.dest));
});

gulp.task('build', function () {
    console.log("Building environment: " + env);
    return browserify({entries: paths.entryPoint, extensions: ['.jsx'], debug: isDev(), paths: paths.src})
        .transform('babelify', {presets: ['babel-preset-es2015', 'react', 'stage-2']})
        .bundle()
        .pipe(source(paths.bundle))
	.pipe(buffer())
//	.pipe(uglify())
        .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function () {
    gulp.watch(paths.basedir + "/**/*.js*", ['build']);
    gulp.watch(paths.basescss + "/**/*.scss", ['styles']);
});

gulp.task('styles', function() {
	console.log("Generating CSS files on " + paths.dist_css);
    gulp.src(paths.basescss + "/**/*.scss")
		.pipe(sass({ style: 'expanded' }))
		.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
		.pipe(gulp.dest(paths.dist_css))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest(paths.dist_css));
});

gulp.task('copy', function() {
	gulp.src([paths.basedir+'/**/*']).pipe(gulp.dest(paths.js));
	if (isProd()) {
		gulp.src([paths.dest+'/bundle.*']).pipe(gulp.dest(paths.dist_js));
	}
});

//gulp.task('default', ['watch']);
gulp.task('default', function() {
	gulp.start(['watch']);
	return;
});
