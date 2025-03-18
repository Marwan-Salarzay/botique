import e from "express"
const router = e.Router()
import { product } from "../models/products.js"

router.get("/allProducts/:id", async (req, res) => {
  try {
    const singleProduct = await product.findById(req.params.id)

    if (!singleProduct) {
      return res.status(404).json({ success: false, message: "Product not found" })
    }

    console.log(singleProduct)
    return res.json(singleProduct)
  } catch (error) {
    console.error("Error fetching product:", error)
    return res.status(500).json({ success: false, message: "Server error" })
  }
})
export default router
