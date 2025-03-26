// /server/controllers/jobController.js
const jobModel = require('../models/advertModel');

const getJobListings = (req, res) => {
  jobModel.getAllJobs((err, jobs) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching job listings' });
    }
    res.json(jobs);
  });
};

module.exports = {
  getJobListings
};
