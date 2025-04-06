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
    },
    LastUpdated:{
        type: Date,
        default: Date.now
    },
    lastDone:{
        type: Date,
        default: Date.now
    },
    days:{
        type: Number,
        default: 1
    },
    startedAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Habit', habitSchema);

