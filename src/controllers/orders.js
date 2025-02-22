import { Order, UserOrder } from "../models/orderSchema.js";


export const placeOrder = async (req, res) => {
    try {
        const { name, email } = req.body;
        const order = await Order.create({ price: 100, quantity: 2 });
        const userOrder = await UserOrder.create({ name, email, orderId: order._id });
        return res.status(200).json({
            msg: "Order placed successfully",
            userOrder: userOrder,
        });
    } catch (error) {
        console.log(error);
    }
}



