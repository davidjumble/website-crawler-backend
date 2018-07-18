const http = require('http')
const {crawlUrl} = require('./controller/index')

const server = http.createServer((req, res) => {
  if (req.url.includes('/api/crawl/')) crawlUrl(req, res)
})

module.exports = server
