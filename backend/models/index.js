const mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/warbler', {
    keepAlive: true,
    // userMongoClient: true
});


module.exports.User = require('./user.js');
module.exports.Message = require('./message.js');