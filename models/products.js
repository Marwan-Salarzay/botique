import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
    default: "",
  },
  image: {
    type: String,
    require: true,
    default: "",
  },
  images: [
    {
      type: String,
      require: true,
    },
  ],
  brand: {
    type: String,
    require: true,
    default: "Azalna",
  },
  price: {
    type: Number,
    default: 0,
  },
  productCategory: {
    type: String,
    require: true,
  },
  conuntInStock: {
    type: Number,
    require: true,
    min: 0,
    max: 255,
  },
  dateCreated:{
    type:Date,
    default:Date.now
  }
});

export const product = mongoose.model("product", productSchema);
