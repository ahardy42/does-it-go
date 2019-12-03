const express = require('express');
const router = express.Router();
const tracksController = require('../controller').tracksController;
const authenticate = require('./middleware/authenticate');


// track CRUD route listeners

// get all tracks => /api/tracks/all
// filters done using params
router.get('/', tracksController.getAll);

// create a track => /api/tracks/
router.post('/', authenticate.isLoggedIn, tracksController.addTrack);

// get one track => /api/tracks/:id
router.get('/:id', tracksController.getOne);

// edit one track => /api/tracks/:id
router.put('/:id', authenticate.isLoggedIn, tracksController.editOne);

// delete a track => /api/tracks/:id
router.delete('/:id', authenticate.isLoggedIn, tracksController.deleteOne);

module.exports = router;