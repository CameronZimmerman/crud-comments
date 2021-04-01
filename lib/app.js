const express = require('express')

const app = express()



app.use(express.json())

app.use(require('./middleware/error.js'))
app.use(require('./middleware/404.js'))