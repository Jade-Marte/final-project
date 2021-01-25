const path = require('path')
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '..', 'database.db'),
  },
})

module.exports = knex
