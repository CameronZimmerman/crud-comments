const { Router } = require('express')
const CommentService = require('../services/CommentService.js')

module.exports = Router()
  .get('/', (req, res, next) => {
    res.send('Hello world')
  })
  .post('/', async (req, res, next) => {
    try {
      let comment = await CommentService.create(req.body)
      res.json(comment)
    }
    catch(err) {
      next(err)
    }
  })