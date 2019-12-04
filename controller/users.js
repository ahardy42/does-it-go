const db = require('../models');

module.exports = {

    getOne: async (req, res, next) => {

        let { user } = req;

        try {
            let userInfo = await db.Users.findOne({
                where: {
                    id: user.id
                }
            });
            res.json(userInfo);
        } catch (error) {
            next(error);
        }
    },

    editOne: async (req, res, next) => {

        let { user, body } = req;

        try {
            // find the user
            let foundUser = await db.Users.findOne({where: {id: user.id}});

            // use the update instance method to return the updated user
            let updatedUser = await foundUser.update(body);

            res.json(updatedUser);
        } catch (error) {
            next(error);
        }
    },

    deleteOne: async (req, res, next) => {

        let { user } = req;

        try {
            let isDeleted = await db.Users.destroy({
                where: {
                    id: user.id
                }
            });

            if (isDeleted === 1) {
                // the user is deleted, logout the user to end the session and then return the number 1 to the front end
                req.logout();
                res.status(200).json(isDeleted);
            } else {
                // the delete didn't work so, inform the user
                res.status(400).json(isDeleted);
            }
        } catch (error) {
            next(error);
        }
    }
}