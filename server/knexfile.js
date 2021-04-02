require('dotenv').config()

/*
  PORT=5000
  NODE_ENV=development
  DEV_DATABASE_URL='postgresql://postgres:password@localhost:5432/database_name'
  TESTING_DATABASE_URL='postgresql://postgres:password@localhost:5432/testing_database_name'

  Put the above in your .env file. Some adjustments in the connection URLs will be needed:
  
    - 5432 (this is the default TCP port for PostgreSQL, should work as is and can be omitted)
    - postgres (in postgres:password, this is the default superadmin user, might work as is)
    - password (in postgres:password, replace with the actual password set in pgAdmin 4)
    - database_name (use the real name of the development database you created in pgAdmin 4)
    - testing_database_name (use the real name of the testing database you created in pgAdmin 4)
*/
const pg = require('pg')

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false }
}

const sharedConfig = {
  client: 'pg',
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URL,
  },
  testing: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URL,
  },
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
  },
}