const express = require('express')
const app = express()
const connection = require('./models/db')
require('dotenv').config()


const auth = require('./routes/loginRoutes')
const employerRoutes = require('./routes/employerRoutes')

app.use('/',auth)
app.use('/',employerRoutes)

app.get('/',(req,res)=>{
    res.send('new proj')
})

app.get('/users', (req, res) => {
    // Query to fetch all users from a 'users' table
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error executing query: ', err);
        return res.status(500).send('Database error');
      }
  
      // Return the results of the query
      res.json(results);
    });
  });

app.listen(4400,()=>{
    console.log(`server running on port 4400`)
})