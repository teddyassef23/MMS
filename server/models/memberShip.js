const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    endDate: {
        type: Date,
        required: false,
       
    },
    created_date: {
        type: Date,
        required: true,
        default: Date.now,
    }


});

module.exports= membershipSchema;