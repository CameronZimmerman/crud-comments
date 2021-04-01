const client = require('../pg/client.js')
const setup = require('../pg/setup.js')
const request = require('supertest')
const app = require('../lib/app.js')

describe('route tests', () => {
  beforeEach(() => {
    return setup()
  })
  
  test('should create a comment, respond with its content and send an email alert', () => {
    return request(app)
      .post('/api/comments')
      .send({comment: 'i love your dog'})
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          comment: 'i love your dog'
        })
      })
  })
})