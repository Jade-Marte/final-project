const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './database.db'
  }
})

module.exports = knex