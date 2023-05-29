import Product from "../../models/productModel.js";
import cloudinary from "../../utils/cloudinary.js";

export default {
  products: async () => {
    try {
      const result = await Product.find();

      return result.map((product) => {
        return {
          ...product._doc,
          _id: product._doc._id.toString(),
        };
      });
    } catch (err) {
      throw err;
    }
  },

  uploadMedia: async (args) => {
    try {
      const uploadedRes = await cloudinary.uploader.upload(args.mediaInput, {
        upload_preset: "bemi_ivory",
      });
      console.log(uploadedRes);
      return {
        url: uploadedRes.secure_url,
      };
    } catch (err) {
      throw err;
    }
  },

  addProduct: async (args, req) => {
    if (!req.isAdmin || !req.isAuth) {
      throw new Error("User not authorized");
    }
    try {
      const goods = new Product({
        collectionName: args.productInput.collectionName,
        name: args.productInput.name,
        releases: args.productInput.releases,
        price: args.productInput.price,
        inStock: args.productInput.inStock,
        size: args.productInput.size,
        color: args.productInput.color,
        images: args.productInput.images,
        variant: args.productInput.variant,
        description: args.productInput.description,
        discount: args.productInput.discount,
        materials: args.productInput.materials,
        careAdvice: args.productInput.careAdvice,
      });

      const result = await goods.save();

      console.log(result._doc);

      return {
        ...result._doc,
        _id: result._doc._id.toString(),
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  singleProduct: async ({ productId }) => {
    try {
      let goods = await Product.findOne({ name: productId });
      if (!goods) {
        throw new Error("No product found");
      }

      return {
        ...goods._doc,
        _id: goods._doc._id.toString(),
      };
    } catch (err) {
      throw err;
    }
  },

  productCategory: async ({ category }) => {
    try {
      let goods = await Product.find();
      if (!goods) {
        throw new Error("No product found");
      }

      const result = goods.filter((product) =>
        product._doc.releases.includes(category)
      );

      return result.map((item) => {
        return {
          ...item._doc,
          _id: item._doc._id.toString(),
        };
      });
    } catch (err) {
      throw err;
    }
  },

  updateProduct: async (args, req) => {
    let item = await Product.findById(args.productInput.productId);
    const options = { new: true };

    if (!req.isAdmin || !req.isAuth) {
      throw new Error("User not authorized");
    }

    if (!item) {
      throw new Error("No product found");
    }

    try {
      const goods = {
        collectionName: args.productInput.collectionName,
        name: args.productInput.name,
        releases: args.productInput.releases,
        price: args.productInput.price,
        inStock: args.productInput.inStock,
        size: args.productInput.size,
        color: args.productInput.color,
        images: args.productInput.images,
        variant: args.productInput.variant,
        description: args.productInput.description,
        discount: args.productInput.discount,
        materials: args.productInput.materials,
        careAdvice: args.productInput.careAdvice,
      };

      const result = await Product.findByIdAndUpdate(
        args.productInput.productId,
        goods,
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
    // try {
    //   let goods = await Product.findById(productId);
    //   const options = { new: true };
    //   if (!goods) {
    //     throw new Error("No product found");
    //   }

    //   const result = await Product.findByIdAndUpdate(
    //     productId,
    //     productInput,
    //     options
    //   );

    //   return {
    //     ...result._doc,
    //     _id: result._doc._id.toString(),
    //   };
    // } catch (err) {
    //   throw err;
    // }
  },

  deleteProduct: async ({ productId }, req) => {
    if (!req.isAdmin || !req.isAuth) {
      throw new Error("User not authorized");
    }
    try {
      let goods = await Product.findById(productId);
      if (!goods) {
        throw new Error("No product found");
      }

      const result = await Product.findByIdAndDelete(productId);

      return {
        ...result._doc,
        _id: result._doc._id.toString(),
      };
    } catch (err) {
      throw err;
    }
  },
};
