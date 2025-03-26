require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { createEmployersTable, createJobSeekersTable, createAdvertsTable } = require('./models/database');
const jobSeekerRoutes = require("./routes/jobSeekersSignupRoutes");
const authRoutes = require("./routes/authRoutes");
const employeerouter = require("./routes/empSignupRoutes");
const jobRoutes = require('./routes/advertRoutes');


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes); // Mount employer routes under /api/auth
app.use("/api/auth", employeerouter);
app.use("/api/auth", jobSeekerRoutes);
app.use(jobRoutes);

const db = require("./config/db");

// API Routes
app.get("/", (req, res) => {
    res.send("Job Search API is running...");
});

// const userRoutes = require("./routes/users");
// const jobRoutes = require("./routes/jobs");

// app.use("/api/users", userRoutes);
// app.use("/api/jobs", jobRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    createEmployersTable();
    createJobSeekersTable();
    createAdvertsTable();
});






