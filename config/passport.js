import { Strategy } from 'passport-google-oauth20';
import User from '../models/userModel.js';
const GoogleStrategy = Strategy;

const verifyUser = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.APP_URI}/auth/google/callback`,
        scope: ['profile', 'email'], // add 'email' to scope
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const options = { new: true };
          let userEmail = await User.findOne({ email: profile?._json?.email });
          let result;
          if (!userEmail) {
            result = new User({
              googleId: profile.id,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile._json.email,
            });

            await result.save();
          }
          if (!userEmail.googleId) {
            userEmail.googleId = profile.id;
            await User.findByIdAndUpdate(
              userEmail._id.toString(),
              { ...userEmail, googleId: profile.id },
              options
            );
          }
          done(null, profile);
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user);
    // done(null, user.id);
  });

  passport.deserializeUser(async (user, done) => {
    console.log(user, 'deserialize no 53');

    const userData = await User.findOne({ googleId : user })
    console.log(userData);
    await User.findOne({ googleId : user }, (err, user) => {
      done(err, user);
    });
  });
};

export default verifyUser;
