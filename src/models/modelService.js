const { Schema } = require('mongoose');

const serviceSchema = new Schema({
    id : {type: Number, default: 0},
    name : {type: String, required:true},
    priority :{type: String, required:true}
});

module.exports = serviceSchema;