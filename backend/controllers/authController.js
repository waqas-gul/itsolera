// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


// Create a Set to store blacklisted tokens
const blacklistedTokens = new Set();

const signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword });
        await user.save();
        const token = jwt.sign({ userId: user._id }, 'secret_key');
        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, 'secret_key');
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in', error: err.message });
    }
};

// Add logout functionality
const logout = (req, res) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(400).json({ message: 'No token provided' });
    }

    // Add token to blacklist
    blacklistedTokens.add(token);
    res.json({ message: 'Logged out successfully' });
};

module.exports = {
    signup,
    login,
    logout,
    blacklistedTokens // Export the blacklist for middleware
};