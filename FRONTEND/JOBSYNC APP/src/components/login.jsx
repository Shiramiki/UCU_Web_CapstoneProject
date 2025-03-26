import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import axios from 'axios';  // Import Axios
import google_icon from '../assets/googleicon.png';

const Login = () => {
    const navigate = useNavigate(); // Initialize navigation

    // State for user input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // State for error message
    const [errorMessage, setErrorMessage] = useState("");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Logging in with:", { email, password });

        // Clear any previous error messages
        setErrorMessage("");

        try {
            // Send login request to the back-end API
            const response = await axios.post('http://localhost:5000/api/auth/login/employer', {
                email,
                password
            });
            

            // Assuming the response contains the token and user details
            localStorage.setItem('token', response.data.token); // Store token
            navigate("/dashboard"); // Redirect to dashboard

        } catch (error) {
            if (error.response) {
                // If error response exists, set the error message
                setErrorMessage(error.response.data.message || 'Login failed');
                console.log(error);
            } else {
                // Handle network errors or no response from server
                setErrorMessage('Network error. Please try again.');
            }
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-center mb-5">Login</h2>
                <p className="text-base text-center mb-5">Welcome Back! Please enter your details.</p>

                {/* Form for login */}
                <form onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:border-blue-500 transition duration-200"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:border-blue-500 transition duration-200"
                            required
                        />
                    </div>

                    {/* Display error message */}
                    {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

                    <div className='w-full flex items-center justify-between mb-4'>
                        <div className='flex items-center'>
                            <input type="checkbox" className="w-4 h-4 mr-2"/>
                            <p className='text-sm'>Remember me</p>
                        </div>
                        <p className="text-sm font-medium cursor-pointer underline">Forgot Password?</p>
                    </div>

                    {/* Submit button for login */}
                    <button type="submit" className='w-full text-white font-semibold bg-black rounded-md p-3 text-center'>
                        Log in
                    </button>
                </form>

                {/* Sign Up button navigates to SignUp page */}
                <button 
                    onClick={() => navigate("/signup")}
                    className='w-full text-black font-semibold bg-white border border-black rounded-md p-3 text-center mt-3'
                >
                    Sign Up
                </button>

                <div className='w-full flex items-center justify-center relative py-4'>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                    <p className='absolute bg-white px-2 text-gray-600'>or</p>
                </div>

                {/* Google Sign-in */}
                <button className='w-full text-black font-semibold bg-white border border-gray-400 rounded-md p-3 flex items-center justify-center'>
                    <img src={google_icon} className='h-6 mr-2' alt="Google Icon"/>
                    Sign In With Google
                </button>

                <div className='text-center mt-4'>
                    <p className='text-sm'>Don't have an account? 
                        <span 
                            onClick={() => navigate("/signup")}
                            className='font-semibold underline cursor-pointer'
                        > Sign up for free</span>
                    </p> 
                </div>
            </div>
        </div>
    );
};

export default Login;
