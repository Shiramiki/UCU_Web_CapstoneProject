const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Handle specific error types
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: 'Validation Error',
            errors: Object.values(err.errors).map(e => e.message)
        });
    }

    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            message: 'Unauthorized Access',
            error: err.message
        });
    }

    if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({
            message: 'Duplicate Entry',
            error: 'This record already exists'
        });
    }

    // Default error
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
};

module.exports = errorHandler; 