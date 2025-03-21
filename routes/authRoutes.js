const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// API routes for authentication
router.post('/signup', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/logout', authController.logoutUser);

// Routes for rendering signup and login pages
router.get('/signup', (req, res) => {
    res.render('signup'); // Renders signup page
});

router.get('/login', (req, res) => {
    res.render('login'); // Renders login page
});

module.exports = router;
