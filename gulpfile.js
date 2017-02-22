var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var sassPathes = [
    './scss/**/*.scss', 
    './vendors/font-awesome/scss/*.scss'
]

gulp.task('sass', function(){
    gulp.src(sassPathes)
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(livereload({start: true}));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(sassPathes, ['sass']);
});