const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let JambImage = new Schema({
 
    Jambimage: 
    {
        public_id:{
         type: String,
         
        },
        url: {
          type:String,
         
        }
         
     },
   
    
},{ timestamps: true });
module.exports = mongoose.model('JambImage', JambImage);