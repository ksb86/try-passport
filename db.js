var mongoose = require('mongoose');

module.exports = {
    init: function() {
        // DEV Mongo DB
        if (process.env.NODE_ENV === 'dev') {
            // mongoose
            var devConfig = require('./dev-config.json');
            mongoose.connect(devConfig.MONGO_URI_DEV);
        }
        // PROD Mongo DB
        if (process.env.NODE_ENV === 'prod') {
            // mongoose
            mongoose.connect(process.env.MONGO_URI_PROD);
        }
    }
}
