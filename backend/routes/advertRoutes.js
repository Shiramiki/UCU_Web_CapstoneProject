// /server/routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const jobController = require('../controllers/advertController');

// Route to get all job listings
router.get('/api/job-listings', jobController.getJobListings);

module.exports = router;
