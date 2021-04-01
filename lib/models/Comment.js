const client = require('pg/client.js')
module.exports = class Comment {
  id
  comment

  constructor(row) {
    this.id = row.id
    this.comment = row.comment
  }

  static async insert(comment) {
    client.query(`INSERT INTO comments (comment) VALUES ($1) RETURNING *`, [comment.comment])
      .then(({rows}) => {
        return new Comment(rows[0])
      })
  }

}