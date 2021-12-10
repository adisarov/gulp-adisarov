const pathSrc = "./src"
const pathDest = "./dist"

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest
  },

  scss: {
    src: pathSrc + "/scss/*.{scss,sass}",
    watch: pathSrc + "/scss/**/*.{scss,sass}",
    dest: pathDest + "/css"
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js"
  },

  img: {
    src: pathSrc + "/img/*.{png,jpg,jpeg,gif,svg}",
    watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    dest: pathDest + "/img"
  },

  sprite: {
    src: pathSrc + "/img/svg/*.svg",
    watch: pathSrc + "/img/svg/*.*",
    dest: pathDest + "/img/svg"
  },

  font: {
    src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    dest: pathDest + "/fonts"
  }
}