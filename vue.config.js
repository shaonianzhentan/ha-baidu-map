const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/dev/',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true
}
