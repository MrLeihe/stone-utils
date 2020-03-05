const gulp = require('gulp')
const bump = require('gulp-bump')
const clean = require('gulp-clean')

// https://www.npmjs.com/package/gulp-bump

function cleanDist(cb) {
    gulp.src('./dist', {
        allowEmpty: true
    })
        .pipe(clean())
    cb()
}

function bumpVersion(cb) {
    gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest('./'))
    cb()
}

exports.deploy = gulp.series(cleanDist, bumpVersion)