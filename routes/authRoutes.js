const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Render signup page
router.get('/signup', (req, res) => {
    res.render('signup');  // Ensure you have 'signup.ejs' in the views folder
});

// Register user (POST request)
router.post('/signup', authController.registerUser);

// Render login page
router.get('/login', (req, res) => {
    res.render('login');  // Ensure you have 'login.ejs' in the views folder
});

// Login user (POST request)
router.post('/login', authController.loginUser);

// Logout user
router.get('/logout', authController.logoutUser);

module.exports = router;
