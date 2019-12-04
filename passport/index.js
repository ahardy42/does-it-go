const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
    { usernameField: 'username' },
    (username, password, done) => {
        // find a user w/ that unique username
        db.Users.findOne({
            where: {
                username: username
            }
        }).then(dbUser => {
            if (!dbUser) return done('no user found', false);
            if (!dbUser.validPassword(password)) return done('invalid password', false);

            return done(null, dbUser);
        })
    }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;