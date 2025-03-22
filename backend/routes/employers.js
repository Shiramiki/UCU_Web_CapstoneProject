const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../config/db");

router.post("/register/employer", async (req, res)=> {
    const { companyName, companyEmail, password, phone, address, website, industry, companySize } = req.body;
const hashedPassword = await bcrypt.hash(password, 10);

const query = `INSERT INTO employers (company_name, email, password_hash, phone, location, industry, company_size) 
               VALUES (?, ?, ?, ?, ?, ?, ?)`;

db.query(query, [companyName, companyEmail, hashedPassword, phone, address, industry, companySize], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Employer registered successfully" });
    });
});

module.exports = router;
