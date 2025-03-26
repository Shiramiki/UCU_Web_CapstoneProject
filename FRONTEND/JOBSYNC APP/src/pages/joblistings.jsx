import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import axios from 'axios';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job listings from the backend
    axios.get('http://localhost:5000/api/job-listings')
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the job listings!', error);
      });
  }, []);
  return (

    <div className="py-16 px-10">
      <motion.h2 
        className="text-3xl font-bold text-center mb-8" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Job Listings
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {jobs.map((job) => (
          <motion.div 
            key={job.id} 
            className="bg-white shadow-lg p-8 rounded-lg w-80 text-center"
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4">{job.job_title}</h3>
            <p className="text-gray-600 mb-2">{job.company_name}</p>
            <p className="text-gray-600 mb-2">{job.location}</p>
            <p className="text-sm text-gray-700 mb-4">{job.location}</p>
            <p className="text-xs text-gray-500 mb-4">Posted: {job.posted_at}</p>
            <Link to={`/jobdetails/${job.id}`}>
              <motion.button 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
