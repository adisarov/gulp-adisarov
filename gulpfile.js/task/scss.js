const { src, dest } = require("gulp");

const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const rename = require('gulp-rename');

const path = require("../config/path.js");
const app = require("../config/app.js");

const scss = () => {
  return src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(groupCssMediaQueries())
    .pipe(csso())
    .pipe(rename(app.rename))
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
}

module.exports = scss;