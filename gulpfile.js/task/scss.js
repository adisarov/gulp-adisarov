const { src, dest } = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const autoprefixer = require("gulp-autoprefixer")
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')
const shorthand = require('gulp-shorthand')
const groupCssMediaQueries = require('gulp-group-css-media-queries')
const webpCss = require('gulp-webp-css')

const path = require("../config/path.js")
const app = require("../config/app.js")

const scss = () => {
  return src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(sass())
    // .pipe(webpCss())
    .pipe(autoprefixer(app.autoprefixer))
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    // .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(rename(app.rename))
    .pipe(cleanCss(app.cleanCss))
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
}

module.exports = scss;