import mongoose from "mongoose";
import {v4} from 'uuid'

const postschema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    age:{
        type:String,
        required:true
    },
    datecreated:{
        type:Date,
        required:true,
        default:Date.now()
    }
})

export default mongoose.model('test',postschema)