import { Router } from 'express';
import passport from 'passport';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

const router = Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get('/login/success', async (req, res) => {

  console.log(req.sessionStore.MemoryStore?.sessions);
  const { user } = req;
  try {
    if (user) {
      const userData = await User.findOne({ googleId: user });
      if (!userData) res.status(401).json({ message: ' Unauthorized user' });

      const token = await generateToken(
        userData._id,
        userData.email,
        userData.isAdmin
      );
      res.status(200).json({
        userId: userData._id,
        token: token,
        isAdmin: userData.isAdmin,
      });
    } else {
      throw new Error({message: 'user not found'})
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
  }),
  async (req, res) => {
    if (req.user) {
      const user = await User.findOne({ googleId: req.user.id });
      res.redirect(process.env.FRONTEND_URL);
    } else {
      res.redirect(`${process.env.FRONTEND_URL}/signup`);
    }
  }
);

export default router;
