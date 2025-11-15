// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  phno: { type: String, trim: true },
  gender: { type: String, enum: ['male', 'female', 'other'], default: 'other' },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
  isActive: { type: Boolean, default: true },
  roles: { type: [String], default: ['user'] },
});

const User = mongoose.model('User', userSchema);
export default User;
