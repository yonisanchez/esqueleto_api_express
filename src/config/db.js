const { Pool } = require('pg'); //BBDD postgresql

require('dotenv').config();

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

module.exports = db; //Variable global para acceso a la BBDD desde toda la app
