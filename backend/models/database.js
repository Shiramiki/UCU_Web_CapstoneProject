// createTable.js (inside your models or relevant folder)
// Use CommonJS 'require' syntax instead of ES 'import' syntax
const connection = require('../config/db');  // Import your database connection

// You can now use the connection object here
  // Import your database connection

function createEmployersTable() {
    connection.connect(function(err) {
        if (err) throw err;  // If there's an error connecting to the database, throw it
        console.log("Connected to the database!");

        // SQL query to create the employers table
        var sql = `
            CREATE TABLE IF NOT EXISTS employers (
                id INT AUTO_INCREMENT PRIMARY KEY,
                company_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                phone VARCHAR(20) UNIQUE DEFAULT NULL,
                industry ENUM(
                    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 
                    'Manufacturing', 'Construction', 'Transportation', 'Hospitality', 
                    'Media', 'Agriculture', 'Real Estate', 'Telecommunications', 
                    'Government', 'Energy', 'Legal', 'Consulting', 'Nonprofit', 'Other'
                ) NOT NULL,
                location VARCHAR(255) NOT NULL,
                website VARCHAR(255) DEFAULT NULL,
                company_size ENUM('1-10', '11-50', '51-200', '201-500', '500+') DEFAULT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ) AUTO_INCREMENT=1000;
        `;

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
        job_preference ENUM('Full-time', 'Part-time', 'Internship', 'Freelance', 'Contract') DEFAULT 'Full-time',
        industry_preference ENUM(
            'Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 
            'Manufacturing', 'Construction', 'Transportation', 'Hospitality', 
            'Media', 'Agriculture', 'Real Estate', 'Telecommunications', 
            'Government', 'Energy', 'Legal', 'Consulting', 'Nonprofit', 'Other'
        ) DEFAULT NULL,
        skills TEXT,
        desired_positions ENUM(
            'Software Engineer', 'Data Analyst', 'Project Manager', 'Sales Representative', 
            'Marketing Manager', 'Accountant', 'HR Specialist', 'Teacher', 'Nurse', 'Doctor',
            'Business Analyst', 'Customer Support', 'Graphic Designer', 'Web Developer', 'Other'
        ) DEFAULT 'Other',  -- Predefined list of job positions
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) AUTO_INCREMENT=100000;
`;


        // Execute the query to create the table
        connection.query(sql, function(err, result) {
            if (err) throw err;  // If there's an error during the query, throw it
            console.log("✅ tables created!");
        });
    });
}

module.exports = { createEmployersTable };
