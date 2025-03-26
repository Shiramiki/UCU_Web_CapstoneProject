const express = require('express')
const router = express.Router()

router.get('/login',(req,res)=>{
    res.send('login page')
})

router.get('/signup',()=>{
    res.render('signup')
})

router.post('/api/signup', (req, res) => {
    const { name, email, contact, userType, password } = req.body;
  
    // Insert data into MySQL (assuming 'users' table exists in project_db)
    const query = 'INSERT INTO users (name, email, contact, userType, password) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, email, contact, userType, password], (err, results) => {
      if (err) {
        console.error('Error inserting data into MySQL:', err);
        res.status(500).send('Error inserting data into MySQL');
      } else {
        res.status(200).send('User signed up successfully');
      }
    });
  });


module.exports = router