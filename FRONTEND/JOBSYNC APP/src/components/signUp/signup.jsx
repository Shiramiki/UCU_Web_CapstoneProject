import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-center mb-5">Sign Up</h2>
                <p className="text-base text-center mb-5">Create an account to get started.</p>

                <div className="flex justify-around mb-5">
                    <button
                        onClick={() => navigate("/signup/jobseeker")}
                        className="w-1/3 py-3 bg-blue-500 text-white rounded-md"
                    >
                        Sign Up as Job Seeker
                    </button>
                    <button
                        onClick={() => navigate("/signup/employer")}
                        className="w-1/3 py-3 bg-green-500 text-white rounded-md"
                    >
                        Sign Up as Employer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
