//Database Configuration
require('dotenv').config();
const mysql = require('mysql2');

// Create a connection to the database using environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err.stack);
    return;
    

  }
  console.log('Connected to the database as id ' + connection.threadId);
});

// Export connection if needed in other parts of your application
module.exports = connection;
