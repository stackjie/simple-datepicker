var gulp  = require('gulp'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso');

gulp.task('js',function(){
    gulp.src('jquery.ejDate.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('css',function(){
    gulp.src('jquery.ejDate.css')
        .pipe(csso())
        .pipe(gulp.dest('dist'));
});

gulp.task('default',['css','js']);
