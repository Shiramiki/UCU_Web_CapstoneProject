import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/jobs/${jobId}`)
      .then(response => {
        setJob(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching job details:', error);
        setLoading(false);
      });
  }, [jobId]);

  if (loading) {
    return <p className="text-center text-lg font-semibold">Loading job details...</p>;
  }

  if (!job) {
    return (
      <div className="text-center">
        <p className="text-red-600 font-semibold mb-4">Job not found!</p>
        <Link to="/joblistings">
          <motion.button 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Job Listings
          </motion.button>
        </Link>
      </div>
    );
  }

  return(
    <motion.div 
      className="py-16 px-10 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">{job.job_title}</h2>
      <div className="text-center mb-6">
        <p className="text-xl font-medium">{job.company_name}</p>
        <p className="text-gray-600">{job.location}</p>
        <p className="text-sm text-gray-500">Posted: {job.posted_at}</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3">Job Description</h3>
        <p>{job.job_description}</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3">Job Requirements</h3>
        <p>{job.requirements}</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3">Salary</h3>
        <p>UGX{job.salary}</p>
      </div>

      <div className="text-center">
        <Link to="/joblistings">
          <motion.button 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Job Listings
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default JobDetails;
