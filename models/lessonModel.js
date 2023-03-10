const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const Schema = mongoose.Schema;
let Lesson = new Schema({
    Name: {
        type: String,
        required: true
    },
    School: {
        type: String,
        required: true
    },
    BankName: {
        type: String,
        required: true
    },
    AcctName: {
        type: String,
        required: true
    },
    AcctNo: {
        type: String,
        required: true
    },
    images: [
    {
        public_id:{
         type: String,
         required: true,
         
        },
        url: {
          type:String,
          required:true,
         
        },
         
     },
     ],
    Whatsapp: {
        type: String,
        required: true
    },
    Shortnote: {
        type: String,
        required: true
    },
    
},{ timestamps: true });
module.exports = mongoose.model('Lesson', Lesson);