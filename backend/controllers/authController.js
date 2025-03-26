const userModel = require('../models/userModel');  // Import the user model
const bcrypt = require('bcrypt');  // Assuming you are using bcrypt for password hashing
const jwt = require('jsonwebtoken');  // Assuming you're using JWT for authentication

// Login controller function
exports.employerLogin= async (req, res) => {
    const { email, password } = req.body;
    console.log("Received Data:", req.body);

    try {
        // Find the user by email
        const user = await userModel.findByEmail(email);
        console.log("Queried User:", user);


        // Check if password matches
        console.log(user.password_hash)
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });

        // Send the response with the token
        return res.status(200).json({ token });

    } catch (error) {
        console.error('Error during login:', error);

        if (error.message === 'No user found with this email') {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(500).json({ message: 'Internal Server Error', error: error });
    }
};

