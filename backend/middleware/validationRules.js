const { body } = require('express-validator');

// User Registration Validation Rules
const registerValidation = [
  // Email validation
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
  
  // Password validation
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  
  // Name validation
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),
  
  // Role validation (if applicable)
  body('role')
    .isIn(['jobseeker', 'employer'])
    .withMessage('Invalid role specified'),

  // Additional fields for employers
  body('companyName')
    .if(body('role').equals('employer'))
    .notEmpty()
    .withMessage('Company name is required for employers')
    .trim(),

  // Additional fields for job seekers
  body('skills')
    .if(body('role').equals('jobseeker'))
    .isArray()
    .withMessage('Skills must be an array')
    .optional(),
];

// Login Validation Rules
const loginValidation = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];

// Job Posting Validation Rules
const jobPostValidation = [
  // Job Title
  body('title')
    .notEmpty()
    .withMessage('Job title is required')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Job title must be between 3 and 100 characters'),
  
  // Job Description
  body('description')
    .notEmpty()
    .withMessage('Job description is required')
    .trim()
    .isLength({ min: 50 })
    .withMessage('Job description must be at least 50 characters long'),
  
  // Salary
  body('salary')
    .notEmpty()
    .withMessage('Salary is required')
    .isNumeric()
    .withMessage('Salary must be a number'),
  
  // Location
  body('location')
    .notEmpty()
    .withMessage('Job location is required')
    .trim(),
  
  // Job Type
  body('jobType')
    .isIn(['full-time', 'part-time', 'contract', 'internship'])
    .withMessage('Invalid job type'),
  
  // Required Skills
  body('requiredSkills')
    .isArray()
    .withMessage('Required skills must be an array')
    .optional(),
  
  // Experience Level
  body('experienceLevel')
    .isIn(['entry', 'intermediate', 'senior', 'executive'])
    .withMessage('Invalid experience level')
    .optional(),
  
  // Application Deadline
  body('applicationDeadline')
    .optional()
    .isISO8601()
    .withMessage('Invalid date format for application deadline'),
  
  // Company ID (to link job with employer)
  body('companyId')
    .notEmpty()
    .withMessage('Company ID is required'),
];

module.exports = {
  registerValidation,
  loginValidation,
  jobPostValidation
}; 