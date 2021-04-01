const app = require('./lib/app.js')
const client = require('./pg/client.js')

const PORT = process.env.PORT || 6789

app.listen(PORT, () => console.log(`Server started on ${PORT}`))

process.on('exit', () => {
  console.log('Server ended')
  client.end();
})