const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    user: {
        type: Object,
        required: true,
    },
    product: {
        type: Object,
        required: true,
    },
    resources: {
        type: Object,
        required: true,
    },
    date:{
        type:Date,
        required:true
    },
    starCoutnt:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
    }
});
module.exports = mongoose.model('review', ReviewSchema);