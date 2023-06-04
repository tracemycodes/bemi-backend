import mongoose from 'mongoose';
import express from 'express';

const app = express();

const connectDB = async () => {
  const PORT = process.env.PORT || 5000;
  try {
    console.log('connect to db', process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    app.listen(PORT, console.log(`server running on port ${PORT}`.yellow.bold));
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
