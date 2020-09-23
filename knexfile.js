// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cookbook.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  testing: {
    client: 'sqlite3',
    connection: { filename: './data/test.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DB_URL,
    ssl: {
      rejectUnauthorized: false
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  }

};
