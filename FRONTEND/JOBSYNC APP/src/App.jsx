import React from "react";
import "./App.css";
import Login from "./components/login"; // Importing Login component
// import LandingPage from "./components/landingpage"; // Importing LandingPage component

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <Login />
    </div>
  );
};

export default App;
