
const db = require('../models');

module.exports = {
    login: (req, res, next) => {

        // send back the user!
        res.json(req.user);

    },
    signup: (req, res, next) => {

        const { name, username, password } = req.body;

        // create the user!
        db.Users.create({
            name: name,
            username: username,
            password: password
        }).then(() => {

            // re-direct to login which will authenticate using middleware
            res.redirect(307, '/api/auth/login');

        }).catch(error => {

            // send any errors to the front end
            res.status(401).json(error);

        })
    },
    logout: (req, res, next) => {

        req.logout();

        res.end();

    }
}