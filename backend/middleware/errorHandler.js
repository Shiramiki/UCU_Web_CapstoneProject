const errorHandler = (err, req, res, next) => {
  // Log error stack in development
  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
  }

  // Handle specific error types
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Validation Error',
      errors: Object.values(err.errors).map(error => error.message)
    });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      message: 'Unauthorized - Invalid token'
    });
  }

  // Handle duplicate key errors (e.g., unique constraint violations)
  if (err.code === 'ER_DUP_ENTRY') {
    return res.status(409).json({
      message: 'Record already exists'
    });
  }

  // Default error response
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler; 