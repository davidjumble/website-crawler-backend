const url = require('url')
const https = require('https')

const crawlUrl = (req, res) => {
  const query = url.parse(req.url).query
  const urlToCrawl = `https://${query}.com`
  https.get(urlToCrawl, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk
    })

    res.on('end', () => {
      const linkArray = data.match(/<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g).reduce((acc, link) => {
        if (!link.includes('@')) {
          acc.push(urlToCrawl.concat(link.slice(9, link.length - 1)))
        }
        return acc;
      }, [])
      console.log(linkArray)
    })
  })
}

module.exports = { crawlUrl }
