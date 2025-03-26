const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'Unauthorized - No user found in request'
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Forbidden - Required role: ${roles.join(' or ')}`
      });
    }

    next();
  };
};

module.exports = authorize; 