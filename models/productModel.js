import mongoose from "mongoose";
import { Schema } from "mongoose";

const colorSchema = new Schema({
  color: { type: String, required: true },
  shed: { type: String, required: true },
});
const variantSchema = new Schema({
  color: { type: String, required: true },
  images: [{ type: String, required: true }],
});

export const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    releases: {
      type: String,
    },
    collectionName: {
      type: String,
    },
    inStock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: [{ type: String }],
    color: [colorSchema],
    variant: [variantSchema],
    images: [{ type: String }],
    discount: {
      type: Number,
    },
    description: {
      type: String,
    },
    materials: {
      type: String,
    },
    careAdvice: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
