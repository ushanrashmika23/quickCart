const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    image:{
        type:Object,
        required:true
    },

});
module.exports = mongoose.model('category', RoleSchema);