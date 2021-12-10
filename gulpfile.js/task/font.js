const { src, dest } = require("gulp")

const path = require("../config/path.js")
const app = require("../config/app.js")

const font = () => {
  return src(path.font.src)
    .pipe(dest(path.font.dest))
}

module.exports = font;