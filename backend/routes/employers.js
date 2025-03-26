const express = require("express");
const employeerouter = express.Router();
const bcrypt = require("bcrypt");
const db = require("../config/db");

employeerouter.post("/register/employer", async (req, res) => {
    const { companyName, companyEmail, password, phone, address, website, industry, companySize } = req.body;

    // Check for missing fields
    if (!companyName || !companyEmail || !password || !phone) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `INSERT INTO employers (company_name, email, password_hash, phone, location, industry, company_size) 
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [companyName, companyEmail, hashedPassword, phone, address, industry, companySize], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Employer registered successfully" });
    });
});

module.exports = employeerouter