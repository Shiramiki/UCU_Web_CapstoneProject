import React, { useState } from 'react';
import './App.css';
import coverimage from './assets/coverimage.jpg'; // Fixed import statement
import Login from './components/login'; // Fixed import statement

function App() {
  // State to manage user type selection
  const [userType, setUserType] = useState('job-seeker'); // Default to Job Seeker

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    {/* Render the Login component */}
    <Login />
</div>
   
  );
}

export default App;
