import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  size:{
    type: String,
    require:true
  },
  quantity:{
    type:Number,
  default:1,
  }
});

export const product = mongoose.model("product", productSchema);
