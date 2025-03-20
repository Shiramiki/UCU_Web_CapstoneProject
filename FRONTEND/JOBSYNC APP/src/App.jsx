import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Fixed imports
import "./App.css";
import Login from "./components/login"; // Fixed import statement
import LandingPage from "./components/landingpage"; // Fixed import path
import { motion } from "framer-motion";

function App() {
  // State to manage user type selection
  const [userType, setUserType] = useState("job-seeker"); // Default to Job Seeker

  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Routes>
          {/* Define routes for pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

