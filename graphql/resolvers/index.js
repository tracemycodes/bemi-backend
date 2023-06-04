import userResolver from "./user.js";
import productResolver from "./products.js";
import orderResolver from "./order.js";

const rootResolver = {
  ...userResolver,
  ...productResolver,
  ...orderResolver,
};

export default rootResolver;
