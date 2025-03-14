const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    displayPrice: {
        type: Number,
        required: true
    },
    actualPrice: {
        type: Number,
        required: true
    },
    dealData: {
        type: Object,
    },
    images: {
        type: Array
    },
    qty: {
        type: Number,
        required: true
    }, brand: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('product', ProductSchema);