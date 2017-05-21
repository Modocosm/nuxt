
module.exports = function middlewareModule (options) {
  return new Promise((resolve, reject) => {
    // Add /api endpoint
    this.addServerMiddleware({
      path: '/api',
      handler (req, res, next) {
        res.end('It works!')
      }
    })
    // Add local middleware js
    this.addServerMiddleware('~/modules/middleware/log.js')
    // Add plain middleware
    this.addServerMiddleware((req, res, next) => {
      next()
    })
    // Resolve
    resolve()
  })
}
