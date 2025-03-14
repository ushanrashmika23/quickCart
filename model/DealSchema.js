const mongoose = require('mongoose');

const DealSchema = new mongoose.Schema({
    deal: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
});
module.exports=mongoose.model('deal',DealSchema);