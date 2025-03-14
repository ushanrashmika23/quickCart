const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    displayName: {
        type: String,
        required: true,
    },
    avatar:{
        type:Object
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Array,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    otp: {
        type: Number,
        required: true,
    },
    billingAddress:{
        type:Object
    },
    shippingAddress:{
        type:Object
    }
});
module.exports = mongoose.model('user', UserSchema);