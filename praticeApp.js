require("dotenv").config();
const express = require("express");
const get_products = require("../Partice_API/router/products");
const connectDB = require("../Partice_API/database/connect");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/",(req , res) => {
    res.send("Hi we are your live now......!");
});

app.use("/api/products",get_products);

const start = async ( ) => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} you're using..!`);
        });

    }catch(error){
        console.log(error);
    }
}

start();