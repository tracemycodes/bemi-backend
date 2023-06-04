import { Router } from "express";
import passport from "passport";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get("/login/success", async (req, res) => {
  const { user } = req;
  try {
    if (user) {
      const userData = await User.findOne({ googleId: user });
      if (!userData) res.status(401).json({ message: " Unauthorized user" });

      const token = await generateToken(
        userData._id,
        userData.email,
        userData.isAdmin
      );
      res.status(200).json({
        success: true,
        message: "successfull",
        token: token,
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "http://localhost:3000/login/",
  })
);

export default router;
