# Node Server

This is the node backend server for our website. It handles the function of storing saved recipes, listing them, logging and authenticating users, and registering users.

## Stack

1. Node.js
2. Express.js
3. SQLite3 w/ Knex query builder

## Getting Started

There are a couple steps to get this server running. If you've just pulled, go through the steps below:

1. Run `npm install`
2. Run `npm run setup-db`
   > This will setup the SQLite database and create the necessary tables and columns
3. Change directories to the `node-server` directory and rename `config.example.json` to `config.json`
   > In config.json, you should replace the value of `secret` from `RANDOM_SECRET_HERE` to something random and secure.
4. Go back to the root directory of the whole project then run `npm run start-node-server`

### Clearing the database

If you have a bunch of test data filled in the database and you want to clear it out. Run:

```
npm run destroy-db
```

Just remember to rerun `npm run setup-db` again, otherwise the server will not have any database to read from and error out!
