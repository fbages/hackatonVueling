const { Schema } = require('mongoose');

const productSchema = new Schema({
    id : {type: Number, required:true},
    title : {type: String},
    description : {type: String},
    category : {type: String},
    image : {type: String},
    price : {type: Number},
    brand : {tyep: String}
});

module.exports = productSchema;