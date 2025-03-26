const express = require("express");
const jobSeekerRoutes = express.Router();
const bcrypt = require("bcrypt");
const db = require("../config/db");

jobSeekerRoutes.post("/register/jobseeker", async (req, res) => {
    // Check if req.body has the data
    console.log(req.body);  // Add this to check if you're receiving the data correctly
    const { firstName, lastName, email, password, phone, address, skills, experienceLevel, confirmPassword } = req.body;

    console.log(lastName)

    if (!firstName || !lastName || !email || !password || !phone || !address) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = `INSERT INTO job_seekers (first_name, last_name, email, password_hash, phone, location, skills, experienceLevel) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        db.query(query, [firstName, lastName, email, hashedPassword, phone, address, skills, experienceLevel], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Job Seeker registered successfully" });
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = jobSeekerRoutes;
