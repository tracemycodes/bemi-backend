import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'


dotenv.config()

const generateToken = async (id, email, isAdmin) => {
  return jwt.sign(
    { userId: id, email: email, isAdmin: isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: '3h',
    }
  );
};

export default generateToken;
