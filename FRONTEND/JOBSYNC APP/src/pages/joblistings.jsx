import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const JobListings = () => {
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'Remote', description: 'Developing and maintaining software applications.', postedDate: 'March 15, 2025' },
    { id: 2, title: 'Product Manager', company: 'Innovate Ltd.', location: 'New York, NY', description: 'Lead product development and strategy.', postedDate: 'March 20, 2025' },
    { id: 3, title: 'UX/UI Designer', company: 'Designify', location: 'San Francisco, CA', description: 'Create user-friendly designs and interfaces.', postedDate: 'March 18, 2025' },
    { id: 4, title: 'Data Scientist', company: 'Data Analytics Inc.', location: 'Austin, TX', description: 'Analyze and interpret complex data sets.', postedDate: 'March 22, 2025' },
  ];

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
            <h3 className="text-xl font-semibold mb-4">{job.title}</h3>
            <p className="text-gray-600 mb-2">{job.company}</p>
            <p className="text-gray-600 mb-2">{job.location}</p>
            <p className="text-sm text-gray-700 mb-4">{job.description}</p>
            <p className="text-xs text-gray-500 mb-4">Posted: {job.postedDate}</p>
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
