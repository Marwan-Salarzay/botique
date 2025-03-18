import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  color:{
    type:String
  },
  size:{
    type:String,
    require:true
  }

});

export const category = mongoose.model("category", categorySchema);
