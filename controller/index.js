const url = require('url')
const https = require('https')
const DOMParser = require('D')

const crawlUrl = (req, res) => {
  const query = url.parse(req.url).query
  const urlToCrawl = `https://${query}.com`
  https.get(urlToCrawl, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk
    })

    res.on('end', () => {
      console.log(data)
    })
  })
}

module.exports = {crawlUrl}
