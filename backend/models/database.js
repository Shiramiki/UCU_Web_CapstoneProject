// models/database.js

const connection = require('../config/db');  // Import your database connection

function createEmployersTable() {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected to the database!");

        var sql = `
            CREATE TABLE IF NOT EXISTS employers (
                id INT AUTO_INCREMENT PRIMARY KEY,
                company_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                phone VARCHAR(20) UNIQUE DEFAULT NULL,
                industry VARCHAR(255) NOT NULL,
                location VARCHAR(255) NOT NULL,
                website VARCHAR(255) DEFAULT NULL,
                company_size ENUM('1-10', '11-50', '51-200', '201-500', '500+') DEFAULT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) AUTO_INCREMENT=1000;
        `;

        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log("✅ Employers table created!");
        });
    });
}

function createJobSeekersTable() {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected to the database!");

        var sql = `
        CREATE TABLE IF NOT EXISTS job_seekers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password_hash VARCHAR(255) NOT NULL,
            phone VARCHAR(20) UNIQUE DEFAULT NULL,
            location VARCHAR(255) NOT NULL,
            resume_link VARCHAR(255) DEFAULT NULL,
            skills TEXT,
            experienceLevel VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) AUTO_INCREMENT=100000;
    `;

    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("✅ Job Seeker table created!");
    });
});
}

function createAdvertsTable() {
    connection.connect(function(err) {
        if (err) throw err;  // If there's an error connecting to the database, throw it
        console.log("Connected to the database!");

        var sql = `
            CREATE TABLE IF NOT EXISTS job_adverts (
                id VARCHAR(255) PRIMARY KEY,
                employer_id INT, 
                company_name VARCHAR(255) NOT NULL,
                job_title VARCHAR(255) NOT NULL,
                job_description TEXT NOT NULL,
                job_requirements TEXT NOT NULL,
                location VARCHAR(255) NOT NULL,
                salary DECIMAL(10, 2) DEFAULT NULL,
                posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (employer_id) REFERENCES employers(id) ON DELETE CASCADE,
                FOREIGN KEY (company_name) REFERENCES employers(company_name) ON DELETE CASCADE
            );
            `;

    connection.query(sql, function(err, result) {
        if (err) throw err;  // If there's an error during the query, throw it
        console.log("✅ Adverts table created!");
    });
});
}

module.exports = { createEmployersTable, createJobSeekersTable, createAdvertsTable };
