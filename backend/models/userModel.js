const db = require('../config/db');  // Import DB connection

// Function to find a user by email
exports.findByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM employers WHERE email = ?';
        db.query(query, [email], (err, results) => {
            if (err) {
                console.error('Error in finding user by email:', err); // Log the error
                reject({
                    message: 'Error finding user by email',
                    error: err
                });
            } else if (results.length === 0) {
                reject({
                    message: 'No user found with this email'
                });
            } else {
                resolve(results[0]);
            }
        });
    });
};
