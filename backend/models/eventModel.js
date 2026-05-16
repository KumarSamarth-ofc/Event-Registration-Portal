const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required:true
    },
    date: {
        type: String,
        required:true
    },
    location: {
        type: String,
        required:true
    },
    participants: {
        type: Number,
        required:true
    }
})

module.exports = mongoose.model("Event", EventSchema);