const client = require('../../pg/client.js')
module.exports = class Comment {
  id
  comment

  constructor(row) {
    this.id = row.id
    this.comment = row.comment
  }

  static async insert(comment) {
    const {rows} = await client.query(`INSERT INTO comments (comment) VALUES ($1) RETURNING *`, [comment.comment])
    const newComment = new Comment(rows[0])
    console.log(newComment)
    return newComment
  }

  static async update(comment, id) {
    const {rows} = await client.query(`
    UPDATE comments
    SET comment = ($1)
    WHERE id = ($2)
    RETURNING *`, [comment.comment, id])
    const newComment = new Comment(rows[0])
    console.log(newComment)
    return newComment
  }

  static async get() {
    const {rows} = await client.query(`SELECT * from comments`)
    return rows
  }

}