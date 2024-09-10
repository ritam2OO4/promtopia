import mongoose, { Mongoose } from "mongoose";

let isConnected = false; //track the connection

export const connectionToDB = async ()=>{
    mongoose.set('strictQuery',true)

    if(!isConnected){
        console.log('MongoDB is already connected');
        return;
    }
    try {
        await Mongoose.connect(process.env.MONODB_URI,{
            dbNAme:"share_prompt",
            userNewUrlParser:true,
            useUnifiedTopology:true,
        })
        isConnected = true;
        console.log("MongoDB connected")
    } catch (error) {
console.log(error)        
    }
}