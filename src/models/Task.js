const mongoose = require('mongoose');
const {Schema} = mongoose;

const Task = new Schema({
    Usuario: String,
    Password: String
});

module.exports = mongoose.model('Task', Task);