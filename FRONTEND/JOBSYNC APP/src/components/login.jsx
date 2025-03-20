import React from 'react';
import coverimage from '../assets/coverimage.jpg'; // Fixed import statement

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
            <div className='absolute top-[20%] left-[10&] flex flex-col'>
                <h1 className='text-5xl text-white font-extrabold my-4'>Finding Jobs Made Easy</h1>
                <p className='text-base text-white font-extrabold'>Just apply and get upstanding offers from the community</p>

            </div>
                <img
                    src={coverimage}
                    
                    className="w-full h-full object-cover " // Ensures the image covers the container
                />
            </div>

           
            </div>
       
    );
};

export default Login;