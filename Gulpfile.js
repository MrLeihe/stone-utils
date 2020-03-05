const gulp = require('gulp')
const bump = require('gulp-bump')

// https://www.npmjs.com/package/gulp-bump

gulp.task('bump', function (cb) {
    gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest('./'))
    cb()
})