import e from "express";
const router = e.Router();
import { user } from "../models/users.js";

router.get('/', async (req, res) => {
    const userInfo = await user.find()
  
    if(!userInfo){
      res.status(500).json({success:false})
    }
    res.send(userInfo)
  });
export default router