import mongoose from 'mongoose';

const Account = mongoose.Schema({
  id: String,
  pw: String,
  role: { type: String, enum: ['Admin', 'User'], default: 'User' },
});

export default mongoose.model('Account', Account);
