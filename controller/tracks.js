const db = require('../models');
const tracksService = require('../services').tracksService;

module.exports = {

    getAll: async (req, res, next) => {
        try {
            let tracks;
            if (req.params) {
                // filter the returned tracks based on parameters
                tracks = await tracksService.filter(req.params);
            } else {
                // or just return all tracks in the db
                tracks = await db.Tracks.find({});
            }
            res.json(tracks);
        } catch (error) {
            next(error);
        }
    },
    
    addTrack: async (req, res, next) => {
        try {
            // send the file to the service to parse GPX and return a GeoJSON object
            let newTrack = await tracksService.parseGPX(req.files[0]);
            let track = await db.Tracks.create(newTrack);
            res.json(track);
        } catch (error) {
            next(error);
        }
    },

    getOne: async (req, res, next) => {
        try {
            let track = await db.Tracks.getByPk(req.id);
            res.json(track);
        } catch (error) {
            next(error);
        }
    },

    editOne: async (req, res, next) => {
        try {
            let updatedTrack = await db.Tracks.findOne({
                where: {
                    _id: req.id
                }
            });
            res.json(updatedTrack);
        } catch (error) {
            next(error);
        }
    },

    deleteOne: async (req, res, next) => {
        try {
            let isDeleted = await db.Tracks.destroy({
                where: {
                    _id: req.id
                }
            });
            res.json(isDeleted);
        } catch (error) {
            next(error);
        }
    }
}