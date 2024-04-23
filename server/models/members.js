const { Schema, model } = require('mongoose');
const paymentSchema = require('./payments');
const memberFamilySchema = require('./memberFamily');
const addressSchema = require('./address');


const memberSchema = new Schema({
    memberNumber: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true
    },
    baptismalName:{
        type: String,
        required: false,
    },
    gender: {
        type:String,
        require:true,
    },
    startDate: {
        type: Date,
        required: true,
       default: Date.now,
    },
   endDate: {
        type: Date,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    primaryPhone: {
        type: Number,
        required: false
    },

    secondaryPhone: {
        type: Number,
        required: false
    },
    paymentFlag: {
        type: Boolean,
        default: true,
    },

    created_date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    addresses:   [addressSchema],
    memberFamilies : [memberFamilySchema],
    payment:  [paymentSchema ]


});

const Member = model('Member', memberSchema);

module.exports = Member;
