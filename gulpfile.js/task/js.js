const { src, dest } = require("gulp")
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")
const rename = require('gulp-rename')

const path = require("../config/path.js")
const app = require("../config/app.js")

const js = () => {
  return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename(app.rename))
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }))
}

module.exports = js;