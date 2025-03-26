// /server/models/jobModel.js
const db = require('../config/db');

const getAllJobs = (callback) => {
  const query = 'SELECT * FROM job_adverts';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching jobs:', err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getAllJobs,
};
