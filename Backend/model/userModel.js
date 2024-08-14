const mongo = require('mongoose');
const db = require('../config/db');

const { Schema } = mongo;

const userSchema = new Schema({
    username:{
        type:String
    },
    email:{
        type:String,
         lowercase:true,
         unique:true,
         required:true
    },
    password:{
        type:String,
        required:true
    }
});


const userModel = db.model('users',userSchema);

module.exports = userModel;