const express = require('express');
const router = express.Router();
const { registerValidation, loginValidation } = require('../middleware/validationRules');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');

// Register route
router.post('/register', registerValidation, validate, async (req, res) => {
  try {
    // Your registration logic here
    // The request has already been validated by the middleware
    const { email, password, name, role } = req.body;
    
    // Add your user creation logic here
    
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
});

// Login route
router.post('/login', loginValidation, validate, async (req, res) => {
  try {
    // Your login logic here
    // The request has already been validated by the middleware
    const { email, password } = req.body;
    
    // Add your authentication logic here
    
    res.json({ message: 'Login successful' });
  } catch (error) {
    next(error);
  }
});

module.exports = router; 