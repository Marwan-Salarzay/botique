import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    
    name : String,
        salary : Number,
        language : String ,
        city : String,
        isManager : Boolean
}) ;

export const user = mongoose.model('user' , userSchema)