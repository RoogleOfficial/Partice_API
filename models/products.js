const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    feature:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.9,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values: ["apple","samsung","dell","mi","karbon","blackberry"],
            message:`{VALUE} is not supported`,
        },
    },

});

module.exports = mongoose.model("Product",productSchema);