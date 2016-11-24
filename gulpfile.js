var gulp  = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-clean-css');

gulp.task('js',function(){
    gulp.src('jquery.ejDate.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('css',function(){
    gulp.src('jquery.ejDate.css')
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: true
        }))
        .pipe(minifyCss({
            compatibility: 'ie8',
            advanced: false,
            keepSpecialComments: '*'
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('default',['css','js']);
