import Order from "../../models/orderModel.js";
import User from "../../models/userModel.js";

export default {
  orders: async (_, req) => {
    if (!req.isAuth) {
      throw new Error("User not authorized");
    }
    try {
      const result = await Order.find({ paid: true });

      return result.map(async (order) => {
        const user = await User.findById(order._doc.user);
        return {
          ...order._doc,
          _id: order._doc._id.toString(),
          email: user._doc.email,
          name: user._doc.firstName + " " + user._doc.lastName,
        };
      });
    } catch (err) {
      throw err;
    }
  },

  getOrders: async (_, req) => {
    if (!req.isAuth) {
      throw new Error("User not authorized");
    }
    try {
      const result = await Order.find({ user: req.userId })

      return result.map(async (order) => {
        return {
          ...order._doc,
          _id: order._doc._id.toString(),
        };
      });
    } catch (err) {
      throw err;
    }
  },

  addOrder: async (args) => {
    try {
      const order = new Order({
        user: args.orderInput.user,
        shippingAdd: args.orderInput.shippingAdd,
        billing: args.orderInput.billing,
        paid: args.orderInput.paid,
        orderStatus: args.orderInput.orderStatus,
        products: args.orderInput.products,
        transactionId: args.orderInput.transactionId,
      });

      const result = await order.save();

      return {
        ...result._doc,
        _id: result._doc._id.toString(),
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  singleOrder: async ({ orderId }) => {
    try {
      let order = await Order.findById(orderId);
      if (!order) {
        throw new Error("No product found");
      }

      if (order._doc.user) {
        const user = await User.findById(order._doc.user);

        return {
          ...order._doc,
          _id: order._doc._id.toString(),
          email: user._doc.email,
          name: user._doc.firstName + " " + user._doc.lastName,
        };
      }

      return {
        ...order._doc,
        _id: order._doc._id.toString(),
      };
    } catch (err) {
      throw err;
    }
  },

  updateOrder: async (args, req) => {
    if (!req.isAdmin || !req.isAuth) {
      throw new Error("User not authorized");
    }

    try {
      const options = { new: true };
      const orderId = args.orderInput.orderId;

      let order = await Order.findById(orderId);
      delete args.orderInput.orderId;

      if (!order) {
        throw { msg: "Order not found" };
      }

      const result = await Order.findByIdAndUpdate(
        orderId,
        { ...order._doc, ...args.orderInput },
        options
      );

      return {
        ...result._doc,
        _id: result._doc._id.toString(),
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
