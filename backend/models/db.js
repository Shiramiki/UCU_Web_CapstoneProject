// const mariadb = require('mariadb')
const mysql = require('mysql2');
require('dotenv').config()


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.MARIAPASSWORD,
    database: 'project_db'
})

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MariaDB: ', err);
      return;
    }
    console.log('Connected to the MariaDB database.');
  });

module.exports = connection;