import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    paymentMethod:{type:String, required: true},
    country: { type: String, required: true },
    productId:{type:String,require:true},
    imgName: { type: String, required: true },
    imgSrc: { type: String, required: true },
    allItemsPrice: { type: Number, required: true },
    quantity: { type: String, required: true },
    size: { type: String, required: true }
}, { timestamps: true });

export const checkout = mongoose.model("checkout", checkoutSchema);
