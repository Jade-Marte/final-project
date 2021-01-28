const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const config = require('./config.json')
const cors = require('cors')
const recipe = require('./routes/recipeRoute')

const app = express()

const authRoutes = require('./routes/auth')

app.use(
  cors({
    origin: (origin, callback) => {
      console.log(origin)
      if (
        config.cors.whitelist.includes(origin) ||
        typeof origin === 'undefined'
      ) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    //origin: '*',
    credentials: true,
  })
)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(
  session({
    secret: config.session.secret,
    resave: true,
    saveUninitialized: true,
  })
)

app.use(authRoutes)
app.use(recipe)

app.get('/', (req, res) => {
  res.send('Recipe app API')
})

app.listen(config.express.port, () => {
  console.log(`Recipe app listening at http://localhost:${config.express.port}`)
})
