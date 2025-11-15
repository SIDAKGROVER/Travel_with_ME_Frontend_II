import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/travel_with_me';
const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }

  app.post('/sign_up', async (req, res) => {
    try {
      const { name, age, email, phno, gender, password } = req.body;
      if (!name || !email || !password) return res.status(400).json({ message: 'name, email and password required' });

      const existing = await User.findOne({ email });
      if (existing) return res.status(409).json({ message: 'Email already registered' });

      const passwordHash = await bcrypt.hash(password, 10);
      const user = new User({ name, age, email, phno, gender, passwordHash, createdAt: new Date() });
      await user.save();
      return res.status(201).json({ message: 'User created', userId: user._id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json({ message: 'email and password required' });

      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ message: 'Invalid credentials' });

      const ok = await bcrypt.compare(password, user.passwordHash);
      if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

      user.lastLogin = new Date();
      await user.save();
      return res.json({ message: 'Login successful', user: { id: user._id, email: user.email, name: user.name } });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Admin-safe endpoint — do not expose in production without auth
  app.get('/users', async (req, res) => {
    try {
      const q = req.query.q;
      const filter = q ? { $or: [ { name: { $regex: q, $options: 'i' } }, { email: { $regex: q, $options: 'i' } } ] } : {};
      const users = await User.find(filter)
        .select('name email phno gender createdAt lastLogin isActive roles')
        .sort({ createdAt: -1 })
        .limit(500)
        .lean();
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

start();
