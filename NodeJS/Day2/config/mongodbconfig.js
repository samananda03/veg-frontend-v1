const mongoose = require('mongoose');
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("db connection successfull");
    } catch(error){
        console.log("Data connection failed", error.message);
    }

}

module.exports= connectDB;