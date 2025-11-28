require('dotenv').config();

module.exports= {
  development: {
    username: process.env.USER || 'postgres',
    password: process.env.PASSWORD || 'Admin123',
    database: process.env.DB || 'TORNOWA',
    host: process.env.DB_HOST || 'localhost',
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
  }
};