import { useState } from "react";
import axios from "axios";

const JobSeekerSignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        resume: null,
        skills: "",
        experienceLevel: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
            setError("All required fields must be filled.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }

        try {
            await axios.post("http://localhost:5000/api/auth/register/jobseeker", form);
            setError(null);
            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: "",
                resume: null,
                skills: "",
                experienceLevel: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            // If error is a network or connection issue
            if (!error.response) {
                setError("Network error: Could not connect to the server.");
                return;
            }
        
            // If there is a response from the server, check the status code
            const { response } = error;
            
            if (response.status === 400) {
                // This could happen if the user provided invalid or incomplete data
                setError(response.data.message || "Invalid input data. Please check your details.");
            } else if (response.status === 409) {
                // 409 Conflict: This error usually happens if there is a conflict, such as trying to register an email that already exists.
                setError("This email is already in use. Please choose a different one.");
            } else if (response.status === 500) {
                // Internal server error, something went wrong on the server side
                setError("Server error. Please try again later.");
            } else {
                // For other status codes or unhandled scenarios
                setError(`Error: ${response.status} - ${response.data.message || "Unknown error during signup."}`);
            }
        }
        
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-center mb-5">Job Seeker Sign Up</h2>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="w-full flex flex-col">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                    />
                    <input
    type="text"
    name="phone"
    placeholder="Phone Number"
    value={formData.phone}
    onChange={(e) => {
        const value = e.target.value;
        // Allow only numbers
        if (/^\d*$/.test(value)) {
            // Ensure the number starts with '07' and has at most 10 digits
            if (value.length <= 10 && (value.startsWith("07") || value === "")) {
                setFormData({ ...formData, phone: value });
            }
        }
    }}
    maxLength="10"
    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
/>

                    
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                    />
                    <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        className="w-full py-2 my-2 bg-transparent border-b border-black outline-none"
                    />
                    <input
                        type="text"
                        name="skills"
                        placeholder="Skills (comma-separated)"
                        value={formData.skills}
                        onChange={handleChange}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                    />
                    <select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleChange}
                        className="w-full py-2 my-2 bg-transparent border-b border-black outline-none"
                    >
                        <option value="">Experience Level</option>
                        <option value="Entry-Level">Entry-Level</option>
                        <option value="Mid-Level">Mid-Level</option>
                        <option value="Senior">Senior</option>
                    </select>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full py-2 my-4 bg-transparent border-b border-black outline-none"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full py-2 my-4 bg-transparent border-b border-black outline-none"
                    />
                    <button type="submit" className="w-full py-3 bg-orange-950 text-white rounded-md">
                        Sign Up as Job Seeker
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobSeekerSignUp;
