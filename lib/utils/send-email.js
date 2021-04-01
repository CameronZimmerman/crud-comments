const nodemailer = require('nodemailer')
const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.PERSONAL_EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
})

module.exports = (recipient, text) => {
  const message = {
    from: process.env.PERSONAL_EMAIL,
    to: recipient,
    subject: 'You received a comment',
    text
  }

  transport.sendMail(message, (error, info) => {
    if(error) return error
    else return ('Email sent ' + info.response)
  })
}

