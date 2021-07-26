import mongoose, { Schema, Document } from 'mongoose';

enum Role {
  Admin,
  User,
}

interface IAccount extends Document {
  _id: string;
  id: string;
  pw: string;
  role: Role;
}

const Account: Schema = new Schema({
  id: { type: String, index: true },
  pw: String,
  role: { type: String, enum: ['Admin', 'User'], default: 'User' },
});

export default mongoose.model<IAccount>('Account', Account);
