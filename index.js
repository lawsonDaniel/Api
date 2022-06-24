import express from "express";
import mongoose from "mongoose";
import  "dotenv/config";
import routes from "./router/posts.js"
import bodyParser from "body-parser";

const app = express()
const PORT = 5000


//parse info to json
app.use(bodyParser.json())

//routes
app.use('/', routes)

//connect tp database
mongoose.connect(process.env.DATABASE_CONNECTION,(err)=>{
    if(err) throw err
    console.log('connected to db')
})

//output info to the browser
app.listen(PORT,(err)=>{
    if(err) throw err
    console.log(`the server is running on http://localhost:${PORT}`)
})