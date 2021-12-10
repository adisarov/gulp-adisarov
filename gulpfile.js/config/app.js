const isProd = process.argv.includes("--production")
const isDev = !isProd

module.exports = {
  isProd: isProd,
  isDev: isDev,

  autoprefixer: {
    grid: isProd
  },

  rename: {
    suffix: ".min"
  },

  cleanCss: {
    level: {
      1: { specialComments: 0 },
      2: { level: 2 }
    }
  },

  imagemin: {
    verbose: true
  },

  fonter: {
    formats: ["ttf", "woff", "eot", "svg"]
  },

  svgSprite: {
    mode: {
      stack: {
        sprite: "../sprite.svg"
      }
    }
  }
}