const mongoose = require('mongoose');

const VoucherDetail = new mongoose.Schema({
    voucher:{
        type: Object,
        required: true,
    },
    user:{
        type: Object,
        required: true,
    },
    recipient:{
        type: String,
        required: true,
    },
    cost:{
        type:Object,
        required:true
    },
    qr:{
        type: Object,
        required: true,
        unique: true,
    }
});
module.exports = mongoose.model('voucherDetail', VoucherDetail);