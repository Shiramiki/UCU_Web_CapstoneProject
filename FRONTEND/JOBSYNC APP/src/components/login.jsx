import React from 'react';
import coverimage from '../assets/coverimage.jpg';
import google_icon from '../assets/googleicon.png'; // Fixed import statement

// Define colors (optional, if you plan to use them)
const colors = {
    primary: "#060606",
    background: "#E0E0E0",
    disabled: "#D9D9D9"
};

const Login = () => {
    return (
        <div className="w-full h-screen flex items-start">
            
            <div className="relative w-1/2 h-full flex flex-col">
            <div className='absolute top-[5%] left-[10&] flex flex-col'>
                <h1 className='text-5xl text-white font-extrabold my-4'>Finding Jobs Made Easy</h1>
                <p className='text-base text-white font-extrabold'>Just apply and get upstanding offers from the community</p>

            </div>
                <img
                    src={coverimage}
                    
                    className="w-full h-full object-cover " // Ensures the image covers the container
                />
            </div>
            <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
            

            <div className='w-full flex flex-col max-w-[400px]'>
                <div className='w-full flex flex-col mb-5'>
                    <h2 className='text-3xl font-bold'>Login</h2>
               
                <p className='text-base nb-2'>Welcome Back! Please enter your details.</p>
                </div>

                <div className="w-full flex flex-col">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
        
    </label>
    <input
        type="email"
        id="email"
        placeholder="Enter your email"
        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:border-blue-500 transition duration-200"
    />

<input
        type="password"
        id="Password"
        placeholder="Enter your password"
        className="w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:border-blue-500 transition duration-200"
    />


</div>

<div className='w-full flex items-center justify-between'>
    <div className='w-full flex items-center'>
        <input type="checkbox" className="w-4 h-4 mr-2"/>
        <p className='text-sm'>Remember me</p>
    </div>

    <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forgot Password</p>
</div>
    <div className='w-full flex flex-col my-4'>
        <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            Log in
        </button>

        <button className='w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            Sign Up
        </button>

    </div>

<div className='w-full flex items-center justify-center relative py-2'>
    <div classname='w-full h-1 bg-black/40'></div>
    <p className=' text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>

</div>

<button className='w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
    <img src={google_icon} className='h-6 mr-2'/>
            Sign In With Google
        </button>


                <div className='w-full flex items-center justify-center'>
                    <p className='text-sm font-normal text-[#060606]'>Don't have an account?<span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</span></p> 
                </div>
            </div>
            </div>
            </div>

       
    );
};

export default Login;
