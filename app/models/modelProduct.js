const { Schema } = require('mongoose');

const productSchema = new Schema({
    id : {type: Number, required:true},
    name : {type: String, required:true},
});

module.exports = productSchema;