const knex = require('./index')

knex.schema
  .dropTable('users')
  .then(() => {
    console.log('Destroyed tables')
    // process.exit(0)
  })
knex.schema
.dropTable('recipes')
  .then(() => {
    console.log('Destroyed tables')
    process.exit(0)
  })