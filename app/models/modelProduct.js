const { Schema } = require('mongoose');

const productSchema = new Schema({
    id : {type: Number, default: 0},
    name : String
});

module.exports = productSchema;