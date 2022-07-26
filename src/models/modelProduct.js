const { Schema } = require('mongoose');

const productSchema = new Schema({
    productId : {type: Number},
    title : {type: String},
    description : {type: String},
    category : {type: String},
    image : {type: String},
    price : {type: Number},
    brand : {tyep: String}
});

module.exports = productSchema;