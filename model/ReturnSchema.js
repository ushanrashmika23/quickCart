const mongoose = require('mongoose');

const ReturnSchema = new mongoose.Schema({
    order: {
        type: Array,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    returnProcess:{
        type:Array,
        required:true
    },
    requestedDate:{
        type:Date,
        required:true
    },
    completedData:{
        type:String,
    }
});
module.exports=mongoose.model('return',ReturnSchema);