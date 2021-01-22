const express = require('express')
const yup = require('yup')
const knex = require('../database')
const bcrypt = require('bcrypt')
const { formatValidationErrors } = require('../lib/error')

const router = express.Router()
const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})
const registrationSchema = yup.object().shape({
  username: yup.string().required().min(3).max(20),
  password: yup.string().required().min(8).max(100),
  password_confirmation: yup.string().required().when('$password', (password, schema) => {
    return !!password ? schema.equals(password) : schema
  }),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required().email()
})

router.post('/login', async (req, res) => {
  try {
    console.log('hello')
    await loginSchema.validate(req.body, { abortEarly: false })

    const data = loginSchema.cast(req.body)

    const user = await knex('users')
      .where(knex.raw('username = ?', [data.username]))
      .first()

    if (!user) {
      return res.status(404).send({
        message: 'User not found'
      })
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errorRes = formatValidationErrors(error)
      res.status(400).send(errorRes)
    }
    console.log('Error on login', error)
  }
})
router.post('/register', async (req, res) => {
  try {
    await registrationSchema.validate(req.body, { abortEarly: false })
    const data = registrationSchema.cast(req.body)

    // Hash the user's password so it's no longer in plaintext
    data.password = await bcrypt.hash(data.password, 10)

    const [user] = await knex('users').insert(data)
    // Delete the user's password from the object so when we send the created user back
    // we don't share their password
    delete user.password

    res.status(200).send({ message: 'User created', user })
  } catch (error) {
    if (error.name === 'ValidationError') {
      console.log(error)
      const errorRes = formatValidationErrors(error)
      return res.status(400).send(errorRes)
    }

    res.status(500).send({
      message: 'An error occurred'
    })
  }
})

router.get('/test', (req, res) => {
  res.send('test')
})

module.exports = router