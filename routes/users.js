const express = require('express');
const router = express.Router();
const usersController = require('../controller').usersController;
const authenticate = require('./middleware/authenticate');

// CRUD routes for users
// create user essentially already exists in the signup route

// get a user => /api/users/:id
router.get('/:id', authenticate.isLoggedIn, usersController.getOne);

// edit a user => /api/users/:id
router.put('/:id', authenticate.isLoggedIn, usersController.editOne);

// delete a user => /api/users/:id
router.delete('/:id', authenticate.isLoggedIn, usersController.deleteOne);


module.exports = router;
