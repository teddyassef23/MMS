const mongoose = require('mongoose');
// const { INTEGER, STRING, DATE } = require('sequelize');

const memberFamilySchema = new mongoose.Schema({
    id: {
        type: Number,
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
 
    baptismalName: {
        type: String,
        required: false
    },
    gender: {
        type:String,
        require:true,
    },
    relationShip: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
  

});
module.exports= memberFamilySchema

