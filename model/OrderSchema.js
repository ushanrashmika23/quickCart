const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    products: {
        type: Array,
        required: true,
        unique: true,
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    customer:{
        type:Object,
        required:true
    },
    trackingData:{
        type:Object,
        required:true
    },
    shippingAddress:{
        type:Object,
        required:true
    },
    placeDate:{
        type:Date,
        required:true
    },
    shippedDate:{
        type:Date,
        required:true
    }
})
module.exports = mongoose.model('order', OrderSchema);