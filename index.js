import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { graphqlHTTP } from 'express-graphql';
import connectDB from './config/db.js';
import protect from './middleware/authMiddleware.js';

import graphQlSchema from './graphql/schema/index.js';
import graphQlResolvers from './graphql/resolvers/index.js';
import verifyUser from './config/passport.js';
import authRoute from './routes/auth.js'
// import cookieSession from 'cookie-session';

// Load config
dotenv.config();

// Passport config
// import passportConfig from './config/passport.js';
// passportConfig(passport);

connectDB();

const app = express();

app.use(cors())

// app.use(
//   cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
// );


// Middle ware to access json files
app.use(express.json({ limit: '50mb' }));
// Middleware for JWT
app.use(protect);

const PORT = process.env.PORT || 5000;

// Sessions Middleware
app.use(
  session({
    secret: 'bemi ivory',
    resave: false,
    saveUninitialized: false,
  })
);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

verifyUser(passport)

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use("/auth", authRoute);

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

app.listen(PORT, console.log(`server running on port ${PORT}`.yellow.bold));
