// import React from 'react'; 
// import { motion } from 'framer-motion';
// import coverimage from '../assets/coverimage.jpg';
// import google_icon from '../assets/googleicon.png';

// const LandingPage = () => {
//     return (
//         <div className="bg-gray-100 text-black">
//             {/* Navbar */}
//             <nav className="w-full flex justify-between items-center px-10 py-5 bg-transparent absolute top-0 left-0 right-0">
//                 <h1 className="text-2xl font-bold">JobFinder</h1>
//                 <div className="flex items-center gap-6">
//                     <button className="hover:text-blue-500">Home</button>
//                     <button className="hover:text-blue-500">Jobs</button>
//                     <button className="hover:text-blue-500">About</button>
//                     {/* Removed Contact Button */}
//                 </div>
//             </nav>

//             {/* Hero Section */}
//             <header className="relative w-full h-screen flex flex-col items-center justify-center">
//                 <img src={coverimage} alt="Cover" className="absolute w-full h-full object-cover brightness-50" />
//                 <motion.div
//                     className="z-10 text-center"
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1, type: "spring", stiffness: 50 }}
//                 >
//                     <h1 className="text-5xl font-extrabold mb-4">Find Your Dream Job</h1>
//                     <p className="text-lg mb-6">Apply today and get offers from top companies</p>

//                     {/* Search Bar */}
//                     <motion.div
//                         className="flex bg-white text-black p-2 rounded-lg shadow-md"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <input 
//                             type="text" 
//                             placeholder="Search for jobs..." 
//                             className="px-4 py-2 outline-none w-80 rounded-l-lg"
//                         />
//                         <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition">
//                             Search
//                         </button>
//                     </motion.div>

//                     {/* Login Button */}
//                     <motion.button
//                         className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 1.5 }}
//                     >
//                         Login
//                     </motion.button>
//                 </motion.div>
//             </header>

//             {/* Creative Features Section */}
//             <section className="py-16 px-10 text-center">
//                 <motion.h2
//                     className="text-3xl font-bold mb-8"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 >
//                     Why Choose JobFinder?
//                 </motion.h2>
//                 <div className="flex justify-center gap-12">
//                     <motion.div
//                         className="bg-white shadow-lg p-8 rounded-lg w-60 text-black"
//                         initial={{ x: -100, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h3 className="text-xl font-semibold mb-4">Personalized Matches</h3>
//                         <p>Get job recommendations tailored to your experience and skills.</p>
//                     </motion.div>
//                     <motion.div
//                         className="bg-white shadow-lg p-8 rounded-lg w-60 text-black"
//                         initial={{ y: -100, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h3 className="text-xl font-semibold mb-4">Instant Notifications</h3>
//                         <p>Receive instant job alerts when new opportunities match your criteria.</p>
//                     </motion.div>
//                     <motion.div
//                         className="bg-white shadow-lg p-8 rounded-lg w-60 text-black"
//                         initial={{ x: 100, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h3 className="text-xl font-semibold mb-4">Easy Application</h3>
//                         <p>Apply with just a few clicks and track your application status.</p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Testimonials */}
//             <section className="py-16 px-10">
//                 <motion.h2
//                     className="text-3xl font-bold text-center mb-8"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 >
//                     What Our Users Say
//                 </motion.h2>

//                 <div className="flex gap-6 overflow-x-auto scrollbar-hide p-4">
//                     <motion.div
//                         className="bg-white text-black shadow-md p-6 rounded-lg w-80"
//                         initial={{ x: -100, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <p>"I landed my dream job within a week!"</p>
//                         <p className="font-semibold mt-4">- Sarah M.</p>
//                     </motion.div>
//                     <motion.div
//                         className="bg-white text-black shadow-md p-6 rounded-lg w-80"
//                         initial={{ x: 100, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <p>"The best job platform ever!"</p>
//                         <p className="font-semibold mt-4">- John D.</p>
//                     </motion.div>
//                     <motion.div
//                         className="bg-white text-black shadow-md p-6 rounded-lg w-80"
//                         initial={{ x: -100, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <p>"Super easy to apply and get responses!"</p>
//                         <p className="font-semibold mt-4">- Emily R.</p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="py-16 text-center">
//                 <motion.h2
//                     className="text-3xl font-bold"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 >
//                     Ready to Start?
//                 </motion.h2>
//                 <motion.p
//                     className="text-lg mb-6"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1.2 }}
//                 >
//                     Sign up now and land your next big opportunity.
//                 </motion.p>
//                 <motion.button
//                     className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 1.5 }}
//                 >
//                     Get Started
//                 </motion.button>
//             </section>
//         </div>
//     );
// };

// export default LandingPage;