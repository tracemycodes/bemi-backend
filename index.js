import express, { request } from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { graphqlHTTP } from 'express-graphql';
import connectDB from './config/db.js';
import protect from './middleware/authMiddleware.js';

import graphQlSchema from './graphql/schema/index.js';
import graphQlResolvers from './graphql/resolvers/index.js';
import authRoute from './routes/auth.js';

import { Strategy } from 'passport-google-oauth20';
import User from './models/userModel.js';
const GoogleStrategy = Strategy;

// Load config
dotenv.config();

connectDB();

const app = express();

app.use(cors());

// Sessions Middleware
app.use(
  session({
    secret: 'bemi ivory',
    resave: false,
    saveUninitialized: true,
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// verifyUser(passport)

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
  request.user = user.id;
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({ googleId: id }, (err, user) => {
    request.user = id;
    done(err, user);
  });
});

// Middle ware to access json files
app.use(express.json({ limit: '50mb' }));
// Middleware for JWT
app.use(protect);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/auth', authRoute);

// graphql Query
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server running on port ${PORT}`));
