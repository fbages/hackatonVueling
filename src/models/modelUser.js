const { Schema } = require('mongoose');

const userSchema = new Schema({
    userId : {type: Number},
    mail : {type: String, required:true},
    age :{type: Number},
    sex :{type: Number},
    country : {type: String},
    recommendation: {
        recommendationId : {type: Number},
        productId : {type: Number},
        image : {type: String},
        text : {type: String},
        created : {type: Date},
        reviewsAvg : {type: Number},
        originalReviewUrl : {type: Number},
        likeCount : {type: Number},
        tags : {type : Array},
    },

    comments: {
        productId : {type: Number},
        commentId : {type: Number},
        recommendId : {type: Number},
        comment : {type: String},
        like : {type: Number}, //0 es nolike y 1 es like
    }
});

module.exports = userSchema;