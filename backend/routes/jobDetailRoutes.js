const express = require('express');
const jobDetailrouter = express.Router();
const authController = require('../controllers/advertController'); 


jobDetailrouter.get('/jobs/:id', jobController.getJobById);
module.exports = jobSeekerRoutes;