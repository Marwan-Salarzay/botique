import e from "express";
const router = e.Router();
import { product } from "../models/products.js";

router.get('/allProducts', async (req, res) => {
    const productList = await product.find()
    res.json(productList)
  
    if(!productList){
      res.status(500).json({success:false})
    }

  });
  
export default router