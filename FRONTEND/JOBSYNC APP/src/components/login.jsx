import React from 'react';
import coverimage from '../assets/coverimage.jpg';
import google_icon from '../assets/googleicon.png'; // Ensure this path is correct

const colors = {
    primary: "#060606",
    background: "#E0E0E0",
    disabled: "#D9D9D9"
};

const Login = () => {
    return (
        <div className="w-full h-screen flex items-start">
            {/* Left Section with Image */}
            <div className="relative w-1/2 h-full flex flex-col">
                <div className='absolute top-[5%] left-[10%] flex flex-col'>
                    <h1 className='text-5xl text-white font-extrabold my-4'>Finding Jobs Made Easy</h1>
                    <p className='text-base text-white font-extrabold'>Just apply and get upstanding offers from the community</p>
                </div>
                <img
                    src={coverimage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Section with Form */}
            <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
                <div className='w-full flex flex-col max-w-[400px]'>
                    <div className='w-full flex flex-col mb-5'>
                        <h2 className='text-3xl font-bold'>Login</h2>
                        <p className='text-base mb-2'>Welcome Back! Please enter your details.</p>
                    </div>

                    {/* Login Form */}
                    <form className="w-full flex flex-col">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:border-blue-500 transition duration-200 placeholder-gray-500"
                        />

                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:border-blue-500 transition duration-200 placeholder-gray-500"
                        />
                    </form>

                    {/* Remember Me & Forgot Password */}
                    <div className='w-full flex items-center justify-between my-4'>
                        <div className='flex items-center'>
                            <input type="checkbox" className="w-4 h-4 mr-2" />
                            <p className='text-sm'>Remember me</p>
                        </div>
                        <p className="text-sm font-medium cursor-pointer underline underline-offset-2">Forgot Password</p>
                    </div>

                    {/* Login & Sign Up Buttons */}
                    <div className='w-full flex flex-col gap-2 my-4'>
                        <button className='w-full text-white font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                            Log in
                        </button>
                        <button className='w-full text-[#060606] font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                            Sign Up
                        </button>
                    </div>

                    {/* OR Divider */}
                    <div className='w-full flex items-center justify-center relative py-2'>
                        <div className='w-full h-[1px] bg-black/40'></div>
                        <p className=' absolute bg-[#f5f5f5] px-2 text-lg text-black/80'>or</p>
                    </div>

                    {/* Google Login Button */}
                    <button className='w-full text-[#060606] font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                        <img src={google_icon} alt="Google Icon" className='h-6 mr-2' />
                        Sign In With Google
                    </button>

                    {/* Sign Up Link */}
                    <div className='w-full flex items-center justify-center mt-4'>
                        <p className='text-sm font-normal text-[#060606]'>Don't have an account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;