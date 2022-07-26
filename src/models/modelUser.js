const { Schema } = require('mongoose');

const userSchema = new Schema({
    userId : {type: Number},
    mail : {type: String},
    age :{type: Number},
    sex :{type: String},
    country : {type: String},
    recommendation: [
        {
        recommendationId : {type: Number},
        productId : {type: Number},
        image : {type: String},
        text : {type: String},
        //created : {type: Date},
        reviewsAvg : {type: Number},
        originalReviewUrl : {type: String},
        likeCount : {type: Number},
        tags : {type : Array},
        rewards : {type : Number}
    }],

    comments: [{
        productId : {type: Number},
        commentId : {type: Number},
        recommendationId : {type: Number},
        comment : {type: String},
        text: {type:String},
        like : {type: Number}, //0 es nolike y 1 es like
        rewards : {type: Number}
    }]
});

module.exports = userSchema;