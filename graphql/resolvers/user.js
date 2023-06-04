import Address from "../../models/addressModel.js";
import User from "../../models/userModel.js";
import generateToken from "../../utils/generateToken.js";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

const CLIENT_ID =
  "254096494409-kftljj26mltlj2v8ogh8eg6t3c5p3ave.apps.googleusercontent.com";
const CLEINT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04X3-sWf4ej7SCgYIARAAGAQSNwF-L9IrK-TLGxgA3oaOSt-65DQDviMA6N26erpZgiXdN2pN-59V1i2JlbmRHczDwd4DGJ1ePms";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export default {
  users: async () => {
    try {
      const result = await User.find();

      return result.map((user) => {
        return {
          ...user._doc,
          password: null,
          _id: user._doc._id.toString(),
        };
      });
    } catch (error) {
      throw err;
    }
  },
  createUser: async (args) => {
    const { email, firstName, lastName } = args.userInput;
    try {
      const client = await User.findOne({ email: args.userInput.email });

      if (client) {
        throw new Error("User already exist");
      }

      const accessToken = await oAuth2Client.getAccessToken();

      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "ivorybemi@gmail.com",
          clientId: CLIENT_ID,
          clientSecret: CLEINT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      // send mail with defined transport object
      transporter.sendMail(
        {
          // await transporter.sendMail({
          from: "ivorybemi@gmail.com", // sender address
          to: email, // list of receivers
          subject: "Account Created", // Subject line
          // text: "Hello world?", // plain text body
          html: `<b>Hey ${
            firstName + " " + lastName
          }, your bemi store account has been created successfully</b>`, // html body
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        }
      );

      const user = new User({
        firstName: args.userInput.firstName,
        lastName: args.userInput.lastName,
        email: args.userInput.email,
        password: args.userInput.password,
      });

      const result = await user.save();

      return {
        ...result._doc,
        password: null,
        _id: result._doc._id.toString(),
      };
    } catch (err) {
      throw err;
    }
  },
  loginUser: async (req, args) => {
    const {
      loginInput: { email, password },
    } = req;

    let user = await User.findOne({ email: email });
    try {
      // console.log(user);
      if (!user) {
        throw new Error("User doesn't exist");
      }

      const authLogin = await user.matchPassword(password);

      if (!authLogin) {
        throw new Error("Invalid login credentials");
      }

      const token = await generateToken(user._id, user.email, user.isAdmin);
      return {
        userId: user._id,
        token: token,
        tokenExpiration: 3,
        isAdmin: args.isAdmin,
      };
    } catch (err) {
      console.log(err);
    }
  },
  updateUser: async (args) => {
    try {
      const client = await User.findById(args.addressInput.uuid);
      if (!client) {
        throw new Error("User for this address doesn't exist");
      }

      const address = new Address({
        firstName: args.addressInput.firstName,
        lastName: args.addressInput.lastName,
        address: args.addressInput.address,
        apartment: args.addressInput.apartment,
        city: args.addressInput.city,
        country: args.addressInput.country,
        state: args.addressInput.state,
        zipCode: args.addressInput.zipCode,
        phone: args.addressInput.phone,
        userAddress: args.addressInput.uuid,
        default: args.addressInput.default,
      });

      const result = await address.save();

      const accessToken = await oAuth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "ivorybemi@gmail.com",
          clientId: CLIENT_ID,
          clientSecret: CLEINT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      transporter.sendMail(
        {
          from: "ivorybemi@gmail.com", // sender address
          to: client.email, // list of receivers
          subject: "Account Updated", // Subject line
          html: `<b>Hey ${
            client.firstName + " " + client.lastName
          }, your bemi store account address info has been updated successfully</b>`, // html body
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        }
      );

      if (result._doc.default) {
        client.userAddress = {
          ...result._doc,
          _id: result._doc._id.toString(),
        };
      } else if (!client.userAddress) {
        client.userAddress = {
          ...result._doc,
          _id: result._doc._id.toString(),
        };
      }
      await client.save();

      const addressList = await Address.find({
        userAddress: args.addressInput.uuid,
      });

      return addressList.map((item) => {
        return {
          ...item._doc,
          uuid: item._doc._id.toString(),
        };
      });
    } catch (err) {
      throw err;
    }
  },
  getUser: async (_, args) => {
    try {
      if (!args.userId) {
        throw new Error("User unauthorize");
      }
      let user = await User.findById(args.userId);

      if (!user) {
        throw new Error("User not found");
      }

      return {
        ...user._doc,
        password: null,
        _id: user._doc._id.toString(),
        address: user.userAddress,
      };
    } catch (error) {
      throw error;
    }
  },
  resetPassword: async (args) => {
    const { email, callbackUrl } = args.resetInput;
    const options = { new: true };
    try {
      const client = await User.findOne({ email: email });

      if (!client) {
        throw new Error("User doesn't exist");
      }

      const token = uuidv4();

      const resetObj = { ...client._doc._id, resetId: token };

      const user = await User.findByIdAndUpdate(
        client._doc._id.toString(),
        resetObj,
        options
      );

      const accessToken = await oAuth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "ivorybemi@gmail.com",
          clientId: CLIENT_ID,
          clientSecret: CLEINT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      transporter.sendMail(
        {
          from: "ivorybemi@gmail.com",
          to: email,
          subject: "Reset your Bemi store password",
          html: `
          <div>
          <b>Hey ${
            user.firstName + " " + user.lastName
          }, click the link below to reset your password</b>
          <a href=${callbackUrl + "/" + token}>reset password</a>
          </div>
          `,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        }
      );

      return { msg: "Password reset email sent successfully" };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  changePassword: async (args) => {
    const { password, resetId } = args.passwordInput;
    const options = { new: true };
    try {
      const client = await User.findOne({ resetId: resetId });
      if (!client) {
        throw new Error("password reset failed");
      }

      const salt = await bcrypt.genSalt(10);
      const newPassword = await bcrypt.hash(password, salt);

      const newUser = { ...client._doc, resetId: "", password: newPassword };

      const resClient = await User.findByIdAndUpdate(
        newUser._id.toString(),
        newUser,
        options
      );
      return {msg: 'password changed successfully'}
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
