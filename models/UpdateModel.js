const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Update = new Schema({
    Text: {
        type: String,
        required: true
    },
    
},{ timestamps: true });
module.exports = mongoose.model('Update', Update);