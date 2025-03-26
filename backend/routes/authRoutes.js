const express = require('express');
const authRoutes = express.Router();
const authController = require('../controllers/authController'); 

// Employer login route
authRoutes.post('/login/employer', authController.employerLogin);

module.exports = authRoutes;
