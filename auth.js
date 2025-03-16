// aurhentication and middleware

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token) return res.status(401).json({ message: "Unauthorized" });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
        
    } catch (error) {
        res.status(401).json({ message: "Invalid Token" });
    }
};

