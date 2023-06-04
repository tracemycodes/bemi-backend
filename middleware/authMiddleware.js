import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  const authHeader = req.get("authorization");

  if (!authHeader) {
    req.isAuth = false;
    return next();
  }

  // Bearer token
  const token = authHeader.split(" ")[1];
  if (!token || token === "") {
    require.isAuth = false;
    return next();
  }

  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    require.isAuth = false;
    return next();
  }

  req.isAuth = true;
  req.userId = decodedToken.userId;
  req.isAdmin = decodedToken.isAdmin;
  next();
});

export default protect;
