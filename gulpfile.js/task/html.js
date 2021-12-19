const { src, dest } = require("gulp");

const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");

const path = require("../config/path.js");
const app = require("../config/app.js");

const html = () => {
  return src(path.html.src)
    .pipe(fileInclude(app.fileInclude))
    .pipe(htmlmin(app.htmlmin))
    .pipe(dest(path.html.dest))
}

module.exports = html;