const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function imageCompress() {
    return gulp.src('./source/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img'))
}

function jsCompress() {
    return gulp.src('./source/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
}

function compilaSass(){
    return gulp.src('./source/sass/styles/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}


exports.default = function() {
    gulp.watch('./source/sass/*/*.scss', {ignoreInitial: false}, gulp.series(compilaSass)),
    gulp.watch('./source/js/*.js', {ignoreInitial: false}, gulp.series(jsCompress)),
    gulp.watch('./source/img/*', {ignoreInitial: false}, gulp.series(imageCompress))
}