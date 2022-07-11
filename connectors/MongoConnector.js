const mongoose = require('mongoose');
const { MONGO_USER,MONGO_PASSWORD,MONGO_URL } = require('../config/config');

let db;

if (!MONGO_USER && !MONGO_PASSWORD && !((MONGO_USER === MONGO_PASSWORD)==="")) {
    db = mongoose.connect(MONGO_URL);
} else {
    db = mongoose.connect(MONGO_URL);
}

module.exports = db;