import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import Link to navigate between pages
import google_icon from "../assets/googleicon.png"; // Import Google Icon

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-lg p-12 w-full sm:w-96">
                <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
                <p className="text-base text-center mb-6 text-gray-600">Welcome Back! Please enter your details.</p>

                {/* Login Form */}
                <form className="flex flex-col">
                    {/* Email Input */}
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:border-blue-500 transition duration-200 placeholder-gray-500"
                    />

                    {/* Password Input with Toggle */}
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter your password"
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:border-blue-500 transition duration-200 placeholder-gray-500 pr-10"
                        />
                        <span
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </span>
                    </div>
                </form>

                {/* Login Button */}
                <Link to="/" className="w-full mt-5 text-white font-semibold bg-[#060606] rounded-md p-4 text-center">
                    Log in
                </Link>

                {/* Divider */}
                <div className="w-full flex items-center justify-center relative py-4">
                    <div className="w-full h-[1px] bg-black/40"></div>
                    <p className="absolute bg-[#f5f5f5] px-2 text-lg text-black/80">or</p>
                </div>

                {/* Google Login Button */}
                <button className="w-full text-[#060606] font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                    <img src="/src/assets/googleicon.png" alt="Google Icon" className="h-6 mr-2" />
                    Sign In With Google
                </button>

                {/* Sign Up Link */}
                <div className="w-full flex items-center justify-center mt-4">
                    <p className="text-sm font-normal text-[#060606]">Don't have an account? 
                        <Link to="/signup" className="font-semibold underline underline-offset-2 cursor-pointer"> Sign up for free</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
