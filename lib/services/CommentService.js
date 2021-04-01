const Comment = require('../models/Comment.js')
const sendEmail = require('../utils/send-email.js')

module.exports = class CommentService {
  static async create ({comment}) {
    await sendEmail(process.env.RECIPIENT_EMAIL, comment)

    const newComment = await Comment.insert({comment})
    return newComment
  }

  static async get () {
    const comments = await Comment.get()
    return comments
  }
}