const mongoose = require("mongoose");

// connecting to database 

const connectDB = (uri) => {
    console.log("successfully connected...!");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true});
    };

module.exports = connectDB;