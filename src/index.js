// require('dotenv').config({path: '/env'})     this breaks the consistency.
// so we use modular js 

import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'           // root directory se saare variable le lena
})

connectDB()
















/*
import { Express } from "express";
const app = express()
// IIFE
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)        
        app.on("error", (error)=> {
            console.log("ERR: ", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error);
        throw err
    }
})()
*/