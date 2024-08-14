const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type:String,
    },
    salary:{
        type:String,
    },
    company:{
        type:String,
    },
    discription:{
        type:String,
    },
    vacancy:{
        type:String,
    },
    deadline:{
        type:String,
    },
    category:{
        type:String,
    },
    email:{
        type:String,
    },
    name:{
        type:String,
    }
});

module.exports = postSchema;