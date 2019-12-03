const db = require('../models');

module.exports = {

    getOne: async (req, res, next) => {

        let { user } = req;

        try {
            let userInfo = await db.User.find({
                where: {
                    _id: user.id
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
            let updatedUser = await db.User.update({where: {_id: user.id}}, body);
            res.json(updatedUser);
        } catch (error) {
            next(error);
        }
    },

    deleteOne: async (req, res, next) => {

        let { user } = req;

        try {
            let isDeleted = await db.User.destroy({
                where: {
                    _id: user.id
                }
            });

            if (isDeleted === 1) {
                req.logout();
            } else {
                // the delete didn't work so, inform the user
                res.status(400).json(isDeleted);
            }
        } catch (error) {
            next(error);
        }
    }
}