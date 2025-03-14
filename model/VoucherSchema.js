const mongoose = require('mongoose');

const VoucherSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type:{
        type:String,
        required:true
    },
});
module.exports = mongoose.model('voucher', VoucherSchema);