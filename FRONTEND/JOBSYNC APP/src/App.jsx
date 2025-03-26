import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingpage"; 
import Login from "./components/login";
import SignUp from "./components/signUp/signup";
import JobSeekerSignUp from "./components/signUp/JobseekerSignup";
import EmployerSignUp from "./components/signUp/EmployerSignUp";
import JobListings from "./pages/joblistings";
import JobDetails from "./pages/jobdetails";
import About from "./pages/about";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Home/Landing Page */}
        <Route path="/about" element={<About />} /> {/* Home/Landing Page */}

        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/signup" element={<SignUp />} /> {/* Sign Up Page (Choose Job Seeker or Employer) */}
        <Route path="/signup/jobseeker" element={<JobSeekerSignUp />} /> {/* Job Seeker Sign Up */}
        <Route path="/signup/employer" element={<EmployerSignUp />} /> {/* Employer Sign Up */}
        <Route path="/joblistings" element={<JobListings />} /> {/* Job Listings Page */}
        <Route path="/jobdetails/:jobId" element={<JobDetails />} /> {/* Home/Landing Page */}
      </Routes>
    </Router>
  );
};

export default App;
