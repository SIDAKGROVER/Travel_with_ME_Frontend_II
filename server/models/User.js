import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  age: { type: Number },
  email: { type: String, required: true, unique: true, index: true },
  phno: { type: String },
  gender: { type: String },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
  isActive: { type: Boolean, default: true },
  roles: { type: [String], default: ['user'] }
});

export default mongoose.model('User', userSchema);
