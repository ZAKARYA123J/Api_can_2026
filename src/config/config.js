import dotenv from 'dotenv';
dotenv.config();

export default {
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

};