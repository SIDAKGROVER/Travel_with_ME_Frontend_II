import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/User.js';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/db';

async function listUsers() {
  try {
    await mongoose.connect(MONGO_URI);
    const count = await User.countDocuments();
    console.log(`Users count: ${count}`);
    const users = await User.find().limit(20).select('name email createdAt').lean();
    console.log('Sample users:');
    console.dir(users, { depth: null, colors: true });
    await mongoose.disconnect();
  } catch (err) {
    console.error('Error listing users:', err);
    process.exit(1);
  }
}

listUsers();
