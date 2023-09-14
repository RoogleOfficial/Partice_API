const Products = require("../models/products");  
const getAllProducts =  async (req , res) => {

    let page =Number(req.query.page);
    let limits = Number(req.query.limit) || 2;

    const { company , name ,feature,sort,select} = req.query;

    const queryObject = {};

    if(company){
        queryObject.company = company;
    
    }

    if(feature){
        queryObject.feature = feature;
    }

    if(name){
        queryObject.name = {$regex: name,$options:"i"};
    }

    let apiData = Products.find(queryObject);

    if(sort){
        //it can't replace more than two values so use split along with join method to slove this issue
        const fixSort = sort.replace(","," ");
        apiData = apiData.sort(fixSort);
    }

    // select method 

    if(select){
        const fixSelect = select.split(",").join(" ");
        console.log(fixSelect);
        apiData = apiData.select(fixSelect);
    }

    let skips = (page - 1) * limits;

    console.log(queryObject);
    const data = await apiData.skip(skips).limit(limits);
    console.log("searching for the data in products for the ",req.query);
    res.status(200).json({data,Count:data.length});

};


// const getAllProducts =  async (req , res) => {
//     const data = await Products.find(req.query);
//     console.log("searching for the data in products for the ",req.query);
//     res.status(200).json({data});
// };

const getAllProductsTesting =  async (req , res) => {
    const Product = await Products.find(req.query);
    res.status(200).json({Product,Count:Product.length});
};

//Previous creation of the method above modifield to get the data from the server


// const getAllProducts =  async (req , res) => {
//     res.status(200).json({name:"you are getting all products message",msg:" hi how are you"});
// };

// const getAllProductsTesting =  async (req , res) => {
//     res.status(200).json({name:"you are getting all productsTesting message",msg:" hi how are you from testing"});
// };

module.exports = {getAllProducts , getAllProductsTesting}