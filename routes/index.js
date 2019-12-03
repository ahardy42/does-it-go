const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const tracksRouter = require('./tracks');
const usersRouter = require('./users');

// routes import
router.use('/api/auth', authRouter);
router.use('/api/tracks', tracksRouter);
router.use('/api/users', usersRouter);

/* GET home page. */
router.use( (req, res, next) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
