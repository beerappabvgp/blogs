import mongoose from "mongoose";

// embedded documents
// [213, 34342, 32443]
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    orderId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Order",
        required: true 
    },
});

const orderSchema = new mongoose.Schema({
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

export const Order = mongoose.model("Order", orderSchema);

export const UserOrder = mongoose.model("UserOrder", userSchema);