const Comment = require('../models/Comment.js')
const sendEmail = require('../utils/send-email.js')

module.exports = class CommentService {
  static async create ({comment}) {
    await sendEmail(process.env.RECIPIENT_EMAIL, `you have a new comment: ${comment}`)

    const newComment = await Comment.insert({comment})
    return newComment
  }

  static async get () {
    const comments = await Comment.get()
    return comments
  }

  static async update ({comment}, id) {
    await sendEmail(process.env.RECIPIENT_EMAIL, `comment of id ${id} was updated: ${comment}`)

    const newComment = await Comment.update({comment}, id)
    return newComment
  }

  static async delete ({comment}, id) {
    await sendEmail(process.env.RECIPIENT_EMAIL, `comment of id ${id} was deleted: ${comment}`)

    await Comment.delete({comment}, id)
  }
}