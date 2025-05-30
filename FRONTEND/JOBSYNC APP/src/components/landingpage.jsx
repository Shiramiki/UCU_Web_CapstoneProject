import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate hook
import { motion } from "framer-motion";
import coverimage from '../assets/coverimage.jpg'; 
import coverimage2 from '../assets/coverimage2.jpg';  

const LandingPage = () => {
    const navigate = useNavigate();  // Initialize navigate

  const handleJobsClick = () => {
    navigate("/joblistings");  // Programmatically navigate to job listings page
  };

  return (
    <div>
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 text-black z-20 bg-white bg-opacity-70">
        <div className="text-4xl font-extrabold">
          <span className="font-serif" >JOB SYNC</span>
        </div>
        <nav className="space-x-10">
          <Link to="/about" className="font-extrabold text-xl">About</Link>
          <button 
            onClick={handleJobsClick}  // Trigger handleJobsClick on button click
            className="font-extrabold text-xl cursor-pointer"
          >
            Jobs
          </button>
          <Link to="/signup" className="font-extrabold text-xl">Sign Up</Link>
          <Link to="/login" className="font-extrabold text-xl">Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <div 
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${coverimage2})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black/70">
          <div className="text-center text-white font-extrabold z-20">
            <p className="w-full bg-[#4071ed] h-2 mb-5"></p>
            <p className="text-[40px] pb-10 overflow-auto">
            Say goodbye to job hunt frustrations—JobSync is here to connect you with your next opportunity!
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section with Cover Image */}
      <header className="relative w-full h-screen flex flex-col items-center justify-center bg-[#3E2723]">
        <img src={coverimage} alt="Cover" className="absolute w-full h-full object-cover brightness-50" />
        <motion.div
          className="z-10 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
          <h1 className="text-5xl font-extrabold mb-4">Find Your Dream Job</h1>
          <p className="text-lg mb-6">Apply today and get offers from top companies</p>
          <motion.div
            className="flex bg-white text-black p-2 rounded-lg shadow-md w-full max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="text"
              placeholder="Search for jobs..."
              className="px-4 py-2 outline-none w-full rounded-l-lg"
            />
            <button className="bg-orange-950 text-white px-5 py-2 rounded-r-lg hover:bg-blue-700 transition ml-auto">
              Search
            </button>
          </motion.div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-10 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Why Choose JobSync?
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[{
            title: "Personalized Matches", 
            desc: "Get job recommendations tailored to your experience and skills."
          }, {
            title: "Instant Notifications", 
            desc: "Receive instant job alerts when new opportunities match your criteria."
          }, {
            title: "Easy Application", 
            desc: "Apply with just a few clicks and track your application status."
          }].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-8 rounded-lg w-60 text-black"
              initial={{ opacity: 0, x: index === 0 ? -100 : index === 2 ? 100 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-10">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What Our Users Say
        </motion.h2>
        <div className="flex gap-6 overflow-x-auto p-4">
          {[{
            text: "I landed my dream job within a week!", 
            name: "Sarah M."
          }, {
            text: "The best job platform ever!", 
            name: "John D."
          }, {
            text: "Super easy to apply and get responses!", 
            name: "Emily R."
          }].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white text-black shadow-md p-6 rounded-lg w-80"
              initial={{ x: index === 0 ? -100 : index === 2 ? 100 : 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p>"{testimonial.text}"</p>
              <p className="font-semibold mt-4">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to Start?
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Sign up now and land your next big opportunity.
        </motion.p>
      </section>
    </div>
  );
};

export default LandingPage;
