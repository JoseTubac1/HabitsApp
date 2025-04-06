const mongoose = require('mongoose');
const { create } = require('./Habit');
const userSchema = new mongoose.Schema({
         username:{
             type: String,
             required: true
         },
         password:{
                type: String,
                required: true
            },
            createdAt:{
                type: Date,
                default: Date.now
            }
        }); 
module.exports = mongoose.model('User', userSchema); 