import e from "express";
const router = e.Router();
import { category } from "../models/categories.js";

router.get('/', async (req, res) => {
    const categoryList = await category.find()
  
    if(!categoryList){
      res.status(500).json({success:false})
    }
    res.send(categoryList)
  });
  router.get('/:id', async (req, res) => {
    const categoryList = await category.findById(req.params.id)
  
    if(!categoryList){
      res.status(500).json({success:false, message: `the category with the givem id was not found`})
    }
    res.status(200).send(categoryList)
  });

  router.put('/:id', async (req, res) => {
    const categoryList = await category.findByIdAndUpdate(req.params.id,
      {
        name:req.body.name,
        color:req.body.color,
        size:req.body.size
      },{
        new:true
      }
    )
  
    if(!categoryList){
      res.status(500).json({success:false, message: `the category with the givem id was not found`})
    }
    res.status(200).send(categoryList)
  });

  router.post('/', async (req, res) => {
    let productCategory = new category({
      name:req.body.name,
      color:req.body.color,
      size:req.body.size
    })
    productCategory = await productCategory.save()

  if(!productCategory){
    res.status(404).send(`category cannot be created`)
  }
   res.send(productCategory)
  });

  router.delete('/:id', async (req, res) => {
    category.findByIdAndDelete(req.params.id).then((productCategory=>{

      if(productCategory){
       return res.status(200).json({success: true, message: `the category is deleted`})
      } 
      else{
        return res.status(404).json({success: false, message: `could not find the category`})
      }
    })).catch((err=>{
      return res.status(400).json({success: false, error: err})
    }))

  });

export default router