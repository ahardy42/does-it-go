const tj = require('@mapbox/togeojson');
const DOMParser = require('xmldom');

module.exports = {

    filter: async params => {
        
    },

    parseGPX: file => {
        // parse the file and return a GPX string
        const gpx = new DOMParser().parseFromString(file.data.toString());
        return tj.gpx(gpx);
    }
}