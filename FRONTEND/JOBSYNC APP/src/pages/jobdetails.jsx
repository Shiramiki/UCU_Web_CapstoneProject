import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = (id) => {
      const jobData = {
        1: {
          title: 'Software Engineer',
          company: 'Tech Corp',
          location: 'Remote',
          description: 'Developing and maintaining software applications.',
          requirements: 'Experience with React, Node.js, and MongoDB.',
          salary: '$100,000 - $120,000',
          postedDate: 'March 15, 2025',
        },
        2: {
          title: 'Product Manager',
          company: 'Innovate Ltd.',
          location: 'New York, NY',
          description: 'Lead product development and strategy.',
          requirements: '5+ years of product management experience.',
          salary: '$120,000 - $140,000',
          postedDate: 'March 20, 2025',
        },
        3: {
          title: 'UX/UI Designer',
          company: 'Designify',
          location: 'San Francisco, CA',
          description: 'Create user-friendly designs and interfaces.',
          requirements: 'Proficiency in Figma, Sketch, and Adobe XD.',
          salary: '$90,000 - $110,000',
          postedDate: 'March 18, 2025',
        },
        4: {
          title: 'Data Scientist',
          company: 'Data Analytics Inc.',
          location: 'Austin, TX',
          description: 'Analyze and interpret complex data sets.',
          requirements: 'Strong knowledge of Python, R, and machine learning.',
          salary: '$110,000 - $130,000',
          postedDate: 'March 22, 2025',
        },
      };
      return jobData[id] || null;
    };

    const jobDetails = fetchJobDetails(jobId);
    setJob(jobDetails);
    setLoading(false);
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

  return (
    <motion.div 
      className="py-16 px-10 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">{job.title}</h2>
      <div className="text-center mb-6">
        <p className="text-xl font-medium">{job.company}</p>
        <p className="text-gray-600">{job.location}</p>
        <p className="text-sm text-gray-500">Posted: {job.postedDate}</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3">Job Description</h3>
        <p>{job.description}</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3">Job Requirements</h3>
        <p>{job.requirements}</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-3">Salary</h3>
        <p>{job.salary}</p>
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
