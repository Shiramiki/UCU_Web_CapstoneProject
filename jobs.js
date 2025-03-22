const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
    db.query("SELECT * FROM jobs", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.post("/", (req, res) => {
    const { title, description, company, location, salary } = req.body;
    const query = "INSERT INTO jobs (title, description, company, location, salary) VALUES (?, ?, ?, ?, ?)";

    db.query(query, [title, description, company, location, salary], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Job added successfully" });
    });
});

module.exports = router;
