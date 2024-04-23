
const mongoose = require('mongoose');
const membershipSchema = require('./memberShip')

const membershipElectionSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
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
    },

    membership:  membershipSchema,
       
});


module.exports= membershipElectionSchema;