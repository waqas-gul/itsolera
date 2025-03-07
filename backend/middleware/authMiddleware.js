const jwt = require('jsonwebtoken');
const { blacklistedTokens } = require('../controllers/authController'); // Correct import

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Check if token is blacklisted
    if (blacklistedTokens.has(token)) {
        return res.status(403).json({ message: 'Token invalidated. Please log in again' });
    }

    try {
        const decoded = jwt.verify(token, 'secret_key'); // Use your actual secret
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;