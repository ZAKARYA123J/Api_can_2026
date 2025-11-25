import dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    username: "postgres" ,
    password: "12356",
    database: "Canproject" ,
    host: "localhost" ,
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    logging: console.log,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },

};