import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import coverimage from "../assets/coverimage.jpg"; // Correct image import

const AboutPage = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="absolute w-full flex justify-between items-center p-6 text-white z-20">
                <div className="text-4xl font-extrabold">
                    <span className="font-serif">JOB SYNC</span>
                </div>
                <nav className="space-x-10">
                    <Link to="/" className="font-extrabold text-xl">Home</Link>
                    <Link to="/jobs" className="font-extrabold text-xl">Jobs</Link>
                    <Link to="/signup" className="font-extrabold text-xl">Sign Up</Link>
                    <Link to="/login" className="font-extrabold text-xl">Login</Link>
                </nav>
            </header>

            {/* Hero Section */}
            <div className="relative w-full h-[600px]">
                <img
                    src={coverimage} // Correct image usage
                    alt="About Page Background"
                    className="w-full h-full object-cover absolute"
                />
                <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black/70">
                    <div className="text-center text-white font-extrabold z-20">
                        <p className="w-full bg-[#4071ed] h-2 mb-5"></p>
                        <p className="text-[40px] pb-10 overflow-auto">Learn more about how we help you land your dream job!</p>
                    </div>
                </div>
            </div>

            {/* About Content Section */}
            <section className="py-16 px-10 text-center">
                <motion.h2
                    className="text-3xl font-bold mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Who We Are
                </motion.h2>
                <p className="text-lg mb-6">
                    At Job Sync, we believe that finding the perfect job should be easy, accessible, and stress-free. We offer a platform that connects job seekers with top employers based on personalized matches and real-time job alerts.
                </p>
                <motion.div
                    className="text-left mx-auto max-w-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p>
                        Our mission is to revolutionize the job search experience by providing a seamless platform where candidates can apply directly to their dream jobs, get notified instantly about new openings, and track their applications from start to finish.
                    </p>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="py-16 text-center">
                <motion.h2
                    className="text-3xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Join Us Today
                </motion.h2>
                <Link to="/signup">
                    <motion.button
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        Get Started
                    </motion.button>
                </Link>
            </section>
        </div>
    );
};

export default AboutPage;