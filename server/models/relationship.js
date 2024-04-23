const mongoose = require('mongoose');

const relationshipSchema = new mongoose.Schema({
    id: {
        type: INTEGER,
        required: true
    },
    relationship: {
        type: String,
        required: false
    }

});

module.exports = relationshipSchema;