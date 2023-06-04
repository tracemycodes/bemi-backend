import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const addressSchema = new Schema(
  {
    _id: {
      type: String,
    },
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
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
    },
    resetId: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    userAddress: { type: addressSchema },
    // userAddress: [{ type: Schema.Types.ObjectId, ref: "Address" }],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
