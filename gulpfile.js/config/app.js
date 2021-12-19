const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  fileInclude: {
    prefix: '@',
    basepath: '@file'
  },

  htmlmin: {
    collapseWhitespace: isProd
  },

  rename: {
    suffix: ".min"
  },

  webpack: {
    mode: isProd ? "production" : "development"
  }
}