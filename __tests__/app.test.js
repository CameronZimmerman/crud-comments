const client = require('../pg/client.js')
const setup = require('../pg/setup.js')
const request = require('supertest')
const app = require('../lib/app.js')

describe('route tests', () => {
  beforeEach(() => {
    return setup()
  })

  beforeEach(async() => {
    return await request(app)
      .post('/api/comments')
      .send({comment: 'seed data'})
  })
  
  test('should create a comment, respond with its content and send an email alert', () => {
    return request(app)
      .post('/api/comments')
      .send({comment: 'i love your dog'})
      .then((res) => {
        expect(res.body).toEqual({
          id: 2,
          comment: 'i love your dog'
        })
      })
  })

  test('should grab all comments', () => {
    return request(app)
      .get('/api/comments')
      .then((res) => {
        expect(res.body).toEqual(
          [{
            id: 1,
            comment: 'seed data'
          }]
        )
      })
  })

  test('should update a comment by id, respond with its content and send an email alert', () => {
    return request(app)
      .put('/api/comments/1')
      .send({comment: 'i wuv your dog'})
      .then((res) => {
        expect(res.body).toEqual({
          id: 1,
          comment: 'i wuv your dog'
        })
      })
  })

  test('should delete a comment by id, respond with its content and send an email alert', async () => {
    await request(app)
    .delete('/api/comments/1')

    const getRes = await request(app).get('/api/comments')

    expect(getRes.body).toEqual([])
  })
})