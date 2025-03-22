const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../../JOB_SEARCH_PROJECT/JOB_SEARCH_PROJECT/db");

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(query, [name, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "User registered successfully" });
    });
});

module.exports = router;
