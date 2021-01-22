const knex = require('./index')

knex.schema
  .dropTable('users')
  .then(() => {
    console.log('Destroyed tables')
  })