const mongoose = require('mongoose');

const RefundSchema = new mongoose.Schema({
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
    refundProcess:{
        type:Array,
        required:true
    },
    requestedDate:{
        type:Date,
        required:true
    },
    refundedAmount:{
        type:Number,
    }
});
module.exports=mongoose.model('refund',RefundSchema);