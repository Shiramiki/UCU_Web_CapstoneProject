import { useState } from "react";
import axios from "axios";
import coverimage2 from "../../assets/coverimage2.jpg"; // Import the background image

const EmployerSignUp = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        companyEmail: "",
        phone: "",
        address: "",
        website: "",
        industry: "",
        companySize: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.companyName || !formData.companyEmail || !formData.phone || !formData.password || !formData.confirmPassword) {
            setError("All required fields must be filled.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            await axios.post("http://localhost:5000/api/auth/register/employer", formData);
            setError(null);
            setFormData({
                companyName: "",
                companyEmail: "",
                phone: "",
                address: "",
                website: "",
                industry: "",
                companySize: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.error("Registration Error:", error);
            if (error.response) {
                // The request was made, and the server responded with a status code
                setError(error.response.data.error || "Server error occurred. Please try again.");
            } else if (error.request) {
                // The request was made, but no response was received
                setError("No response from server. Check your connection.");
            } else {
                // Something else happened
                setError("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${coverimage2})` }} // Set the background image
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full z-10">
                <h2 className="text-3xl font-bold text-center mb-5">Employer Sign Up</h2>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="w-full flex flex-col">
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                    />
                    <input
                        type="email"
                        name="companyEmail"
                        placeholder="Company Email"
                        value={formData.companyEmail}
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

        // Allow empty value to enable deletion and retyping
        if (value === "" || (/^07\d{0,8}$/.test(value) && value.length <= 10)) {
            setFormData({ ...formData, phone: value });
        }
    }}
    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
/>

                    <input
                        type="text"
                        name="address"
                        placeholder="Company Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                    />
                    <input
                        type="text"
                        name="website"
                        placeholder="Website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                    />
                    <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full py-2 my-2 bg-transparent border-b border-black outline-none"
                    >
                        <option value="">Industry</option>
                        <option value="Tech">Technology</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Finance">Finance</option>
                        {/* Add more industries as needed */}
                    </select>
                    <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full py-2 my-2 bg-transparent border-b border-black outline-none"
                    >
                        <option value="">Company Size</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="200+">200+</option>
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
                        Sign Up as Employer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EmployerSignUp;
