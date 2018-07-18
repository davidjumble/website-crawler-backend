const {expect} = require('chai')
const server = require('../server')
const request = require('supertest')(server)

describe('Web Crawler api', () => {
  it('GET /api/crawl/url', () => {
    return request
      .get('/api/crawl/url?=broken-links-api.herokuapp')
      .expect(200)
      .then(res => {
        console.log(res.body)
        // expect(res.body)
      })
  })
})
