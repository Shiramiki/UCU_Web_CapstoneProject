const request = require('supertest');
const app = require('../index'); // Adjust this path to your Express app entry point

describe('Validation Tests', () => {
  // Registration Tests
  describe('Registration Validation', () => {
    it('should validate a valid registration request', async () => {
      const validRegistration = {
        email: 'test@example.com',
        password: 'Test123',
        name: 'John Doe',
        role: 'jobseeker',
        skills: ['JavaScript', 'React']
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(validRegistration);

      expect(response.status).not.toBe(400);
    });

    it('should reject invalid email', async () => {
      const invalidEmail = {
        email: 'invalid-email',
        password: 'Test123',
        name: 'John Doe',
        role: 'jobseeker'
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(invalidEmail);

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });

    it('should require company name for employer registration', async () => {
      const missingCompanyName = {
        email: 'employer@example.com',
        password: 'Test123',
        name: 'John Doe',
        role: 'employer'
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(missingCompanyName);

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Login Tests
  describe('Login Validation', () => {
    it('should validate a valid login request', async () => {
      const validLogin = {
        email: 'test@example.com',
        password: 'Test123'
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(validLogin);

      expect(response.status).not.toBe(400);
    });

    it('should reject empty password', async () => {
      const emptyPassword = {
        email: 'test@example.com',
        password: ''
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(emptyPassword);

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Job Posting Tests
  describe('Job Posting Validation', () => {
    it('should validate a valid job posting', async () => {
      const validJob = {
        title: 'Senior Developer',
        description: 'We are looking for an experienced developer with at least 5 years of experience in web development.',
        salary: 80000,
        location: 'Remote',
        jobType: 'full-time',
        requiredSkills: ['JavaScript', 'React', 'Node.js'],
        experienceLevel: 'senior',
        applicationDeadline: '2024-12-31',
        companyId: '123'
      };

      const response = await request(app)
        .post('/api/jobs')
        .send(validJob);

      expect(response.status).not.toBe(400);
    });

    it('should reject invalid job type', async () => {
      const invalidJobType = {
        title: 'Senior Developer',
        description: 'We are looking for an experienced developer.',
        salary: 80000,
        location: 'Remote',
        jobType: 'invalid-type',
        companyId: '123'
      };

      const response = await request(app)
        .post('/api/jobs')
        .send(invalidJobType);

      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });
  });
}); 