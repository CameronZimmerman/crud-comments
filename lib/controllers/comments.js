const { Router } = require('express')
const CommentService = require('../services/CommentService.js')

module.exports = Router()
  .get('/', async (req, res, next) => {
    let comments = await CommentService.get()
    res.json(comments)
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
  .put('/:id', async (req, res, next) => {
    try {
      let comment = await CommentService.update(req.body, 1)
      res.json(comment)
    }
    catch(err) {
      next(err)
    }
  })