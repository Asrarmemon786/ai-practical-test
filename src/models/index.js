const mongoose = require('mongoose');
const config = require('../config');

// to connect a db
const  connectDb = async () => {
    const connection = await mongoose.connect(config.db.connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return connection;
}

module.exports = connectDb; 