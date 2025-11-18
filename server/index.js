// app.js
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import User from './models/User.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// Serve static files (index.html, signup_successful.html, css, js...) from /public
app.use(express.static(path.join(__dirname, 'public')));

// Accept both JSON and URL-encoded form posts
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/travel_with_me';
const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }

  // Root -> index.html (served by static middleware), but keep a redirect for convenience
  app.get('/', (req, res) => {
    // Allow access from any origin for simple static usage (you can tighten this in prod)
    res.set({ 'Access-Control-Allow-Origin': '*' });
    return res.redirect('/index.html');
  });

  // Sign up endpoint: supports HTML form (redirect) and API (JSON)
  app.post('/sign_up', async (req, res) => {
    try {
      // Accept fields from form or JSON body
      const { name, age, email, phno, gender, password } = req.body;

      if (!name || !email || !password) {
        // if form submission, you might want to redirect back to a form with an error
        if (req.is('application/x-www-form-urlencoded')) {
          // simple redirect back to index with query param (frontend can read it)
          return res.redirect('/index.html?error=missing_fields');
        }
        return res.status(400).json({ message: 'name, email and password required' });
      }

      const existing = await User.findOne({ email }).exec();
      if (existing) {
        if (req.is('application/x-www-form-urlencoded')) {
          return res.redirect('/index.html?error=email_exists');
        }
        return res.status(409).json({ message: 'Email already registered' });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        age,
        email,
        phno,
        gender,
        passwordHash,
        createdAt: new Date(),
        isActive: true,
      });

      await user.save();

      console.log('Record Inserted Successfully (user id: %s)', user._id);

      // If request came from a browser form, redirect to HTML success page
      if (req.is('application/x-www-form-urlencoded')) {
        return res.redirect('/signup_successful.html');
      }

      // Otherwise respond with JSON (API client) and include created user basic info
      return res.status(201).json({ message: 'User created', userId: user._id, user: { id: user._id, name: user.name, email: user.email } });
    } catch (err) {
      console.error('Error in /sign_up:', err);
      if (req.is('application/x-www-form-urlencoded')) {
        return res.redirect('/index.html?error=internal');
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Login endpoint (JSON-based)
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json({ message: 'email and password required' });

      const user = await User.findOne({ email }).exec();
      if (!user) return res.status(401).json({ message: 'Invalid credentials' });

      const ok = await bcrypt.compare(password, user.passwordHash);
      if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

      user.lastLogin = new Date();
      await user.save();

      return res.json({ message: 'Login successful', user: { id: user._id, email: user.email, name: user.name } });
    } catch (err) {
      console.error('Error in /login:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Admin-safe endpoint — do not expose in production without auth
  app.get('/users', async (req, res) => {
    try {
      const q = req.query.q;
      const filter = q ? { $or: [{ name: { $regex: q, $options: 'i' } }, { email: { $regex: q, $options: 'i' } }] } : {};
      const users = await User.find(filter)
        .select('name email phno gender createdAt lastLogin isActive roles')
        .sort({ createdAt: -1 })
        .limit(500)
        .lean();
      return res.json(users);
    } catch (err) {
      console.error('Error in /users:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Bind explicitly to 0.0.0.0 to ensure IPv4 localhost (127.0.0.1) connectivity on Windows
  app.listen(PORT, '0.0.0.0', () => console.log(`Server listening on port ${PORT} (0.0.0.0)`));
}

start();
