import React from 'react';
import { motion } from 'framer-motion';
import coverimage from '../assets/coverimage.jpg';
import google_icon from '../assets/googleicon.png';

const LandingPage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            {/* Left Section - Hero */}
            <div className="w-1/2 h-full flex flex-col justify-center p-12 relative">
                <motion.h1 
                    className="text-6xl font-extrabold text-gray-900 leading-tight"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Finding Jobs Made Easy
                </motion.h1>
                <motion.p 
                    className="text-lg text-gray-700 mt-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Just apply and get upstanding offers from the community.
                </motion.p>
                <motion.button 
                    className="mt-6 px-6 py-3 bg-black text-white rounded-md font-semibold shadow-md hover:shadow-lg transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
            </div>

            {/* Right Section - Image */}
            <div className="w-1/2 h-full relative overflow-hidden">
                <motion.img 
                    src={coverimage} 
                    alt="Cover" 
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                />
            </div>
        </div>
    );
};

export default LandingPage;