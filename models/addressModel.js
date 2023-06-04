import mongoose, { Schema } from "mongoose";

export const addressSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    address: {
      type: String,
    },
    apartment: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    phone: {
      type: String,
    },
    userAddress: { type: Schema.Types.ObjectId, ref: "User" },
    default: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model("Address", addressSchema);
export default Address;
