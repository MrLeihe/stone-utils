const gulp = require('gulp')
const bump = require('gulp-bump')

gulp.task('bump', function () {
    gulp.src('./package.json')
        .pipe(bump({
            type: 'minor'
        }))
        .pipe(gulp.dest('./'))
})