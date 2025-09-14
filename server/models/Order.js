import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    customer : {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    email: {type: mongoose.Schema.Types.ObjectId, ref: "product", required: true},
    quantity:{type: String, required: true},
    totalPrice:{type: Number, required: true},
    orderDate:{type: Date, default: Date.now },
    // phone:{type: String}
//
 })

const OrderModel = mongoose.model("Order", orderSchema);
export default OrderModel;

