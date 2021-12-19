const { src, dest } = require("gulp");

const newer = require("gulp-newer");
const svgmin = require("gulp-svgmin");
const tinypng = require("gulp-tinypng-free");
const gulpif = require("gulp-if");

const path = require("../config/path.js");
const app = require("../config/app.js");

const img = () => {
  return src(path.img.src)
    .pipe(newer(path.img.dest))
    .pipe(gulpif(app.isProd, svgmin()))
    .pipe(gulpif(app.isProd, tinypng()))
    .pipe(dest(path.img.dest))
}

module.exports = img;