const { Schema } = require('mongoose');

const serviceSchema = new Schema({
    id : {type: Number, default: 0},
    name : String,
    priority : String
});

module.exports = serviceSchema;