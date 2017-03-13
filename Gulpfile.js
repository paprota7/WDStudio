var gulp = require('gulp');
var mkdirp = require('mkdirp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var spritesmith = require('gulp.spritesmith');
var autoprefixer = require('gulp-autoprefixer');
var htmlhint = require("gulp-htmlhint");

var browsers = [
    'last 2 versions',
    'ie >= 8',
    'ie_mob >= 10',
    'ios >= 7',
    'android >= 4.2',
    'bb >= 10'
];

gulp.task('sass', function() {
    gulp.src('./css/**/*.css', {read: false})
        .pipe(clean());

    gulp.src('./source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: browsers,
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('./source/sprites/**/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprites.scss'
        }));
    spriteData.img.pipe(gulp.dest('./images'));
    spriteData.css.pipe(gulp.dest('./source/scss'));
});

gulp.task('js', function(){
    return gulp.src('./source/js/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('html', function() {
    gulp.src("./*.html")
        .pipe(htmlhint())
        .pipe(htmlhint.reporter());
});

gulp.task('watch',function() {
    gulp.watch('./source/scss/**/*.scss', ['sass']);
});


gulp.task('default', ['sprite', 'sass', 'js'], function() {});
