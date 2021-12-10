const { src, dest} = require("gulp")
const fileInclude = require("gulp-file-include")
const webpHtml = require("gulp-webp-html")

const path = require("../config/path.js")

const html = () => {
  return src(path.html.src)
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(dest(path.html.dest))
}

module.exports = html;