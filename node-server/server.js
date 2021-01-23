const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const config = require('./config.json')

const app = express()

const authRoutes = require('./routes/auth')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({
  secret: config.session.secret,
  resave: false,
  saveUninitialized: true
}))

app.use(authRoutes)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(config.express.port, () => {
  console.log(`Recipe app listening at http://localhost:${config.express.port}`)
})