import { Strategy } from "passport-google-oauth20";
import User from "../models/userModel.js";
const GoogleStrategy = Strategy;

const verifyUser = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8000/auth/google/callback",
        scope: ["profile", "email"], // add 'email' to scope
      },
      async (accessToken, refreshToken, profile, done) => {
        let userEmail = await User.findOne({ email: profile?._json?.email });
        let userId = await User.findOne({ googleId: profile?.id });
        if (!userEmail && !userId) {
          let result = new User({
            googleId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile._json.email,
          });

          await result.save();
        }
        done(null, profile);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findOne({ googleId: id }, (err, user) => {
      done(err, user.googleId);
    });
  });
};

export default verifyUser;
