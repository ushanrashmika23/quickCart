const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user: {
        type: Object,
        required: true,
    },
    product: {
        type: Object,
        required: true,
    },
    date:{
        type:Date,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
});
module.exports = mongoose.model('cart', UserSchema);