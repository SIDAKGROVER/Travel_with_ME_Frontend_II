import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/travel_with_me';

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for seeding');

    const sample = [
      { name: 'Alice Johnson', age: 28, email: 'alice@example.com', phno: '9990001111', gender: 'female', password: 'Password123!' },
      { name: 'Bob Singh', age: 34, email: 'bob@example.com', phno: '9990002222', gender: 'male', password: 'SecurePass!1' },
      { name: 'Carol Mehra', age: 25, email: 'carol@example.com', phno: '9990003333', gender: 'female', password: 'CarolPass@2025' }
    ];

    for (const u of sample) {
      const exists = await User.findOne({ email: u.email });
      if (exists) {
        console.log(`Skipping existing user: ${u.email}`);
        continue;
      }
      const passwordHash = await bcrypt.hash(u.password, 10);
      const user = new User({
        name: u.name,
        age: u.age,
        email: u.email,
        phno: u.phno,
        gender: u.gender,
        passwordHash,
        createdAt: new Date()
      });
      await user.save();
      console.log(`Inserted: ${u.email}`);
    }

    console.log('Seeding complete');
    await mongoose.disconnect();
  } catch (err) {
    console.error('Seeding error', err);
    process.exit(1);
  }
}

seed();
