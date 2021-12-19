const { src, dest } = require("gulp");
const svgSprite = require('gulp-svg-sprite');

const path = require("../config/path.js");
const app = require("../config/app.js");

const sprite = () => {
  return src(path.sprite.src)
    .pipe(svgSprite(app.svgSprite))
    .pipe(dest(path.sprite.dest))
}

module.exports = sprite;