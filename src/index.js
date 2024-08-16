//require('dotenv').config()
import dotenv from "dotenv" 
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()

/*
import express from "express";
const app = express()

(async ()=>{
    try{
       await moongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
            console.log('Error',error);
            throw error
            
       })
       app.listen(process.env.PORT ,()=>{
            console.log(`App is listrning on post ${process.env.PORT}`);
            
       })
    }
    catch (error){
        console.error('ERROR',error);
        throw error
        
    }
})()
*/