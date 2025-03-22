// jobSeeker.js (new file)
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../config/db");

router.post("/register", async (req, res) => {
    const { first_name, last_name, email, password, phone, location, job_preference, industry_preference, skills } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `INSERT INTO job_seekers (first_name, last_name, email, password_hash, phone, location, job_preference, industry_preference, skills) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [first_name, last_name, email, hashedPassword, phone, location, job_preference, industry_preference, skills], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Job Seeker registered successfully" });
    });
});

module.exports = router;
