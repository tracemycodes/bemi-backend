import mongoose, { Schema } from "mongoose";
import { addressSchema } from "./addressModel.js";

const progressSchema = mongoose.Schema({
  status: { type: Boolean, default: "false" },
  orderDate: { type: String },
});

const statusSchema = mongoose.Schema({
  status: { type: String, required: true, default: "placed" },
  orderUrl: { type: String },
  placed: {type: progressSchema},
  packed: {type: progressSchema},
  shipped: {type: progressSchema},
  delivered: {type: progressSchema}
});

const productPurchase = mongoose.Schema({
  color: { type: String },
  count: { type: Number },
  image: { type: String },
  name: { type: String },
  price: { type: String },
  size: { type: String },
  // stock: { type: String },
});

const orderSchema = mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    shippingAdd: { type: addressSchema },
    billing: { type: addressSchema },
    paid: { type: Boolean, default: false },
    orderStatus: { type: statusSchema },
    products: [{ type: productPurchase }],
    transactionId: { type: String },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
