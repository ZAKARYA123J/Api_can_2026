require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USER || 'postgres',
    password: process.env.PASSWORD || 'password',
    database: process.env.DB || 'database_development',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    logging: console.log,
    // PostgreSQL specific options
    dialectOptions: {
      // If using SSL, add these:
      // ssl: {
      //   require: true,
      //   rejectUnauthorized: false
      // }
    },
    // Connection pool settings
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  test: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'database_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    logging: false
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    // Connection pool settings for production
    pool: {
      max: 20,
      min: 5,
      acquire: 60000,
      idle: 20000
    },
    // Additional production settings
    logging: false
  }
};