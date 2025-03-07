const express = require('express');
const { signup, login, logout } = require('../controllers/authController'); // Add logout
const authMiddleware = require('../middleware/authMiddleware'); // Import middleware

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', authMiddleware, logout); // Add logout route

module.exports = router;