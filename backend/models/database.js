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

var sql = `
CREATE TABLE IF NOT EXISTS job_adverts (
    id VARCHAR(255) PRIMARY KEY,
    employer_id INT,  -- This should match the type of employers(id)
    company_name VARCHAR(255) NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    job_description TEXT NOT NULL,
    job_type ENUM('Full-time', 'Part-time', 'Internship', 'Freelance', 'Contract') DEFAULT 'Full-time',
    industry ENUM('Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 
                  'Manufacturing', 'Construction', 'Transportation', 'Hospitality', 
                  'Media', 'Agriculture', 'Real Estate', 'Telecommunications', 
                  'Government', 'Energy', 'Legal', 'Consulting', 'Nonprofit', 'Other') DEFAULT 'Other',
    location VARCHAR(255) NOT NULL,
    salary DECIMAL(10, 2) DEFAULT NULL,
    application_deadline DATE,
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (employer_id) REFERENCES employers(id) ON DELETE CASCADE
);
`;

        // Execute the query to create the table
        connection.query(sql, function(err, result) {
            if (err) throw err;  // If there's an error during the query, throw it
            console.log("✅ tables created!");
        });
    });
}

var sql = ` 
CREATE TABLE IF NOT EXISTS applicants (
    job_advert_id VARCHAR(255),  -- Foreign key to the job_adverts table (job advert ID)
    jobseeker_id INT,  -- Foreign key to the jobseekers table (links to the jobseeker applying)
    application_status ENUM('Pending', 'Interviewing', 'Employed', 'Accepted', 'Rejected') DEFAULT 'Pending',  -- Status of the application
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Date the application was made
    resume_link VARCHAR(255) DEFAULT NULL,  -- Link to the applicant's resume (optional)
    cover_letter_link VARCHAR(255) DEFAULT NULL,  -- Link to the applicant's cover letter document (optional)
    PRIMARY KEY (job_advert_id, jobseeker_id),  -- Composite Primary Key using both job_advert_id and jobseeker_id
    FOREIGN KEY (job_advert_id) REFERENCES job_adverts(id) ON DELETE CASCADE,  -- Foreign key to job_adverts
    FOREIGN KEY (jobseeker_id) REFERENCES jobseekers(id) ON DELETE CASCADE  -- Foreign key to jobseekers table
);
`;

module.exports = { createEmployersTable };
