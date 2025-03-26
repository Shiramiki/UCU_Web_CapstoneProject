import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import google_icon from '../assets/googleicon.png';

const Login = () => {
    const navigate = useNavigate(); // Initialize navigation

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-center mb-5">Login</h2>
                <p className="text-base text-center mb-5">Welcome Back! Please enter your details.</p>

                <div className="w-full flex flex-col">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:border-blue-500 transition duration-200"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:border-blue-500 transition duration-200"
                    />
                </div>

                <div className='w-full flex items-center justify-between mb-4'>
                    <div className='flex items-center'>
                        <input type="checkbox" className="w-4 h-4 mr-2"/>
                        <p className='text-sm'>Remember me</p>
                    </div>
                    <p className="text-sm font-medium cursor-pointer underline">Forgot Password?</p>
                </div>

                <button className='w-full text-white font-semibold bg-black rounded-md p-3 text-center'>
                    Log in
                </button>

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
