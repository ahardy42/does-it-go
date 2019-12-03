const express = require('express');
const router = express.Router();
const authController = require('../controller').authController;
const passport = require('../passport');


// authentication route listeners

// login => /api/auth/login
router.post('/login', passport.authenticate('local'), authController.login);

// signup => /api/auth/signup
router.post('/signup', authController.signup);

// logout -> /api/auth/logout
router.get('/logout', authController.logout);

module.exports = router;