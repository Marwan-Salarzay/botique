import mongoose from "mongoose";
const ordersSchema = new mongoose.Schema({
    
    name : String,
        salary : Number,
        language : String ,
        city : String,
        isManager : Boolean
}) ;


export const order = mongoose.model('order' , ordersSchema)