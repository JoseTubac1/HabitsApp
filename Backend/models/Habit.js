const mongoose = require('mongoose');
const habitSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Habit', habitSchema);

